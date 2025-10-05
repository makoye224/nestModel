import { GetPropertiesByLocationRequest, InternalServerError, ListPropertiesResponse, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type GetPropertiesByLocation<Context> = __Operation<GetPropertiesByLocationServerInput, GetPropertiesByLocationServerOutput, Context>;
export interface GetPropertiesByLocationServerInput extends GetPropertiesByLocationRequest {
}
export declare namespace GetPropertiesByLocationServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof GetPropertiesByLocationRequest.validate>[0]) => __ValidationFailure[];
}
export interface GetPropertiesByLocationServerOutput extends ListPropertiesResponse {
}
export type GetPropertiesByLocationErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException;
export declare class GetPropertiesByLocationSerializer implements __OperationSerializer<RentalPlatformService<any>, "GetPropertiesByLocation", GetPropertiesByLocationErrors> {
    serialize: (input: GetPropertiesByLocationServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<GetPropertiesByLocationServerInput>;
    isOperationError(error: any): error is GetPropertiesByLocationErrors;
    serializeError(error: GetPropertiesByLocationErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getGetPropertiesByLocationHandler: <Context>(operation: __Operation<GetPropertiesByLocationServerInput, GetPropertiesByLocationServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class GetPropertiesByLocationHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a GetPropertiesByLocation handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for GetPropertiesByLocation
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for GetPropertiesByLocation that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<GetPropertiesByLocationServerInput, GetPropertiesByLocationServerOutput, Context>, mux: __Mux<"RentalPlatform", "GetPropertiesByLocation">, serializer: __OperationSerializer<RentalPlatformService<Context>, "GetPropertiesByLocation", GetPropertiesByLocationErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"GetPropertiesByLocation">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
