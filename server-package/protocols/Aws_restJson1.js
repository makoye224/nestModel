"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeVerifyEmailResponse = exports.serializeUpdateUserResponse = exports.serializeUpdatePropertyStatusResponse = exports.serializeUpdatePropertyResponse = exports.serializeSignUpResponse = exports.serializeSignInResponse = exports.serializeSearchPropertiesResponse = exports.serializeReviewLandlordApplicationResponse = exports.serializeResetPasswordResponse = exports.serializeRemovePropertyManagerResponse = exports.serializeMarkPropertyAsRentedResponse = exports.serializeMarkPropertyAsAvailableResponse = exports.serializeListPropertiesResponse = exports.serializeListManagedPropertiesResponse = exports.serializeListLandlordPropertiesResponse = exports.serializeGetUserResponse = exports.serializeGetPropertyResponse = exports.serializeGetPropertiesByLocationResponse = exports.serializeGetNearbyPropertiesResponse = exports.serializeGetMediaUploadUrlResponse = exports.serializeForgotPasswordResponse = exports.serializeDeletePropertyResponse = exports.serializeCreatePropertyResponse = exports.serializeBecomeLandlordResponse = exports.serializeAssignPropertyManagerResponse = exports.deserializeVerifyEmailRequest = exports.deserializeUpdateUserRequest = exports.deserializeUpdatePropertyStatusRequest = exports.deserializeUpdatePropertyRequest = exports.deserializeSignUpRequest = exports.deserializeSignInRequest = exports.deserializeSearchPropertiesRequest = exports.deserializeReviewLandlordApplicationRequest = exports.deserializeResetPasswordRequest = exports.deserializeRemovePropertyManagerRequest = exports.deserializeMarkPropertyAsRentedRequest = exports.deserializeMarkPropertyAsAvailableRequest = exports.deserializeListPropertiesRequest = exports.deserializeListManagedPropertiesRequest = exports.deserializeListLandlordPropertiesRequest = exports.deserializeGetUserRequest = exports.deserializeGetPropertyRequest = exports.deserializeGetPropertiesByLocationRequest = exports.deserializeGetNearbyPropertiesRequest = exports.deserializeGetMediaUploadUrlRequest = exports.deserializeForgotPasswordRequest = exports.deserializeDeletePropertyRequest = exports.deserializeCreatePropertyRequest = exports.deserializeBecomeLandlordRequest = exports.deserializeAssignPropertyManagerRequest = void 0;
exports.serializeValidationExceptionError = exports.serializeUnauthorizedExceptionError = exports.serializeRentalValidationExceptionError = exports.serializePropertyNotFoundExceptionError = exports.serializeInternalServerErrorError = exports.serializeFrameworkException = void 0;
// smithy-typescript generated code
const models_0_1 = require("../models/models_0");
const core_1 = require("@aws-sdk/core");
const server_common_1 = require("@aws-smithy/server-common");
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const util_body_length_node_1 = require("@smithy/util-body-length-node");
const deserializeAssignPropertyManagerRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/assign-manager/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    const data = (0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context));
    contents.assignment = de_PropertyManagerAssignment(data, context);
    return contents;
};
exports.deserializeAssignPropertyManagerRequest = deserializeAssignPropertyManagerRequest;
const deserializeBecomeLandlordRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/user/(?<userId>[^/]+)/become-landlord");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.userId = decodeURIComponent(parsedPath.groups.userId);
    }
    const data = (0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context));
    contents.application = de_BecomeLandlordApplication(data, context);
    return contents;
};
exports.deserializeBecomeLandlordRequest = deserializeBecomeLandlordRequest;
const deserializeCreatePropertyRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const data = (0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context));
    contents.property = de_CreatePropertyData(data, context);
    return contents;
};
exports.deserializeCreatePropertyRequest = deserializeCreatePropertyRequest;
const deserializeDeletePropertyRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/delete/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeDeletePropertyRequest = deserializeDeletePropertyRequest;
const deserializeForgotPasswordRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'email': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.deserializeForgotPasswordRequest = deserializeForgotPasswordRequest;
const deserializeGetMediaUploadUrlRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/upload-url/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    const data = (0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context));
    contents.media = de_MediaUploadInput(data, context);
    return contents;
};
exports.deserializeGetMediaUploadUrlRequest = deserializeGetMediaUploadUrlRequest;
const deserializeGetNearbyPropertiesRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const query = output.query;
    if (query != null) {
        if (query["lat"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["lat"])) {
                if (query["lat"].length === 1) {
                    queryValue = query["lat"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["lat"];
            }
            contents.lat = (0, smithy_client_1.strictParseDouble)(queryValue);
        }
        if (query["lng"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["lng"])) {
                if (query["lng"].length === 1) {
                    queryValue = query["lng"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["lng"];
            }
            contents.lng = (0, smithy_client_1.strictParseDouble)(queryValue);
        }
        if (query["radius"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["radius"])) {
                if (query["radius"].length === 1) {
                    queryValue = query["radius"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["radius"];
            }
            contents.radius = (0, smithy_client_1.strictParseDouble)(queryValue);
        }
        if (query["limit"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["limit"])) {
                if (query["limit"].length === 1) {
                    queryValue = query["limit"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["limit"];
            }
            contents.limit = (0, smithy_client_1.strictParseInt32)(queryValue);
        }
        if (query["nextToken"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["nextToken"])) {
                if (query["nextToken"].length === 1) {
                    queryValue = query["nextToken"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["nextToken"];
            }
            contents.nextToken = queryValue;
        }
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeGetNearbyPropertiesRequest = deserializeGetNearbyPropertiesRequest;
const deserializeGetPropertiesByLocationRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const query = output.query;
    if (query != null) {
        if (query["ward"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["ward"])) {
                if (query["ward"].length === 1) {
                    queryValue = query["ward"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["ward"];
            }
            contents.ward = queryValue;
        }
        if (query["limit"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["limit"])) {
                if (query["limit"].length === 1) {
                    queryValue = query["limit"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["limit"];
            }
            contents.limit = (0, smithy_client_1.strictParseInt32)(queryValue);
        }
        if (query["nextToken"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["nextToken"])) {
                if (query["nextToken"].length === 1) {
                    queryValue = query["nextToken"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["nextToken"];
            }
            contents.nextToken = queryValue;
        }
    }
    const pathRegex = new RegExp("/property/by-location/(?<region>[^/]+)/(?<district>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.region = decodeURIComponent(parsedPath.groups.region);
        contents.district = decodeURIComponent(parsedPath.groups.district);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeGetPropertiesByLocationRequest = deserializeGetPropertiesByLocationRequest;
const deserializeGetPropertyRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/get/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeGetPropertyRequest = deserializeGetPropertyRequest;
const deserializeGetUserRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/user/(?<userId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.userId = decodeURIComponent(parsedPath.groups.userId);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeGetUserRequest = deserializeGetUserRequest;
const deserializeListLandlordPropertiesRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const query = output.query;
    if (query != null) {
        if (query["limit"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["limit"])) {
                if (query["limit"].length === 1) {
                    queryValue = query["limit"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["limit"];
            }
            contents.limit = (0, smithy_client_1.strictParseInt32)(queryValue);
        }
        if (query["nextToken"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["nextToken"])) {
                if (query["nextToken"].length === 1) {
                    queryValue = query["nextToken"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["nextToken"];
            }
            contents.nextToken = queryValue;
        }
    }
    const pathRegex = new RegExp("/property/landlord/(?<userId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.userId = decodeURIComponent(parsedPath.groups.userId);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeListLandlordPropertiesRequest = deserializeListLandlordPropertiesRequest;
const deserializeListManagedPropertiesRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const query = output.query;
    if (query != null) {
        if (query["limit"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["limit"])) {
                if (query["limit"].length === 1) {
                    queryValue = query["limit"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["limit"];
            }
            contents.limit = (0, smithy_client_1.strictParseInt32)(queryValue);
        }
        if (query["nextToken"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["nextToken"])) {
                if (query["nextToken"].length === 1) {
                    queryValue = query["nextToken"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["nextToken"];
            }
            contents.nextToken = queryValue;
        }
    }
    const pathRegex = new RegExp("/property/managed/(?<managerId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.managerId = decodeURIComponent(parsedPath.groups.managerId);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeListManagedPropertiesRequest = deserializeListManagedPropertiesRequest;
const deserializeListPropertiesRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const query = output.query;
    if (query != null) {
        if (query["limit"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["limit"])) {
                if (query["limit"].length === 1) {
                    queryValue = query["limit"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["limit"];
            }
            contents.limit = (0, smithy_client_1.strictParseInt32)(queryValue);
        }
        if (query["nextToken"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["nextToken"])) {
                if (query["nextToken"].length === 1) {
                    queryValue = query["nextToken"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["nextToken"];
            }
            contents.nextToken = queryValue;
        }
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeListPropertiesRequest = deserializeListPropertiesRequest;
const deserializeMarkPropertyAsAvailableRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/mark-available/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeMarkPropertyAsAvailableRequest = deserializeMarkPropertyAsAvailableRequest;
const deserializeMarkPropertyAsRentedRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/mark-rented/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeMarkPropertyAsRentedRequest = deserializeMarkPropertyAsRentedRequest;
const deserializeRemovePropertyManagerRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/remove-manager/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeRemovePropertyManagerRequest = deserializeRemovePropertyManagerRequest;
const deserializeResetPasswordRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'confirmationCode': smithy_client_1.expectString,
        'email': smithy_client_1.expectString,
        'newPassword': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.deserializeResetPasswordRequest = deserializeResetPasswordRequest;
const deserializeReviewLandlordApplicationRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/admin/(?<applicationId>[^/]+)/(?<userId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.applicationId = decodeURIComponent(parsedPath.groups.applicationId);
        contents.userId = decodeURIComponent(parsedPath.groups.userId);
    }
    const data = (0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context));
    contents.decision = de_ApplicationDecision(data, context);
    return contents;
};
exports.deserializeReviewLandlordApplicationRequest = deserializeReviewLandlordApplicationRequest;
const deserializeSearchPropertiesRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const query = output.query;
    if (query != null) {
        if (query["region"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["region"])) {
                if (query["region"].length === 1) {
                    queryValue = query["region"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["region"];
            }
            contents.region = queryValue;
        }
        if (query["district"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["district"])) {
                if (query["district"].length === 1) {
                    queryValue = query["district"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["district"];
            }
            contents.district = queryValue;
        }
        if (query["ward"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["ward"])) {
                if (query["ward"].length === 1) {
                    queryValue = query["ward"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["ward"];
            }
            contents.ward = queryValue;
        }
        if (query["propertyType"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["propertyType"])) {
                if (query["propertyType"].length === 1) {
                    queryValue = query["propertyType"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["propertyType"];
            }
            contents.propertyType = queryValue;
        }
        if (query["minRent"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["minRent"])) {
                if (query["minRent"].length === 1) {
                    queryValue = query["minRent"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["minRent"];
            }
            contents.minRent = (0, smithy_client_1.strictParseLong)(queryValue);
        }
        if (query["maxRent"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["maxRent"])) {
                if (query["maxRent"].length === 1) {
                    queryValue = query["maxRent"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["maxRent"];
            }
            contents.maxRent = (0, smithy_client_1.strictParseLong)(queryValue);
        }
        if (query["minBedrooms"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["minBedrooms"])) {
                if (query["minBedrooms"].length === 1) {
                    queryValue = query["minBedrooms"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["minBedrooms"];
            }
            contents.minBedrooms = (0, smithy_client_1.strictParseInt32)(queryValue);
        }
        if (query["limit"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["limit"])) {
                if (query["limit"].length === 1) {
                    queryValue = query["limit"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["limit"];
            }
            contents.limit = (0, smithy_client_1.strictParseInt32)(queryValue);
        }
        if (query["nextToken"] !== undefined) {
            let queryValue;
            if (Array.isArray(query["nextToken"])) {
                if (query["nextToken"].length === 1) {
                    queryValue = query["nextToken"][0];
                }
                else {
                    throw new server_common_1.SerializationException();
                }
            }
            else {
                queryValue = query["nextToken"];
            }
            contents.nextToken = queryValue;
        }
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.deserializeSearchPropertiesRequest = deserializeSearchPropertiesRequest;
const deserializeSignInRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'email': smithy_client_1.expectString,
        'password': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.deserializeSignInRequest = deserializeSignInRequest;
const deserializeSignUpRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'email': smithy_client_1.expectString,
        'firstName': smithy_client_1.expectString,
        'lastName': smithy_client_1.expectString,
        'password': smithy_client_1.expectString,
        'phoneNumber': smithy_client_1.expectString,
        'preferences': _ => de_UserPreferences(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
exports.deserializeSignUpRequest = deserializeSignUpRequest;
const deserializeUpdatePropertyRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/update/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    const data = (0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context));
    contents.property = de_UpdatePropertyData(data, context);
    return contents;
};
exports.deserializeUpdatePropertyRequest = deserializeUpdatePropertyRequest;
const deserializeUpdatePropertyStatusRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/property/update-status/(?<propertyId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
    }
    const data = (0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context));
    contents.statusUpdate = de_PropertyStatusUpdate(data, context);
    return contents;
};
exports.deserializeUpdatePropertyStatusRequest = deserializeUpdatePropertyStatusRequest;
const deserializeUpdateUserRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const pathRegex = new RegExp("/user/(?<userId>[^/]+)");
    const parsedPath = output.path.match(pathRegex);
    if (parsedPath?.groups !== undefined) {
        contents.userId = decodeURIComponent(parsedPath.groups.userId);
    }
    const data = (0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context));
    contents.userData = de_UpdateUserData(data, context);
    return contents;
};
exports.deserializeUpdateUserRequest = deserializeUpdateUserRequest;
const deserializeVerifyEmailRequest = async (output, context) => {
    const contentTypeHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
    if (contentTypeHeaderKey != null) {
        const contentType = output.headers[contentTypeHeaderKey];
        if (contentType !== undefined && contentType !== "application/json") {
            throw new server_common_1.UnsupportedMediaTypeException();
        }
        ;
    }
    ;
    const acceptHeaderKey = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
    if (acceptHeaderKey != null) {
        const accept = output.headers[acceptHeaderKey];
        if (!(0, server_common_1.acceptMatches)(accept, "application/json")) {
            throw new server_common_1.NotAcceptableException();
        }
        ;
    }
    ;
    const contents = (0, smithy_client_1.map)({});
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'confirmationCode': smithy_client_1.expectString,
        'email': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.deserializeVerifyEmailRequest = deserializeVerifyEmailRequest;
const serializeAssignPropertyManagerResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
        'property': _ => se_Property(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeAssignPropertyManagerResponse = serializeAssignPropertyManagerResponse;
const serializeBecomeLandlordResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'applicationId': [],
        'message': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeBecomeLandlordResponse = serializeBecomeLandlordResponse;
const serializeCreatePropertyResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
        'property': _ => se_Property(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeCreatePropertyResponse = serializeCreatePropertyResponse;
const serializeDeletePropertyResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeDeletePropertyResponse = serializeDeletePropertyResponse;
const serializeForgotPasswordResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeForgotPasswordResponse = serializeForgotPasswordResponse;
const serializeGetMediaUploadUrlResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'cloudfrontUrl': [],
        'fileKey': [],
        'message': [],
        'presignedUrl': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeGetMediaUploadUrlResponse = serializeGetMediaUploadUrlResponse;
const serializeGetNearbyPropertiesResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'count': [],
        'nextToken': [],
        'properties': _ => se_PropertyList(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeGetNearbyPropertiesResponse = serializeGetNearbyPropertiesResponse;
const serializeGetPropertiesByLocationResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'count': [],
        'nextToken': [],
        'properties': _ => se_PropertyList(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeGetPropertiesByLocationResponse = serializeGetPropertiesByLocationResponse;
const serializeGetPropertyResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'property': _ => se_Property(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeGetPropertyResponse = serializeGetPropertyResponse;
const serializeGetUserResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'user': _ => se_UserProfile(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeGetUserResponse = serializeGetUserResponse;
const serializeListLandlordPropertiesResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'count': [],
        'nextToken': [],
        'properties': _ => se_PropertyList(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeListLandlordPropertiesResponse = serializeListLandlordPropertiesResponse;
const serializeListManagedPropertiesResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'count': [],
        'nextToken': [],
        'properties': _ => se_PropertyList(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeListManagedPropertiesResponse = serializeListManagedPropertiesResponse;
const serializeListPropertiesResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'count': [],
        'nextToken': [],
        'properties': _ => se_PropertyList(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeListPropertiesResponse = serializeListPropertiesResponse;
const serializeMarkPropertyAsAvailableResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
        'property': _ => se_Property(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeMarkPropertyAsAvailableResponse = serializeMarkPropertyAsAvailableResponse;
const serializeMarkPropertyAsRentedResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
        'property': _ => se_Property(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeMarkPropertyAsRentedResponse = serializeMarkPropertyAsRentedResponse;
const serializeRemovePropertyManagerResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
        'property': _ => se_Property(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeRemovePropertyManagerResponse = serializeRemovePropertyManagerResponse;
const serializeResetPasswordResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeResetPasswordResponse = serializeResetPasswordResponse;
const serializeReviewLandlordApplicationResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeReviewLandlordApplicationResponse = serializeReviewLandlordApplicationResponse;
const serializeSearchPropertiesResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'filters': _ => se_SearchFilters(_, context),
        'nextToken': [],
        'properties': _ => se_PropertyList(_, context),
        'totalCount': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeSearchPropertiesResponse = serializeSearchPropertiesResponse;
const serializeSignInResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'accessToken': [],
        'refreshToken': [],
        'user': _ => se_UserProfile(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeSignInResponse = serializeSignInResponse;
const serializeSignUpResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
        'userId': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeSignUpResponse = serializeSignUpResponse;
const serializeUpdatePropertyResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
        'property': _ => se_Property(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeUpdatePropertyResponse = serializeUpdatePropertyResponse;
const serializeUpdatePropertyStatusResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
        'property': _ => se_Property(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeUpdatePropertyStatusResponse = serializeUpdatePropertyStatusResponse;
const serializeUpdateUserResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'user': _ => se_UserProfile(_, context),
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeUpdateUserResponse = serializeUpdateUserResponse;
const serializeVerifyEmailResponse = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    let statusCode = 200;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
        const length = (0, util_body_length_node_1.calculateBodyLength)(body);
        if (length !== undefined) {
            headers = { ...headers, 'content-length': String(length) };
        }
    }
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeVerifyEmailResponse = serializeVerifyEmailResponse;
const serializeFrameworkException = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    switch (input.name) {
        case "InternalFailure": {
            const statusCode = 500;
            let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
                'x-amzn-errortype': "InternalFailure",
                'content-type': 'application/json',
            });
            let body;
            body = "{}";
            return new protocol_http_1.HttpResponse({
                headers,
                body,
                statusCode,
            });
        }
        case "NotAcceptableException": {
            const statusCode = 406;
            let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
                'x-amzn-errortype': "NotAcceptableException",
                'content-type': 'application/json',
            });
            let body;
            body = "{}";
            return new protocol_http_1.HttpResponse({
                headers,
                body,
                statusCode,
            });
        }
        case "SerializationException": {
            const statusCode = 400;
            let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
                'x-amzn-errortype': "SerializationException",
                'content-type': 'application/json',
            });
            let body;
            body = "{}";
            return new protocol_http_1.HttpResponse({
                headers,
                body,
                statusCode,
            });
        }
        case "UnknownOperationException": {
            const statusCode = 404;
            let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
                'x-amzn-errortype': "UnknownOperationException",
                'content-type': 'application/json',
            });
            let body;
            body = "{}";
            return new protocol_http_1.HttpResponse({
                headers,
                body,
                statusCode,
            });
        }
        case "UnsupportedMediaTypeException": {
            const statusCode = 415;
            let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
                'x-amzn-errortype': "UnsupportedMediaTypeException",
                'content-type': 'application/json',
            });
            let body;
            body = "{}";
            return new protocol_http_1.HttpResponse({
                headers,
                body,
                statusCode,
            });
        }
    }
};
exports.serializeFrameworkException = serializeFrameworkException;
const serializeInternalServerErrorError = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    const statusCode = 500;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "InternalServerError",
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeInternalServerErrorError = serializeInternalServerErrorError;
const serializePropertyNotFoundExceptionError = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    const statusCode = 404;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "PropertyNotFoundException",
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializePropertyNotFoundExceptionError = serializePropertyNotFoundExceptionError;
const serializeRentalValidationExceptionError = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    const statusCode = 400;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "RentalValidationException",
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeRentalValidationExceptionError = serializeRentalValidationExceptionError;
const serializeUnauthorizedExceptionError = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    const statusCode = 401;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "UnauthorizedException",
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'message': [],
    }));
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeUnauthorizedExceptionError = serializeUnauthorizedExceptionError;
const serializeValidationExceptionError = async (input, ctx) => {
    const context = {
        ...ctx,
        endpoint: () => Promise.resolve({
            protocol: '',
            hostname: '',
            path: '',
        }),
    };
    const statusCode = 400;
    let headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "ValidationException",
        'content-type': 'application/json',
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'fieldList': _ => se_ValidationExceptionFieldList(_, context),
        'message': [],
    }));
    return new protocol_http_1.HttpResponse({
        headers,
        body,
        statusCode,
    });
};
exports.serializeValidationExceptionError = serializeValidationExceptionError;
/**
 * serializeAws_restJson1Address
 */
const se_Address = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'coordinates': _ => se_Coordinates(_, context),
        'district': [],
        'region': [],
        'street': [],
        'ward': [],
    });
};
/**
 * serializeAws_restJson1Admin
 */
const se_Admin = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'accountStatus': [],
        'adminLevel': [],
        'createdAt': _ => (_.getTime() / 1000),
        'email': [],
        'firstName': [],
        'isEmailVerified': [],
        'lastName': [],
        'permissions': _ => se_StringList(_, context),
        'phoneNumber': [],
        'preferences': _ => se_UserPreferences(_, context),
        'profileImage': [],
        'updatedAt': _ => (_.getTime() / 1000),
        'userId': [],
        'userType': [],
    });
};
/**
 * serializeAws_restJson1ContactInfo
 */
const se_ContactInfo = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'email': [],
        'name': [],
        'phoneNumber': [],
        'relationship': [],
    });
};
/**
 * serializeAws_restJson1Coordinates
 */
const se_Coordinates = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'lat': smithy_client_1.serializeFloat,
        'lng': smithy_client_1.serializeFloat,
    });
};
/**
 * serializeAws_restJson1EmploymentInfo
 */
const se_EmploymentInfo = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'employer': [],
        'position': [],
        'startDate': _ => (_.getTime() / 1000),
        'supervisorContact': [],
        'workAddress': [],
    });
};
/**
 * serializeAws_restJson1Landlord
 */
const se_Landlord = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'accountStatus': [],
        'businessLicense': [],
        'businessName': [],
        'createdAt': _ => (_.getTime() / 1000),
        'email': [],
        'firstName': [],
        'isEmailVerified': [],
        'isLandlordVerified': [],
        'lastName': [],
        'phoneNumber': [],
        'preferences': _ => se_UserPreferences(_, context),
        'profileImage': [],
        'propertyCount': [],
        'taxId': [],
        'updatedAt': _ => (_.getTime() / 1000),
        'userId': [],
        'userType': [],
        'verificationDocuments': _ => se_StringList(_, context),
    });
};
/**
 * serializeAws_restJson1NotificationSettings
 */
const se_NotificationSettings = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'email': [],
        'push': [],
        'sms': [],
    });
};
/**
 * serializeAws_restJson1PriceRange
 */
