import { InternalServerError, RentalValidationException, UnauthorizedException, UpdateUserOutput, UpdateUserRequest, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type UpdateUser<Context> = __Operation<UpdateUserServerInput, UpdateUserServerOutput, Context>;
export interface UpdateUserServerInput extends UpdateUserRequest {
}
export declare namespace UpdateUserServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof UpdateUserRequest.validate>[0]) => __ValidationFailure[];
}
export interface UpdateUserServerOutput extends UpdateUserOutput {
}
export type UpdateUserErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class UpdateUserSerializer implements __OperationSerializer<RentalPlatformService<any>, "UpdateUser", UpdateUserErrors> {
    serialize: (input: UpdateUserServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<UpdateUserServerInput>;
    isOperationError(error: any): error is UpdateUserErrors;
    serializeError(error: UpdateUserErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getUpdateUserHandler: <Context>(operation: __Operation<UpdateUserServerInput, UpdateUserServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class UpdateUserHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a UpdateUser handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for UpdateUser
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for UpdateUser that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<UpdateUserServerInput, UpdateUserServerOutput, Context>, mux: __Mux<"RentalPlatform", "UpdateUser">, serializer: __OperationSerializer<RentalPlatformService<Context>, "UpdateUser", UpdateUserErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"UpdateUser">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
