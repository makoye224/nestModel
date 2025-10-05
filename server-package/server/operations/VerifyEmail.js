"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyEmailHandler = exports.getVerifyEmailHandler = exports.VerifyEmailSerializer = exports.VerifyEmailServerInput = void 0;
// smithy-typescript generated code
const models_0_1 = require("../../models/models_0");
const Aws_restJson1_1 = require("../../protocols/Aws_restJson1");
const server_common_1 = require("@aws-smithy/server-common");
const node_http_handler_1 = require("@smithy/node-http-handler");
const util_base64_1 = require("@smithy/util-base64");
const util_utf8_1 = require("@smithy/util-utf8");
var VerifyEmailServerInput;
(function (VerifyEmailServerInput) {
    /**
     * @internal
     */
    VerifyEmailServerInput.validate = models_0_1.VerifyEmailInput.validate;
})(VerifyEmailServerInput || (exports.VerifyEmailServerInput = VerifyEmailServerInput = {}));
class VerifyEmailSerializer {
    constructor() {
        this.serialize = Aws_restJson1_1.serializeVerifyEmailResponse;
        this.deserialize = Aws_restJson1_1.deserializeVerifyEmailRequest;
    }
    isOperationError(error) {
        const names = ["ValidationException", "RentalValidationException", "InternalServerError", "UnauthorizedException"];
        return names.includes(error.name);
    }
    ;
    serializeError(error, ctx) {
        switch (error.name) {
            case "ValidationException": {
                return (0, Aws_restJson1_1.serializeValidationExceptionError)(error, ctx);
            }
            case "RentalValidationException": {
                return (0, Aws_restJson1_1.serializeRentalValidationExceptionError)(error, ctx);
            }
            case "InternalServerError": {
                return (0, Aws_restJson1_1.serializeInternalServerErrorError)(error, ctx);
            }
            case "UnauthorizedException": {
                return (0, Aws_restJson1_1.serializeUnauthorizedExceptionError)(error, ctx);
            }
            default: {
                throw error;
            }
        }
    }
}
exports.VerifyEmailSerializer = VerifyEmailSerializer;
const getVerifyEmailHandler = (operation) => {
    const mux = new server_common_1.httpbinding.HttpBindingMux([
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "verify-email" },
        ], [], { service: "RentalPlatform", operation: "VerifyEmail" }),
    ]);
    const customizer = (ctx, failures) => {
        if (!failures) {
            return undefined;
        }
        return {
            name: "ValidationException",
            $fault: "client",
            message: (0, server_common_1.generateValidationSummary)(failures),
            fieldList: failures.map(failure => ({
                path: failure.path,
                message: (0, server_common_1.generateValidationMessage)(failure)
            }))
        };
    };
    return new VerifyEmailHandler(operation, mux, new VerifyEmailSerializer(), Aws_restJson1_1.serializeFrameworkException, customizer);
};
exports.getVerifyEmailHandler = getVerifyEmailHandler;
const serdeContextBase = {
    base64Encoder: util_base64_1.toBase64,
    base64Decoder: util_base64_1.fromBase64,
    utf8Encoder: util_utf8_1.toUtf8,
    utf8Decoder: util_utf8_1.fromUtf8,
    streamCollector: node_http_handler_1.streamCollector,
    requestHandler: new node_http_handler_1.NodeHttpHandler(),
    disableHostPrefix: true
};
async function handle(request, context, operationName, serializer, operation, serializeFrameworkException, validationFn, validationCustomizer) {
    let input;
    try {
        input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request), ...serdeContextBase
        });
    }
    catch (error) {
        if ((0, server_common_1.isFrameworkException)(error)) {
            return serializeFrameworkException(error, serdeContextBase);
        }
        ;
        return serializeFrameworkException(new server_common_1.SerializationException(), serdeContextBase);
    }
    try {
        let validationFailures = validationFn(input);
        if (validationFailures && validationFailures.length > 0) {
            let validationException = validationCustomizer({ operation: operationName }, validationFailures);
            if (validationException) {
                return serializer.serializeError(validationException, serdeContextBase);
            }
        }
        let output = await operation(input, context);
        return serializer.serialize(output, serdeContextBase);
    }
    catch (error) {
        if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, serdeContextBase);
        }
        console.log('Received an unexpected error', error);
        return serializeFrameworkException(new server_common_1.InternalFailureException(), serdeContextBase);
    }
}
class VerifyEmailHandler {
    /**
     * Construct a VerifyEmail handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for VerifyEmail
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for VerifyEmail that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation, mux, serializer, serializeFrameworkException, validationCustomizer) {
        this.operation = operation;
        this.mux = mux;
        this.serializer = serializer;
        this.serializeFrameworkException = serializeFrameworkException;
        this.validationCustomizer = validationCustomizer;
    }
    async handle(request, context) {
        const target = this.mux.match(request);
        if (target === undefined) {
            console.log('Received a request that did not match com.nest.rental#RentalPlatform.VerifyEmail. This indicates a misconfiguration.');
            return this.serializeFrameworkException(new server_common_1.InternalFailureException(), serdeContextBase);
        }
        return handle(request, context, "VerifyEmail", this.serializer, this.operation, this.serializeFrameworkException, VerifyEmailServerInput.validate, this.validationCustomizer);
    }
}
exports.VerifyEmailHandler = VerifyEmailHandler;