const se_PriceRange = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'max': [],
        'min': [],
    });
};
/**
 * serializeAws_restJson1Property
 */
const se_Property = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'address': _ => se_Address(_, context),
        'amenities': _ => se_StringList(_, context),
        'availability': _ => se_PropertyAvailability(_, context),
        'createdAt': _ => (_.getTime() / 1000),
        'description': [],
        'landlordId': [],
        'managerId': [],
        'media': _ => se_PropertyMedia(_, context),
        'pricing': _ => se_PropertyPricing(_, context),
        'propertyId': [],
        'propertyType': [],
        'specifications': _ => se_PropertySpecifications(_, context),
        'status': [],
        'title': [],
        'updatedAt': _ => (_.getTime() / 1000),
    });
};
/**
 * serializeAws_restJson1PropertyAvailability
 */
const se_PropertyAvailability = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'availableFrom': _ => (_.getTime() / 1000),
        'isAvailable': [],
        'leaseDuration': [],
    });
};
/**
 * serializeAws_restJson1PropertyList
 */
const se_PropertyList = (input, context) => {
    return input.filter((e) => e != null).map(entry => {
        return se_Property(entry, context);
    });
};
/**
 * serializeAws_restJson1PropertyMedia
 */
const se_PropertyMedia = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'images': _ => se_StringList(_, context),
        'videos': _ => se_StringList(_, context),
        'virtualTour': [],
    });
};
/**
 * serializeAws_restJson1PropertyPricing
 */
