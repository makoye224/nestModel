// smithy-typescript generated code
import {
  GetPropertiesByLocationRequest,
  InternalServerError,
  ListPropertiesResponse,
  RentalValidationException,
  UnauthorizedException,
  ValidationException,
} from "../../models/models_0";
import {
  deserializeGetPropertiesByLocationRequest,
  serializeFrameworkException,
  serializeGetPropertiesByLocationResponse,
  serializeInternalServerErrorError,
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

export type GetPropertiesByLocation<Context> = __Operation<GetPropertiesByLocationServerInput, GetPropertiesByLocationServerOutput, Context>

export interface GetPropertiesByLocationServerInput extends GetPropertiesByLocationRequest {}
export namespace GetPropertiesByLocationServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof GetPropertiesByLocationRequest.validate>[0]) => __ValidationFailure[] = GetPropertiesByLocationRequest.validate;
}
export interface GetPropertiesByLocationServerOutput extends ListPropertiesResponse {}

export type GetPropertiesByLocationErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException

export class GetPropertiesByLocationSerializer implements __OperationSerializer<RentalPlatformService<any>, "GetPropertiesByLocation", GetPropertiesByLocationErrors> {
  serialize = serializeGetPropertiesByLocationResponse;
  deserialize = deserializeGetPropertiesByLocationRequest;

  isOperationError(error: any): error is GetPropertiesByLocationErrors {
    const names: GetPropertiesByLocationErrors['name'][] = ["ValidationException", "RentalValidationException", "InternalServerError", "UnauthorizedException"];
    return names.includes(error.name);
  };

  serializeError(error: GetPropertiesByLocationErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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

export const getGetPropertiesByLocationHandler = <Context>(operation: __Operation<GetPropertiesByLocationServerInput, GetPropertiesByLocationServerOutput, Context>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RentalPlatform", "GetPropertiesByLocation">([
    new httpbinding.UriSpec<"RentalPlatform", "GetPropertiesByLocation">(
      'GET',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "by-location" },
        { type: 'path' },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "GetPropertiesByLocation" }),
  ]);
  const customizer: __ValidationCustomizer<"GetPropertiesByLocation"> = (ctx, failures) => {
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
  return new GetPropertiesByLocationHandler(operation, mux, new GetPropertiesByLocationSerializer(), serializeFrameworkException, customizer);
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
export class GetPropertiesByLocationHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<GetPropertiesByLocationServerInput, GetPropertiesByLocationServerOutput, Context>;
  private readonly mux: __Mux<"RentalPlatform", "GetPropertiesByLocation">;
  private readonly serializer: __OperationSerializer<RentalPlatformService<Context>, "GetPropertiesByLocation", GetPropertiesByLocationErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"GetPropertiesByLocation">;
  /**
   * Construct a GetPropertiesByLocation handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for GetPropertiesByLocation
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for GetPropertiesByLocation that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<GetPropertiesByLocationServerInput, GetPropertiesByLocationServerOutput, Context>,
    mux: __Mux<"RentalPlatform", "GetPropertiesByLocation">,
    serializer: __OperationSerializer<RentalPlatformService<Context>, "GetPropertiesByLocation", GetPropertiesByLocationErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"GetPropertiesByLocation">
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
      console.log('Received a request that did not match com.nest.rental#RentalPlatform.GetPropertiesByLocation. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "GetPropertiesByLocation", this.serializer, this.operation, this.serializeFrameworkException, GetPropertiesByLocationServerInput.validate, this.validationCustomizer);
  }
}
