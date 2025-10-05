// smithy-typescript generated code
import {
  AssignPropertyManagerCommandInput,
  AssignPropertyManagerCommandOutput,
} from "../commands/AssignPropertyManagerCommand";
import {
  BecomeLandlordCommandInput,
  BecomeLandlordCommandOutput,
} from "../commands/BecomeLandlordCommand";
import {
  CreatePropertyCommandInput,
  CreatePropertyCommandOutput,
} from "../commands/CreatePropertyCommand";
import {
  DeletePropertyCommandInput,
  DeletePropertyCommandOutput,
} from "../commands/DeletePropertyCommand";
import {
  ForgotPasswordCommandInput,
  ForgotPasswordCommandOutput,
} from "../commands/ForgotPasswordCommand";
import {
  GetMediaUploadUrlCommandInput,
  GetMediaUploadUrlCommandOutput,
} from "../commands/GetMediaUploadUrlCommand";
import {
  GetNearbyPropertiesCommandInput,
  GetNearbyPropertiesCommandOutput,
} from "../commands/GetNearbyPropertiesCommand";
import {
  GetPropertiesByLocationCommandInput,
  GetPropertiesByLocationCommandOutput,
} from "../commands/GetPropertiesByLocationCommand";
import {
  GetPropertyCommandInput,
  GetPropertyCommandOutput,
} from "../commands/GetPropertyCommand";
import {
  GetUserCommandInput,
  GetUserCommandOutput,
} from "../commands/GetUserCommand";
import {
  ListLandlordPropertiesCommandInput,
  ListLandlordPropertiesCommandOutput,
} from "../commands/ListLandlordPropertiesCommand";
import {
  ListManagedPropertiesCommandInput,
  ListManagedPropertiesCommandOutput,
} from "../commands/ListManagedPropertiesCommand";
import {
  ListPropertiesCommandInput,
  ListPropertiesCommandOutput,
} from "../commands/ListPropertiesCommand";
import {
  MarkPropertyAsAvailableCommandInput,
  MarkPropertyAsAvailableCommandOutput,
} from "../commands/MarkPropertyAsAvailableCommand";
import {
  MarkPropertyAsRentedCommandInput,
  MarkPropertyAsRentedCommandOutput,
} from "../commands/MarkPropertyAsRentedCommand";
import {
  RemovePropertyManagerCommandInput,
  RemovePropertyManagerCommandOutput,
} from "../commands/RemovePropertyManagerCommand";
import {
  ResetPasswordCommandInput,
  ResetPasswordCommandOutput,
} from "../commands/ResetPasswordCommand";
import {
  ReviewLandlordApplicationCommandInput,
  ReviewLandlordApplicationCommandOutput,
} from "../commands/ReviewLandlordApplicationCommand";
import {
  SearchPropertiesCommandInput,
  SearchPropertiesCommandOutput,
} from "../commands/SearchPropertiesCommand";
import {
  SignInCommandInput,
  SignInCommandOutput,
} from "../commands/SignInCommand";
import {
  SignUpCommandInput,
  SignUpCommandOutput,
} from "../commands/SignUpCommand";
import {
  UpdatePropertyCommandInput,
  UpdatePropertyCommandOutput,
} from "../commands/UpdatePropertyCommand";
import {
  UpdatePropertyStatusCommandInput,
  UpdatePropertyStatusCommandOutput,
} from "../commands/UpdatePropertyStatusCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput,
} from "../commands/UpdateUserCommand";
import {
  VerifyEmailCommandInput,
  VerifyEmailCommandOutput,
} from "../commands/VerifyEmailCommand";
import { RentalPlatformServiceException as __BaseException } from "../models/RentalPlatformServiceException";
import {
  Address,
  AddressInput,
  Admin,
  ApplicationDecision,
  BecomeLandlordApplication,
  Coordinates,
  CoordinatesInput,
  CreatePropertyData,
  EmploymentInfo,
  InternalServerError,
  Landlord,
  ManagementPermissions,
  MediaUploadInput,
  NotificationSettings,
  Property,
  PropertyAvailability,
  PropertyAvailabilityInput,
  PropertyManagerAssignment,
  PropertyMediaInput,
  PropertyNotFoundException,
  PropertyPricingInput,
  PropertySpecificationsInput,
  PropertyStatusUpdate,
  RentalHistory,
  RentalValidationException,
  Tenant,
  UnauthorizedException,
  UpdatePropertyData,
  UpdateUserData,
  UserPreferences,
  UserProfile,
  ValidationException,
} from "../models/models_0";
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  _json,
  collectBody,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * serializeAws_restJson1AssignPropertyManagerCommand
 */