const se_PropertyPricing = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'deposit': [],
        'monthlyRent': [],
        'utilities': [],
        'utilityCost': [],
    });
};
/**
 * serializeAws_restJson1PropertySpecifications
 */
const se_PropertySpecifications = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'bathrooms': [],
        'bedrooms': [],
        'furnished': [],
        'parking': [],
        'squareMeters': [],
    });
};
/**
 * serializeAws_restJson1RentalHistory
 */
const se_RentalHistory = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'endDate': _ => (_.getTime() / 1000),
        'landlordContact': [],
        'landlordName': [],
        'monthlyRent': [],
        'propertyAddress': [],
        'reasonForLeaving': [],
        'startDate': _ => (_.getTime() / 1000),
    });
};
/**
 * serializeAws_restJson1RentalHistoryList
 */
const se_RentalHistoryList = (input, context) => {
    return input.filter((e) => e != null).map(entry => {
        return se_RentalHistory(entry, context);
    });
};
/**
 * serializeAws_restJson1SearchFilters
 */
const se_SearchFilters = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'district': [],
        'minBedrooms': [],
        'propertyType': [],
        'region': [],
        'rentRange': _ => se_PriceRange(_, context),
        'ward': [],
    });
};
/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input, context) => {
    return input.filter((e) => e != null);
};
/**
 * serializeAws_restJson1Tenant
 */
