import { CreatePropertyRequest, CreatePropertyResponse, InternalServerError, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type CreateProperty<Context> = __Operation<CreatePropertyServerInput, CreatePropertyServerOutput, Context>;
export interface CreatePropertyServerInput extends CreatePropertyRequest {
}
export declare namespace CreatePropertyServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof CreatePropertyRequest.validate>[0]) => __ValidationFailure[];
}
export interface CreatePropertyServerOutput extends CreatePropertyResponse {
}
export type CreatePropertyErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class CreatePropertySerializer implements __OperationSerializer<RentalPlatformService<any>, "CreateProperty", CreatePropertyErrors> {
    serialize: (input: CreatePropertyServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<CreatePropertyServerInput>;
    isOperationError(error: any): error is CreatePropertyErrors;
    serializeError(error: CreatePropertyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getCreatePropertyHandler: <Context>(operation: __Operation<CreatePropertyServerInput, CreatePropertyServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class CreatePropertyHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a CreateProperty handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for CreateProperty
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for CreateProperty that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<CreatePropertyServerInput, CreatePropertyServerOutput, Context>, mux: __Mux<"RentalPlatform", "CreateProperty">, serializer: __OperationSerializer<RentalPlatformService<Context>, "CreateProperty", CreatePropertyErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"CreateProperty">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
