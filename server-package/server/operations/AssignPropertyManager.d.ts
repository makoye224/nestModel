import { AssignPropertyManagerRequest, AssignPropertyManagerResponse, InternalServerError, PropertyNotFoundException, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type AssignPropertyManager<Context> = __Operation<AssignPropertyManagerServerInput, AssignPropertyManagerServerOutput, Context>;
export interface AssignPropertyManagerServerInput extends AssignPropertyManagerRequest {
}
export declare namespace AssignPropertyManagerServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof AssignPropertyManagerRequest.validate>[0]) => __ValidationFailure[];
}
export interface AssignPropertyManagerServerOutput extends AssignPropertyManagerResponse {
}
export type AssignPropertyManagerErrors = ValidationException | PropertyNotFoundException | UnauthorizedException | RentalValidationException | InternalServerError;
export declare class AssignPropertyManagerSerializer implements __OperationSerializer<RentalPlatformService<any>, "AssignPropertyManager", AssignPropertyManagerErrors> {
    serialize: (input: AssignPropertyManagerServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<AssignPropertyManagerServerInput>;
    isOperationError(error: any): error is AssignPropertyManagerErrors;
    serializeError(error: AssignPropertyManagerErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getAssignPropertyManagerHandler: <Context>(operation: __Operation<AssignPropertyManagerServerInput, AssignPropertyManagerServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class AssignPropertyManagerHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a AssignPropertyManager handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for AssignPropertyManager
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for AssignPropertyManager that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<AssignPropertyManagerServerInput, AssignPropertyManagerServerOutput, Context>, mux: __Mux<"RentalPlatform", "AssignPropertyManager">, serializer: __OperationSerializer<RentalPlatformService<Context>, "AssignPropertyManager", AssignPropertyManagerErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"AssignPropertyManager">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
