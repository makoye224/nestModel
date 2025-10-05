import { InternalServerError, RentalValidationException, ReviewApplicationRequest, ReviewLandlordApplicationOutput, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type ReviewLandlordApplication<Context> = __Operation<ReviewLandlordApplicationServerInput, ReviewLandlordApplicationServerOutput, Context>;
export interface ReviewLandlordApplicationServerInput extends ReviewApplicationRequest {
}
export declare namespace ReviewLandlordApplicationServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof ReviewApplicationRequest.validate>[0]) => __ValidationFailure[];
}
export interface ReviewLandlordApplicationServerOutput extends ReviewLandlordApplicationOutput {
}
export type ReviewLandlordApplicationErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class ReviewLandlordApplicationSerializer implements __OperationSerializer<RentalPlatformService<any>, "ReviewLandlordApplication", ReviewLandlordApplicationErrors> {
    serialize: (input: ReviewLandlordApplicationServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<ReviewLandlordApplicationServerInput>;
    isOperationError(error: any): error is ReviewLandlordApplicationErrors;
    serializeError(error: ReviewLandlordApplicationErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getReviewLandlordApplicationHandler: <Context>(operation: __Operation<ReviewLandlordApplicationServerInput, ReviewLandlordApplicationServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class ReviewLandlordApplicationHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a ReviewLandlordApplication handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for ReviewLandlordApplication
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for ReviewLandlordApplication that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<ReviewLandlordApplicationServerInput, ReviewLandlordApplicationServerOutput, Context>, mux: __Mux<"RentalPlatform", "ReviewLandlordApplication">, serializer: __OperationSerializer<RentalPlatformService<Context>, "ReviewLandlordApplication", ReviewLandlordApplicationErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"ReviewLandlordApplication">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