export const se_AssignPropertyManagerCommand = async(
  input: AssignPropertyManagerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/property/assign-manager/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  if (input.assignment !== undefined) {
    body = se_PropertyManagerAssignment(input.assignment, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1BecomeLandlordCommand
 */
export const se_BecomeLandlordCommand = async(
  input: BecomeLandlordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/user/{userId}/become-landlord");
  b.p('userId', () => input.userId!, '{userId}', false)
  let body: any;
  if (input.application !== undefined) {
    body = _json(input.application);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1CreatePropertyCommand
 */
export const se_CreatePropertyCommand = async(
  input: CreatePropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/property/create");
  let body: any;
  if (input.property !== undefined) {
    body = se_CreatePropertyData(input.property, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1DeletePropertyCommand
 */
export const se_DeletePropertyCommand = async(
  input: DeletePropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/delete/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  b.m("DELETE")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1ForgotPasswordCommand
 */
export const se_ForgotPasswordCommand = async(
  input: ForgotPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/forgot-password");
  let body: any;
  body = JSON.stringify(take(input, {
    'email': [],
  }));
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1GetMediaUploadUrlCommand
 */
export const se_GetMediaUploadUrlCommand = async(
  input: GetMediaUploadUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/property/upload-url/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  if (input.media !== undefined) {
    body = _json(input.media);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1GetNearbyPropertiesCommand
 */
export const se_GetNearbyPropertiesCommand = async(
  input: GetNearbyPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/nearby");
  const query: any = map({
    [_l]: [__expectNonNull(input.lat, `lat`) != null, () => ((input[_l]! % 1 == 0) ? input[_l]! + ".0" : input[_l]!.toString())],
    [_ln]: [__expectNonNull(input.lng, `lng`) != null, () => ((input[_ln]! % 1 == 0) ? input[_ln]! + ".0" : input[_ln]!.toString())],
    [_r]: [() => input.radius !== void 0, () => (((input[_r]! % 1 == 0) ? input[_r]! + ".0" : input[_r]!.toString()))],
    [_li]: [() => input.limit !== void 0, () => (input[_li]!.toString())],
    [_nT]: [,input[_nT]!],
  });
  let body: any;
  b.m("GET")
  .h(headers)
  .q(query)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1GetPropertiesByLocationCommand
 */
export const se_GetPropertiesByLocationCommand = async(
  input: GetPropertiesByLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/by-location/{region}/{district}");
  b.p('region', () => input.region!, '{region}', false)
  b.p('district', () => input.district!, '{district}', false)
  const query: any = map({
    [_w]: [,input[_w]!],
    [_li]: [() => input.limit !== void 0, () => (input[_li]!.toString())],
    [_nT]: [,input[_nT]!],
  });
  let body: any;
  b.m("GET")
  .h(headers)
  .q(query)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1GetPropertyCommand
 */
export const se_GetPropertyCommand = async(
  input: GetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/get/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  b.m("GET")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1GetUserCommand
 */
export const se_GetUserCommand = async(
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/user/{userId}");
  b.p('userId', () => input.userId!, '{userId}', false)
  let body: any;
  b.m("GET")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1ListLandlordPropertiesCommand
 */
export const se_ListLandlordPropertiesCommand = async(
  input: ListLandlordPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/landlord/{userId}");
  b.p('userId', () => input.userId!, '{userId}', false)
  const query: any = map({
    [_li]: [() => input.limit !== void 0, () => (input[_li]!.toString())],
    [_nT]: [,input[_nT]!],
  });
  let body: any;
  b.m("GET")
  .h(headers)
  .q(query)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1ListManagedPropertiesCommand
 */
export const se_ListManagedPropertiesCommand = async(
  input: ListManagedPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/managed/{managerId}");
  b.p('managerId', () => input.managerId!, '{managerId}', false)
  const query: any = map({
    [_li]: [() => input.limit !== void 0, () => (input[_li]!.toString())],
    [_nT]: [,input[_nT]!],
  });
  let body: any;
  b.m("GET")
  .h(headers)
  .q(query)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1ListPropertiesCommand
 */
export const se_ListPropertiesCommand = async(
  input: ListPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/list");
  const query: any = map({
    [_li]: [() => input.limit !== void 0, () => (input[_li]!.toString())],
    [_nT]: [,input[_nT]!],
  });
  let body: any;
  b.m("GET")
  .h(headers)
  .q(query)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1MarkPropertyAsAvailableCommand
 */
export const se_MarkPropertyAsAvailableCommand = async(
  input: MarkPropertyAsAvailableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/mark-available/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1MarkPropertyAsRentedCommand
 */
export const se_MarkPropertyAsRentedCommand = async(
  input: MarkPropertyAsRentedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/mark-rented/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1RemovePropertyManagerCommand
 */
export const se_RemovePropertyManagerCommand = async(
  input: RemovePropertyManagerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/remove-manager/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  b.m("DELETE")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1ResetPasswordCommand
 */
export const se_ResetPasswordCommand = async(
  input: ResetPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/reset-password");
  let body: any;
  body = JSON.stringify(take(input, {
    'confirmationCode': [],
    'email': [],
    'newPassword': [],
  }));
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1ReviewLandlordApplicationCommand
 */
export const se_ReviewLandlordApplicationCommand = async(
  input: ReviewLandlordApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/admin/{applicationId}/{userId}");
  b.p('applicationId', () => input.applicationId!, '{applicationId}', false)
  b.p('userId', () => input.userId!, '{userId}', false)
  let body: any;
  if (input.decision !== undefined) {
    body = _json(input.decision);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1SearchPropertiesCommand
 */
export const se_SearchPropertiesCommand = async(
  input: SearchPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
  };
  b.bp("/property/search");
  const query: any = map({
    [_re]: [,input[_re]!],
    [_d]: [,input[_d]!],
    [_w]: [,input[_w]!],
    [_pT]: [,input[_pT]!],
    [_mR]: [() => input.minRent !== void 0, () => (input[_mR]!.toString())],
    [_mRa]: [() => input.maxRent !== void 0, () => (input[_mRa]!.toString())],
    [_mB]: [() => input.minBedrooms !== void 0, () => (input[_mB]!.toString())],
    [_li]: [() => input.limit !== void 0, () => (input[_li]!.toString())],
    [_nT]: [,input[_nT]!],
  });
  let body: any;
  b.m("GET")
  .h(headers)
  .q(query)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1SignInCommand
 */
export const se_SignInCommand = async(
  input: SignInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/login");
  let body: any;
  body = JSON.stringify(take(input, {
    'email': [],
    'password': [],
  }));
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1SignUpCommand
 */
export const se_SignUpCommand = async(
  input: SignUpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/signup");
  let body: any;
  body = JSON.stringify(take(input, {
    'email': [],
    'firstName': [],
    'lastName': [],
    'password': [],
    'phoneNumber': [],
    'preferences': _ => _json(_),
  }));
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1UpdatePropertyCommand
 */
export const se_UpdatePropertyCommand = async(
  input: UpdatePropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/property/update/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  if (input.property !== undefined) {
    body = se_UpdatePropertyData(input.property, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("PUT")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1UpdatePropertyStatusCommand
 */
export const se_UpdatePropertyStatusCommand = async(
  input: UpdatePropertyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/property/update-status/{propertyId}");
  b.p('propertyId', () => input.propertyId!, '{propertyId}', false)
  let body: any;
  if (input.statusUpdate !== undefined) {
    body = _json(input.statusUpdate);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("PATCH")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async(
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/user/{userId}");
  b.p('userId', () => input.userId!, '{userId}', false)
  let body: any;
  if (input.userData !== undefined) {
    body = _json(input.userData);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("PUT")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * serializeAws_restJson1VerifyEmailCommand
 */
export const se_VerifyEmailCommand = async(
  input: VerifyEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    'content-type': 'application/json',
  };
  b.bp("/verify-email");
  let body: any;
  body = JSON.stringify(take(input, {
    'confirmationCode': [],
    'email': [],
  }));
  b.m("POST")
  .h(headers)
  .b(body);
  return b.build();
}

/**
 * deserializeAws_restJson1AssignPropertyManagerCommand
 */
export const de_AssignPropertyManagerCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignPropertyManagerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
    'property': _ => de_Property(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1BecomeLandlordCommand
 */
export const de_BecomeLandlordCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BecomeLandlordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'applicationId': __expectString,
    'message': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreatePropertyCommand
 */
export const de_CreatePropertyCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
    'property': _ => de_Property(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1DeletePropertyCommand
 */
export const de_DeletePropertyCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1ForgotPasswordCommand
 */
export const de_ForgotPasswordCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgotPasswordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetMediaUploadUrlCommand
 */
export const de_GetMediaUploadUrlCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaUploadUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'cloudfrontUrl': __expectString,
    'fileKey': __expectString,
    'message': __expectString,
    'presignedUrl': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetNearbyPropertiesCommand
 */
export const de_GetNearbyPropertiesCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNearbyPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'count': __expectInt32,
    'nextToken': __expectString,
    'properties': _ => de_PropertyList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPropertiesByLocationCommand
 */
export const de_GetPropertiesByLocationCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertiesByLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'count': __expectInt32,
    'nextToken': __expectString,
    'properties': _ => de_PropertyList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPropertyCommand
 */
export const de_GetPropertyCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'property': _ => de_Property(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetUserCommand
 */
export const de_GetUserCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'user': _ => de_UserProfile(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1ListLandlordPropertiesCommand
 */
export const de_ListLandlordPropertiesCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLandlordPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'count': __expectInt32,
    'nextToken': __expectString,
    'properties': _ => de_PropertyList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1ListManagedPropertiesCommand
 */
export const de_ListManagedPropertiesCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'count': __expectInt32,
    'nextToken': __expectString,
    'properties': _ => de_PropertyList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1ListPropertiesCommand
 */
export const de_ListPropertiesCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'count': __expectInt32,
    'nextToken': __expectString,
    'properties': _ => de_PropertyList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1MarkPropertyAsAvailableCommand
 */
export const de_MarkPropertyAsAvailableCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MarkPropertyAsAvailableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
    'property': _ => de_Property(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1MarkPropertyAsRentedCommand
 */
export const de_MarkPropertyAsRentedCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MarkPropertyAsRentedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
    'property': _ => de_Property(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1RemovePropertyManagerCommand
 */
export const de_RemovePropertyManagerCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePropertyManagerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
    'property': _ => de_Property(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1ResetPasswordCommand
 */
export const de_ResetPasswordCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPasswordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1ReviewLandlordApplicationCommand
 */
export const de_ReviewLandlordApplicationCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReviewLandlordApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1SearchPropertiesCommand
 */
export const de_SearchPropertiesCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'filters': _json,
    'nextToken': __expectString,
    'properties': _ => de_PropertyList(_, context),
    'totalCount': __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1SignInCommand
 */
export const de_SignInCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignInCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'accessToken': __expectString,
    'refreshToken': __expectString,
    'user': _ => de_UserProfile(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1SignUpCommand
 */
export const de_SignUpCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignUpCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
    'userId': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdatePropertyCommand
 */
export const de_UpdatePropertyCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
    'property': _ => de_Property(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdatePropertyStatusCommand
 */
export const de_UpdatePropertyStatusCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePropertyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
    'property': _ => de_Property(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdateUserCommand
 */
export const de_UpdateUserCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'user': _ => de_UserProfile(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1VerifyEmailCommand
 */
export const de_VerifyEmailCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'message': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.nest.rental#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PropertyNotFoundException":
    case "com.nest.rental#PropertyNotFoundException":
      throw await de_PropertyNotFoundExceptionRes(parsedOutput, context);
    case "RentalValidationException":
    case "com.nest.rental#RentalValidationException":
      throw await de_RentalValidationExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.nest.rental#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "smithy.framework#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      }) as never
    }
  }

  const throwDefaultError = withBaseException(__BaseException);
  /**
   * deserializeAws_restJson1InternalServerErrorRes
   */
  const de_InternalServerErrorRes = async (
    parsedOutput: any,
    context: __SerdeContext
  ): Promise<InternalServerError> => {
    const contents: any = map({
    });
    const data: any = parsedOutput.body;
    const doc = take(data, {
      'message': __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InternalServerError({
      $metadata: deserializeMetadata(parsedOutput),
      ...contents
    });
    return __decorateServiceException(exception, parsedOutput.body);
  };

  /**
   * deserializeAws_restJson1PropertyNotFoundExceptionRes
   */
  const de_PropertyNotFoundExceptionRes = async (
    parsedOutput: any,
    context: __SerdeContext
  ): Promise<PropertyNotFoundException> => {
    const contents: any = map({
    });
    const data: any = parsedOutput.body;
    const doc = take(data, {
      'message': __expectString,
    });
    Object.assign(contents, doc);
    const exception = new PropertyNotFoundException({
      $metadata: deserializeMetadata(parsedOutput),
      ...contents
    });
    return __decorateServiceException(exception, parsedOutput.body);
  };

  /**
   * deserializeAws_restJson1RentalValidationExceptionRes
   */
  const de_RentalValidationExceptionRes = async (
    parsedOutput: any,
    context: __SerdeContext
  ): Promise<RentalValidationException> => {
    const contents: any = map({
    });
    const data: any = parsedOutput.body;
    const doc = take(data, {
      'message': __expectString,
    });
    Object.assign(contents, doc);
    const exception = new RentalValidationException({
      $metadata: deserializeMetadata(parsedOutput),
      ...contents
    });
    return __decorateServiceException(exception, parsedOutput.body);
  };

  /**
   * deserializeAws_restJson1UnauthorizedExceptionRes
   */
  const de_UnauthorizedExceptionRes = async (
    parsedOutput: any,
    context: __SerdeContext
  ): Promise<UnauthorizedException> => {
    const contents: any = map({
    });
    const data: any = parsedOutput.body;
    const doc = take(data, {
      'message': __expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnauthorizedException({
      $metadata: deserializeMetadata(parsedOutput),
      ...contents
    });
    return __decorateServiceException(exception, parsedOutput.body);
  };

  /**
   * deserializeAws_restJson1ValidationExceptionRes
   */
  const de_ValidationExceptionRes = async (
    parsedOutput: any,
    context: __SerdeContext
  ): Promise<ValidationException> => {
    const contents: any = map({
    });
    const data: any = parsedOutput.body;
    const doc = take(data, {
      'fieldList': _json,
      'message': __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ValidationException({
      $metadata: deserializeMetadata(parsedOutput),
      ...contents
    });
    return __decorateServiceException(exception, parsedOutput.body);
  };

  /**
   * serializeAws_restJson1AddressInput
   */
  const se_AddressInput = (
    input: AddressInput,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'coordinates': _ => se_CoordinatesInput(_, context),
      'district': [],
      'region': [],
      'street': [],
      'ward': [],
    });
  }

  // se_ApplicationDecision omitted.

  // se_BecomeLandlordApplication omitted.

  /**
   * serializeAws_restJson1CoordinatesInput
   */
  const se_CoordinatesInput = (
    input: CoordinatesInput,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'lat': __serializeFloat,
      'lng': __serializeFloat,
    });
  }

  /**
   * serializeAws_restJson1CreatePropertyData
   */
  const se_CreatePropertyData = (
    input: CreatePropertyData,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'address': _ => se_AddressInput(_, context),
      'amenities': _json,
      'availability': _ => se_PropertyAvailabilityInput(_, context),
      'description': [],
      'landlordId': [],
      'media': _json,
      'pricing': _json,
      'propertyType': [],
      'specifications': _json,
      'title': [],
    });
  }

  // se_ManagementPermissions omitted.

  // se_MediaUploadInput omitted.

  // se_NotificationSettings omitted.

  /**
   * serializeAws_restJson1PropertyAvailabilityInput
   */
  const se_PropertyAvailabilityInput = (
    input: PropertyAvailabilityInput,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'availableFrom': _ => (_.getTime() / 1_000),
      'isAvailable': [],
      'leaseDuration': [],
    });
  }

  /**
   * serializeAws_restJson1PropertyManagerAssignment
   */
  const se_PropertyManagerAssignment = (
    input: PropertyManagerAssignment,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'commissionRate': __serializeFloat,
      'managerId': [],
      'permissions': _json,
    });
  }

  // se_PropertyMediaInput omitted.

  // se_PropertyPricingInput omitted.

  // se_PropertySpecificationsInput omitted.

  // se_PropertyStatusUpdate omitted.

  // se_StringList omitted.

  /**
   * serializeAws_restJson1UpdatePropertyData
   */
  const se_UpdatePropertyData = (
    input: UpdatePropertyData,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'address': _ => se_AddressInput(_, context),
      'amenities': _json,
      'availability': _ => se_PropertyAvailabilityInput(_, context),
      'description': [],
      'media': _json,
      'pricing': _json,
      'specifications': _json,
      'status': [],
      'title': [],
    });
  }

  // se_UpdateUserData omitted.

  // se_UserPreferences omitted.

  /**
   * deserializeAws_restJson1Address
   */
  const de_Address = (
    output: any,
    context: __SerdeContext
  ): Address => {
    return take(output, {
      'coordinates': (_: any) => de_Coordinates(_, context),
      'district': __expectString,
      'region': __expectString,
      'street': __expectString,
      'ward': __expectString,
    }) as any;
  }

  /**
   * deserializeAws_restJson1Admin
   */
  const de_Admin = (
    output: any,
    context: __SerdeContext
  ): Admin => {
    return take(output, {
      'accountStatus': __expectString,
      'adminLevel': __expectString,
      'createdAt': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'email': __expectString,
      'firstName': __expectString,
      'isEmailVerified': __expectBoolean,
      'lastName': __expectString,
      'permissions': _json,
      'phoneNumber': __expectString,
      'preferences': _json,
      'profileImage': __expectString,
      'updatedAt': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'userId': __expectString,
      'userType': __expectString,
    }) as any;
  }

  // de_ContactInfo omitted.

  /**
   * deserializeAws_restJson1Coordinates
   */
  const de_Coordinates = (
    output: any,
    context: __SerdeContext
  ): Coordinates => {
    return take(output, {
      'lat': __limitedParseDouble,
      'lng': __limitedParseDouble,
    }) as any;
  }

  /**
   * deserializeAws_restJson1EmploymentInfo
   */
  const de_EmploymentInfo = (
    output: any,
    context: __SerdeContext
  ): EmploymentInfo => {
    return take(output, {
      'employer': __expectString,
      'position': __expectString,
      'startDate': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'supervisorContact': __expectString,
      'workAddress': __expectString,
    }) as any;
  }

  /**
   * deserializeAws_restJson1Landlord
   */
  const de_Landlord = (
    output: any,
    context: __SerdeContext
  ): Landlord => {
    return take(output, {
      'accountStatus': __expectString,
      'businessLicense': __expectString,
      'businessName': __expectString,
      'createdAt': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'email': __expectString,
      'firstName': __expectString,
      'isEmailVerified': __expectBoolean,
      'isLandlordVerified': __expectBoolean,
      'lastName': __expectString,
      'phoneNumber': __expectString,
      'preferences': _json,
      'profileImage': __expectString,
      'propertyCount': __expectInt32,
      'taxId': __expectString,
      'updatedAt': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'userId': __expectString,
      'userType': __expectString,
      'verificationDocuments': _json,
    }) as any;
  }

  // de_NotificationSettings omitted.

  // de_PriceRange omitted.

  /**
   * deserializeAws_restJson1Property
   */
  const de_Property = (
    output: any,
    context: __SerdeContext
  ): Property => {
    return take(output, {
      'address': (_: any) => de_Address(_, context),
      'amenities': _json,
      'availability': (_: any) => de_PropertyAvailability(_, context),
      'createdAt': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'description': __expectString,
      'landlordId': __expectString,
      'managerId': __expectString,
      'media': _json,
      'pricing': _json,
      'propertyId': __expectString,
      'propertyType': __expectString,
      'specifications': _json,
      'status': __expectString,
      'title': __expectString,
      'updatedAt': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    }) as any;
  }

  /**
   * deserializeAws_restJson1PropertyAvailability
   */
  const de_PropertyAvailability = (
    output: any,
    context: __SerdeContext
  ): PropertyAvailability => {
    return take(output, {
      'availableFrom': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'isAvailable': __expectBoolean,
      'leaseDuration': __expectInt32,
    }) as any;
  }

  /**
   * deserializeAws_restJson1PropertyList
   */
  const de_PropertyList = (
    output: any,
    context: __SerdeContext
  ): (Property)[] => {
    const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
      return de_Property(entry, context);
    });
    return retVal;
  }

  // de_PropertyMedia omitted.

  // de_PropertyPricing omitted.

  // de_PropertySpecifications omitted.

  /**
   * deserializeAws_restJson1RentalHistory
   */
  const de_RentalHistory = (
    output: any,
    context: __SerdeContext
  ): RentalHistory => {
    return take(output, {
      'endDate': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'landlordContact': __expectString,
      'landlordName': __expectString,
      'monthlyRent': __expectLong,
      'propertyAddress': __expectString,
      'reasonForLeaving': __expectString,
      'startDate': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    }) as any;
  }

  /**
   * deserializeAws_restJson1RentalHistoryList
   */
  const de_RentalHistoryList = (
    output: any,
    context: __SerdeContext
  ): (RentalHistory)[] => {
    const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
      return de_RentalHistory(entry, context);
    });
    return retVal;
  }

  // de_SearchFilters omitted.

  // de_StringList omitted.

  /**
   * deserializeAws_restJson1Tenant
   */
  const de_Tenant = (
    output: any,
    context: __SerdeContext
  ): Tenant => {
    return take(output, {
      'accountStatus': __expectString,
      'createdAt': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'currentLease': __expectString,
      'email': __expectString,
      'emergencyContact': _json,
      'employmentInfo': (_: any) => de_EmploymentInfo(_, context),
      'firstName': __expectString,
      'isEmailVerified': __expectBoolean,
      'lastName': __expectString,
      'monthlyIncome': __expectLong,
      'phoneNumber': __expectString,
      'preferences': _json,
      'profileImage': __expectString,
      'rentalHistory': (_: any) => de_RentalHistoryList(_, context),
      'updatedAt': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
      'userId': __expectString,
      'userType': __expectString,
    }) as any;
  }

  // de_UserPreferences omitted.

  /**
   * deserializeAws_restJson1UserProfile
   */
  const de_UserProfile = (
    output: any,
    context: __SerdeContext
  ): UserProfile => {
    if (output.admin != null) {
      return {
        admin: de_Admin(output.admin, context)
      };
    }
    if (output.landlord != null) {
      return {
        landlord: de_Landlord(output.landlord, context)
      };
    }
    if (output.tenant != null) {
      return {
        tenant: de_Tenant(output.tenant, context)
      };
    }
    return { $unknown: Object.entries(output)[0] };
  }

  // de_ValidationExceptionField omitted.

  // de_ValidationExceptionFieldList omitted.

  const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  });

  // Encode Uint8Array data into string with utf-8.
  const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> => collectBody(streamBody, context).then(body => context.utf8Encoder(body))

  const isSerializableHeaderValue = (value: any): boolean =>
    value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
      value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

  const _d = "district";
  const _l = "lat";
  const _li = "limit";
  const _ln = "lng";
  const _mB = "minBedrooms";
  const _mR = "minRent";
  const _mRa = "maxRent";
  const _nT = "nextToken";
  const _pT = "propertyType";
  const _r = "radius";
  const _re = "region";
  const _w = "ward";