const se_Tenant = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'accountStatus': [],
        'createdAt': _ => (_.getTime() / 1000),
        'currentLease': [],
        'email': [],
        'emergencyContact': _ => se_ContactInfo(_, context),
        'employmentInfo': _ => se_EmploymentInfo(_, context),
        'firstName': [],
        'isEmailVerified': [],
        'lastName': [],
        'monthlyIncome': [],
        'phoneNumber': [],
        'preferences': _ => se_UserPreferences(_, context),
        'profileImage': [],
        'rentalHistory': _ => se_RentalHistoryList(_, context),
        'updatedAt': _ => (_.getTime() / 1000),
        'userId': [],
        'userType': [],
    });
};
/**
 * serializeAws_restJson1UserPreferences
 */
const se_UserPreferences = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'currency': [],
        'language': [],
        'notifications': _ => se_NotificationSettings(_, context),
    });
};
/**
 * serializeAws_restJson1UserProfile
 */
const se_UserProfile = (input, context) => {
    return models_0_1.UserProfile.visit(input, {
        admin: value => ({ "admin": se_Admin(value, context) }),
        landlord: value => ({ "landlord": se_Landlord(value, context) }),
        tenant: value => ({ "tenant": se_Tenant(value, context) }),
        _: (name, value) => ({ name: value })
    });
};
/**
 * serializeAws_restJson1ValidationExceptionField
 */
