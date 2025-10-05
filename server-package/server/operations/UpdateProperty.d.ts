import { InternalServerError, PropertyNotFoundException, RentalValidationException, UnauthorizedException, UpdatePropertyRequest, UpdatePropertyResponse, ValidationException } from "../../models/models_0";
import { RentalPlatformService } from "../RentalPlatformService";
import { ServerSerdeContext, Mux as __Mux, Operation as __Operation, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type UpdateProperty<Context> = __Operation<UpdatePropertyServerInput, UpdatePropertyServerOutput, Context>;
export interface UpdatePropertyServerInput extends UpdatePropertyRequest {
}
export declare namespace UpdatePropertyServerInput {
    /**
     * @internal
     */
    const validate: (obj: Parameters<typeof UpdatePropertyRequest.validate>[0]) => __ValidationFailure[];
}
export interface UpdatePropertyServerOutput extends UpdatePropertyResponse {
}
export type UpdatePropertyErrors = ValidationException | PropertyNotFoundException | RentalValidationException | UnauthorizedException | InternalServerError;
export declare class UpdatePropertySerializer implements __OperationSerializer<RentalPlatformService<any>, "UpdateProperty", UpdatePropertyErrors> {
    serialize: (input: UpdatePropertyServerOutput, ctx: ServerSerdeContext) => Promise<__HttpResponse>;
    deserialize: (output: __HttpRequest, context: import("@smithy/types").SerdeContext) => Promise<UpdatePropertyServerInput>;
    isOperationError(error: any): error is UpdatePropertyErrors;
    serializeError(error: UpdatePropertyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse>;
}
export declare const getUpdatePropertyHandler: <Context>(operation: __Operation<UpdatePropertyServerInput, UpdatePropertyServerOutput, Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
export declare class UpdatePropertyHandler<Context> implements __ServiceHandler<Context> {
    private readonly operation;
    private readonly mux;
    private readonly serializer;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a UpdateProperty handler.
     * @param operation The {@link __Operation} implementation that supplies the business logic for UpdateProperty
     * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializer An {@link __OperationSerializer} for UpdateProperty that
     *                   handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(operation: __Operation<UpdatePropertyServerInput, UpdatePropertyServerOutput, Context>, mux: __Mux<"RentalPlatform", "UpdateProperty">, serializer: __OperationSerializer<RentalPlatformService<Context>, "UpdateProperty", UpdatePropertyErrors>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<"UpdateProperty">);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
