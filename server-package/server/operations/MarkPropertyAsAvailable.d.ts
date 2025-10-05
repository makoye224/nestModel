import { InternalServerError, MarkPropertyAsAvailableRequest, MarkPropertyAsAvailableResponse, PropertyNotFoundException, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type MarkPropertyAsAvailable<Context> = __Operation<MarkPropertyAsAvailableServerInput, MarkPropertyAsAvailableServerOutput, Context>;
export interface MarkPropertyAsAvailableServerInput extends MarkPropertyAsAvailableRequest {
}
export declare namespace MarkPropertyAsAvailableServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof MarkPropertyAsAvailableRequest.validate>[0]) => __ValidationFailure[];
}
export interface MarkPropertyAsAvailableServerOutput extends MarkPropertyAsAvailableResponse {
}
export type MarkPropertyAsAvailableErrors = ValidationException | RentalValidationException | PropertyNotFoundException | UnauthorizedException | InternalServerError;
export declare class MarkPropertyAsAvailableSerializer implements __OperationSerializer<RentalPlatformService<any>, "MarkPropertyAsAvailable", MarkPropertyAsAvailableErrors> {
    serialize: (input: MarkPropertyAsAvailableServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<MarkPropertyAsAvailableServerInput>;
    isOperationError(error: any): error is MarkPropertyAsAvailableErrors;
    serializeError(error: MarkPropertyAsAvailableErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getMarkPropertyAsAvailableHandler: <Context>(operation: __Operation<MarkPropertyAsAvailableServerInput, MarkPropertyAsAvailableServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class MarkPropertyAsAvailableHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a MarkPropertyAsAvailable handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for MarkPropertyAsAvailable
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for MarkPropertyAsAvailable that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<MarkPropertyAsAvailableServerInput, MarkPropertyAsAvailableServerOutput, Context>, mux: __Mux<"RentalPlatform", "MarkPropertyAsAvailable">, serializer: __OperationSerializer<RentalPlatformService<Context>, "MarkPropertyAsAvailable", MarkPropertyAsAvailableErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"MarkPropertyAsAvailable">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