const se_ValidationExceptionField = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        'message': [],
        'path': [],
    });
};
/**
 * serializeAws_restJson1ValidationExceptionFieldList
 */
const se_ValidationExceptionFieldList = (input, context) => {
    return input.filter((e) => e != null).map(entry => {
        return se_ValidationExceptionField(entry, context);
    });
};
/**
 * deserializeAws_restJson1AddressInput
 */
const de_AddressInput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'coordinates': (_) => de_CoordinatesInput(_, context),
        'district': smithy_client_1.expectString,
        'region': smithy_client_1.expectString,
        'street': smithy_client_1.expectString,
        'ward': smithy_client_1.expectString,
    });
};
/**
 * deserializeAws_restJson1ApplicationDecision
 */
const de_ApplicationDecision = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'comments': smithy_client_1.expectString,
        'status': smithy_client_1.expectString,
    });
};
/**
 * deserializeAws_restJson1BecomeLandlordApplication
 */
const de_BecomeLandlordApplication = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'businessLicense': smithy_client_1.expectString,
        'businessName': smithy_client_1.expectString,
        'taxId': smithy_client_1.expectString,
        'verificationDocuments': (_) => de_StringList(_, context),
    });
};
/**
 * deserializeAws_restJson1CoordinatesInput
 */
const de_CoordinatesInput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'lat': smithy_client_1.limitedParseDouble,
        'lng': smithy_client_1.limitedParseDouble,
    });
};
/**
 * deserializeAws_restJson1CreatePropertyData
 */
