import { BecomeLandlordOutput, BecomeLandlordRequest, InternalServerError, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type BecomeLandlord<Context> = __Operation<BecomeLandlordServerInput, BecomeLandlordServerOutput, Context>;
export interface BecomeLandlordServerInput extends BecomeLandlordRequest {
}
export declare namespace BecomeLandlordServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof BecomeLandlordRequest.validate>[0]) => __ValidationFailure[];
}
export interface BecomeLandlordServerOutput extends BecomeLandlordOutput {
}
export type BecomeLandlordErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class BecomeLandlordSerializer implements __OperationSerializer<RentalPlatformService<any>, "BecomeLandlord", BecomeLandlordErrors> {
    serialize: (input: BecomeLandlordServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<BecomeLandlordServerInput>;
    isOperationError(error: any): error is BecomeLandlordErrors;
    serializeError(error: BecomeLandlordErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getBecomeLandlordHandler: <Context>(operation: __Operation<BecomeLandlordServerInput, BecomeLandlordServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class BecomeLandlordHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a BecomeLandlord handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for BecomeLandlord
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for BecomeLandlord that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<BecomeLandlordServerInput, BecomeLandlordServerOutput, Context>, mux: __Mux<"RentalPlatform", "BecomeLandlord">, serializer: __OperationSerializer<RentalPlatformService<Context>, "BecomeLandlord", BecomeLandlordErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"BecomeLandlord">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
