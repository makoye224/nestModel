// smithy-typescript generated code
import { serializeFrameworkException } from "../protocols/Aws_restJson1";
import {
  AssignPropertyManager,
  AssignPropertyManagerSerializer,
  AssignPropertyManagerServerInput,
} from "./operations/AssignPropertyManager";
import {
  BecomeLandlord,
  BecomeLandlordSerializer,
  BecomeLandlordServerInput,
} from "./operations/BecomeLandlord";
import {
  CreateProperty,
  CreatePropertySerializer,
  CreatePropertyServerInput,
} from "./operations/CreateProperty";
import {
  DeleteProperty,
  DeletePropertySerializer,
  DeletePropertyServerInput,
} from "./operations/DeleteProperty";
import {
  ForgotPassword,
  ForgotPasswordSerializer,
  ForgotPasswordServerInput,
} from "./operations/ForgotPassword";
import {
  GetMediaUploadUrl,
  GetMediaUploadUrlSerializer,
  GetMediaUploadUrlServerInput,
} from "./operations/GetMediaUploadUrl";
import {
  GetNearbyProperties,
  GetNearbyPropertiesSerializer,
  GetNearbyPropertiesServerInput,
} from "./operations/GetNearbyProperties";
import {
  GetPropertiesByLocation,
  GetPropertiesByLocationSerializer,
  GetPropertiesByLocationServerInput,
} from "./operations/GetPropertiesByLocation";
import {
  GetProperty,
  GetPropertySerializer,
  GetPropertyServerInput,
} from "./operations/GetProperty";
import {
  GetUser,
  GetUserSerializer,
  GetUserServerInput,
} from "./operations/GetUser";
import {
  ListLandlordProperties,
  ListLandlordPropertiesSerializer,
  ListLandlordPropertiesServerInput,
} from "./operations/ListLandlordProperties";
import {
  ListManagedProperties,
  ListManagedPropertiesSerializer,
  ListManagedPropertiesServerInput,
} from "./operations/ListManagedProperties";
import {
  ListProperties,
  ListPropertiesSerializer,
  ListPropertiesServerInput,
} from "./operations/ListProperties";
import {
  MarkPropertyAsAvailable,
  MarkPropertyAsAvailableSerializer,
  MarkPropertyAsAvailableServerInput,
} from "./operations/MarkPropertyAsAvailable";
import {
  MarkPropertyAsRented,
  MarkPropertyAsRentedSerializer,
  MarkPropertyAsRentedServerInput,
} from "./operations/MarkPropertyAsRented";
import {
  RemovePropertyManager,
  RemovePropertyManagerSerializer,
  RemovePropertyManagerServerInput,
} from "./operations/RemovePropertyManager";
import {
  ResetPassword,
  ResetPasswordSerializer,
  ResetPasswordServerInput,
} from "./operations/ResetPassword";
import {
  ReviewLandlordApplication,
  ReviewLandlordApplicationSerializer,
  ReviewLandlordApplicationServerInput,
} from "./operations/ReviewLandlordApplication";
import {
  SearchProperties,
  SearchPropertiesSerializer,
  SearchPropertiesServerInput,
} from "./operations/SearchProperties";
import {
  SignIn,
  SignInSerializer,
  SignInServerInput,
} from "./operations/SignIn";
import {
  SignUp,
  SignUpSerializer,
  SignUpServerInput,
} from "./operations/SignUp";
import {
  UpdateProperty,
  UpdatePropertySerializer,
  UpdatePropertyServerInput,
} from "./operations/UpdateProperty";
import {
  UpdatePropertyStatus,
  UpdatePropertyStatusSerializer,
  UpdatePropertyStatusServerInput,
} from "./operations/UpdatePropertyStatus";
import {
  UpdateUser,
  UpdateUserSerializer,
  UpdateUserServerInput,
} from "./operations/UpdateUser";
import {
  VerifyEmail,
  VerifyEmailSerializer,
  VerifyEmailServerInput,
} from "./operations/VerifyEmail";
import {
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
  UnknownOperationException as __UnknownOperationException,
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

export type RentalPlatformServiceOperations = "AssignPropertyManager" | "BecomeLandlord" | "CreateProperty" | "DeleteProperty" | "ForgotPassword" | "GetMediaUploadUrl" | "GetNearbyProperties" | "GetPropertiesByLocation" | "GetProperty" | "GetUser" | "ListLandlordProperties" | "ListManagedProperties" | "ListProperties" | "MarkPropertyAsAvailable" | "MarkPropertyAsRented" | "RemovePropertyManager" | "ResetPassword" | "ReviewLandlordApplication" | "SearchProperties" | "SignIn" | "SignUp" | "UpdateProperty" | "UpdatePropertyStatus" | "UpdateUser" | "VerifyEmail";
export interface RentalPlatformService<Context> {
  AssignPropertyManager: AssignPropertyManager<Context>
  BecomeLandlord: BecomeLandlord<Context>
  CreateProperty: CreateProperty<Context>
  DeleteProperty: DeleteProperty<Context>
  ForgotPassword: ForgotPassword<Context>
  GetMediaUploadUrl: GetMediaUploadUrl<Context>
  GetNearbyProperties: GetNearbyProperties<Context>
  GetPropertiesByLocation: GetPropertiesByLocation<Context>
  GetProperty: GetProperty<Context>
  GetUser: GetUser<Context>
  ListLandlordProperties: ListLandlordProperties<Context>
  ListManagedProperties: ListManagedProperties<Context>
  ListProperties: ListProperties<Context>
  MarkPropertyAsAvailable: MarkPropertyAsAvailable<Context>
  MarkPropertyAsRented: MarkPropertyAsRented<Context>
  RemovePropertyManager: RemovePropertyManager<Context>
  ResetPassword: ResetPassword<Context>
  ReviewLandlordApplication: ReviewLandlordApplication<Context>
  SearchProperties: SearchProperties<Context>
  SignIn: SignIn<Context>
  SignUp: SignUp<Context>
  UpdateProperty: UpdateProperty<Context>
  UpdatePropertyStatus: UpdatePropertyStatus<Context>
  UpdateUser: UpdateUser<Context>
  VerifyEmail: VerifyEmail<Context>
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
export class RentalPlatformServiceHandler<Context> implements __ServiceHandler<Context> {
  private readonly service: RentalPlatformService<Context>;
  private readonly mux: __Mux<"RentalPlatform", RentalPlatformServiceOperations>;
  private readonly serializerFactory: <T extends RentalPlatformServiceOperations>(operation: T) => __OperationSerializer<RentalPlatformService<Context>, T, __ServiceException>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<RentalPlatformServiceOperations>;
  /**
   * Construct a RentalPlatformService handler.
   * @param service The {@link RentalPlatformService} implementation that supplies the business logic for RentalPlatformService
   * @param mux The {@link __Mux} that determines which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializerFactory A factory for an {@link __OperationSerializer} for each operation in RentalPlatformService that
   *                          handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    service: RentalPlatformService<Context>,
    mux: __Mux<"RentalPlatform", RentalPlatformServiceOperations>,
    serializerFactory:<T extends RentalPlatformServiceOperations>(op: T) => __OperationSerializer<RentalPlatformService<Context>, T, __ServiceException>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<RentalPlatformServiceOperations>
  ) {
    this.service = service;
    this.mux = mux;
    this.serializerFactory = serializerFactory;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      return this.serializeFrameworkException(new __UnknownOperationException(), serdeContextBase);
    }
    switch (target.operation) {
      case "AssignPropertyManager" : {
        return handle(request, context, "AssignPropertyManager", this.serializerFactory("AssignPropertyManager"), this.service.AssignPropertyManager, this.serializeFrameworkException, AssignPropertyManagerServerInput.validate, this.validationCustomizer);
      }
      case "BecomeLandlord" : {
        return handle(request, context, "BecomeLandlord", this.serializerFactory("BecomeLandlord"), this.service.BecomeLandlord, this.serializeFrameworkException, BecomeLandlordServerInput.validate, this.validationCustomizer);
      }
      case "CreateProperty" : {
        return handle(request, context, "CreateProperty", this.serializerFactory("CreateProperty"), this.service.CreateProperty, this.serializeFrameworkException, CreatePropertyServerInput.validate, this.validationCustomizer);
      }
      case "DeleteProperty" : {
        return handle(request, context, "DeleteProperty", this.serializerFactory("DeleteProperty"), this.service.DeleteProperty, this.serializeFrameworkException, DeletePropertyServerInput.validate, this.validationCustomizer);
      }
      case "ForgotPassword" : {
        return handle(request, context, "ForgotPassword", this.serializerFactory("ForgotPassword"), this.service.ForgotPassword, this.serializeFrameworkException, ForgotPasswordServerInput.validate, this.validationCustomizer);
      }
      case "GetMediaUploadUrl" : {
        return handle(request, context, "GetMediaUploadUrl", this.serializerFactory("GetMediaUploadUrl"), this.service.GetMediaUploadUrl, this.serializeFrameworkException, GetMediaUploadUrlServerInput.validate, this.validationCustomizer);
      }
      case "GetNearbyProperties" : {
        return handle(request, context, "GetNearbyProperties", this.serializerFactory("GetNearbyProperties"), this.service.GetNearbyProperties, this.serializeFrameworkException, GetNearbyPropertiesServerInput.validate, this.validationCustomizer);
      }
      case "GetPropertiesByLocation" : {
        return handle(request, context, "GetPropertiesByLocation", this.serializerFactory("GetPropertiesByLocation"), this.service.GetPropertiesByLocation, this.serializeFrameworkException, GetPropertiesByLocationServerInput.validate, this.validationCustomizer);
      }
      case "GetProperty" : {
        return handle(request, context, "GetProperty", this.serializerFactory("GetProperty"), this.service.GetProperty, this.serializeFrameworkException, GetPropertyServerInput.validate, this.validationCustomizer);
      }
      case "GetUser" : {
        return handle(request, context, "GetUser", this.serializerFactory("GetUser"), this.service.GetUser, this.serializeFrameworkException, GetUserServerInput.validate, this.validationCustomizer);
      }
      case "ListLandlordProperties" : {
        return handle(request, context, "ListLandlordProperties", this.serializerFactory("ListLandlordProperties"), this.service.ListLandlordProperties, this.serializeFrameworkException, ListLandlordPropertiesServerInput.validate, this.validationCustomizer);
      }
      case "ListManagedProperties" : {
        return handle(request, context, "ListManagedProperties", this.serializerFactory("ListManagedProperties"), this.service.ListManagedProperties, this.serializeFrameworkException, ListManagedPropertiesServerInput.validate, this.validationCustomizer);
      }
      case "ListProperties" : {
        return handle(request, context, "ListProperties", this.serializerFactory("ListProperties"), this.service.ListProperties, this.serializeFrameworkException, ListPropertiesServerInput.validate, this.validationCustomizer);
      }
      case "MarkPropertyAsAvailable" : {
        return handle(request, context, "MarkPropertyAsAvailable", this.serializerFactory("MarkPropertyAsAvailable"), this.service.MarkPropertyAsAvailable, this.serializeFrameworkException, MarkPropertyAsAvailableServerInput.validate, this.validationCustomizer);
      }
      case "MarkPropertyAsRented" : {
        return handle(request, context, "MarkPropertyAsRented", this.serializerFactory("MarkPropertyAsRented"), this.service.MarkPropertyAsRented, this.serializeFrameworkException, MarkPropertyAsRentedServerInput.validate, this.validationCustomizer);
      }
      case "RemovePropertyManager" : {
        return handle(request, context, "RemovePropertyManager", this.serializerFactory("RemovePropertyManager"), this.service.RemovePropertyManager, this.serializeFrameworkException, RemovePropertyManagerServerInput.validate, this.validationCustomizer);
      }
      case "ResetPassword" : {
        return handle(request, context, "ResetPassword", this.serializerFactory("ResetPassword"), this.service.ResetPassword, this.serializeFrameworkException, ResetPasswordServerInput.validate, this.validationCustomizer);
      }
      case "ReviewLandlordApplication" : {
        return handle(request, context, "ReviewLandlordApplication", this.serializerFactory("ReviewLandlordApplication"), this.service.ReviewLandlordApplication, this.serializeFrameworkException, ReviewLandlordApplicationServerInput.validate, this.validationCustomizer);
      }
      case "SearchProperties" : {
        return handle(request, context, "SearchProperties", this.serializerFactory("SearchProperties"), this.service.SearchProperties, this.serializeFrameworkException, SearchPropertiesServerInput.validate, this.validationCustomizer);
      }
      case "SignIn" : {
        return handle(request, context, "SignIn", this.serializerFactory("SignIn"), this.service.SignIn, this.serializeFrameworkException, SignInServerInput.validate, this.validationCustomizer);
      }
      case "SignUp" : {
        return handle(request, context, "SignUp", this.serializerFactory("SignUp"), this.service.SignUp, this.serializeFrameworkException, SignUpServerInput.validate, this.validationCustomizer);
      }
      case "UpdateProperty" : {
        return handle(request, context, "UpdateProperty", this.serializerFactory("UpdateProperty"), this.service.UpdateProperty, this.serializeFrameworkException, UpdatePropertyServerInput.validate, this.validationCustomizer);
      }
      case "UpdatePropertyStatus" : {
        return handle(request, context, "UpdatePropertyStatus", this.serializerFactory("UpdatePropertyStatus"), this.service.UpdatePropertyStatus, this.serializeFrameworkException, UpdatePropertyStatusServerInput.validate, this.validationCustomizer);
      }
      case "UpdateUser" : {
        return handle(request, context, "UpdateUser", this.serializerFactory("UpdateUser"), this.service.UpdateUser, this.serializeFrameworkException, UpdateUserServerInput.validate, this.validationCustomizer);
      }
      case "VerifyEmail" : {
        return handle(request, context, "VerifyEmail", this.serializerFactory("VerifyEmail"), this.service.VerifyEmail, this.serializeFrameworkException, VerifyEmailServerInput.validate, this.validationCustomizer);
      }
    }
  }
}

export const getRentalPlatformServiceHandler = <Context>(service: RentalPlatformService<Context>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RentalPlatform", keyof RentalPlatformService<Context>>([
    new httpbinding.UriSpec<"RentalPlatform", "AssignPropertyManager">(
      'POST',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "assign-manager" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "AssignPropertyManager" }),
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
    new httpbinding.UriSpec<"RentalPlatform", "CreateProperty">(
      'POST',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "create" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "CreateProperty" }),
    new httpbinding.UriSpec<"RentalPlatform", "DeleteProperty">(
      'DELETE',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "delete" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "DeleteProperty" }),
    new httpbinding.UriSpec<"RentalPlatform", "ForgotPassword">(
      'POST',
      [
        { type: 'path_literal', value: "forgot-password" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "ForgotPassword" }),
    new httpbinding.UriSpec<"RentalPlatform", "GetMediaUploadUrl">(
      'POST',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "upload-url" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "GetMediaUploadUrl" }),
    new httpbinding.UriSpec<"RentalPlatform", "GetNearbyProperties">(
      'GET',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "nearby" },
      ],
      [
        { type: 'query', key: "lat" },
        { type: 'query', key: "lng" },
      ],
      { service: "RentalPlatform", operation: "GetNearbyProperties" }),
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
    new httpbinding.UriSpec<"RentalPlatform", "GetProperty">(
      'GET',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "get" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "GetProperty" }),
    new httpbinding.UriSpec<"RentalPlatform", "GetUser">(
      'GET',
      [
        { type: 'path_literal', value: "user" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "GetUser" }),
    new httpbinding.UriSpec<"RentalPlatform", "ListLandlordProperties">(
      'GET',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "landlord" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "ListLandlordProperties" }),
    new httpbinding.UriSpec<"RentalPlatform", "ListManagedProperties">(
      'GET',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "managed" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "ListManagedProperties" }),
    new httpbinding.UriSpec<"RentalPlatform", "ListProperties">(
      'GET',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "list" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "ListProperties" }),
    new httpbinding.UriSpec<"RentalPlatform", "MarkPropertyAsAvailable">(
      'POST',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "mark-available" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "MarkPropertyAsAvailable" }),
    new httpbinding.UriSpec<"RentalPlatform", "MarkPropertyAsRented">(
      'POST',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "mark-rented" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "MarkPropertyAsRented" }),
    new httpbinding.UriSpec<"RentalPlatform", "RemovePropertyManager">(
      'DELETE',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "remove-manager" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "RemovePropertyManager" }),
    new httpbinding.UriSpec<"RentalPlatform", "ResetPassword">(
      'POST',
      [
        { type: 'path_literal', value: "reset-password" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "ResetPassword" }),
    new httpbinding.UriSpec<"RentalPlatform", "ReviewLandlordApplication">(
      'POST',
      [
        { type: 'path_literal', value: "admin" },
        { type: 'path' },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "ReviewLandlordApplication" }),
    new httpbinding.UriSpec<"RentalPlatform", "SearchProperties">(
      'GET',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "search" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "SearchProperties" }),
    new httpbinding.UriSpec<"RentalPlatform", "SignIn">(
      'POST',
      [
        { type: 'path_literal', value: "login" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "SignIn" }),
    new httpbinding.UriSpec<"RentalPlatform", "SignUp">(
      'POST',
      [
        { type: 'path_literal', value: "signup" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "SignUp" }),
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
    new httpbinding.UriSpec<"RentalPlatform", "UpdatePropertyStatus">(
      'PATCH',
      [
        { type: 'path_literal', value: "property" },
        { type: 'path_literal', value: "update-status" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "UpdatePropertyStatus" }),
    new httpbinding.UriSpec<"RentalPlatform", "UpdateUser">(
      'PUT',
      [
        { type: 'path_literal', value: "user" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "UpdateUser" }),
    new httpbinding.UriSpec<"RentalPlatform", "VerifyEmail">(
      'POST',
      [
        { type: 'path_literal', value: "verify-email" },
      ],
      [
      ],
      { service: "RentalPlatform", operation: "VerifyEmail" }),
  ]);
  const serFn: (op: RentalPlatformServiceOperations) => __OperationSerializer<RentalPlatformService<Context>, RentalPlatformServiceOperations, __ServiceException> = (op) => {
    switch (op) {
      case "AssignPropertyManager": return new AssignPropertyManagerSerializer();
      case "BecomeLandlord": return new BecomeLandlordSerializer();
      case "CreateProperty": return new CreatePropertySerializer();
      case "DeleteProperty": return new DeletePropertySerializer();
      case "ForgotPassword": return new ForgotPasswordSerializer();
      case "GetMediaUploadUrl": return new GetMediaUploadUrlSerializer();
      case "GetNearbyProperties": return new GetNearbyPropertiesSerializer();
      case "GetPropertiesByLocation": return new GetPropertiesByLocationSerializer();
      case "GetProperty": return new GetPropertySerializer();
      case "GetUser": return new GetUserSerializer();
      case "ListLandlordProperties": return new ListLandlordPropertiesSerializer();
      case "ListManagedProperties": return new ListManagedPropertiesSerializer();
      case "ListProperties": return new ListPropertiesSerializer();
      case "MarkPropertyAsAvailable": return new MarkPropertyAsAvailableSerializer();
      case "MarkPropertyAsRented": return new MarkPropertyAsRentedSerializer();
      case "RemovePropertyManager": return new RemovePropertyManagerSerializer();
      case "ResetPassword": return new ResetPasswordSerializer();
      case "ReviewLandlordApplication": return new ReviewLandlordApplicationSerializer();
      case "SearchProperties": return new SearchPropertiesSerializer();
      case "SignIn": return new SignInSerializer();
      case "SignUp": return new SignUpSerializer();
      case "UpdateProperty": return new UpdatePropertySerializer();
      case "UpdatePropertyStatus": return new UpdatePropertyStatusSerializer();
      case "UpdateUser": return new UpdateUserSerializer();
      case "VerifyEmail": return new VerifyEmailSerializer();
    }
  };
  const customizer: __ValidationCustomizer<RentalPlatformServiceOperations> = (ctx, failures) => {
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
  return new RentalPlatformServiceHandler(service, mux, serFn, serializeFrameworkException, customizer);
}
