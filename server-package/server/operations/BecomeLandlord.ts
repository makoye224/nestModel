// smithy-typescript generated code
import {
  BecomeLandlordOutput,
  BecomeLandlordRequest,
  InternalServerError,
  RentalValidationException,
  UnauthorizedException,
  ValidationException,
} from "../../models/models_0";
import {
  deserializeBecomeLandlordRequest,
  serializeBecomeLandlordResponse,
  serializeFrameworkException,
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

export type BecomeLandlord<Context> = __Operation<BecomeLandlordServerInput, BecomeLandlordServerOutput, Context>

export interface BecomeLandlordServerInput extends BecomeLandlordRequest {}
export namespace BecomeLandlordServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof BecomeLandlordRequest.validate>[0]) => __ValidationFailure[] = BecomeLandlordRequest.validate;
}
export interface BecomeLandlordServerOutput extends BecomeLandlordOutput {}

export type BecomeLandlordErrors = ValidationException | RentalValidationException | UnauthorizedException | InternalServerError

export class BecomeLandlordSerializer implements __OperationSerializer<RentalPlatformService<any>, "BecomeLandlord", BecomeLandlordErrors> {
  serialize = serializeBecomeLandlordResponse;
  deserialize = deserializeBecomeLandlordRequest;

  isOperationError(error: any): error is BecomeLandlordErrors {
    const names: BecomeLandlordErrors['name'][] = ["ValidationException", "RentalValidationException", "UnauthorizedException", "InternalServerError"];
    return names.includes(error.name);
  };

  serializeError(error: BecomeLandlordErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "ValidationException": {
        return serializeValidationExceptionError(error, ctx);
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

export const getBecomeLandlordHandler = <Context>(operation: __Operation<BecomeLandlordServerInput, BecomeLandlordServerOutput, Context>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RentalPlatform", "BecomeLandlord">([
    new httpbinding.UriSpec<"RentalPlatform", "BecomeLandlord">(
      'POST',
      [
        { type: 'path_literal', value: "user" },
        { type: 'path' },
        { type: 'path_literal', value: "become-landlord" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "BecomeLandlord" }),
  ]);
  const customizer: __ValidationCustomizer<"BecomeLandlord"> = (ctx, failures) => {
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
  return new BecomeLandlordHandler(operation, mux, new BecomeLandlordSerializer(), serializeFrameworkException, customizer);
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
export class BecomeLandlordHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<BecomeLandlordServerInput, BecomeLandlordServerOutput, Context>;
  private readonly mux: __Mux<"RentalPlatform", "BecomeLandlord">;
  private readonly serializer: __OperationSerializer<RentalPlatformService<Context>, "BecomeLandlord", BecomeLandlordErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"BecomeLandlord">;
  /**
   * Construct a BecomeLandlord handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for BecomeLandlord
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for BecomeLandlord that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<BecomeLandlordServerInput, BecomeLandlordServerOutput, Context>,
    mux: __Mux<"RentalPlatform", "BecomeLandlord">,
    serializer: __OperationSerializer<RentalPlatformService<Context>, "BecomeLandlord", BecomeLandlordErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"BecomeLandlord">
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
      console.log('Received a request that did not match com.nest.rental#RentalPlatform.BecomeLandlord. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "BecomeLandlord", this.serializer, this.operation, this.serializeFrameworkException, BecomeLandlordServerInput.validate, this.validationCustomizer);
  }
}
