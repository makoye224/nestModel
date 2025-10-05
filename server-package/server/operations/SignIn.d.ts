import { InternalServerError, RentalValidationException, SignInInput, SignInOutput, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type SignIn<Context> = __Operation<SignInServerInput, SignInServerOutput, Context>;
export interface SignInServerInput extends SignInInput {
}
export declare namespace SignInServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof SignInInput.validate>[0]) => __ValidationFailure[];
}
export interface SignInServerOutput extends SignInOutput {
}
export type SignInErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class SignInSerializer implements __OperationSerializer<RentalPlatformService<any>, "SignIn", SignInErrors> {
    serialize: (input: SignInServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<SignInServerInput>;
    isOperationError(error: any): error is SignInErrors;
    serializeError(error: SignInErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getSignInHandler: <Context>(operation: __Operation<SignInServerInput, SignInServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class SignInHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a SignIn handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for SignIn
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for SignIn that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<SignInServerInput, SignInServerOutput, Context>, mux: __Mux<"RentalPlatform", "SignIn">, serializer: __OperationSerializer<RentalPlatformService<Context>, "SignIn", SignInErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"SignIn">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
