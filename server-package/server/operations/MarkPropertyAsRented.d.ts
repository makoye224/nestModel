import { InternalServerError, MarkPropertyAsRentedRequest, MarkPropertyAsRentedResponse, PropertyNotFoundException, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type MarkPropertyAsRented<Context> = __Operation<MarkPropertyAsRentedServerInput, MarkPropertyAsRentedServerOutput, Context>;
export interface MarkPropertyAsRentedServerInput extends MarkPropertyAsRentedRequest {
}
export declare namespace MarkPropertyAsRentedServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof MarkPropertyAsRentedRequest.validate>[0]) => __ValidationFailure[];
}
export interface MarkPropertyAsRentedServerOutput extends MarkPropertyAsRentedResponse {
}
export type MarkPropertyAsRentedErrors = ValidationException | RentalValidationException | PropertyNotFoundException | UnauthorizedException | InternalServerError;
export declare class MarkPropertyAsRentedSerializer implements __OperationSerializer<RentalPlatformService<any>, "MarkPropertyAsRented", MarkPropertyAsRentedErrors> {
    serialize: (input: MarkPropertyAsRentedServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<MarkPropertyAsRentedServerInput>;
    isOperationError(error: any): error is MarkPropertyAsRentedErrors;
    serializeError(error: MarkPropertyAsRentedErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getMarkPropertyAsRentedHandler: <Context>(operation: __Operation<MarkPropertyAsRentedServerInput, MarkPropertyAsRentedServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class MarkPropertyAsRentedHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a MarkPropertyAsRented handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for MarkPropertyAsRented
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for MarkPropertyAsRented that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<MarkPropertyAsRentedServerInput, MarkPropertyAsRentedServerOutput, Context>, mux: __Mux<"RentalPlatform", "MarkPropertyAsRented">, serializer: __OperationSerializer<RentalPlatformService<Context>, "MarkPropertyAsRented", MarkPropertyAsRentedErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"MarkPropertyAsRented">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
