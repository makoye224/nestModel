import { InternalServerError, ListPropertiesRequest, ListPropertiesResponse, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type ListProperties<Context> = __Operation<ListPropertiesServerInput, ListPropertiesServerOutput, Context>;
export interface ListPropertiesServerInput extends ListPropertiesRequest {
}
export declare namespace ListPropertiesServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof ListPropertiesRequest.validate>[0]) => __ValidationFailure[];
}
export interface ListPropertiesServerOutput extends ListPropertiesResponse {
}
export type ListPropertiesErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException;
export declare class ListPropertiesSerializer implements __OperationSerializer<RentalPlatformService<any>, "ListProperties", ListPropertiesErrors> {
    serialize: (input: ListPropertiesServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<ListPropertiesServerInput>;
    isOperationError(error: any): error is ListPropertiesErrors;
    serializeError(error: ListPropertiesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getListPropertiesHandler: <Context>(operation: __Operation<ListPropertiesServerInput, ListPropertiesServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class ListPropertiesHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a ListProperties handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for ListProperties
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for ListProperties that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<ListPropertiesServerInput, ListPropertiesServerOutput, Context>, mux: __Mux<"RentalPlatform", "ListProperties">, serializer: __OperationSerializer<RentalPlatformService<Context>, "ListProperties", ListPropertiesErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"ListProperties">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
