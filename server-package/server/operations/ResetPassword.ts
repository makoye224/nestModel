// smithy-typescript generated code
import {
  InternalServerError,
  RentalValidationException,
  ResetPasswordInput,
  ResetPasswordOutput,
  UnauthorizedException,
  ValidationException,
} from "../../models/models_0";
import {
  deserializeResetPasswordRequest,
  serializeFrameworkException,
  serializeInternalServerErrorError,
  serializeRentalValidationExceptionError,
  serializeResetPasswordResponse,
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

export type ResetPassword<Context> = __Operation<ResetPasswordServerInput, ResetPasswordServerOutput, Context>

export interface ResetPasswordServerInput extends ResetPasswordInput {}
export namespace ResetPasswordServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof ResetPasswordInput.validate>[0]) => __ValidationFailure[] = ResetPasswordInput.validate;
}
export interface ResetPasswordServerOutput extends ResetPasswordOutput {}

export type ResetPasswordErrors = ValidationException | RentalValidationException | InternalServerError | UnauthorizedException

export class ResetPasswordSerializer implements __OperationSerializer<RentalPlatformService<any>, "ResetPassword", ResetPasswordErrors> {
  serialize = serializeResetPasswordResponse;
  deserialize = deserializeResetPasswordRequest;

  isOperationError(error: any): error is ResetPasswordErrors {
    const names: ResetPasswordErrors['name'][] = ["ValidationException", "RentalValidationException", "InternalServerError", "UnauthorizedException"];
    return names.includes(error.name);
  };

  serializeError(error: ResetPasswordErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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

export const getResetPasswordHandler = <Context>(operation: __Operation<ResetPasswordServerInput, ResetPasswordServerOutput, Context>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RentalPlatform", "ResetPassword">([
    new httpbinding.UriSpec<"RentalPlatform", "ResetPassword">(
      'POST',
      [
        { type: 'path_literal', value: "reset-password" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "ResetPassword" }),
  ]);
  const customizer: __ValidationCustomizer<"ResetPassword"> = (ctx, failures) => {
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
  return new ResetPasswordHandler(operation, mux, new ResetPasswordSerializer(), serializeFrameworkException, customizer);
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
export class ResetPasswordHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<ResetPasswordServerInput, ResetPasswordServerOutput, Context>;
  private readonly mux: __Mux<"RentalPlatform", "ResetPassword">;
  private readonly serializer: __OperationSerializer<RentalPlatformService<Context>, "ResetPassword", ResetPasswordErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"ResetPassword">;
  /**
   * Construct a ResetPassword handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for ResetPassword
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for ResetPassword that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<ResetPasswordServerInput, ResetPasswordServerOutput, Context>,
    mux: __Mux<"RentalPlatform", "ResetPassword">,
    serializer: __OperationSerializer<RentalPlatformService<Context>, "ResetPassword", ResetPasswordErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"ResetPassword">
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
      console.log('Received a request that did not match com.nest.rental#RentalPlatform.ResetPassword. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "ResetPassword", this.serializer, this.operation, this.serializeFrameworkException, ResetPasswordServerInput.validate, this.validationCustomizer);
  }
}
