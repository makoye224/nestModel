// smithy-typescript generated code
import {
  Address,
  AddressInput,
  Admin,
  ApplicationDecision,
  BecomeLandlordApplication,
  ContactInfo,
  Coordinates,
  CoordinatesInput,
  CreatePropertyData,
  EmploymentInfo,
  InternalServerError,
  Landlord,
  ManagementPermissions,
  MediaUploadInput,
  NotificationSettings,
  PriceRange,
  Property,
  PropertyAvailability,
  PropertyAvailabilityInput,
  PropertyManagerAssignment,
  PropertyMedia,
  PropertyMediaInput,
  PropertyNotFoundException,
  PropertyPricing,
  PropertyPricingInput,
  PropertySpecifications,
  PropertySpecificationsInput,
  PropertyStatusUpdate,
  RentalHistory,
  RentalValidationException,
  SearchFilters,
  Tenant,
  UnauthorizedException,
  UpdatePropertyData,
  UpdateUserData,
  UserPreferences,
  UserProfile,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import {
  AssignPropertyManagerServerInput,
  AssignPropertyManagerServerOutput,
} from "../server/operations/AssignPropertyManager";
import {
  BecomeLandlordServerInput,
  BecomeLandlordServerOutput,
} from "../server/operations/BecomeLandlord";
import {
  CreatePropertyServerInput,
  CreatePropertyServerOutput,
} from "../server/operations/CreateProperty";
import {
  DeletePropertyServerInput,
  DeletePropertyServerOutput,
} from "../server/operations/DeleteProperty";
import {
  ForgotPasswordServerInput,
  ForgotPasswordServerOutput,
} from "../server/operations/ForgotPassword";
import {
  GetMediaUploadUrlServerInput,
  GetMediaUploadUrlServerOutput,
} from "../server/operations/GetMediaUploadUrl";
import {
  GetNearbyPropertiesServerInput,
  GetNearbyPropertiesServerOutput,
} from "../server/operations/GetNearbyProperties";
import {
  GetPropertiesByLocationServerInput,
  GetPropertiesByLocationServerOutput,
} from "../server/operations/GetPropertiesByLocation";
import {
  GetPropertyServerInput,
  GetPropertyServerOutput,
} from "../server/operations/GetProperty";
import {
  GetUserServerInput,
  GetUserServerOutput,
} from "../server/operations/GetUser";
import {
  ListLandlordPropertiesServerInput,
  ListLandlordPropertiesServerOutput,
} from "../server/operations/ListLandlordProperties";
import {
  ListManagedPropertiesServerInput,
  ListManagedPropertiesServerOutput,
} from "../server/operations/ListManagedProperties";
import {
  ListPropertiesServerInput,
  ListPropertiesServerOutput,
} from "../server/operations/ListProperties";
import {
  MarkPropertyAsAvailableServerInput,
  MarkPropertyAsAvailableServerOutput,
} from "../server/operations/MarkPropertyAsAvailable";
import {
  MarkPropertyAsRentedServerInput,
  MarkPropertyAsRentedServerOutput,
} from "../server/operations/MarkPropertyAsRented";
import {
  RemovePropertyManagerServerInput,
  RemovePropertyManagerServerOutput,
} from "../server/operations/RemovePropertyManager";
import {
  ResetPasswordServerInput,
  ResetPasswordServerOutput,
} from "../server/operations/ResetPassword";
import {
  ReviewLandlordApplicationServerInput,
  ReviewLandlordApplicationServerOutput,
} from "../server/operations/ReviewLandlordApplication";
import {
  SearchPropertiesServerInput,
  SearchPropertiesServerOutput,
} from "../server/operations/SearchProperties";
import {
  SignInServerInput,
  SignInServerOutput,
} from "../server/operations/SignIn";
import {
  SignUpServerInput,
  SignUpServerOutput,
} from "../server/operations/SignUp";
import {
  UpdatePropertyServerInput,
  UpdatePropertyServerOutput,
} from "../server/operations/UpdateProperty";
import {
  UpdatePropertyStatusServerInput,
  UpdatePropertyStatusServerOutput,
} from "../server/operations/UpdatePropertyStatus";
import {
  UpdateUserServerInput,
  UpdateUserServerOutput,
} from "../server/operations/UpdateUser";
import {
  VerifyEmailServerInput,
  VerifyEmailServerOutput,
} from "../server/operations/VerifyEmail";
import {
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import {
  ServerSerdeContext,
  ServiceException as __BaseException,
  NotAcceptableException as __NotAcceptableException,
  SerializationException as __SerializationException,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnsupportedMediaTypeException as __UnsupportedMediaTypeException,
  acceptMatches as __acceptMatches,
} from "@aws-smithy/server-common";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  strictParseDouble as __strictParseDouble,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  _json,
  collectBody,
  map,
  take,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { calculateBodyLength } from "@smithy/util-body-length-node";

export const deserializeAssignPropertyManagerRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<AssignPropertyManagerServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/assign-manager/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.assignment = de_PropertyManagerAssignment(data, context);
  return contents;
}

export const deserializeBecomeLandlordRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<BecomeLandlordServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/user/(?<userId>[^/]+)/become-landlord");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.userId = decodeURIComponent(parsedPath.groups.userId);
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.application = de_BecomeLandlordApplication(data, context);
  return contents;
}

