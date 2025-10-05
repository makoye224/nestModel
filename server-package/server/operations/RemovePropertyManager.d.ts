import { InternalServerError, PropertyNotFoundException, RemovePropertyManagerRequest, RemovePropertyManagerResponse, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type RemovePropertyManager<Context> = __Operation<RemovePropertyManagerServerInput, RemovePropertyManagerServerOutput, Context>;
export interface RemovePropertyManagerServerInput extends RemovePropertyManagerRequest {
}
export declare namespace RemovePropertyManagerServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof RemovePropertyManagerRequest.validate>[0]) => __ValidationFailure[];
}
export interface RemovePropertyManagerServerOutput extends RemovePropertyManagerResponse {
}
export type RemovePropertyManagerErrors = ValidationException | RentalValidationException | PropertyNotFoundException | UnauthorizedException | InternalServerError;
export declare class RemovePropertyManagerSerializer implements __OperationSerializer<RentalPlatformService<any>, "RemovePropertyManager", RemovePropertyManagerErrors> {
    serialize: (input: RemovePropertyManagerServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<RemovePropertyManagerServerInput>;
    isOperationError(error: any): error is RemovePropertyManagerErrors;
    serializeError(error: RemovePropertyManagerErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getRemovePropertyManagerHandler: <Context>(operation: __Operation<RemovePropertyManagerServerInput, RemovePropertyManagerServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class RemovePropertyManagerHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a RemovePropertyManager handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for RemovePropertyManager
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for RemovePropertyManager that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<RemovePropertyManagerServerInput, RemovePropertyManagerServerOutput, Context>, mux: __Mux<"RentalPlatform", "RemovePropertyManager">, serializer: __OperationSerializer<RentalPlatformService<Context>, "RemovePropertyManager", RemovePropertyManagerErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"RemovePropertyManager">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
