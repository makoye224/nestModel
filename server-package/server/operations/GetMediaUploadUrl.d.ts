import { GetMediaUploadUrlRequest, GetMediaUploadUrlResponse, InternalServerError, PropertyNotFoundException, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type GetMediaUploadUrl<Context> = __Operation<GetMediaUploadUrlServerInput, GetMediaUploadUrlServerOutput, Context>;
export interface GetMediaUploadUrlServerInput extends GetMediaUploadUrlRequest {
}
export declare namespace GetMediaUploadUrlServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof GetMediaUploadUrlRequest.validate>[0]) => __ValidationFailure[];
}
export interface GetMediaUploadUrlServerOutput extends GetMediaUploadUrlResponse {
}
export type GetMediaUploadUrlErrors = ValidationException | PropertyNotFoundException | UnauthorizedException | RentalValidationException | InternalServerError;
export declare class GetMediaUploadUrlSerializer implements __OperationSerializer<RentalPlatformService<any>, "GetMediaUploadUrl", GetMediaUploadUrlErrors> {
    serialize: (input: GetMediaUploadUrlServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<GetMediaUploadUrlServerInput>;
    isOperationError(error: any): error is GetMediaUploadUrlErrors;
    serializeError(error: GetMediaUploadUrlErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getGetMediaUploadUrlHandler: <Context>(operation: __Operation<GetMediaUploadUrlServerInput, GetMediaUploadUrlServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class GetMediaUploadUrlHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a GetMediaUploadUrl handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for GetMediaUploadUrl
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for GetMediaUploadUrl that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<GetMediaUploadUrlServerInput, GetMediaUploadUrlServerOutput, Context>, mux: __Mux<"RentalPlatform", "GetMediaUploadUrl">, serializer: __OperationSerializer<RentalPlatformService<Context>, "GetMediaUploadUrl", GetMediaUploadUrlErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"GetMediaUploadUrl">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