const de_CreatePropertyData = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'address': (_) => de_AddressInput(_, context),
        'amenities': (_) => de_StringList(_, context),
        'availability': (_) => de_PropertyAvailabilityInput(_, context),
        'description': smithy_client_1.expectString,
        'landlordId': smithy_client_1.expectString,
        'media': (_) => de_PropertyMediaInput(_, context),
        'pricing': (_) => de_PropertyPricingInput(_, context),
        'propertyType': smithy_client_1.expectString,
        'specifications': (_) => de_PropertySpecificationsInput(_, context),
        'title': smithy_client_1.expectString,
    });
};
/**
 * deserializeAws_restJson1ManagementPermissions
 */
const de_ManagementPermissions = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'collectRent': smithy_client_1.expectBoolean,
        'handleMaintenance': smithy_client_1.expectBoolean,
        'screenTenants': smithy_client_1.expectBoolean,
        'updateListing': smithy_client_1.expectBoolean,
    });
};
/**
 * deserializeAws_restJson1MediaUploadInput
 */
const de_MediaUploadInput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'fileName': smithy_client_1.expectString,
        'mediaType': smithy_client_1.expectString,
        'userId': smithy_client_1.expectString,
    });
};
/**
 * deserializeAws_restJson1NotificationSettings
 */
