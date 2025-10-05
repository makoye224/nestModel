import { InternalServerError, RentalValidationException, UnauthorizedException, ValidationException, VerifyEmailInput, VerifyEmailOutput } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type VerifyEmail<Context> = __Operation<VerifyEmailServerInput, VerifyEmailServerOutput, Context>;
export interface VerifyEmailServerInput extends VerifyEmailInput {
}
export declare namespace VerifyEmailServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof VerifyEmailInput.validate>[0]) => __ValidationFailure[];
}
export interface VerifyEmailServerOutput extends VerifyEmailOutput {
}
export type VerifyEmailErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException;
export declare class VerifyEmailSerializer implements __OperationSerializer<RentalPlatformService<any>, "VerifyEmail", VerifyEmailErrors> {
    serialize: (input: VerifyEmailServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<VerifyEmailServerInput>;
    isOperationError(error: any): error is VerifyEmailErrors;
    serializeError(error: VerifyEmailErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getVerifyEmailHandler: <Context>(operation: __Operation<VerifyEmailServerInput, VerifyEmailServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class VerifyEmailHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a VerifyEmail handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for VerifyEmail
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for VerifyEmail that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<VerifyEmailServerInput, VerifyEmailServerOutput, Context>, mux: __Mux<"RentalPlatform", "VerifyEmail">, serializer: __OperationSerializer<RentalPlatformService<Context>, "VerifyEmail", VerifyEmailErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"VerifyEmail">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
