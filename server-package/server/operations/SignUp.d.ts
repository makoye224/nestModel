import { InternalServerError, RentalValidationException, SignUpInput, SignUpOutput, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type SignUp<Context> = __Operation<SignUpServerInput, SignUpServerOutput, Context>;
export interface SignUpServerInput extends SignUpInput {
}
export declare namespace SignUpServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof SignUpInput.validate>[0]) => __ValidationFailure[];
}
export interface SignUpServerOutput extends SignUpOutput {
}
export type SignUpErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException;
export declare class SignUpSerializer implements __OperationSerializer<RentalPlatformService<any>, "SignUp", SignUpErrors> {
    serialize: (input: SignUpServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<SignUpServerInput>;
    isOperationError(error: any): error is SignUpErrors;
    serializeError(error: SignUpErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getSignUpHandler: <Context>(operation: __Operation<SignUpServerInput, SignUpServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class SignUpHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a SignUp handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for SignUp
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for SignUp that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<SignUpServerInput, SignUpServerOutput, Context>, mux: __Mux<"RentalPlatform", "SignUp">, serializer: __OperationSerializer<RentalPlatformService<Context>, "SignUp", SignUpErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"SignUp">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