const de_NotificationSettings = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'email': smithy_client_1.expectBoolean,
        'push': smithy_client_1.expectBoolean,
        'sms': smithy_client_1.expectBoolean,
    });
};
/**
 * deserializeAws_restJson1PropertyAvailabilityInput
 */
const de_PropertyAvailabilityInput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'availableFrom': (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        'isAvailable': smithy_client_1.expectBoolean,
        'leaseDuration': smithy_client_1.expectInt32,
    });
};
/**
 * deserializeAws_restJson1PropertyManagerAssignment
 */
const de_PropertyManagerAssignment = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'commissionRate': smithy_client_1.limitedParseDouble,
        'managerId': smithy_client_1.expectString,
        'permissions': (_) => de_ManagementPermissions(_, context),
    });
};
/**
 * deserializeAws_restJson1PropertyMediaInput
 */
const de_PropertyMediaInput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'images': (_) => de_StringList(_, context),
        'videos': (_) => de_StringList(_, context),
        'virtualTour': smithy_client_1.expectString,
    });
};
/**
 * deserializeAws_restJson1PropertyPricingInput
 */
const de_PropertyPricingInput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'deposit': smithy_client_1.expectLong,
        'monthlyRent': smithy_client_1.expectLong,
        'utilities': smithy_client_1.expectString,
        'utilityCost': smithy_client_1.expectLong,
    });
};
/**
 * deserializeAws_restJson1PropertySpecificationsInput
 */