export const deserializeCreatePropertyRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<CreatePropertyServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.property = de_CreatePropertyData(data, context);
  return contents;
}

export const deserializeDeletePropertyRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<DeletePropertyServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/delete/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeForgotPasswordRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ForgotPasswordServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'email': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

export const deserializeGetMediaUploadUrlRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<GetMediaUploadUrlServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/upload-url/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.media = de_MediaUploadInput(data, context);
  return contents;
}

export const deserializeGetNearbyPropertiesRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<GetNearbyPropertiesServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const query = output.query
  if (query != null) {
    if (query["lat"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["lat"])) {
        if (query["lat"].length === 1) {
          queryValue = query["lat"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["lat"] as string;
      }
      contents.lat = __strictParseDouble(queryValue);
    }
    if (query["lng"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["lng"])) {
        if (query["lng"].length === 1) {
          queryValue = query["lng"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["lng"] as string;
      }
      contents.lng = __strictParseDouble(queryValue);
    }
    if (query["radius"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["radius"])) {
        if (query["radius"].length === 1) {
          queryValue = query["radius"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["radius"] as string;
      }
      contents.radius = __strictParseDouble(queryValue);
    }
    if (query["limit"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["limit"])) {
        if (query["limit"].length === 1) {
          queryValue = query["limit"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["limit"] as string;
      }
      contents.limit = __strictParseInt32(queryValue);
    }
    if (query["nextToken"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["nextToken"])) {
        if (query["nextToken"].length === 1) {
          queryValue = query["nextToken"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["nextToken"] as string;
      }
      contents.nextToken = queryValue;
    }
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeGetPropertiesByLocationRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<GetPropertiesByLocationServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const query = output.query
  if (query != null) {
    if (query["ward"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["ward"])) {
        if (query["ward"].length === 1) {
          queryValue = query["ward"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["ward"] as string;
      }
      contents.ward = queryValue;
    }
    if (query["limit"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["limit"])) {
        if (query["limit"].length === 1) {
          queryValue = query["limit"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["limit"] as string;
      }
      contents.limit = __strictParseInt32(queryValue);
    }
    if (query["nextToken"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["nextToken"])) {
        if (query["nextToken"].length === 1) {
          queryValue = query["nextToken"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["nextToken"] as string;
      }
      contents.nextToken = queryValue;
    }
  }
  const pathRegex = new RegExp("/property/by-location/(?<region>[^/]+)/(?<district>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.region = decodeURIComponent(parsedPath.groups.region);
    contents.district = decodeURIComponent(parsedPath.groups.district);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeGetPropertyRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<GetPropertyServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/get/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeGetUserRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<GetUserServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/user/(?<userId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.userId = decodeURIComponent(parsedPath.groups.userId);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeListLandlordPropertiesRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ListLandlordPropertiesServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const query = output.query
  if (query != null) {
    if (query["limit"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["limit"])) {
        if (query["limit"].length === 1) {
          queryValue = query["limit"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["limit"] as string;
      }
      contents.limit = __strictParseInt32(queryValue);
    }
    if (query["nextToken"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["nextToken"])) {
        if (query["nextToken"].length === 1) {
          queryValue = query["nextToken"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["nextToken"] as string;
      }
      contents.nextToken = queryValue;
    }
  }
  const pathRegex = new RegExp("/property/landlord/(?<userId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.userId = decodeURIComponent(parsedPath.groups.userId);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeListManagedPropertiesRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ListManagedPropertiesServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const query = output.query
  if (query != null) {
    if (query["limit"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["limit"])) {
        if (query["limit"].length === 1) {
          queryValue = query["limit"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["limit"] as string;
      }
      contents.limit = __strictParseInt32(queryValue);
    }
    if (query["nextToken"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["nextToken"])) {
        if (query["nextToken"].length === 1) {
          queryValue = query["nextToken"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["nextToken"] as string;
      }
      contents.nextToken = queryValue;
    }
  }
  const pathRegex = new RegExp("/property/managed/(?<managerId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.managerId = decodeURIComponent(parsedPath.groups.managerId);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeListPropertiesRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ListPropertiesServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const query = output.query
  if (query != null) {
    if (query["limit"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["limit"])) {
        if (query["limit"].length === 1) {
          queryValue = query["limit"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["limit"] as string;
      }
      contents.limit = __strictParseInt32(queryValue);
    }
    if (query["nextToken"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["nextToken"])) {
        if (query["nextToken"].length === 1) {
          queryValue = query["nextToken"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["nextToken"] as string;
      }
      contents.nextToken = queryValue;
    }
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeMarkPropertyAsAvailableRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MarkPropertyAsAvailableServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/mark-available/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeMarkPropertyAsRentedRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MarkPropertyAsRentedServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/mark-rented/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeRemovePropertyManagerRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<RemovePropertyManagerServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/remove-manager/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeResetPasswordRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ResetPasswordServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'confirmationCode': __expectString,
    'email': __expectString,
    'newPassword': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

export const deserializeReviewLandlordApplicationRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ReviewLandlordApplicationServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/admin/(?<applicationId>[^/]+)/(?<userId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.applicationId = decodeURIComponent(parsedPath.groups.applicationId);
    contents.userId = decodeURIComponent(parsedPath.groups.userId);
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.decision = de_ApplicationDecision(data, context);
  return contents;
}

export const deserializeSearchPropertiesRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<SearchPropertiesServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const query = output.query
  if (query != null) {
    if (query["region"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["region"])) {
        if (query["region"].length === 1) {
          queryValue = query["region"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["region"] as string;
      }
      contents.region = queryValue;
    }
    if (query["district"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["district"])) {
        if (query["district"].length === 1) {
          queryValue = query["district"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["district"] as string;
      }
      contents.district = queryValue;
    }
    if (query["ward"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["ward"])) {
        if (query["ward"].length === 1) {
          queryValue = query["ward"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["ward"] as string;
      }
      contents.ward = queryValue;
    }
    if (query["propertyType"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["propertyType"])) {
        if (query["propertyType"].length === 1) {
          queryValue = query["propertyType"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["propertyType"] as string;
      }
      contents.propertyType = queryValue;
    }
    if (query["minRent"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["minRent"])) {
        if (query["minRent"].length === 1) {
          queryValue = query["minRent"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["minRent"] as string;
      }
      contents.minRent = __strictParseLong(queryValue);
    }
    if (query["maxRent"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["maxRent"])) {
        if (query["maxRent"].length === 1) {
          queryValue = query["maxRent"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["maxRent"] as string;
      }
      contents.maxRent = __strictParseLong(queryValue);
    }
    if (query["minBedrooms"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["minBedrooms"])) {
        if (query["minBedrooms"].length === 1) {
          queryValue = query["minBedrooms"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["minBedrooms"] as string;
      }
      contents.minBedrooms = __strictParseInt32(queryValue);
    }
    if (query["limit"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["limit"])) {
        if (query["limit"].length === 1) {
          queryValue = query["limit"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["limit"] as string;
      }
      contents.limit = __strictParseInt32(queryValue);
    }
    if (query["nextToken"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["nextToken"])) {
        if (query["nextToken"].length === 1) {
          queryValue = query["nextToken"][0];
        }
        else {
          throw new __SerializationException();
        }
      }
      else {
        queryValue = query["nextToken"] as string;
      }
      contents.nextToken = queryValue;
    }
  }
  await collectBody(output.body, context);
  return contents;
}

export const deserializeSignInRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<SignInServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'email': __expectString,
    'password': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

export const deserializeSignUpRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<SignUpServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'email': __expectString,
    'firstName': __expectString,
    'lastName': __expectString,
    'password': __expectString,
    'phoneNumber': __expectString,
    'preferences': _ => de_UserPreferences(_, context),
  });
  Object.assign(contents, doc);
  return contents;
}

export const deserializeUpdatePropertyRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<UpdatePropertyServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/update/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.property = de_UpdatePropertyData(data, context);
  return contents;
}

export const deserializeUpdatePropertyStatusRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<UpdatePropertyStatusServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/property/update-status/(?<propertyId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.propertyId = decodeURIComponent(parsedPath.groups.propertyId);
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.statusUpdate = de_PropertyStatusUpdate(data, context);
  return contents;
}

export const deserializeUpdateUserRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<UpdateUserServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const pathRegex = new RegExp("/user/(?<userId>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.userId = decodeURIComponent(parsedPath.groups.userId);
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.userData = de_UpdateUserData(data, context);
  return contents;
}

export const deserializeVerifyEmailRequest = async(
  output: __HttpRequest,
  context: __SerdeContext
): Promise<VerifyEmailServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'content-type');
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    };
  };
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find(key => key.toLowerCase() === 'accept');
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    };
  };
  const contents: any = map({
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'confirmationCode': __expectString,
    'email': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

export const serializeAssignPropertyManagerResponse = async(
  input: AssignPropertyManagerServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
    'property': _ => se_Property(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeBecomeLandlordResponse = async(
  input: BecomeLandlordServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'applicationId': [],
    'message': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeCreatePropertyResponse = async(
  input: CreatePropertyServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
    'property': _ => se_Property(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeDeletePropertyResponse = async(
  input: DeletePropertyServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeForgotPasswordResponse = async(
  input: ForgotPasswordServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeGetMediaUploadUrlResponse = async(
  input: GetMediaUploadUrlServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'cloudfrontUrl': [],
    'fileKey': [],
    'message': [],
    'presignedUrl': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeGetNearbyPropertiesResponse = async(
  input: GetNearbyPropertiesServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'count': [],
    'nextToken': [],
    'properties': _ => se_PropertyList(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeGetPropertiesByLocationResponse = async(
  input: GetPropertiesByLocationServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'count': [],
    'nextToken': [],
    'properties': _ => se_PropertyList(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeGetPropertyResponse = async(
  input: GetPropertyServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'property': _ => se_Property(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeGetUserResponse = async(
  input: GetUserServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'user': _ => se_UserProfile(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeListLandlordPropertiesResponse = async(
  input: ListLandlordPropertiesServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'count': [],
    'nextToken': [],
    'properties': _ => se_PropertyList(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeListManagedPropertiesResponse = async(
  input: ListManagedPropertiesServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'count': [],
    'nextToken': [],
    'properties': _ => se_PropertyList(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeListPropertiesResponse = async(
  input: ListPropertiesServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'count': [],
    'nextToken': [],
    'properties': _ => se_PropertyList(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeMarkPropertyAsAvailableResponse = async(
  input: MarkPropertyAsAvailableServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
    'property': _ => se_Property(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeMarkPropertyAsRentedResponse = async(
  input: MarkPropertyAsRentedServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
    'property': _ => se_Property(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeRemovePropertyManagerResponse = async(
  input: RemovePropertyManagerServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
    'property': _ => se_Property(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeResetPasswordResponse = async(
  input: ResetPasswordServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeReviewLandlordApplicationResponse = async(
  input: ReviewLandlordApplicationServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeSearchPropertiesResponse = async(
  input: SearchPropertiesServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'filters': _ => se_SearchFilters(_, context),
    'nextToken': [],
    'properties': _ => se_PropertyList(_, context),
    'totalCount': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeSignInResponse = async(
  input: SignInServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'accessToken': [],
    'refreshToken': [],
    'user': _ => se_UserProfile(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeSignUpResponse = async(
  input: SignUpServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
    'userId': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeUpdatePropertyResponse = async(
  input: UpdatePropertyServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
    'property': _ => se_Property(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeUpdatePropertyStatusResponse = async(
  input: UpdatePropertyStatusServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
    'property': _ => se_Property(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeUpdateUserResponse = async(
  input: UpdateUserServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'user': _ => se_UserProfile(_, context),
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeVerifyEmailResponse = async(
  input: VerifyEmailServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  let statusCode: number = 200
  let headers: any = map({}, isSerializableHeaderValue, {
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf('content-length') === -1) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, 'content-length': String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeFrameworkException = async(
  input: __SmithyFrameworkException,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  switch (input.name) {
    case "InternalFailure": {
      const statusCode: number = 500
      let headers: any = map({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "InternalFailure",
        'content-type': 'application/json',
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
    case "NotAcceptableException": {
      const statusCode: number = 406
      let headers: any = map({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "NotAcceptableException",
        'content-type': 'application/json',
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
    case "SerializationException": {
      const statusCode: number = 400
      let headers: any = map({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "SerializationException",
        'content-type': 'application/json',
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
    case "UnknownOperationException": {
      const statusCode: number = 404
      let headers: any = map({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "UnknownOperationException",
        'content-type': 'application/json',
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
    case "UnsupportedMediaTypeException": {
      const statusCode: number = 415
      let headers: any = map({}, isSerializableHeaderValue, {
        'x-amzn-errortype': "UnsupportedMediaTypeException",
        'content-type': 'application/json',
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
  }
}

export const serializeInternalServerErrorError = async(
  input: InternalServerError,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  const statusCode: number = 500
  let headers: any = map({}, isSerializableHeaderValue, {
    'x-amzn-errortype': "InternalServerError",
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializePropertyNotFoundExceptionError = async(
  input: PropertyNotFoundException,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  const statusCode: number = 404
  let headers: any = map({}, isSerializableHeaderValue, {
    'x-amzn-errortype': "PropertyNotFoundException",
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeRentalValidationExceptionError = async(
  input: RentalValidationException,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  const statusCode: number = 400
  let headers: any = map({}, isSerializableHeaderValue, {
    'x-amzn-errortype': "RentalValidationException",
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeUnauthorizedExceptionError = async(
  input: UnauthorizedException,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  const statusCode: number = 401
  let headers: any = map({}, isSerializableHeaderValue, {
    'x-amzn-errortype': "UnauthorizedException",
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'message': [],
  }));
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

export const serializeValidationExceptionError = async(
  input: ValidationException,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () => Promise.resolve({
      protocol: '',
      hostname: '',
      path: '',
    }),
  }
  const statusCode: number = 400
  let headers: any = map({}, isSerializableHeaderValue, {
    'x-amzn-errortype': "ValidationException",
    'content-type': 'application/json',
  });
  let body: any;
  body = JSON.stringify(take(input, {
    'fieldList': _ => se_ValidationExceptionFieldList(_, context),
    'message': [],
  }));
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
}

/**
 * serializeAws_restJson1Address
 */
const se_Address = (
  input: Address,
  context: __SerdeContext
): any => {
  return take(input, {
    'coordinates': _ => se_Coordinates(_, context),
    'district': [],
    'region': [],
    'street': [],
    'ward': [],
  });
}

/**
 * serializeAws_restJson1Admin
 */
const se_Admin = (
  input: Admin,
  context: __SerdeContext
): any => {
  return take(input, {
    'accountStatus': [],
    'adminLevel': [],
    'createdAt': _ => (_.getTime() / 1_000),
    'email': [],
    'firstName': [],
    'isEmailVerified': [],
    'lastName': [],
    'permissions': _ => se_StringList(_, context),
    'phoneNumber': [],
    'preferences': _ => se_UserPreferences(_, context),
    'profileImage': [],
    'updatedAt': _ => (_.getTime() / 1_000),
    'userId': [],
    'userType': [],
  });
}

/**
 * serializeAws_restJson1ContactInfo
 */
const se_ContactInfo = (
  input: ContactInfo,
  context: __SerdeContext
): any => {
  return take(input, {
    'email': [],
    'name': [],
    'phoneNumber': [],
    'relationship': [],
  });
}

/**
 * serializeAws_restJson1Coordinates
 */
const se_Coordinates = (
  input: Coordinates,
  context: __SerdeContext
): any => {
  return take(input, {
    'lat': __serializeFloat,
    'lng': __serializeFloat,
  });
}

/**
 * serializeAws_restJson1EmploymentInfo
 */
const se_EmploymentInfo = (
  input: EmploymentInfo,
  context: __SerdeContext
): any => {
  return take(input, {
    'employer': [],
    'position': [],
    'startDate': _ => (_.getTime() / 1_000),
    'supervisorContact': [],
    'workAddress': [],
  });
}

/**
 * serializeAws_restJson1Landlord
 */
const se_Landlord = (
  input: Landlord,
  context: __SerdeContext
): any => {
  return take(input, {
    'accountStatus': [],
    'businessLicense': [],
    'businessName': [],
    'createdAt': _ => (_.getTime() / 1_000),
    'email': [],
    'firstName': [],
    'isEmailVerified': [],
    'isLandlordVerified': [],
    'lastName': [],
    'phoneNumber': [],
    'preferences': _ => se_UserPreferences(_, context),
    'profileImage': [],
    'propertyCount': [],
    'taxId': [],
    'updatedAt': _ => (_.getTime() / 1_000),
    'userId': [],
    'userType': [],
    'verificationDocuments': _ => se_StringList(_, context),
  });
}

/**
 * serializeAws_restJson1NotificationSettings
 */
const se_NotificationSettings = (
  input: NotificationSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    'email': [],
    'push': [],
    'sms': [],
  });
}

/**
 * serializeAws_restJson1PriceRange
 */
const se_PriceRange = (
  input: PriceRange,
  context: __SerdeContext
): any => {
  return take(input, {
    'max': [],
    'min': [],
  });
}

/**
 * serializeAws_restJson1Property
 */
const se_Property = (
  input: Property,
  context: __SerdeContext
): any => {
  return take(input, {
    'address': _ => se_Address(_, context),
    'amenities': _ => se_StringList(_, context),
    'availability': _ => se_PropertyAvailability(_, context),
    'createdAt': _ => (_.getTime() / 1_000),
    'description': [],
    'landlordId': [],
    'managerId': [],
    'media': _ => se_PropertyMedia(_, context),
    'pricing': _ => se_PropertyPricing(_, context),
    'propertyId': [],
    'propertyType': [],
    'specifications': _ => se_PropertySpecifications(_, context),
    'status': [],
    'title': [],
    'updatedAt': _ => (_.getTime() / 1_000),
  });
}

/**
 * serializeAws_restJson1PropertyAvailability
 */
const se_PropertyAvailability = (
  input: PropertyAvailability,
  context: __SerdeContext
): any => {
  return take(input, {
    'availableFrom': _ => (_.getTime() / 1_000),
    'isAvailable': [],
    'leaseDuration': [],
  });
}

/**
 * serializeAws_restJson1PropertyList
 */
const se_PropertyList = (
  input: (Property)[],
  context: __SerdeContext
): any => {
  return input.filter((e: any) => e != null).map(entry => {
    return se_Property(entry, context);
  });
}

/**
 * serializeAws_restJson1PropertyMedia
 */
const se_PropertyMedia = (
  input: PropertyMedia,
  context: __SerdeContext
): any => {
  return take(input, {
    'images': _ => se_StringList(_, context),
    'videos': _ => se_StringList(_, context),
    'virtualTour': [],
  });
}

/**
 * serializeAws_restJson1PropertyPricing
 */
const se_PropertyPricing = (
  input: PropertyPricing,
  context: __SerdeContext
): any => {
  return take(input, {
    'deposit': [],
    'monthlyRent': [],
    'utilities': [],
    'utilityCost': [],
  });
}

/**
 * serializeAws_restJson1PropertySpecifications
 */
const se_PropertySpecifications = (
  input: PropertySpecifications,
  context: __SerdeContext
): any => {
  return take(input, {
    'bathrooms': [],
    'bedrooms': [],
    'furnished': [],
    'parking': [],
    'squareMeters': [],
  });
}

/**
 * serializeAws_restJson1RentalHistory
 */
const se_RentalHistory = (
  input: RentalHistory,
  context: __SerdeContext
): any => {
  return take(input, {
    'endDate': _ => (_.getTime() / 1_000),
    'landlordContact': [],
    'landlordName': [],
    'monthlyRent': [],
    'propertyAddress': [],
    'reasonForLeaving': [],
    'startDate': _ => (_.getTime() / 1_000),
  });
}

/**
 * serializeAws_restJson1RentalHistoryList
 */
const se_RentalHistoryList = (
  input: (RentalHistory)[],
  context: __SerdeContext
): any => {
  return input.filter((e: any) => e != null).map(entry => {
    return se_RentalHistory(entry, context);
  });
}

/**
 * serializeAws_restJson1SearchFilters
 */
const se_SearchFilters = (
  input: SearchFilters,
  context: __SerdeContext
): any => {
  return take(input, {
    'district': [],
    'minBedrooms': [],
    'propertyType': [],
    'region': [],
    'rentRange': _ => se_PriceRange(_, context),
    'ward': [],
  });
}

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (
  input: (string)[],
  context: __SerdeContext
): any => {
  return input.filter((e: any) => e != null);
}

/**
 * serializeAws_restJson1Tenant
 */
const se_Tenant = (
  input: Tenant,
  context: __SerdeContext
): any => {
  return take(input, {
    'accountStatus': [],
    'createdAt': _ => (_.getTime() / 1_000),
    'currentLease': [],
    'email': [],
    'emergencyContact': _ => se_ContactInfo(_, context),
    'employmentInfo': _ => se_EmploymentInfo(_, context),
    'firstName': [],
    'isEmailVerified': [],
    'lastName': [],
    'monthlyIncome': [],
    'phoneNumber': [],
    'preferences': _ => se_UserPreferences(_, context),
    'profileImage': [],
    'rentalHistory': _ => se_RentalHistoryList(_, context),
    'updatedAt': _ => (_.getTime() / 1_000),
    'userId': [],
    'userType': [],
  });
}

/**
 * serializeAws_restJson1UserPreferences
 */
const se_UserPreferences = (
  input: UserPreferences,
  context: __SerdeContext
): any => {
  return take(input, {
    'currency': [],
    'language': [],
    'notifications': _ => se_NotificationSettings(_, context),
  });
}

/**
 * serializeAws_restJson1UserProfile
 */
const se_UserProfile = (
  input: UserProfile,
  context: __SerdeContext
): any => {
  return UserProfile.visit(input, {
    admin: value => ({ "admin": se_Admin(value, context) }),
    landlord: value => ({ "landlord": se_Landlord(value, context) }),
    tenant: value => ({ "tenant": se_Tenant(value, context) }),
    _: (name, value) => ({ name: value } as any)
  });
}

/**
 * serializeAws_restJson1ValidationExceptionField
 */
const se_ValidationExceptionField = (
  input: ValidationExceptionField,
  context: __SerdeContext
): any => {
  return take(input, {
    'message': [],
    'path': [],
  });
}

/**
 * serializeAws_restJson1ValidationExceptionFieldList
 */
const se_ValidationExceptionFieldList = (
  input: (ValidationExceptionField)[],
  context: __SerdeContext
): any => {
  return input.filter((e: any) => e != null).map(entry => {
    return se_ValidationExceptionField(entry, context);
  });
}

/**
 * deserializeAws_restJson1AddressInput
 */
const de_AddressInput = (
  output: any,
  context: __SerdeContext
): AddressInput => {
  return take(output, {
    'coordinates': (_: any) => de_CoordinatesInput(_, context),
    'district': __expectString,
    'region': __expectString,
    'street': __expectString,
    'ward': __expectString,
  }) as any;
}

/**
 * deserializeAws_restJson1ApplicationDecision
 */
const de_ApplicationDecision = (
  output: any,
  context: __SerdeContext
): ApplicationDecision => {
  return take(output, {
    'comments': __expectString,
    'status': __expectString,
  }) as any;
}

/**
 * deserializeAws_restJson1BecomeLandlordApplication
 */
const de_BecomeLandlordApplication = (
  output: any,
  context: __SerdeContext
): BecomeLandlordApplication => {
  return take(output, {
    'businessLicense': __expectString,
    'businessName': __expectString,
    'taxId': __expectString,
    'verificationDocuments': (_: any) => de_StringList(_, context),
  }) as any;
}

/**
 * deserializeAws_restJson1CoordinatesInput
 */
const de_CoordinatesInput = (
  output: any,
  context: __SerdeContext
): CoordinatesInput => {
  return take(output, {
    'lat': __limitedParseDouble,
    'lng': __limitedParseDouble,
  }) as any;
}

/**
 * deserializeAws_restJson1CreatePropertyData
 */
const de_CreatePropertyData = (
  output: any,
  context: __SerdeContext
): CreatePropertyData => {
  return take(output, {
    'address': (_: any) => de_AddressInput(_, context),
    'amenities': (_: any) => de_StringList(_, context),
    'availability': (_: any) => de_PropertyAvailabilityInput(_, context),
    'description': __expectString,
    'landlordId': __expectString,
    'media': (_: any) => de_PropertyMediaInput(_, context),
    'pricing': (_: any) => de_PropertyPricingInput(_, context),
    'propertyType': __expectString,
    'specifications': (_: any) => de_PropertySpecificationsInput(_, context),
    'title': __expectString,
  }) as any;
}

/**
 * deserializeAws_restJson1ManagementPermissions
 */
const de_ManagementPermissions = (
  output: any,
  context: __SerdeContext
): ManagementPermissions => {
  return take(output, {
    'collectRent': __expectBoolean,
    'handleMaintenance': __expectBoolean,
    'screenTenants': __expectBoolean,
    'updateListing': __expectBoolean,
  }) as any;
}

/**
 * deserializeAws_restJson1MediaUploadInput
 */
const de_MediaUploadInput = (
  output: any,
  context: __SerdeContext
): MediaUploadInput => {
  return take(output, {
    'fileName': __expectString,
    'mediaType': __expectString,
    'userId': __expectString,
  }) as any;
}

/**
 * deserializeAws_restJson1NotificationSettings
 */
const de_NotificationSettings = (
  output: any,
  context: __SerdeContext
): NotificationSettings => {
  return take(output, {
    'email': __expectBoolean,
    'push': __expectBoolean,
    'sms': __expectBoolean,
  }) as any;
}

/**
 * deserializeAws_restJson1PropertyAvailabilityInput
 */
const de_PropertyAvailabilityInput = (
  output: any,
  context: __SerdeContext
): PropertyAvailabilityInput => {
  return take(output, {
    'availableFrom': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    'isAvailable': __expectBoolean,
    'leaseDuration': __expectInt32,
  }) as any;
}

/**
 * deserializeAws_restJson1PropertyManagerAssignment
 */
const de_PropertyManagerAssignment = (
  output: any,
  context: __SerdeContext
): PropertyManagerAssignment => {
  return take(output, {
    'commissionRate': __limitedParseDouble,
    'managerId': __expectString,
    'permissions': (_: any) => de_ManagementPermissions(_, context),
  }) as any;
}

/**
 * deserializeAws_restJson1PropertyMediaInput
 */
const de_PropertyMediaInput = (
  output: any,
  context: __SerdeContext
): PropertyMediaInput => {
  return take(output, {
    'images': (_: any) => de_StringList(_, context),
    'videos': (_: any) => de_StringList(_, context),
    'virtualTour': __expectString,
  }) as any;
}

/**
 * deserializeAws_restJson1PropertyPricingInput
 */
const de_PropertyPricingInput = (
  output: any,
  context: __SerdeContext
): PropertyPricingInput => {
  return take(output, {
    'deposit': __expectLong,
    'monthlyRent': __expectLong,
    'utilities': __expectString,
    'utilityCost': __expectLong,
  }) as any;
}

/**
 * deserializeAws_restJson1PropertySpecificationsInput
 */
const de_PropertySpecificationsInput = (
  output: any,
  context: __SerdeContext
): PropertySpecificationsInput => {
  return take(output, {
    'bathrooms': __expectInt32,
    'bedrooms': __expectInt32,
    'furnished': __expectBoolean,
    'parking': __expectBoolean,
    'squareMeters': __expectInt32,
  }) as any;
}

/**
 * deserializeAws_restJson1PropertyStatusUpdate
 */
const de_PropertyStatusUpdate = (
  output: any,
  context: __SerdeContext
): PropertyStatusUpdate => {
  return take(output, {
    'status': __expectString,
  }) as any;
}

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (
  output: any,
  context: __SerdeContext
): (string)[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError('All elements of the non-sparse list "com.nest.rental#StringList" must be non-null.');
    }
    return __expectString(entry) as any;
  });
  return retVal;
}

/**
 * deserializeAws_restJson1UpdatePropertyData
 */
const de_UpdatePropertyData = (
  output: any,
  context: __SerdeContext
): UpdatePropertyData => {
  return take(output, {
    'address': (_: any) => de_AddressInput(_, context),
    'amenities': (_: any) => de_StringList(_, context),
    'availability': (_: any) => de_PropertyAvailabilityInput(_, context),
    'description': __expectString,
    'media': (_: any) => de_PropertyMediaInput(_, context),
    'pricing': (_: any) => de_PropertyPricingInput(_, context),
    'specifications': (_: any) => de_PropertySpecificationsInput(_, context),
    'status': __expectString,
    'title': __expectString,
  }) as any;
}

/**
 * deserializeAws_restJson1UpdateUserData
 */
const de_UpdateUserData = (
  output: any,
  context: __SerdeContext
): UpdateUserData => {
  return take(output, {
    'firstName': __expectString,
    'lastName': __expectString,
    'phoneNumber': __expectString,
    'preferences': (_: any) => de_UserPreferences(_, context),
    'profileImage': __expectString,
  }) as any;
}

/**
 * deserializeAws_restJson1UserPreferences
 */
const de_UserPreferences = (
  output: any,
  context: __SerdeContext
): UserPreferences => {
  return take(output, {
    'currency': __expectString,
    'language': __expectString,
    'notifications': (_: any) => de_NotificationSettings(_, context),
  }) as any;
}

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
