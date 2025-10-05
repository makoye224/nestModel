import { InternalServerError, ListLandlordPropertiesRequest, ListPropertiesResponse, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type ListLandlordProperties<Context> = __Operation<ListLandlordPropertiesServerInput, ListLandlordPropertiesServerOutput, Context>;
export interface ListLandlordPropertiesServerInput extends ListLandlordPropertiesRequest {
}
export declare namespace ListLandlordPropertiesServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof ListLandlordPropertiesRequest.validate>[0]) => __ValidationFailure[];
}
export interface ListLandlordPropertiesServerOutput extends ListPropertiesResponse {
}
export type ListLandlordPropertiesErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class ListLandlordPropertiesSerializer implements __OperationSerializer<RentalPlatformService<any>, "ListLandlordProperties", ListLandlordPropertiesErrors> {
    serialize: (input: ListLandlordPropertiesServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<ListLandlordPropertiesServerInput>;
    isOperationError(error: any): error is ListLandlordPropertiesErrors;
    serializeError(error: ListLandlordPropertiesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getListLandlordPropertiesHandler: <Context>(operation: __Operation<ListLandlordPropertiesServerInput, ListLandlordPropertiesServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class ListLandlordPropertiesHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a ListLandlordProperties handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for ListLandlordProperties
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for ListLandlordProperties that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<ListLandlordPropertiesServerInput, ListLandlordPropertiesServerOutput, Context>, mux: __Mux<"RentalPlatform", "ListLandlordProperties">, serializer: __OperationSerializer<RentalPlatformService<Context>, "ListLandlordProperties", ListLandlordPropertiesErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"ListLandlordProperties">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