const de_PropertySpecificationsInput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'bathrooms': smithy_client_1.expectInt32,
        'bedrooms': smithy_client_1.expectInt32,
        'furnished': smithy_client_1.expectBoolean,
        'parking': smithy_client_1.expectBoolean,
        'squareMeters': smithy_client_1.expectInt32,
    });
};
/**
 * deserializeAws_restJson1PropertyStatusUpdate
 */
const de_PropertyStatusUpdate = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'status': smithy_client_1.expectString,
    });
};
/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output, context) => {
    const retVal = (output || []).map((entry) => {
        if (entry === null) {
            throw new TypeError('All elements of the non-sparse list "com.nest.rental#StringList" must be non-null.');
        }
        return (0, smithy_client_1.expectString)(entry);
    });
    return retVal;
};
/**
 * deserializeAws_restJson1UpdatePropertyData
 */
const de_UpdatePropertyData = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'address': (_) => de_AddressInput(_, context),
        'amenities': (_) => de_StringList(_, context),
        'availability': (_) => de_PropertyAvailabilityInput(_, context),
        'description': smithy_client_1.expectString,
        'media': (_) => de_PropertyMediaInput(_, context),
        'pricing': (_) => de_PropertyPricingInput(_, context),
        'specifications': (_) => de_PropertySpecificationsInput(_, context),
        'status': smithy_client_1.expectString,
        'title': smithy_client_1.expectString,
    });
};
/**
 * deserializeAws_restJson1UpdateUserData
 */
const de_UpdateUserData = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'firstName': smithy_client_1.expectString,
        'lastName': smithy_client_1.expectString,
        'phoneNumber': smithy_client_1.expectString,
        'preferences': (_) => de_UserPreferences(_, context),
        'profileImage': smithy_client_1.expectString,
    });
};
/**
 * deserializeAws_restJson1UserPreferences
 */
const de_UserPreferences = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        'currency': smithy_client_1.expectString,
        'language': smithy_client_1.expectString,
        'notifications': (_) => de_NotificationSettings(_, context),
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then(body => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
        value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
