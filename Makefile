.PHONY: build clean publish-client publish-server


# Build Smithy models
build:
	@echo "🔨 Building Smithy models..."
	@./gradlew build

# Clean all builds
clean:
	@echo "🧹 Cleaning builds..."
	@rm -rf smithy/build/
	@echo "✅ Clean complete"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	@cd nestCDK && npm install
	@cd nest && npm install

# Publish Smithy client to NPM
publish-client: build
	@echo "📦 Publishing Smithy client to NPM..."
	@echo "🔍 Checking generated directories..."; \
	ls -la smithy/build/smithyprojections/smithy/ || true; \
	CLIENT_DIR=$$(find smithy/build/smithyprojections/smithy -name "typescript-client-codegen" -type d | head -1); \
	if [ -z "$$CLIENT_DIR" ]; then \
		echo "❌ No client directory found. Available directories:"; \
		find smithy/build/smithyprojections/smithy -type d; \
		exit 1; \
	fi; \
	echo "📁 Using client directory: $$CLIENT_DIR"; \
	PUBLISH_DIR="client-package"; \
	rm -rf $$PUBLISH_DIR; \
	mkdir -p $$PUBLISH_DIR; \
	cp -r $$CLIENT_DIR/src/* $$PUBLISH_DIR/; \
	cp $$CLIENT_DIR/package.json $$PUBLISH_DIR/ 2>/dev/null || true; \
	cd $$PUBLISH_DIR; \
	CURRENT_VERSION=$$(npm view rental-platform-client version 2>/dev/null || echo "0.0.0"); \
	NEW_VERSION=$$(node -e "const v = '$$CURRENT_VERSION'.split('.'); v[2] = parseInt(v[2]) + 1; console.log(v.join('.'));"); \
	echo '{"name":"rental-platform-client","version":"'$$NEW_VERSION'","description":"TypeScript client for Tanzania Rental Platform API","main":"./index.js","types":"./index.d.ts","files":["**/*"],"dependencies":{"tslib":"^2.6.2","@smithy/smithy-client":"^4.7.0","@smithy/types":"^4.2.0","@aws-sdk/core":"^3.0.0","@smithy/util-body-length-node":"^4.2.0","@smithy/node-http-handler":"^4.2.0","@smithy/protocol-http":"^5.3.0","@smithy/util-base64":"^4.2.0","@smithy/util-utf8":"^4.2.0","@smithy/fetch-http-handler":"^5.3.0"},"devDependencies":{"typescript":"^5.0.0","@types/node":"^20.0.0"},"keywords":["rental","platform","api","client","tanzania"],"license":"MIT"}' > package.json; \
	npm install && npx tsc index.ts **/*.ts --outDir . --declaration --moduleResolution node --target es2020 --module commonjs --skipLibCheck && npm publish --access public

# Publish Smithy server to NPM
publish-server: build
	@echo "📦 Publishing Smithy server to NPM..."
	@echo "🔍 Checking generated directories..."; \
	ls -la smithy/build/smithyprojections/smithy/ || true; \
	SERVER_DIR=$$(find smithy/build/smithyprojections/smithy -name "typescript-ssdk-codegen" -type d | head -1); \
	if [ -z "$$SERVER_DIR" ]; then \
		echo "❌ No server directory found. Available directories:"; \
		find smithy/build/smithyprojections/smithy -type d; \
		exit 1; \
	fi; \
	echo "📁 Using server directory: $$SERVER_DIR"; \
	PUBLISH_DIR="server-package"; \
	rm -rf $$PUBLISH_DIR; \
	mkdir -p $$PUBLISH_DIR; \
	cp -r $$SERVER_DIR/src/* $$PUBLISH_DIR/; \
	cp $$SERVER_DIR/package.json $$PUBLISH_DIR/ 2>/dev/null || true; \
	cd $$PUBLISH_DIR; \
	CURRENT_VERSION=$$(npm view rental-platform-server version 2>/dev/null || echo "0.0.0"); \
	NEW_VERSION=$$(node -e "const v = '$$CURRENT_VERSION'.split('.'); v[2] = parseInt(v[2]) + 1; console.log(v.join('.'));"); \
	echo '{"name":"rental-platform-server","version":"'$$NEW_VERSION'","description":"TypeScript server SDK for Tanzania Rental Platform API","main":"./index.js","types":"./index.d.ts","files":["**/*"],"dependencies":{"tslib":"^2.6.2","@smithy/smithy-client":"^4.7.0","@smithy/types":"^4.2.0","@aws-sdk/core":"^3.0.0","@smithy/util-body-length-node":"^4.2.0","@aws-smithy/server-common":"^1.0.0-alpha.10","@smithy/node-http-handler":"^4.2.0","@smithy/protocol-http":"^5.3.0","@smithy/util-base64":"^4.2.0","@smithy/util-utf8":"^4.2.0"},"devDependencies":{"typescript":"^5.0.0","@types/node":"^20.0.0"},"keywords":["rental","platform","api","server","tanzania"],"license":"MIT"}' > package.json; \
	npm install && npx tsc index.ts **/*.ts --outDir . --declaration --moduleResolution node --target es2020 --module commonjs --skipLibCheck && npm publish --access public

# Help
help:
	@echo "Available commands:"
	@echo "  make build - Build Smithy models"
	@echo "  make clean        - Clean all build artifacts"
	@echo "  make publish-client - Publish Smithy client to NPM"
	@echo "  make publish-server - Publish Smithy server to NPM"
