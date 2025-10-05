import { GetNearbyPropertiesRequest, InternalServerError, ListPropertiesResponse, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type GetNearbyProperties<Context> = __Operation<GetNearbyPropertiesServerInput, GetNearbyPropertiesServerOutput, Context>;
export interface GetNearbyPropertiesServerInput extends GetNearbyPropertiesRequest {
}
export declare namespace GetNearbyPropertiesServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof GetNearbyPropertiesRequest.validate>[0]) => __ValidationFailure[];
}
export interface GetNearbyPropertiesServerOutput extends ListPropertiesResponse {
}
export type GetNearbyPropertiesErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException;
export declare class GetNearbyPropertiesSerializer implements __OperationSerializer<RentalPlatformService<any>, "GetNearbyProperties", GetNearbyPropertiesErrors> {
    serialize: (input: GetNearbyPropertiesServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<GetNearbyPropertiesServerInput>;
    isOperationError(error: any): error is GetNearbyPropertiesErrors;
    serializeError(error: GetNearbyPropertiesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getGetNearbyPropertiesHandler: <Context>(operation: __Operation<GetNearbyPropertiesServerInput, GetNearbyPropertiesServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class GetNearbyPropertiesHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a GetNearbyProperties handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for GetNearbyProperties
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for GetNearbyProperties that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<GetNearbyPropertiesServerInput, GetNearbyPropertiesServerOutput, Context>, mux: __Mux<"RentalPlatform", "GetNearbyProperties">, serializer: __OperationSerializer<RentalPlatformService<Context>, "GetNearbyProperties", GetNearbyPropertiesErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"GetNearbyProperties">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
