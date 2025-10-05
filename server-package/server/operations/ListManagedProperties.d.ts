import { InternalServerError, ListManagedPropertiesRequest, ListPropertiesResponse, RentalValidationException, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type ListManagedProperties<Context> = __Operation<ListManagedPropertiesServerInput, ListManagedPropertiesServerOutput, Context>;
export interface ListManagedPropertiesServerInput extends ListManagedPropertiesRequest {
}
export declare namespace ListManagedPropertiesServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof ListManagedPropertiesRequest.validate>[0]) => __ValidationFailure[];
}
export interface ListManagedPropertiesServerOutput extends ListPropertiesResponse {
}
export type ListManagedPropertiesErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class ListManagedPropertiesSerializer implements __OperationSerializer<RentalPlatformService<any>, "ListManagedProperties", ListManagedPropertiesErrors> {
    serialize: (input: ListManagedPropertiesServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<ListManagedPropertiesServerInput>;
    isOperationError(error: any): error is ListManagedPropertiesErrors;
    serializeError(error: ListManagedPropertiesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getListManagedPropertiesHandler: <Context>(operation: __Operation<ListManagedPropertiesServerInput, ListManagedPropertiesServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class ListManagedPropertiesHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a ListManagedProperties handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for ListManagedProperties
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for ListManagedProperties that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<ListManagedPropertiesServerInput, ListManagedPropertiesServerOutput, Context>, mux: __Mux<"RentalPlatform", "ListManagedProperties">, serializer: __OperationSerializer<RentalPlatformService<Context>, "ListManagedProperties", ListManagedPropertiesErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"ListManagedProperties">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
