import { GetUserInput, GetUserOutput, InternalServerError, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type GetUser<Context> = __Operation<GetUserServerInput, GetUserServerOutput, Context>;
export interface GetUserServerInput extends GetUserInput {
}
export declare namespace GetUserServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof GetUserInput.validate>[0]) => __ValidationFailure[];
}
export interface GetUserServerOutput extends GetUserOutput {
}
export type GetUserErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class GetUserSerializer implements __OperationSerializer<RentalPlatformService<any>, "GetUser", GetUserErrors> {
    serialize: (input: GetUserServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<GetUserServerInput>;
    isOperationError(error: any): error is GetUserErrors;
    serializeError(error: GetUserErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getGetUserHandler: <Context>(operation: __Operation<GetUserServerInput, GetUserServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class GetUserHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a GetUser handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for GetUser
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for GetUser that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<GetUserServerInput, GetUserServerOutput, Context>, mux: __Mux<"RentalPlatform", "GetUser">, serializer: __OperationSerializer<RentalPlatformService<Context>, "GetUser", GetUserErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"GetUser">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
