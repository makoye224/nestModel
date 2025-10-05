import { GetPropertyRequest, GetPropertyResponse, InternalServerError, PropertyNotFoundException, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type GetProperty<Context> = __Operation<GetPropertyServerInput, GetPropertyServerOutput, Context>;
export interface GetPropertyServerInput extends GetPropertyRequest {
}
export declare namespace GetPropertyServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof GetPropertyRequest.validate>[0]) => __ValidationFailure[];
}
export interface GetPropertyServerOutput extends GetPropertyResponse {
}
export type GetPropertyErrors = ValidationException | RentalValidationException | PropertyNotFoundException | InternalServerError | UnauthorizedException;
export declare class GetPropertySerializer implements __OperationSerializer<RentalPlatformService<any>, "GetProperty", GetPropertyErrors> {
    serialize: (input: GetPropertyServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<GetPropertyServerInput>;
    isOperationError(error: any): error is GetPropertyErrors;
    serializeError(error: GetPropertyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getGetPropertyHandler: <Context>(operation: __Operation<GetPropertyServerInput, GetPropertyServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class GetPropertyHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a GetProperty handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for GetProperty
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for GetProperty that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<GetPropertyServerInput, GetPropertyServerOutput, Context>, mux: __Mux<"RentalPlatform", "GetProperty">, serializer: __OperationSerializer<RentalPlatformService<Context>, "GetProperty", GetPropertyErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"GetProperty">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
