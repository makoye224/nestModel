import { InternalServerError, RentalValidationException, ResetPasswordInput, ResetPasswordOutput, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type ResetPassword<Context> = __Operation<ResetPasswordServerInput, ResetPasswordServerOutput, Context>;
export interface ResetPasswordServerInput extends ResetPasswordInput {
}
export declare namespace ResetPasswordServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof ResetPasswordInput.validate>[0]) => __ValidationFailure[];
}
export interface ResetPasswordServerOutput extends ResetPasswordOutput {
}
export type ResetPasswordErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException;
export declare class ResetPasswordSerializer implements __OperationSerializer<RentalPlatformService<any>, "ResetPassword", ResetPasswordErrors> {
    serialize: (input: ResetPasswordServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<ResetPasswordServerInput>;
    isOperationError(error: any): error is ResetPasswordErrors;
    serializeError(error: ResetPasswordErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getResetPasswordHandler: <Context>(operation: __Operation<ResetPasswordServerInput, ResetPasswordServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class ResetPasswordHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a ResetPassword handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for ResetPassword
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for ResetPassword that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<ResetPasswordServerInput, ResetPasswordServerOutput, Context>, mux: __Mux<"RentalPlatform", "ResetPassword">, serializer: __OperationSerializer<RentalPlatformService<Context>, "ResetPassword", ResetPasswordErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"ResetPassword">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
