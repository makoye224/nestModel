import { InternalServerError, PropertyNotFoundException, RentalValidationException, UnauthorizedException, UpdatePropertyStatusRequest, UpdatePropertyStatusResponse, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type UpdatePropertyStatus<Context> = __Operation<UpdatePropertyStatusServerInput, UpdatePropertyStatusServerOutput, Context>;
export interface UpdatePropertyStatusServerInput extends UpdatePropertyStatusRequest {
}
export declare namespace UpdatePropertyStatusServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof UpdatePropertyStatusRequest.validate>[0]) => __ValidationFailure[];
}
export interface UpdatePropertyStatusServerOutput extends UpdatePropertyStatusResponse {
}
export type UpdatePropertyStatusErrors = ValidationException | PropertyNotFoundException | UnauthorizedException | RentalValidationException | InternalServerError;
export declare class UpdatePropertyStatusSerializer implements __OperationSerializer<RentalPlatformService<any>, "UpdatePropertyStatus", UpdatePropertyStatusErrors> {
    serialize: (input: UpdatePropertyStatusServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<UpdatePropertyStatusServerInput>;
    isOperationError(error: any): error is UpdatePropertyStatusErrors;
    serializeError(error: UpdatePropertyStatusErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getUpdatePropertyStatusHandler: <Context>(operation: __Operation<UpdatePropertyStatusServerInput, UpdatePropertyStatusServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class UpdatePropertyStatusHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a UpdatePropertyStatus handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for UpdatePropertyStatus
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for UpdatePropertyStatus that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<UpdatePropertyStatusServerInput, UpdatePropertyStatusServerOutput, Context>, mux: __Mux<"RentalPlatform", "UpdatePropertyStatus">, serializer: __OperationSerializer<RentalPlatformService<Context>, "UpdatePropertyStatus", UpdatePropertyStatusErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"UpdatePropertyStatus">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
