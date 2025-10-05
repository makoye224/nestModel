// smithy-typescript generated code
import {
  InternalServerError,
  PropertyNotFoundException,
  RentalValidationException,
  UnauthorizedException,
  UpdatePropertyRequest,
  UpdatePropertyResponse,
  ValidationException,
} from "../../models/models_0";
import {
  deserializeUpdatePropertyRequest,
  serializeFrameworkException,
  serializeInternalServerErrorError,
  serializePropertyNotFoundExceptionError,
  serializeRentalValidationExceptionError,
  serializeUnauthorizedExceptionError,
  serializeUpdatePropertyResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RentalPlatformService } from "../RentalPlatformService";
import {
  ServerSerdeContext,
  ServiceException as __BaseException,
  InternalFailureException as __InternalFailureException,
  Mux as __Mux,
  Operation as __Operation,
  OperationInput as __OperationInput,
  OperationOutput as __OperationOutput,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerSerdeContext as __ServerSerdeContext,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
  generateValidationMessage as __generateValidationMessage,
  generateValidationSummary as __generateValidationSummary,
  isFrameworkException as __isFrameworkException,
  httpbinding,
} from "@aws-smithy/server-common";
import {
  NodeHttpHandler,
  streamCollector,
} from "@smithy/node-http-handler";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  fromBase64,
  toBase64,
} from "@smithy/util-base64";
import {
  fromUtf8,
  toUtf8,
} from "@smithy/util-utf8";

export type UpdateProperty<Context> = __Operation<UpdatePropertyServerInput, UpdatePropertyServerOutput, Context>

export interface UpdatePropertyServerInput extends UpdatePropertyRequest {}
export namespace UpdatePropertyServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof UpdatePropertyRequest.validate>[0]) => __ValidationFailure[] = UpdatePropertyRequest.validate;
}
export interface UpdatePropertyServerOutput extends UpdatePropertyResponse {}

export type UpdatePropertyErrors = ValidationException | PropertyNotFoundException | RentalValidationException | UnauthorizedException | InternalServerError

export class UpdatePropertySerializer implements __OperationSerializer<RentalPlatformService<any>, "UpdateProperty", UpdatePropertyErrors> {
  serialize = serializeUpdatePropertyResponse;
  deserialize = deserializeUpdatePropertyRequest;

  isOperationError(error: any): error is UpdatePropertyErrors {
    const names: UpdatePropertyErrors['name'][] = ["ValidationException", "PropertyNotFoundException", "RentalValidationException", "UnauthorizedException", "InternalServerError"];
    return names.includes(error.name);
  };

  serializeError(error: UpdatePropertyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "ValidationException": {
        return serializeValidationExceptionError(error, ctx);
      }
      case "PropertyNotFoundException": {
        return serializePropertyNotFoundExceptionError(error, ctx);
      }
      case "RentalValidationException": {
        return serializeRentalValidationExceptionError(error, ctx);
      }
      case "UnauthorizedException": {
        return serializeUnauthorizedExceptionError(error, ctx);
      }
      case "InternalServerError": {
        return serializeInternalServerErrorError(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }

}

export const getUpdatePropertyHandler = <Context>(operation: __Operation<UpdatePropertyServerInput, UpdatePropertyServerOutput, Context>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RentalPlatform", "UpdateProperty">([
    new httpbinding.UriSpec<"RentalPlatform", "UpdateProperty">(
      'PUT',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "update" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "UpdateProperty" }),
  ]);
  const customizer: __ValidationCustomizer<"UpdateProperty"> = (ctx, failures) => {
    if (!failures) {
      return undefined;
    }
    return {
      name: "ValidationException",
      $fault: "client",
      message: __generateValidationSummary(failures),
      fieldList: failures.map(failure => ({
        path: failure.path,
        message: __generateValidationMessage(failure)
      }))
    };
  };
  return new UpdatePropertyHandler(operation, mux, new UpdatePropertySerializer(), serializeFrameworkException, customizer);
}

const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true
};
async function handle<S, O extends keyof S & string, Context>(
  request: __HttpRequest,
  context: Context,
  operationName: O,
  serializer: __OperationSerializer<S, O, __ServiceException>,
  operation: __Operation<__OperationInput<S[O]>, __OperationOutput<S[O]>, Context>,
  serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
  validationFn: (input: __OperationInput<S[O]>) => __ValidationFailure[],
  validationCustomizer: __ValidationCustomizer<O>
): Promise<__HttpResponse> {
  let input;
  try {
    input = await serializer.deserialize(request, {
      endpoint: () => Promise.resolve(request), ...serdeContextBase
    });
  } catch (error: unknown) {
    if (__isFrameworkException(error)) {
      return serializeFrameworkException(error, serdeContextBase);
    };
    return serializeFrameworkException(new __SerializationException(), serdeContextBase);
  }
  try {
    let validationFailures = validationFn(input);
    if (validationFailures && validationFailures.length > 0) {
      let validationException = validationCustomizer({ operation: operationName }, validationFailures);
      if (validationException) {
        return serializer.serializeError(validationException, serdeContextBase);
      }
    }
    let output = await operation(input, context);
    return serializer.serialize(output, serdeContextBase);
  } catch(error: unknown) {
    if (serializer.isOperationError(error)) {
      return serializer.serializeError(error, serdeContextBase);
    }
    console.log('Received an unexpected error', error);
    return serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
  }
}
export class UpdatePropertyHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<UpdatePropertyServerInput, UpdatePropertyServerOutput, Context>;
  private readonly mux: __Mux<"RentalPlatform", "UpdateProperty">;
  private readonly serializer: __OperationSerializer<RentalPlatformService<Context>, "UpdateProperty", UpdatePropertyErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"UpdateProperty">;
  /**
   * Construct a UpdateProperty handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for UpdateProperty
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for UpdateProperty that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<UpdatePropertyServerInput, UpdatePropertyServerOutput, Context>,
    mux: __Mux<"RentalPlatform", "UpdateProperty">,
    serializer: __OperationSerializer<RentalPlatformService<Context>, "UpdateProperty", UpdatePropertyErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"UpdateProperty">
  ) {
    this.operation = operation;
    this.mux = mux;
    this.serializer = serializer;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      console.log('Received a request that did not match com.nest.rental#RentalPlatform.UpdateProperty. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "UpdateProperty", this.serializer, this.operation, this.serializeFrameworkException, UpdatePropertyServerInput.validate, this.validationCustomizer);
  }
}
