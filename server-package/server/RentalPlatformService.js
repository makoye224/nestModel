"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRentalPlatformServiceHandler = exports.RentalPlatformServiceHandler = void 0;
// smithy-typescript generated code
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const AssignPropertyManager_1 = require("./operations/AssignPropertyManager");
const BecomeLandlord_1 = require("./operations/BecomeLandlord");
const CreateProperty_1 = require("./operations/CreateProperty");
const DeleteProperty_1 = require("./operations/DeleteProperty");
const ForgotPassword_1 = require("./operations/ForgotPassword");
const GetMediaUploadUrl_1 = require("./operations/GetMediaUploadUrl");
const GetNearbyProperties_1 = require("./operations/GetNearbyProperties");
const GetPropertiesByLocation_1 = require("./operations/GetPropertiesByLocation");
const GetProperty_1 = require("./operations/GetProperty");
const GetUser_1 = require("./operations/GetUser");
const ListLandlordProperties_1 = require("./operations/ListLandlordProperties");
const ListManagedProperties_1 = require("./operations/ListManagedProperties");
const ListProperties_1 = require("./operations/ListProperties");
const MarkPropertyAsAvailable_1 = require("./operations/MarkPropertyAsAvailable");
const MarkPropertyAsRented_1 = require("./operations/MarkPropertyAsRented");
const RemovePropertyManager_1 = require("./operations/RemovePropertyManager");
const ResetPassword_1 = require("./operations/ResetPassword");
const ReviewLandlordApplication_1 = require("./operations/ReviewLandlordApplication");
const SearchProperties_1 = require("./operations/SearchProperties");
const SignIn_1 = require("./operations/SignIn");
const SignUp_1 = require("./operations/SignUp");
const UpdateProperty_1 = require("./operations/UpdateProperty");
const UpdatePropertyStatus_1 = require("./operations/UpdatePropertyStatus");
const UpdateUser_1 = require("./operations/UpdateUser");
const VerifyEmail_1 = require("./operations/VerifyEmail");
const server_common_1 = require("@aws-smithy/server-common");
const node_http_handler_1 = require("@smithy/node-http-handler");
const util_base64_1 = require("@smithy/util-base64");
const util_utf8_1 = require("@smithy/util-utf8");
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
class RentalPlatformServiceHandler {
    /**
     * Construct a RentalPlatformService handler.
     * @param service The {@link RentalPlatformService} implementation that supplies the business logic for RentalPlatformService
     * @param mux The {@link __Mux} that determines which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializerFactory A factory for an {@link __OperationSerializer} for each operation in RentalPlatformService that
     *                          handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(service, mux, serializerFactory, serializeFrameworkException, validationCustomizer) {
        this.service = service;
        this.mux = mux;
        this.serializerFactory = serializerFactory;
        this.serializeFrameworkException = serializeFrameworkException;
        this.validationCustomizer = validationCustomizer;
    }
    async handle(request, context) {
        const target = this.mux.match(request);
        if (target === undefined) {
            return this.serializeFrameworkException(new server_common_1.UnknownOperationException(), serdeContextBase);
        }
        switch (target.operation) {
            case "AssignPropertyManager": {
                return handle(request, context, "AssignPropertyManager", this.serializerFactory("AssignPropertyManager"), this.service.AssignPropertyManager, this.serializeFrameworkException, AssignPropertyManager_1.AssignPropertyManagerServerInput.validate, this.validationCustomizer);
            }
            case "BecomeLandlord": {
                return handle(request, context, "BecomeLandlord", this.serializerFactory("BecomeLandlord"), this.service.BecomeLandlord, this.serializeFrameworkException, BecomeLandlord_1.BecomeLandlordServerInput.validate, this.validationCustomizer);
            }
            case "CreateProperty": {
                return handle(request, context, "CreateProperty", this.serializerFactory("CreateProperty"), this.service.CreateProperty, this.serializeFrameworkException, CreateProperty_1.CreatePropertyServerInput.validate, this.validationCustomizer);
            }
            case "DeleteProperty": {
                return handle(request, context, "DeleteProperty", this.serializerFactory("DeleteProperty"), this.service.DeleteProperty, this.serializeFrameworkException, DeleteProperty_1.DeletePropertyServerInput.validate, this.validationCustomizer);
            }
            case "ForgotPassword": {
                return handle(request, context, "ForgotPassword", this.serializerFactory("ForgotPassword"), this.service.ForgotPassword, this.serializeFrameworkException, ForgotPassword_1.ForgotPasswordServerInput.validate, this.validationCustomizer);
            }
            case "GetMediaUploadUrl": {
                return handle(request, context, "GetMediaUploadUrl", this.serializerFactory("GetMediaUploadUrl"), this.service.GetMediaUploadUrl, this.serializeFrameworkException, GetMediaUploadUrl_1.GetMediaUploadUrlServerInput.validate, this.validationCustomizer);
            }
            case "GetNearbyProperties": {
                return handle(request, context, "GetNearbyProperties", this.serializerFactory("GetNearbyProperties"), this.service.GetNearbyProperties, this.serializeFrameworkException, GetNearbyProperties_1.GetNearbyPropertiesServerInput.validate, this.validationCustomizer);
            }
            case "GetPropertiesByLocation": {
                return handle(request, context, "GetPropertiesByLocation", this.serializerFactory("GetPropertiesByLocation"), this.service.GetPropertiesByLocation, this.serializeFrameworkException, GetPropertiesByLocation_1.GetPropertiesByLocationServerInput.validate, this.validationCustomizer);
            }
            case "GetProperty": {
                return handle(request, context, "GetProperty", this.serializerFactory("GetProperty"), this.service.GetProperty, this.serializeFrameworkException, GetProperty_1.GetPropertyServerInput.validate, this.validationCustomizer);
            }
            case "GetUser": {
                return handle(request, context, "GetUser", this.serializerFactory("GetUser"), this.service.GetUser, this.serializeFrameworkException, GetUser_1.GetUserServerInput.validate, this.validationCustomizer);
            }
            case "ListLandlordProperties": {
                return handle(request, context, "ListLandlordProperties", this.serializerFactory("ListLandlordProperties"), this.service.ListLandlordProperties, this.serializeFrameworkException, ListLandlordProperties_1.ListLandlordPropertiesServerInput.validate, this.validationCustomizer);
            }
            case "ListManagedProperties": {
                return handle(request, context, "ListManagedProperties", this.serializerFactory("ListManagedProperties"), this.service.ListManagedProperties, this.serializeFrameworkException, ListManagedProperties_1.ListManagedPropertiesServerInput.validate, this.validationCustomizer);
            }
            case "ListProperties": {
                return handle(request, context, "ListProperties", this.serializerFactory("ListProperties"), this.service.ListProperties, this.serializeFrameworkException, ListProperties_1.ListPropertiesServerInput.validate, this.validationCustomizer);
            }
            case "MarkPropertyAsAvailable": {
                return handle(request, context, "MarkPropertyAsAvailable", this.serializerFactory("MarkPropertyAsAvailable"), this.service.MarkPropertyAsAvailable, this.serializeFrameworkException, MarkPropertyAsAvailable_1.MarkPropertyAsAvailableServerInput.validate, this.validationCustomizer);
            }
            case "MarkPropertyAsRented": {
                return handle(request, context, "MarkPropertyAsRented", this.serializerFactory("MarkPropertyAsRented"), this.service.MarkPropertyAsRented, this.serializeFrameworkException, MarkPropertyAsRented_1.MarkPropertyAsRentedServerInput.validate, this.validationCustomizer);
            }
            case "RemovePropertyManager": {
                return handle(request, context, "RemovePropertyManager", this.serializerFactory("RemovePropertyManager"), this.service.RemovePropertyManager, this.serializeFrameworkException, RemovePropertyManager_1.RemovePropertyManagerServerInput.validate, this.validationCustomizer);
            }
            case "ResetPassword": {
                return handle(request, context, "ResetPassword", this.serializerFactory("ResetPassword"), this.service.ResetPassword, this.serializeFrameworkException, ResetPassword_1.ResetPasswordServerInput.validate, this.validationCustomizer);
            }
            case "ReviewLandlordApplication": {
                return handle(request, context, "ReviewLandlordApplication", this.serializerFactory("ReviewLandlordApplication"), this.service.ReviewLandlordApplication, this.serializeFrameworkException, ReviewLandlordApplication_1.ReviewLandlordApplicationServerInput.validate, this.validationCustomizer);
            }
            case "SearchProperties": {
                return handle(request, context, "SearchProperties", this.serializerFactory("SearchProperties"), this.service.SearchProperties, this.serializeFrameworkException, SearchProperties_1.SearchPropertiesServerInput.validate, this.validationCustomizer);
            }
            case "SignIn": {
                return handle(request, context, "SignIn", this.serializerFactory("SignIn"), this.service.SignIn, this.serializeFrameworkException, SignIn_1.SignInServerInput.validate, this.validationCustomizer);
            }
            case "SignUp": {
                return handle(request, context, "SignUp", this.serializerFactory("SignUp"), this.service.SignUp, this.serializeFrameworkException, SignUp_1.SignUpServerInput.validate, this.validationCustomizer);
            }
            case "UpdateProperty": {
                return handle(request, context, "UpdateProperty", this.serializerFactory("UpdateProperty"), this.service.UpdateProperty, this.serializeFrameworkException, UpdateProperty_1.UpdatePropertyServerInput.validate, this.validationCustomizer);
            }
            case "UpdatePropertyStatus": {
                return handle(request, context, "UpdatePropertyStatus", this.serializerFactory("UpdatePropertyStatus"), this.service.UpdatePropertyStatus, this.serializeFrameworkException, UpdatePropertyStatus_1.UpdatePropertyStatusServerInput.validate, this.validationCustomizer);
            }
            case "UpdateUser": {
                return handle(request, context, "UpdateUser", this.serializerFactory("UpdateUser"), this.service.UpdateUser, this.serializeFrameworkException, UpdateUser_1.UpdateUserServerInput.validate, this.validationCustomizer);
            }
            case "VerifyEmail": {
                return handle(request, context, "VerifyEmail", this.serializerFactory("VerifyEmail"), this.service.VerifyEmail, this.serializeFrameworkException, VerifyEmail_1.VerifyEmailServerInput.validate, this.validationCustomizer);
            }
        }
    }
}
exports.RentalPlatformServiceHandler = RentalPlatformServiceHandler;
const getRentalPlatformServiceHandler = (service) => {
    const mux = new server_common_1.httpbinding.HttpBindingMux([
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "assign-manager" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "AssignPropertyManager" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "user" },
            { type: 'path' },
            { type: 'path_literal', value: "become-landlord" },
        ], [], { service: "RentalPlatform", operation: "BecomeLandlord" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "create" },
        ], [], { service: "RentalPlatform", operation: "CreateProperty" }),
        new server_common_1.httpbinding.UriSpec('DELETE', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "delete" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "DeleteProperty" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "forgot-password" },
        ], [], { service: "RentalPlatform", operation: "ForgotPassword" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "upload-url" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "GetMediaUploadUrl" }),
        new server_common_1.httpbinding.UriSpec('GET', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "nearby" },
        ], [
            { type: 'query', key: "lat" },
            { type: 'query', key: "lng" },
        ], { service: "RentalPlatform", operation: "GetNearbyProperties" }),
        new server_common_1.httpbinding.UriSpec('GET', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "by-location" },
            { type: 'path' },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "GetPropertiesByLocation" }),
        new server_common_1.httpbinding.UriSpec('GET', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "get" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "GetProperty" }),
        new server_common_1.httpbinding.UriSpec('GET', [
            { type: 'path_literal', value: "user" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "GetUser" }),
        new server_common_1.httpbinding.UriSpec('GET', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "landlord" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "ListLandlordProperties" }),
        new server_common_1.httpbinding.UriSpec('GET', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "managed" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "ListManagedProperties" }),
        new server_common_1.httpbinding.UriSpec('GET', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "list" },
        ], [], { service: "RentalPlatform", operation: "ListProperties" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "mark-available" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "MarkPropertyAsAvailable" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "mark-rented" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "MarkPropertyAsRented" }),
        new server_common_1.httpbinding.UriSpec('DELETE', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "remove-manager" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "RemovePropertyManager" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "reset-password" },
        ], [], { service: "RentalPlatform", operation: "ResetPassword" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "admin" },
            { type: 'path' },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "ReviewLandlordApplication" }),
        new server_common_1.httpbinding.UriSpec('GET', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "search" },
        ], [], { service: "RentalPlatform", operation: "SearchProperties" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "login" },
        ], [], { service: "RentalPlatform", operation: "SignIn" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "signup" },
        ], [], { service: "RentalPlatform", operation: "SignUp" }),
        new server_common_1.httpbinding.UriSpec('PUT', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "update" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "UpdateProperty" }),
        new server_common_1.httpbinding.UriSpec('PATCH', [
            { type: 'path_literal', value: "property" },
            { type: 'path_literal', value: "update-status" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "UpdatePropertyStatus" }),
        new server_common_1.httpbinding.UriSpec('PUT', [
            { type: 'path_literal', value: "user" },
            { type: 'path' },
        ], [], { service: "RentalPlatform", operation: "UpdateUser" }),
        new server_common_1.httpbinding.UriSpec('POST', [
            { type: 'path_literal', value: "verify-email" },
        ], [], { service: "RentalPlatform", operation: "VerifyEmail" }),
    ]);
    const serFn = (op) => {
        switch (op) {
            case "AssignPropertyManager": return new AssignPropertyManager_1.AssignPropertyManagerSerializer();
            case "BecomeLandlord": return new BecomeLandlord_1.BecomeLandlordSerializer();
            case "CreateProperty": return new CreateProperty_1.CreatePropertySerializer();
            case "DeleteProperty": return new DeleteProperty_1.DeletePropertySerializer();
            case "ForgotPassword": return new ForgotPassword_1.ForgotPasswordSerializer();
            case "GetMediaUploadUrl": return new GetMediaUploadUrl_1.GetMediaUploadUrlSerializer();
            case "GetNearbyProperties": return new GetNearbyProperties_1.GetNearbyPropertiesSerializer();
            case "GetPropertiesByLocation": return new GetPropertiesByLocation_1.GetPropertiesByLocationSerializer();
            case "GetProperty": return new GetProperty_1.GetPropertySerializer();
            case "GetUser": return new GetUser_1.GetUserSerializer();
            case "ListLandlordProperties": return new ListLandlordProperties_1.ListLandlordPropertiesSerializer();
            case "ListManagedProperties": return new ListManagedProperties_1.ListManagedPropertiesSerializer();
            case "ListProperties": return new ListProperties_1.ListPropertiesSerializer();
            case "MarkPropertyAsAvailable": return new MarkPropertyAsAvailable_1.MarkPropertyAsAvailableSerializer();
            case "MarkPropertyAsRented": return new MarkPropertyAsRented_1.MarkPropertyAsRentedSerializer();
            case "RemovePropertyManager": return new RemovePropertyManager_1.RemovePropertyManagerSerializer();
            case "ResetPassword": return new ResetPassword_1.ResetPasswordSerializer();
            case "ReviewLandlordApplication": return new ReviewLandlordApplication_1.ReviewLandlordApplicationSerializer();
            case "SearchProperties": return new SearchProperties_1.SearchPropertiesSerializer();
            case "SignIn": return new SignIn_1.SignInSerializer();
            case "SignUp": return new SignUp_1.SignUpSerializer();
            case "UpdateProperty": return new UpdateProperty_1.UpdatePropertySerializer();
            case "UpdatePropertyStatus": return new UpdatePropertyStatus_1.UpdatePropertyStatusSerializer();
            case "UpdateUser": return new UpdateUser_1.UpdateUserSerializer();
            case "VerifyEmail": return new VerifyEmail_1.VerifyEmailSerializer();
        }
    };
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
    return new RentalPlatformServiceHandler(service, mux, serFn, Aws_restJson1_1.serializeFrameworkException, customizer);
};
exports.getRentalPlatformServiceHandler = getRentalPlatformServiceHandler;
