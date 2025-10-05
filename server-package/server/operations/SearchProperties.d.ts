import { InternalServerError, RentalValidationException, SearchPropertiesRequest, SearchPropertiesResponse, UnauthorizedException, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type SearchProperties<Context> = __Operation<SearchPropertiesServerInput, SearchPropertiesServerOutput, Context>;
export interface SearchPropertiesServerInput extends SearchPropertiesRequest {
}
export declare namespace SearchPropertiesServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof SearchPropertiesRequest.validate>[0]) => __ValidationFailure[];
}
export interface SearchPropertiesServerOutput extends SearchPropertiesResponse {
}
export type SearchPropertiesErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException;
export declare class SearchPropertiesSerializer implements __OperationSerializer<RentalPlatformService<any>, "SearchProperties", SearchPropertiesErrors> {
    serialize: (input: SearchPropertiesServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<SearchPropertiesServerInput>;
    isOperationError(error: any): error is SearchPropertiesErrors;
    serializeError(error: SearchPropertiesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getSearchPropertiesHandler: <Context>(operation: __Operation<SearchPropertiesServerInput, SearchPropertiesServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class SearchPropertiesHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a SearchProperties handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for SearchProperties
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for SearchProperties that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<SearchPropertiesServerInput, SearchPropertiesServerOutput, Context>, mux: __Mux<"RentalPlatform", "SearchProperties">, serializer: __OperationSerializer<RentalPlatformService<Context>, "SearchProperties", SearchPropertiesErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"SearchProperties">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
