import { DeletePropertyRequest, DeletePropertyResponse, InternalServerError, PropertyNotFoundException, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type DeleteProperty<Context> = __Operation<DeletePropertyServerInput, DeletePropertyServerOutput, Context>;
export interface DeletePropertyServerInput extends DeletePropertyRequest {
}
export declare namespace DeletePropertyServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof DeletePropertyRequest.validate>[0]) => __ValidationFailure[];
}
export interface DeletePropertyServerOutput extends DeletePropertyResponse {
}
export type DeletePropertyErrors = ValidationException | PropertyNotFoundException | UnauthorizedException | InternalServerError | RentalValidationException;
export declare class DeletePropertySerializer implements __OperationSerializer<RentalPlatformService<any>, "DeleteProperty", DeletePropertyErrors> {
    serialize: (input: DeletePropertyServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<DeletePropertyServerInput>;
    isOperationError(error: any): error is DeletePropertyErrors;
    serializeError(error: DeletePropertyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getDeletePropertyHandler: <Context>(operation: __Operation<DeletePropertyServerInput, DeletePropertyServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class DeletePropertyHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a DeleteProperty handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for DeleteProperty
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for DeleteProperty that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<DeletePropertyServerInput, DeletePropertyServerOutput, Context>, mux: __Mux<"RentalPlatform", "DeleteProperty">, serializer: __OperationSerializer<RentalPlatformService<Context>, "DeleteProperty", DeletePropertyErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"DeleteProperty">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
