// smithy-typescript generated code
import {
  InternalServerError,
  ListPropertiesRequest,
  ListPropertiesResponse,
  RentalValidationException,
  UnauthorizedException,
  ValidationException,
} from "../../models/models_0";
import {
  deserializeListPropertiesRequest,
  serializeFrameworkException,
  serializeInternalServerErrorError,
  serializeListPropertiesResponse,
  serializeRentalValidationExceptionError,
  serializeUnauthorizedExceptionError,
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

export type ListProperties<Context> = __Operation<ListPropertiesServerInput, ListPropertiesServerOutput, Context>

export interface ListPropertiesServerInput extends ListPropertiesRequest {}
export namespace ListPropertiesServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof ListPropertiesRequest.validate>[0]) => __ValidationFailure[] = ListPropertiesRequest.validate;
}
export interface ListPropertiesServerOutput extends ListPropertiesResponse {}

export type ListPropertiesErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException

export class ListPropertiesSerializer implements __OperationSerializer<RentalPlatformService<any>, "ListProperties", ListPropertiesErrors> {
  serialize = serializeListPropertiesResponse;
  deserialize = deserializeListPropertiesRequest;

  isOperationError(error: any): error is ListPropertiesErrors {
    const names: ListPropertiesErrors['name'][] = ["ValidationException", "RentalValidationException", "InternalServerError", "UnauthorizedException"];
    return names.includes(error.name);
  };

  serializeError(error: ListPropertiesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "ValidationException": {
        return serializeValidationExceptionError(error, ctx);
      }
      case "RentalValidationException": {
        return serializeRentalValidationExceptionError(error, ctx);
      }
      case "InternalServerError": {
        return serializeInternalServerErrorError(error, ctx);
      }
      case "UnauthorizedException": {
        return serializeUnauthorizedExceptionError(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }

}

export const getListPropertiesHandler = <Context>(operation: __Operation<ListPropertiesServerInput, ListPropertiesServerOutput, Context>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RentalPlatform", "ListProperties">([
    new httpbinding.UriSpec<"RentalPlatform", "ListProperties">(
      'GET',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "list" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "ListProperties" }),
  ]);
  const customizer: __ValidationCustomizer<"ListProperties"> = (ctx, failures) => {
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
  return new ListPropertiesHandler(operation, mux, new ListPropertiesSerializer(), serializeFrameworkException, customizer);
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
export class ListPropertiesHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<ListPropertiesServerInput, ListPropertiesServerOutput, Context>;
  private readonly mux: __Mux<"RentalPlatform", "ListProperties">;
  private readonly serializer: __OperationSerializer<RentalPlatformService<Context>, "ListProperties", ListPropertiesErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"ListProperties">;
  /**
   * Construct a ListProperties handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for ListProperties
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for ListProperties that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<ListPropertiesServerInput, ListPropertiesServerOutput, Context>,
    mux: __Mux<"RentalPlatform", "ListProperties">,
    serializer: __OperationSerializer<RentalPlatformService<Context>, "ListProperties", ListPropertiesErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"ListProperties">
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
      console.log('Received a request that did not match com.nest.rental#RentalPlatform.ListProperties. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "ListProperties", this.serializer, this.operation, this.serializeFrameworkException, ListPropertiesServerInput.validate, this.validationCustomizer);
  }
}
