import { ForgotPasswordInput, ForgotPasswordOutput, InternalServerError, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type ForgotPassword<Context> = __Operation<ForgotPasswordServerInput, ForgotPasswordServerOutput, Context>;
export interface ForgotPasswordServerInput extends ForgotPasswordInput {
}
export declare namespace ForgotPasswordServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof ForgotPasswordInput.validate>[0]) => __ValidationFailure[];
}
export interface ForgotPasswordServerOutput extends ForgotPasswordOutput {
}
export type ForgotPasswordErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException;
export declare class ForgotPasswordSerializer implements __OperationSerializer<RentalPlatformService<any>, "ForgotPassword", ForgotPasswordErrors> {
    serialize: (input: ForgotPasswordServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<ForgotPasswordServerInput>;
    isOperationError(error: any): error is ForgotPasswordErrors;
    serializeError(error: ForgotPasswordErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getForgotPasswordHandler: <Context>(operation: __Operation<ForgotPasswordServerInput, ForgotPasswordServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class ForgotPasswordHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a ForgotPassword handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for ForgotPassword
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for ForgotPassword that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<ForgotPasswordServerInput, ForgotPasswordServerOutput, Context>, mux: __Mux<"RentalPlatform", "ForgotPassword">, serializer: __OperationSerializer<RentalPlatformService<Context>, "ForgotPassword", ForgotPasswordErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"ForgotPassword">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
