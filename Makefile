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
	@CURRENT_VERSION=$$(npm view rental-platform-client version 2>/dev/null || echo "0.0.1"); \
	NEW_VERSION=$$(node -e "const v = '$$CURRENT_VERSION'.split('.'); v[2] = parseInt(v[2]) + 1; console.log(v.join('.'));"); \
	CLIENT_DIR="smithy/build/smithyprojections/smithy/source/typescript-client-codegen"; \
	PUBLISH_DIR="client-package"; \
	rm -rf $$PUBLISH_DIR; \
	mkdir -p $$PUBLISH_DIR; \
	cp -r $$CLIENT_DIR/* $$PUBLISH_DIR/; \
	cd $$PUBLISH_DIR; \
	sed -i '' 's/"name": ".*"/"name": "rental-platform-client"/' package.json; \
	sed -i '' 's/"version": ".*"/"version": "'$$NEW_VERSION'"/' package.json; \
	npm install && npm publish --access public


# Publish Smithy server to NPM
publish-server: build
	@echo "📦 Publishing Smithy server to NPM..."
	@SERVER_DIR=$$(find smithy/build/smithyprojections/smithy -name "typescript-ssdk-codegen" -type d | head -1); \
	PUBLISH_DIR="server-package"; \
	rm -rf $$PUBLISH_DIR; \
	mkdir -p $$PUBLISH_DIR; \
	cp -r $$SERVER_DIR/src/* $$PUBLISH_DIR/; \
	cd $$PUBLISH_DIR; \
	CURRENT_VERSION=$$(npm view rental-platform-server version 2>/dev/null || echo "0.0.0"); \
	NEW_VERSION=$$(node -e "const v = '$$CURRENT_VERSION'.split('.'); v[2] = parseInt(v[2]) + 1; console.log(v.join('.'));"); \
	echo '{' > package.json; \
	echo '  "name": "rental-platform-server",' >> package.json; \
	echo '  "version": "'$$NEW_VERSION'",' >> package.json; \
	echo '  "description": "TypeScript server SDK for Tanzania Rental Platform API",' >> package.json; \
	echo '  "main": "./index.js",' >> package.json; \
	echo '  "types": "./index.d.ts",' >> package.json; \
	echo '  "files": ["**/*"],' >> package.json; \
	echo '  "dependencies": {' >> package.json; \
	echo '    "tslib": "^2.6.2",' >> package.json; \
	echo '    "@smithy/smithy-client": "^4.7.0",' >> package.json; \
	echo '    "@smithy/types": "^4.2.0",' >> package.json; \
	echo '    "@aws-sdk/core": "^3.0.0",' >> package.json; \
	echo '    "@smithy/util-body-length-node": "^4.2.0",' >> package.json; \
	echo '    "@aws-smithy/server-common": "^1.0.0-alpha.10",' >> package.json; \
	echo '    "@smithy/node-http-handler": "^4.2.0",' >> package.json; \
	echo '    "@smithy/protocol-http": "^5.3.0",' >> package.json; \
	echo '    "@smithy/util-base64": "^4.2.0",' >> package.json; \
	echo '    "@smithy/util-utf8": "^4.2.0"' >> package.json; \
	echo '  },' >> package.json; \
	echo '  "devDependencies": {' >> package.json; \
	echo '    "typescript": "^5.0.0",' >> package.json; \
	echo '    "@types/node": "^20.0.0"' >> package.json; \
	echo '  },' >> package.json; \
	echo '  "repository": {' >> package.json; \
	echo '    "type": "git",' >> package.json; \
	echo '    "url": "https://github.com/makoye224/nestModel"' >> package.json; \
	echo '  },' >> package.json; \
	echo '  "keywords": ["rental", "platform", "api", "server", "tanzania"],' >> package.json; \
	echo '  "license": "MIT"' >> package.json; \
	echo '}' >> package.json; \
	npm install && npx tsc index.ts **/*.ts --outDir . --declaration --moduleResolution node --target es2020 --module commonjs --skipLibCheck && npm publish --access public

# Help
help:
	@echo "Available commands:"
	@echo "  make build - Build Smithy models"
	@echo "  make clean        - Clean all build artifacts"
	@echo "  make publish-client - Publish Smithy client to NPM"
	@echo "  make publish-server - Publish Smithy server to NPM"
