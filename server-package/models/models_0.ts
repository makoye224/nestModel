// smithy-typescript generated code
import {
  ServiceException as __BaseException,
  CompositeCollectionValidator as __CompositeCollectionValidator,
  CompositeStructureValidator as __CompositeStructureValidator,
  CompositeValidator as __CompositeValidator,
  EnumValidator as __EnumValidator,
  LengthValidator as __LengthValidator,
  MultiConstraintValidator as __MultiConstraintValidator,
  NoOpValidator as __NoOpValidator,
  PatternValidator as __PatternValidator,
  RangeValidator as __RangeValidator,
  RequiredValidator as __RequiredValidator,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

/**
 * @public
 * @enum
 */
export const AccountStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING_EMAIL_VERIFICATION: "PENDING_EMAIL_VERIFICATION",
  PENDING_LANDLORD_VERIFICATION: "PENDING_LANDLORD_VERIFICATION",
  SUSPENDED: "SUSPENDED",
} as const
/**
 * @public
 */
export type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus]

/**
 * GPS coordinates
 * @public
 */
export interface Coordinates {
  /**
   * Latitude
   * @public
   */
  lat: number | undefined;

  /**
   * Longitude
   * @public
   */
  lng: number | undefined;
}

export namespace Coordinates {
  const memberValidators : {
    lat?: __MultiConstraintValidator<number>,
    lng?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Coordinates, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "lat": {
            memberValidators["lat"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(-90, 90),
            ]);
            break;
          }
          case "lng": {
            memberValidators["lng"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(-180, 180),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("lat").validate(obj.lat, `${path}/lat`),
      ...getMemberValidator("lng").validate(obj.lng, `${path}/lng`),
    ];
  }
}

/**
 * @public
 * @enum
 */
export const Region = {
  ARUSHA: "ARUSHA",
  DAR_ES_SALAAM: "DAR_ES_SALAAM",
  DODOMA: "DODOMA",
} as const
/**
 * @public
 */
export type Region = typeof Region[keyof typeof Region]

/**
 * Property address information
 * @public
 */
export interface Address {
  /**
   * Street address
   * @public
   */
  street: string | undefined;

  /**
   * Region in Tanzania
   * @public
   */
  region: Region | undefined;

  /**
   * District (format: reg_district)
   * @public
   */
  district: string | undefined;

  /**
   * Ward (format: reg_district_ward)
   * @public
   */
  ward: string | undefined;

  /**
   * GPS coordinates
   * @public
   */
  coordinates?: Coordinates;
}

export namespace Address {
  const memberValidators : {
    street?: __MultiConstraintValidator<string>,
    region?: __MultiConstraintValidator<string>,
    district?: __MultiConstraintValidator<string>,
    ward?: __MultiConstraintValidator<string>,
    coordinates?: __MultiConstraintValidator<Coordinates>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Address, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "street": {
            memberValidators["street"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(5, 200),
            ]);
            break;
          }
          case "region": {
            memberValidators["region"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "DAR_ES_SALAAM",
                "ARUSHA",
                "DODOMA",
                ], [
                "DAR_ES_SALAAM",
                "ARUSHA",
                "DODOMA",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "district": {
            memberValidators["district"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "ward": {
            memberValidators["ward"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 100),
            ]);
            break;
          }
          case "coordinates": {
            memberValidators["coordinates"] = new __CompositeStructureValidator<Coordinates>(
              new __NoOpValidator(),
              Coordinates.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("street").validate(obj.street, `${path}/street`),
      ...getMemberValidator("region").validate(obj.region, `${path}/region`),
      ...getMemberValidator("district").validate(obj.district, `${path}/district`),
      ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
      ...getMemberValidator("coordinates").validate(obj.coordinates, `${path}/coordinates`),
    ];
  }
}

/**
 * Coordinates input
 * @public
 */
export interface CoordinatesInput {
  /**
   * Latitude
   * @public
   */
  lat: number | undefined;

  /**
   * Longitude
   * @public
   */
  lng: number | undefined;
}

export namespace CoordinatesInput {
  const memberValidators : {
    lat?: __MultiConstraintValidator<number>,
    lng?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: CoordinatesInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "lat": {
            memberValidators["lat"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(-90, 90),
            ]);
            break;
          }
          case "lng": {
            memberValidators["lng"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(-180, 180),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("lat").validate(obj.lat, `${path}/lat`),
      ...getMemberValidator("lng").validate(obj.lng, `${path}/lng`),
    ];
  }
}

/**
 * Address input
 * @public
 */
export interface AddressInput {
  /**
   * Street address
   * @public
   */
  street: string | undefined;

  /**
   * Region
   * @public
   */
  region: Region | undefined;

  /**
   * District (format: reg_district)
   * @public
   */
  district: string | undefined;

  /**
   * Ward (format: reg_district_ward)
   * @public
   */
  ward: string | undefined;

  /**
   * GPS coordinates
   * @public
   */
  coordinates?: CoordinatesInput;
}

export namespace AddressInput {
  const memberValidators : {
    street?: __MultiConstraintValidator<string>,
    region?: __MultiConstraintValidator<string>,
    district?: __MultiConstraintValidator<string>,
    ward?: __MultiConstraintValidator<string>,
    coordinates?: __MultiConstraintValidator<CoordinatesInput>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: AddressInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "street": {
            memberValidators["street"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(5, 200),
            ]);
            break;
          }
          case "region": {
            memberValidators["region"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "DAR_ES_SALAAM",
                "ARUSHA",
                "DODOMA",
                ], [
                "DAR_ES_SALAAM",
                "ARUSHA",
                "DODOMA",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "district": {
            memberValidators["district"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "ward": {
            memberValidators["ward"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 100),
            ]);
            break;
          }
          case "coordinates": {
            memberValidators["coordinates"] = new __CompositeStructureValidator<CoordinatesInput>(
              new __NoOpValidator(),
              CoordinatesInput.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("street").validate(obj.street, `${path}/street`),
      ...getMemberValidator("region").validate(obj.region, `${path}/region`),
      ...getMemberValidator("district").validate(obj.district, `${path}/district`),
      ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
      ...getMemberValidator("coordinates").validate(obj.coordinates, `${path}/coordinates`),
    ];
  }
}

/**
 * @public
 * @enum
 */
export const AdminLevel = {
  MODERATOR: "MODERATOR",
  SUPER_ADMIN: "SUPER_ADMIN",
  SUPPORT: "SUPPORT",
} as const
/**
 * @public
 */
export type AdminLevel = typeof AdminLevel[keyof typeof AdminLevel]

/**
 * @public
 * @enum
 */
export const Currency = {
  TZS: "TZS",
} as const
/**
 * @public
 */
export type Currency = typeof Currency[keyof typeof Currency]

/**
 * @public
 * @enum
 */
export const Language = {
  EN: "EN",
  SW: "SW",
} as const
/**
 * @public
 */
export type Language = typeof Language[keyof typeof Language]

/**
 * Notification settings
 * @public
 */
export interface NotificationSettings {
  /**
   * Email notifications enabled
   * @public
   */
  email: boolean | undefined;

  /**
   * SMS notifications enabled
   * @public
   */
  sms: boolean | undefined;

  /**
   * Push notifications enabled
   * @public
   */
  push: boolean | undefined;
}

export namespace NotificationSettings {
  const memberValidators : {
    email?: __MultiConstraintValidator<boolean>,
    sms?: __MultiConstraintValidator<boolean>,
    push?: __MultiConstraintValidator<boolean>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: NotificationSettings, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "email": {
            memberValidators["email"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "sms": {
            memberValidators["sms"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "push": {
            memberValidators["push"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("sms").validate(obj.sms, `${path}/sms`),
      ...getMemberValidator("push").validate(obj.push, `${path}/push`),
    ];
  }
}

/**
 * User preferences and settings
 * @public
 */
export interface UserPreferences {
  /**
   * Preferred language
   * @public
   */
  language?: Language;

  /**
   * Preferred currency
   * @public
   */
  currency?: Currency;

  /**
   * Notification preferences
   * @public
   */
  notifications?: NotificationSettings;
}

export namespace UserPreferences {
  const memberValidators : {
    language?: __MultiConstraintValidator<string>,
    currency?: __MultiConstraintValidator<string>,
    notifications?: __MultiConstraintValidator<NotificationSettings>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UserPreferences, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "language": {
            memberValidators["language"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "EN",
                "SW",
                ], [
                "EN",
                "SW",
              ]),
            ]);
            break;
          }
          case "currency": {
            memberValidators["currency"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "TZS",
                ], [
                "TZS",
              ]),
            ]);
            break;
          }
          case "notifications": {
            memberValidators["notifications"] = new __CompositeStructureValidator<NotificationSettings>(
              new __NoOpValidator(),
              NotificationSettings.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("language").validate(obj.language, `${path}/language`),
      ...getMemberValidator("currency").validate(obj.currency, `${path}/currency`),
      ...getMemberValidator("notifications").validate(obj.notifications, `${path}/notifications`),
    ];
  }
}

/**
 * @public
 * @enum
 */
export const UserType = {
  ADMIN: "ADMIN",
  LANDLORD: "LANDLORD",
  TENANT: "TENANT",
} as const
/**
 * @public
 */
export type UserType = typeof UserType[keyof typeof UserType]

/**
 * Admin user with system management privileges
 * @public
 */
export interface Admin {
  /**
   * Unique user identifier
   * @public
   */
  userId: string | undefined;

  /**
   * User email address
   * @public
   */
  email: string | undefined;

  /**
   * Tanzania phone number (+255 format)
   * @public
   */
  phoneNumber: string | undefined;

  /**
   * User first name
   * @public
   */
  firstName: string | undefined;

  /**
   * User last name
   * @public
   */
  lastName: string | undefined;

  /**
   * User type discriminator
   * @public
   */
  userType: UserType | undefined;

  /**
   * Profile image URL
   * @public
   */
  profileImage?: string;

  /**
   * Email verification status
   * @public
   */
  isEmailVerified: boolean | undefined;

  /**
   * Current account status
   * @public
   */
  accountStatus: AccountStatus | undefined;

  /**
   * Account creation timestamp
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Last update timestamp
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * User preferences
   * @public
   */
  preferences?: UserPreferences;

  /**
   * Administrative access level
   * @public
   */
  adminLevel: AdminLevel | undefined;

  /**
   * Specific admin permissions
   * @public
   */
  permissions?: (string)[];
}

export namespace Admin {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    email?: __MultiConstraintValidator<string>,
    phoneNumber?: __MultiConstraintValidator<string>,
    firstName?: __MultiConstraintValidator<string>,
    lastName?: __MultiConstraintValidator<string>,
    userType?: __MultiConstraintValidator<string>,
    profileImage?: __MultiConstraintValidator<string>,
    isEmailVerified?: __MultiConstraintValidator<boolean>,
    accountStatus?: __MultiConstraintValidator<string>,
    createdAt?: __MultiConstraintValidator<Date>,
    updatedAt?: __MultiConstraintValidator<Date>,
    preferences?: __MultiConstraintValidator<UserPreferences>,
    adminLevel?: __MultiConstraintValidator<string>,
    permissions?: __MultiConstraintValidator<Iterable<string>>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Admin, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "phoneNumber": {
            memberValidators["phoneNumber"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^\\+255[67][0-9]{8}$"),
            ]);
            break;
          }
          case "firstName": {
            memberValidators["firstName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "lastName": {
            memberValidators["lastName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "userType": {
            memberValidators["userType"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "LANDLORD",
                "TENANT",
                "ADMIN",
                ], [
                "LANDLORD",
                "TENANT",
                "ADMIN",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "profileImage": {
            memberValidators["profileImage"] = new __NoOpValidator();
            break;
          }
          case "isEmailVerified": {
            memberValidators["isEmailVerified"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "accountStatus": {
            memberValidators["accountStatus"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "PENDING_EMAIL_VERIFICATION",
                "ACTIVE",
                "PENDING_LANDLORD_VERIFICATION",
                "SUSPENDED",
                "INACTIVE",
                ], [
                "PENDING_EMAIL_VERIFICATION",
                "ACTIVE",
                "PENDING_LANDLORD_VERIFICATION",
                "SUSPENDED",
                "INACTIVE",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "updatedAt": {
            memberValidators["updatedAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "preferences": {
            memberValidators["preferences"] = new __CompositeStructureValidator<UserPreferences>(
              new __NoOpValidator(),
              UserPreferences.validate
            );
            break;
          }
          case "adminLevel": {
            memberValidators["adminLevel"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "SUPER_ADMIN",
                "MODERATOR",
                "SUPPORT",
                ], [
                "SUPER_ADMIN",
                "MODERATOR",
                "SUPPORT",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "permissions": {
            memberValidators["permissions"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
      ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
      ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
      ...getMemberValidator("userType").validate(obj.userType, `${path}/userType`),
      ...getMemberValidator("profileImage").validate(obj.profileImage, `${path}/profileImage`),
      ...getMemberValidator("isEmailVerified").validate(obj.isEmailVerified, `${path}/isEmailVerified`),
      ...getMemberValidator("accountStatus").validate(obj.accountStatus, `${path}/accountStatus`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
      ...getMemberValidator("updatedAt").validate(obj.updatedAt, `${path}/updatedAt`),
      ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
      ...getMemberValidator("adminLevel").validate(obj.adminLevel, `${path}/adminLevel`),
      ...getMemberValidator("permissions").validate(obj.permissions, `${path}/permissions`),
    ];
  }
}

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  APPROVED: "APPROVED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const
/**
 * @public
 */
export type ApplicationStatus = typeof ApplicationStatus[keyof typeof ApplicationStatus]

/**
 * Application review decision
 * @public
 */
export interface ApplicationDecision {
  /**
   * Approval status
   * @public
   */
  status: ApplicationStatus | undefined;

  /**
   * Admin comments
   * @public
   */
  comments?: string;
}

export namespace ApplicationDecision {
  const memberValidators : {
    status?: __MultiConstraintValidator<string>,
    comments?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ApplicationDecision, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "status": {
            memberValidators["status"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "PENDING",
                "APPROVED",
                "REJECTED",
                ], [
                "PENDING",
                "APPROVED",
                "REJECTED",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "comments": {
            memberValidators["comments"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("status").validate(obj.status, `${path}/status`),
      ...getMemberValidator("comments").validate(obj.comments, `${path}/comments`),
    ];
  }
}

/**
 * Management permissions
 * @public
 */
export interface ManagementPermissions {
  /**
   * Can collect rent
   * @public
   */
  collectRent?: boolean;

  /**
   * Can handle maintenance
   * @public
   */
  handleMaintenance?: boolean;

  /**
   * Can screen tenants
   * @public
   */
  screenTenants?: boolean;

  /**
   * Can update listing
   * @public
   */
  updateListing?: boolean;
}

export namespace ManagementPermissions {
  const memberValidators : {
    collectRent?: __MultiConstraintValidator<boolean>,
    handleMaintenance?: __MultiConstraintValidator<boolean>,
    screenTenants?: __MultiConstraintValidator<boolean>,
    updateListing?: __MultiConstraintValidator<boolean>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ManagementPermissions, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "collectRent": {
            memberValidators["collectRent"] = new __NoOpValidator();
            break;
          }
          case "handleMaintenance": {
            memberValidators["handleMaintenance"] = new __NoOpValidator();
            break;
          }
          case "screenTenants": {
            memberValidators["screenTenants"] = new __NoOpValidator();
            break;
          }
          case "updateListing": {
            memberValidators["updateListing"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("collectRent").validate(obj.collectRent, `${path}/collectRent`),
      ...getMemberValidator("handleMaintenance").validate(obj.handleMaintenance, `${path}/handleMaintenance`),
      ...getMemberValidator("screenTenants").validate(obj.screenTenants, `${path}/screenTenants`),
      ...getMemberValidator("updateListing").validate(obj.updateListing, `${path}/updateListing`),
    ];
  }
}

/**
 * Property manager assignment
 * @public
 */
export interface PropertyManagerAssignment {
  /**
   * Property manager user ID
   * @public
   */
  managerId: string | undefined;

  /**
   * Management permissions
   * @public
   */
  permissions?: ManagementPermissions;

  /**
   * Commission rate percentage
   * @public
   */
  commissionRate?: number;
}

export namespace PropertyManagerAssignment {
  const memberValidators : {
    managerId?: __MultiConstraintValidator<string>,
    permissions?: __MultiConstraintValidator<ManagementPermissions>,
    commissionRate?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertyManagerAssignment, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "managerId": {
            memberValidators["managerId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "permissions": {
            memberValidators["permissions"] = new __CompositeStructureValidator<ManagementPermissions>(
              new __NoOpValidator(),
              ManagementPermissions.validate
            );
            break;
          }
          case "commissionRate": {
            memberValidators["commissionRate"] = new __CompositeValidator<number>([
              new __RangeValidator(0, 50),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("managerId").validate(obj.managerId, `${path}/managerId`),
      ...getMemberValidator("permissions").validate(obj.permissions, `${path}/permissions`),
      ...getMemberValidator("commissionRate").validate(obj.commissionRate, `${path}/commissionRate`),
    ];
  }
}

/**
 * Assign property manager request
 * @public
 */
export interface AssignPropertyManagerRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;

  /**
   * Manager assignment data
   * @public
   */
  assignment: PropertyManagerAssignment | undefined;
}

export namespace AssignPropertyManagerRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
    assignment?: __MultiConstraintValidator<PropertyManagerAssignment>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: AssignPropertyManagerRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "assignment": {
            memberValidators["assignment"] = new __CompositeStructureValidator<PropertyManagerAssignment>(
              new __CompositeValidator<PropertyManagerAssignment>([
                new __RequiredValidator(),
              ]),
              PropertyManagerAssignment.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
      ...getMemberValidator("assignment").validate(obj.assignment, `${path}/assignment`),
    ];
  }
}

/**
 * Property availability information
 * @public
 */
export interface PropertyAvailability {
  /**
   * Is property currently available
   * @public
   */
  isAvailable: boolean | undefined;

  /**
   * Date when property becomes available
   * @public
   */
  availableFrom: Date | undefined;

  /**
   * Lease duration in months
   * @public
   */
  leaseDuration: number | undefined;
}

export namespace PropertyAvailability {
  const memberValidators : {
    isAvailable?: __MultiConstraintValidator<boolean>,
    availableFrom?: __MultiConstraintValidator<Date>,
    leaseDuration?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertyAvailability, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "isAvailable": {
            memberValidators["isAvailable"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "availableFrom": {
            memberValidators["availableFrom"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "leaseDuration": {
            memberValidators["leaseDuration"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(1, 60),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("isAvailable").validate(obj.isAvailable, `${path}/isAvailable`),
      ...getMemberValidator("availableFrom").validate(obj.availableFrom, `${path}/availableFrom`),
      ...getMemberValidator("leaseDuration").validate(obj.leaseDuration, `${path}/leaseDuration`),
    ];
  }
}

/**
 * Property media files
 * @public
 */
export interface PropertyMedia {
  /**
   * Property image URLs
   * @public
   */
  images: (string)[] | undefined;

  /**
   * Property video URLs
   * @public
   */
  videos?: (string)[];

  /**
   * Virtual tour URL
   * @public
   */
  virtualTour?: string;
}

export namespace PropertyMedia {
  const memberValidators : {
    images?: __MultiConstraintValidator<Iterable<string>>,
    videos?: __MultiConstraintValidator<Iterable<string>>,
    virtualTour?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertyMedia, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "images": {
            memberValidators["images"] = new __CompositeCollectionValidator<string>(
              new __CompositeValidator<(string)[]>([
                new __RequiredValidator(),
              ]),
              new __NoOpValidator()
            );
            break;
          }
          case "videos": {
            memberValidators["videos"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "virtualTour": {
            memberValidators["virtualTour"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("images").validate(obj.images, `${path}/images`),
      ...getMemberValidator("videos").validate(obj.videos, `${path}/videos`),
      ...getMemberValidator("virtualTour").validate(obj.virtualTour, `${path}/virtualTour`),
    ];
  }
}

/**
 * @public
 * @enum
 */
export const UtilityType = {
  INCLUDED: "included",
  SEPARATE: "separate",
} as const
/**
 * @public
 */
export type UtilityType = typeof UtilityType[keyof typeof UtilityType]

/**
 * Property pricing details
 * @public
 */
export interface PropertyPricing {
  /**
   * Monthly rent in TZS
   * @public
   */
  monthlyRent: number | undefined;

  /**
   * Security deposit in TZS
   * @public
   */
  deposit: number | undefined;

  /**
   * Utility arrangement
   * @public
   */
  utilities: UtilityType | undefined;

  /**
   * Monthly utility cost in TZS if separate
   * @public
   */
  utilityCost?: number;
}

export namespace PropertyPricing {
  const memberValidators : {
    monthlyRent?: __MultiConstraintValidator<number>,
    deposit?: __MultiConstraintValidator<number>,
    utilities?: __MultiConstraintValidator<string>,
    utilityCost?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertyPricing, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "monthlyRent": {
            memberValidators["monthlyRent"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(50000, 50000000),
            ]);
            break;
          }
          case "deposit": {
            memberValidators["deposit"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(0, 100000000),
            ]);
            break;
          }
          case "utilities": {
            memberValidators["utilities"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "included",
                "separate",
                ], [
                "included",
                "separate",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "utilityCost": {
            memberValidators["utilityCost"] = new __CompositeValidator<number>([
              new __RangeValidator(0, 1000000),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("monthlyRent").validate(obj.monthlyRent, `${path}/monthlyRent`),
      ...getMemberValidator("deposit").validate(obj.deposit, `${path}/deposit`),
      ...getMemberValidator("utilities").validate(obj.utilities, `${path}/utilities`),
      ...getMemberValidator("utilityCost").validate(obj.utilityCost, `${path}/utilityCost`),
    ];
  }
}

/**
 * @public
 * @enum
 */
export const PropertyType = {
  APARTMENT: "APARTMENT",
  HOUSE: "HOUSE",
  ROOM: "ROOM",
  STUDIO: "STUDIO",
} as const
/**
 * @public
 */
export type PropertyType = typeof PropertyType[keyof typeof PropertyType]

/**
 * Property specifications
 * @public
 */
export interface PropertySpecifications {
  /**
   * Number of bedrooms
   * @public
   */
  bedrooms: number | undefined;

  /**
   * Number of bathrooms
   * @public
   */
  bathrooms: number | undefined;

  /**
   * Area in square meters
   * @public
   */
  squareMeters: number | undefined;

  /**
   * Is property furnished
   * @public
   */
  furnished: boolean | undefined;

  /**
   * Has parking space
   * @public
   */
  parking: boolean | undefined;
}

export namespace PropertySpecifications {
  const memberValidators : {
    bedrooms?: __MultiConstraintValidator<number>,
    bathrooms?: __MultiConstraintValidator<number>,
    squareMeters?: __MultiConstraintValidator<number>,
    furnished?: __MultiConstraintValidator<boolean>,
    parking?: __MultiConstraintValidator<boolean>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertySpecifications, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "bedrooms": {
            memberValidators["bedrooms"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(0, 20),
            ]);
            break;
          }
          case "bathrooms": {
            memberValidators["bathrooms"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(1, 20),
            ]);
            break;
          }
          case "squareMeters": {
            memberValidators["squareMeters"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(10, 10000),
            ]);
            break;
          }
          case "furnished": {
            memberValidators["furnished"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "parking": {
            memberValidators["parking"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("bedrooms").validate(obj.bedrooms, `${path}/bedrooms`),
      ...getMemberValidator("bathrooms").validate(obj.bathrooms, `${path}/bathrooms`),
      ...getMemberValidator("squareMeters").validate(obj.squareMeters, `${path}/squareMeters`),
      ...getMemberValidator("furnished").validate(obj.furnished, `${path}/furnished`),
      ...getMemberValidator("parking").validate(obj.parking, `${path}/parking`),
    ];
  }
}

/**
 * @public
 * @enum
 */
export const PropertyStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
  MAINTENANCE: "MAINTENANCE",
  RENTED: "RENTED",
} as const
/**
 * @public
 */
export type PropertyStatus = typeof PropertyStatus[keyof typeof PropertyStatus]

/**
 * Property entity with all details
 * @public
 */
export interface Property {
  /**
   * Unique property identifier
   * @public
   */
  propertyId: string | undefined;

  /**
   * Property owner ID
   * @public
   */
  landlordId: string | undefined;

  /**
   * Optional property manager ID
   * @public
   */
  managerId?: string;

  /**
   * Property title
   * @public
   */
  title: string | undefined;

  /**
   * Property description
   * @public
   */
  description: string | undefined;

  /**
   * Property address details
   * @public
   */
  address: Address | undefined;

  /**
   * Type of property
   * @public
   */
  propertyType: PropertyType | undefined;

  /**
   * Property specifications
   * @public
   */
  specifications: PropertySpecifications | undefined;

  /**
   * Pricing information
   * @public
   */
  pricing: PropertyPricing | undefined;

  /**
   * Available amenities
   * @public
   */
  amenities: (string)[] | undefined;

  /**
   * Property media files
   * @public
   */
  media: PropertyMedia | undefined;

  /**
   * Availability information
   * @public
   */
  availability: PropertyAvailability | undefined;

  /**
   * Current property status
   * @public
   */
  status: PropertyStatus | undefined;

  /**
   * Creation timestamp
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Last update timestamp
   * @public
   */
  updatedAt: Date | undefined;
}

export namespace Property {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
    landlordId?: __MultiConstraintValidator<string>,
    managerId?: __MultiConstraintValidator<string>,
    title?: __MultiConstraintValidator<string>,
    description?: __MultiConstraintValidator<string>,
    address?: __MultiConstraintValidator<Address>,
    propertyType?: __MultiConstraintValidator<string>,
    specifications?: __MultiConstraintValidator<PropertySpecifications>,
    pricing?: __MultiConstraintValidator<PropertyPricing>,
    amenities?: __MultiConstraintValidator<Iterable<string>>,
    media?: __MultiConstraintValidator<PropertyMedia>,
    availability?: __MultiConstraintValidator<PropertyAvailability>,
    status?: __MultiConstraintValidator<string>,
    createdAt?: __MultiConstraintValidator<Date>,
    updatedAt?: __MultiConstraintValidator<Date>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Property, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "landlordId": {
            memberValidators["landlordId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "managerId": {
            memberValidators["managerId"] = new __NoOpValidator();
            break;
          }
          case "title": {
            memberValidators["title"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(5, 100),
            ]);
            break;
          }
          case "description": {
            memberValidators["description"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(20, 2000),
            ]);
            break;
          }
          case "address": {
            memberValidators["address"] = new __CompositeStructureValidator<Address>(
              new __CompositeValidator<Address>([
                new __RequiredValidator(),
              ]),
              Address.validate
            );
            break;
          }
          case "propertyType": {
            memberValidators["propertyType"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "APARTMENT",
                "HOUSE",
                "STUDIO",
                "ROOM",
                ], [
                "APARTMENT",
                "HOUSE",
                "STUDIO",
                "ROOM",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "specifications": {
            memberValidators["specifications"] = new __CompositeStructureValidator<PropertySpecifications>(
              new __CompositeValidator<PropertySpecifications>([
                new __RequiredValidator(),
              ]),
              PropertySpecifications.validate
            );
            break;
          }
          case "pricing": {
            memberValidators["pricing"] = new __CompositeStructureValidator<PropertyPricing>(
              new __CompositeValidator<PropertyPricing>([
                new __RequiredValidator(),
              ]),
              PropertyPricing.validate
            );
            break;
          }
          case "amenities": {
            memberValidators["amenities"] = new __CompositeCollectionValidator<string>(
              new __CompositeValidator<(string)[]>([
                new __RequiredValidator(),
              ]),
              new __NoOpValidator()
            );
            break;
          }
          case "media": {
            memberValidators["media"] = new __CompositeStructureValidator<PropertyMedia>(
              new __CompositeValidator<PropertyMedia>([
                new __RequiredValidator(),
              ]),
              PropertyMedia.validate
            );
            break;
          }
          case "availability": {
            memberValidators["availability"] = new __CompositeStructureValidator<PropertyAvailability>(
              new __CompositeValidator<PropertyAvailability>([
                new __RequiredValidator(),
              ]),
              PropertyAvailability.validate
            );
            break;
          }
          case "status": {
            memberValidators["status"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "DRAFT",
                "ACTIVE",
                "RENTED",
                "MAINTENANCE",
                ], [
                "DRAFT",
                "ACTIVE",
                "RENTED",
                "MAINTENANCE",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "updatedAt": {
            memberValidators["updatedAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
      ...getMemberValidator("landlordId").validate(obj.landlordId, `${path}/landlordId`),
      ...getMemberValidator("managerId").validate(obj.managerId, `${path}/managerId`),
      ...getMemberValidator("title").validate(obj.title, `${path}/title`),
      ...getMemberValidator("description").validate(obj.description, `${path}/description`),
      ...getMemberValidator("address").validate(obj.address, `${path}/address`),
      ...getMemberValidator("propertyType").validate(obj.propertyType, `${path}/propertyType`),
      ...getMemberValidator("specifications").validate(obj.specifications, `${path}/specifications`),
      ...getMemberValidator("pricing").validate(obj.pricing, `${path}/pricing`),
      ...getMemberValidator("amenities").validate(obj.amenities, `${path}/amenities`),
      ...getMemberValidator("media").validate(obj.media, `${path}/media`),
      ...getMemberValidator("availability").validate(obj.availability, `${path}/availability`),
      ...getMemberValidator("status").validate(obj.status, `${path}/status`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
      ...getMemberValidator("updatedAt").validate(obj.updatedAt, `${path}/updatedAt`),
    ];
  }
}

/**
 * Assign property manager response
 * @public
 */
export interface AssignPropertyManagerResponse {
  /**
   * Updated property
   * @public
   */
  property: Property | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace AssignPropertyManagerResponse {
  const memberValidators : {
    property?: __MultiConstraintValidator<Property>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: AssignPropertyManagerResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<Property>(
              new __CompositeValidator<Property>([
                new __RequiredValidator(),
              ]),
              Property.validate
            );
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Internal server error
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

/**
 * Property not found error
 * @public
 */
export class PropertyNotFoundException extends __BaseException {
  readonly name: "PropertyNotFoundException" = "PropertyNotFoundException";
  readonly $fault: "client" = "client";
  constructor(opts: __ExceptionOptionType<PropertyNotFoundException, __BaseException>) {
    super({
      name: "PropertyNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, PropertyNotFoundException.prototype);
  }
}

/**
 * Validation error for invalid input
 * @public
 */
export class RentalValidationException extends __BaseException {
  readonly name: "RentalValidationException" = "RentalValidationException";
  readonly $fault: "client" = "client";
  constructor(opts: __ExceptionOptionType<RentalValidationException, __BaseException>) {
    super({
      name: "RentalValidationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, RentalValidationException.prototype);
  }
}

/**
 * Unauthorized access error
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * Describes one specific validation failure for an input member.
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   * @public
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   * @public
   */
  message: string | undefined;
}

export namespace ValidationExceptionField {
  const memberValidators : {
    path?: __MultiConstraintValidator<string>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ValidationExceptionField, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "path": {
            memberValidators["path"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("path").validate(obj.path, `${path}/path`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * A list of specific failures encountered while validating the input.
   * A member can appear in this list more than once if it failed to satisfy multiple constraints.
   * @public
   */
  fieldList?: (ValidationExceptionField)[];

  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface BecomeLandlordOutput {
  /**
   * Application status message
   * @public
   */
  message: string | undefined;

  /**
   * Application ID for tracking
   * @public
   */
  applicationId: string | undefined;
}

export namespace BecomeLandlordOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
    applicationId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: BecomeLandlordOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "applicationId": {
            memberValidators["applicationId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
      ...getMemberValidator("applicationId").validate(obj.applicationId, `${path}/applicationId`),
    ];
  }
}

/**
 * Landlord upgrade application input
 * @public
 */
export interface BecomeLandlordApplication {
  /**
   * Business or company name
   * @public
   */
  businessName: string | undefined;

  /**
   * Business license number
   * @public
   */
  businessLicense?: string;

  /**
   * Tax identification number
   * @public
   */
  taxId?: string;

  /**
   * Verification document URLs
   * @public
   */
  verificationDocuments?: (string)[];
}

export namespace BecomeLandlordApplication {
  const memberValidators : {
    businessName?: __MultiConstraintValidator<string>,
    businessLicense?: __MultiConstraintValidator<string>,
    taxId?: __MultiConstraintValidator<string>,
    verificationDocuments?: __MultiConstraintValidator<Iterable<string>>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: BecomeLandlordApplication, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "businessName": {
            memberValidators["businessName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 100),
            ]);
            break;
          }
          case "businessLicense": {
            memberValidators["businessLicense"] = new __CompositeValidator<string>([
              new __PatternValidator("^[A-Z0-9-]{5,20}$"),
            ]);
            break;
          }
          case "taxId": {
            memberValidators["taxId"] = new __CompositeValidator<string>([
              new __PatternValidator("^[0-9]{9,12}$"),
            ]);
            break;
          }
          case "verificationDocuments": {
            memberValidators["verificationDocuments"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("businessName").validate(obj.businessName, `${path}/businessName`),
      ...getMemberValidator("businessLicense").validate(obj.businessLicense, `${path}/businessLicense`),
      ...getMemberValidator("taxId").validate(obj.taxId, `${path}/taxId`),
      ...getMemberValidator("verificationDocuments").validate(obj.verificationDocuments, `${path}/verificationDocuments`),
    ];
  }
}

/**
 * Landlord upgrade application request
 * @public
 */
export interface BecomeLandlordRequest {
  /**
   * User ID from URL path
   * @public
   */
  userId: string | undefined;

  /**
   * Application data
   * @public
   */
  application: BecomeLandlordApplication | undefined;
}

export namespace BecomeLandlordRequest {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    application?: __MultiConstraintValidator<BecomeLandlordApplication>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: BecomeLandlordRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "application": {
            memberValidators["application"] = new __CompositeStructureValidator<BecomeLandlordApplication>(
              new __CompositeValidator<BecomeLandlordApplication>([
                new __RequiredValidator(),
              ]),
              BecomeLandlordApplication.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("application").validate(obj.application, `${path}/application`),
    ];
  }
}

/**
 * Emergency contact information
 * @public
 */
export interface ContactInfo {
  /**
   * Contact person full name
   * @public
   */
  name: string | undefined;

  /**
   * Contact phone number
   * @public
   */
  phoneNumber: string | undefined;

  /**
   * Relationship to tenant
   * @public
   */
  relationship: string | undefined;

  /**
   * Contact email address
   * @public
   */
  email?: string;
}

export namespace ContactInfo {
  const memberValidators : {
    name?: __MultiConstraintValidator<string>,
    phoneNumber?: __MultiConstraintValidator<string>,
    relationship?: __MultiConstraintValidator<string>,
    email?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ContactInfo, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "name": {
            memberValidators["name"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 100),
            ]);
            break;
          }
          case "phoneNumber": {
            memberValidators["phoneNumber"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^\\+255[67][0-9]{8}$"),
            ]);
            break;
          }
          case "relationship": {
            memberValidators["relationship"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 30),
            ]);
            break;
          }
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("name").validate(obj.name, `${path}/name`),
      ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
      ...getMemberValidator("relationship").validate(obj.relationship, `${path}/relationship`),
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
    ];
  }
}

/**
 * Property availability input
 * @public
 */
export interface PropertyAvailabilityInput {
  /**
   * Is available
   * @public
   */
  isAvailable: boolean | undefined;

  /**
   * Available from date
   * @public
   */
  availableFrom: Date | undefined;

  /**
   * Lease duration in months
   * @public
   */
  leaseDuration: number | undefined;
}

export namespace PropertyAvailabilityInput {
  const memberValidators : {
    isAvailable?: __MultiConstraintValidator<boolean>,
    availableFrom?: __MultiConstraintValidator<Date>,
    leaseDuration?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertyAvailabilityInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "isAvailable": {
            memberValidators["isAvailable"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "availableFrom": {
            memberValidators["availableFrom"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "leaseDuration": {
            memberValidators["leaseDuration"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(1, 60),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("isAvailable").validate(obj.isAvailable, `${path}/isAvailable`),
      ...getMemberValidator("availableFrom").validate(obj.availableFrom, `${path}/availableFrom`),
      ...getMemberValidator("leaseDuration").validate(obj.leaseDuration, `${path}/leaseDuration`),
    ];
  }
}

/**
 * Property media input
 * @public
 */
export interface PropertyMediaInput {
  /**
   * Image URLs
   * @public
   */
  images?: (string)[];

  /**
   * Video URLs
   * @public
   */
  videos?: (string)[];

  /**
   * Virtual tour URL
   * @public
   */
  virtualTour?: string;
}

export namespace PropertyMediaInput {
  const memberValidators : {
    images?: __MultiConstraintValidator<Iterable<string>>,
    videos?: __MultiConstraintValidator<Iterable<string>>,
    virtualTour?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertyMediaInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "images": {
            memberValidators["images"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "videos": {
            memberValidators["videos"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "virtualTour": {
            memberValidators["virtualTour"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("images").validate(obj.images, `${path}/images`),
      ...getMemberValidator("videos").validate(obj.videos, `${path}/videos`),
      ...getMemberValidator("virtualTour").validate(obj.virtualTour, `${path}/virtualTour`),
    ];
  }
}

/**
 * Property pricing input
 * @public
 */
export interface PropertyPricingInput {
  /**
   * Monthly rent in TZS
   * @public
   */
  monthlyRent: number | undefined;

  /**
   * Security deposit in TZS
   * @public
   */
  deposit: number | undefined;

  /**
   * Utility arrangement
   * @public
   */
  utilities: UtilityType | undefined;

  /**
   * Utility cost if separate
   * @public
   */
  utilityCost?: number;
}

export namespace PropertyPricingInput {
  const memberValidators : {
    monthlyRent?: __MultiConstraintValidator<number>,
    deposit?: __MultiConstraintValidator<number>,
    utilities?: __MultiConstraintValidator<string>,
    utilityCost?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertyPricingInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "monthlyRent": {
            memberValidators["monthlyRent"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(50000, 50000000),
            ]);
            break;
          }
          case "deposit": {
            memberValidators["deposit"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(0, 100000000),
            ]);
            break;
          }
          case "utilities": {
            memberValidators["utilities"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "included",
                "separate",
                ], [
                "included",
                "separate",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "utilityCost": {
            memberValidators["utilityCost"] = new __CompositeValidator<number>([
              new __RangeValidator(0, 1000000),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("monthlyRent").validate(obj.monthlyRent, `${path}/monthlyRent`),
      ...getMemberValidator("deposit").validate(obj.deposit, `${path}/deposit`),
      ...getMemberValidator("utilities").validate(obj.utilities, `${path}/utilities`),
      ...getMemberValidator("utilityCost").validate(obj.utilityCost, `${path}/utilityCost`),
    ];
  }
}

/**
 * Property specifications input
 * @public
 */
export interface PropertySpecificationsInput {
  /**
   * Number of bedrooms
   * @public
   */
  bedrooms: number | undefined;

  /**
   * Number of bathrooms
   * @public
   */
  bathrooms: number | undefined;

  /**
   * Area in square meters
   * @public
   */
  squareMeters: number | undefined;

  /**
   * Is furnished
   * @public
   */
  furnished: boolean | undefined;

  /**
   * Has parking
   * @public
   */
  parking: boolean | undefined;
}

export namespace PropertySpecificationsInput {
  const memberValidators : {
    bedrooms?: __MultiConstraintValidator<number>,
    bathrooms?: __MultiConstraintValidator<number>,
    squareMeters?: __MultiConstraintValidator<number>,
    furnished?: __MultiConstraintValidator<boolean>,
    parking?: __MultiConstraintValidator<boolean>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertySpecificationsInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "bedrooms": {
            memberValidators["bedrooms"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(0, 20),
            ]);
            break;
          }
          case "bathrooms": {
            memberValidators["bathrooms"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(1, 20),
            ]);
            break;
          }
          case "squareMeters": {
            memberValidators["squareMeters"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(10, 10000),
            ]);
            break;
          }
          case "furnished": {
            memberValidators["furnished"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "parking": {
            memberValidators["parking"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("bedrooms").validate(obj.bedrooms, `${path}/bedrooms`),
      ...getMemberValidator("bathrooms").validate(obj.bathrooms, `${path}/bathrooms`),
      ...getMemberValidator("squareMeters").validate(obj.squareMeters, `${path}/squareMeters`),
      ...getMemberValidator("furnished").validate(obj.furnished, `${path}/furnished`),
      ...getMemberValidator("parking").validate(obj.parking, `${path}/parking`),
    ];
  }
}

/**
 * Create property data
 * @public
 */
export interface CreatePropertyData {
  /**
   * Property owner ID
   * @public
   */
  landlordId: string | undefined;

  /**
   * Property title
   * @public
   */
  title: string | undefined;

  /**
   * Property description
   * @public
   */
  description: string | undefined;

  /**
   * Property address
   * @public
   */
  address: AddressInput | undefined;

  /**
   * Property type
   * @public
   */
  propertyType: PropertyType | undefined;

  /**
   * Property specifications
   * @public
   */
  specifications: PropertySpecificationsInput | undefined;

  /**
   * Pricing information
   * @public
   */
  pricing: PropertyPricingInput | undefined;

  /**
   * Available amenities
   * @public
   */
  amenities?: (string)[];

  /**
   * Property media
   * @public
   */
  media?: PropertyMediaInput;

  /**
   * Availability details
   * @public
   */
  availability: PropertyAvailabilityInput | undefined;
}

export namespace CreatePropertyData {
  const memberValidators : {
    landlordId?: __MultiConstraintValidator<string>,
    title?: __MultiConstraintValidator<string>,
    description?: __MultiConstraintValidator<string>,
    address?: __MultiConstraintValidator<AddressInput>,
    propertyType?: __MultiConstraintValidator<string>,
    specifications?: __MultiConstraintValidator<PropertySpecificationsInput>,
    pricing?: __MultiConstraintValidator<PropertyPricingInput>,
    amenities?: __MultiConstraintValidator<Iterable<string>>,
    media?: __MultiConstraintValidator<PropertyMediaInput>,
    availability?: __MultiConstraintValidator<PropertyAvailabilityInput>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: CreatePropertyData, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "landlordId": {
            memberValidators["landlordId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "title": {
            memberValidators["title"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(5, 100),
            ]);
            break;
          }
          case "description": {
            memberValidators["description"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(20, 2000),
            ]);
            break;
          }
          case "address": {
            memberValidators["address"] = new __CompositeStructureValidator<AddressInput>(
              new __CompositeValidator<AddressInput>([
                new __RequiredValidator(),
              ]),
              AddressInput.validate
            );
            break;
          }
          case "propertyType": {
            memberValidators["propertyType"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "APARTMENT",
                "HOUSE",
                "STUDIO",
                "ROOM",
                ], [
                "APARTMENT",
                "HOUSE",
                "STUDIO",
                "ROOM",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "specifications": {
            memberValidators["specifications"] = new __CompositeStructureValidator<PropertySpecificationsInput>(
              new __CompositeValidator<PropertySpecificationsInput>([
                new __RequiredValidator(),
              ]),
              PropertySpecificationsInput.validate
            );
            break;
          }
          case "pricing": {
            memberValidators["pricing"] = new __CompositeStructureValidator<PropertyPricingInput>(
              new __CompositeValidator<PropertyPricingInput>([
                new __RequiredValidator(),
              ]),
              PropertyPricingInput.validate
            );
            break;
          }
          case "amenities": {
            memberValidators["amenities"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "media": {
            memberValidators["media"] = new __CompositeStructureValidator<PropertyMediaInput>(
              new __NoOpValidator(),
              PropertyMediaInput.validate
            );
            break;
          }
          case "availability": {
            memberValidators["availability"] = new __CompositeStructureValidator<PropertyAvailabilityInput>(
              new __CompositeValidator<PropertyAvailabilityInput>([
                new __RequiredValidator(),
              ]),
              PropertyAvailabilityInput.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("landlordId").validate(obj.landlordId, `${path}/landlordId`),
      ...getMemberValidator("title").validate(obj.title, `${path}/title`),
      ...getMemberValidator("description").validate(obj.description, `${path}/description`),
      ...getMemberValidator("address").validate(obj.address, `${path}/address`),
      ...getMemberValidator("propertyType").validate(obj.propertyType, `${path}/propertyType`),
      ...getMemberValidator("specifications").validate(obj.specifications, `${path}/specifications`),
      ...getMemberValidator("pricing").validate(obj.pricing, `${path}/pricing`),
      ...getMemberValidator("amenities").validate(obj.amenities, `${path}/amenities`),
      ...getMemberValidator("media").validate(obj.media, `${path}/media`),
      ...getMemberValidator("availability").validate(obj.availability, `${path}/availability`),
    ];
  }
}

/**
 * Create property request
 * @public
 */
export interface CreatePropertyRequest {
  /**
   * Property data
   * @public
   */
  property: CreatePropertyData | undefined;
}

export namespace CreatePropertyRequest {
  const memberValidators : {
    property?: __MultiConstraintValidator<CreatePropertyData>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: CreatePropertyRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<CreatePropertyData>(
              new __CompositeValidator<CreatePropertyData>([
                new __RequiredValidator(),
              ]),
              CreatePropertyData.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
    ];
  }
}

/**
 * Create property response
 * @public
 */
export interface CreatePropertyResponse {
  /**
   * Created property
   * @public
   */
  property: Property | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace CreatePropertyResponse {
  const memberValidators : {
    property?: __MultiConstraintValidator<Property>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: CreatePropertyResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<Property>(
              new __CompositeValidator<Property>([
                new __RequiredValidator(),
              ]),
              Property.validate
            );
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Delete property request
 * @public
 */
export interface DeletePropertyRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;
}

export namespace DeletePropertyRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DeletePropertyRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
    ];
  }
}

/**
 * Delete property response
 * @public
 */
export interface DeletePropertyResponse {
  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace DeletePropertyResponse {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DeletePropertyResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Employment details for tenant verification
 * @public
 */
export interface EmploymentInfo {
  /**
   * Employer company name
   * @public
   */
  employer: string | undefined;

  /**
   * Job position/title
   * @public
   */
  position: string | undefined;

  /**
   * Employment start date
   * @public
   */
  startDate: Date | undefined;

  /**
   * Work location address
   * @public
   */
  workAddress?: string;

  /**
   * Supervisor contact information
   * @public
   */
  supervisorContact?: string;
}

export namespace EmploymentInfo {
  const memberValidators : {
    employer?: __MultiConstraintValidator<string>,
    position?: __MultiConstraintValidator<string>,
    startDate?: __MultiConstraintValidator<Date>,
    workAddress?: __MultiConstraintValidator<string>,
    supervisorContact?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: EmploymentInfo, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "employer": {
            memberValidators["employer"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 100),
            ]);
            break;
          }
          case "position": {
            memberValidators["position"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "startDate": {
            memberValidators["startDate"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "workAddress": {
            memberValidators["workAddress"] = new __NoOpValidator();
            break;
          }
          case "supervisorContact": {
            memberValidators["supervisorContact"] = new __CompositeValidator<string>([
              new __PatternValidator("^\\+255[67][0-9]{8}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("employer").validate(obj.employer, `${path}/employer`),
      ...getMemberValidator("position").validate(obj.position, `${path}/position`),
      ...getMemberValidator("startDate").validate(obj.startDate, `${path}/startDate`),
      ...getMemberValidator("workAddress").validate(obj.workAddress, `${path}/workAddress`),
      ...getMemberValidator("supervisorContact").validate(obj.supervisorContact, `${path}/supervisorContact`),
    ];
  }
}

/**
 * Password reset request input
 * @public
 */
export interface ForgotPasswordInput {
  /**
   * User's email address
   * @public
   */
  email: string | undefined;
}

export namespace ForgotPasswordInput {
  const memberValidators : {
    email?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ForgotPasswordInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
    ];
  }
}

/**
 * @public
 */
export interface ForgotPasswordOutput {
  /**
   * Confirmation message
   * @public
   */
  message: string | undefined;
}

export namespace ForgotPasswordOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ForgotPasswordOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * @public
 * @enum
 */
export const MediaType = {
  IMAGE: "image",
  VIDEO: "video",
  VIRTUAL_TOUR: "virtual_tour",
} as const
/**
 * @public
 */
export type MediaType = typeof MediaType[keyof typeof MediaType]

/**
 * Media upload input
 * @public
 */
export interface MediaUploadInput {
  /**
   * User ID for folder organization
   * @public
   */
  userId: string | undefined;

  /**
   * Media type for folder organization
   * @public
   */
  mediaType: MediaType | undefined;

  /**
   * File name
   * @public
   */
  fileName: string | undefined;
}

export namespace MediaUploadInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    mediaType?: __MultiConstraintValidator<string>,
    fileName?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MediaUploadInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "mediaType": {
            memberValidators["mediaType"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "image",
                "video",
                "virtual_tour",
                ], [
                "image",
                "video",
                "virtual_tour",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "fileName": {
            memberValidators["fileName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(1, 255),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("mediaType").validate(obj.mediaType, `${path}/mediaType`),
      ...getMemberValidator("fileName").validate(obj.fileName, `${path}/fileName`),
    ];
  }
}

/**
 * Get signed URL for media upload request
 * @public
 */
export interface GetMediaUploadUrlRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;

  /**
   * Media upload data
   * @public
   */
  media: MediaUploadInput | undefined;
}

export namespace GetMediaUploadUrlRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
    media?: __MultiConstraintValidator<MediaUploadInput>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetMediaUploadUrlRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "media": {
            memberValidators["media"] = new __CompositeStructureValidator<MediaUploadInput>(
              new __CompositeValidator<MediaUploadInput>([
                new __RequiredValidator(),
              ]),
              MediaUploadInput.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
      ...getMemberValidator("media").validate(obj.media, `${path}/media`),
    ];
  }
}

/**
 * Get media upload URL response
 * @public
 */
export interface GetMediaUploadUrlResponse {
  /**
   * S3 file key
   * @public
   */
  fileKey: string | undefined;

  /**
   * Pre-signed URL for upload
   * @public
   */
  presignedUrl: string | undefined;

  /**
   * Final CloudFront URL after upload
   * @public
   */
  cloudfrontUrl: string | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace GetMediaUploadUrlResponse {
  const memberValidators : {
    fileKey?: __MultiConstraintValidator<string>,
    presignedUrl?: __MultiConstraintValidator<string>,
    cloudfrontUrl?: __MultiConstraintValidator<string>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetMediaUploadUrlResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "fileKey": {
            memberValidators["fileKey"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "presignedUrl": {
            memberValidators["presignedUrl"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "cloudfrontUrl": {
            memberValidators["cloudfrontUrl"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("fileKey").validate(obj.fileKey, `${path}/fileKey`),
      ...getMemberValidator("presignedUrl").validate(obj.presignedUrl, `${path}/presignedUrl`),
      ...getMemberValidator("cloudfrontUrl").validate(obj.cloudfrontUrl, `${path}/cloudfrontUrl`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Get nearby properties request
 * @public
 */
export interface GetNearbyPropertiesRequest {
  /**
   * Latitude
   * @public
   */
  lat: number | undefined;

  /**
   * Longitude
   * @public
   */
  lng: number | undefined;

  /**
   * Radius in kilometers
   * @public
   */
  radius?: number;

  /**
   * Page size
   * @public
   */
  limit?: number;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string;
}

export namespace GetNearbyPropertiesRequest {
  const memberValidators : {
    lat?: __MultiConstraintValidator<number>,
    lng?: __MultiConstraintValidator<number>,
    radius?: __MultiConstraintValidator<number>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetNearbyPropertiesRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "lat": {
            memberValidators["lat"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(-90, 90),
            ]);
            break;
          }
          case "lng": {
            memberValidators["lng"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(-180, 180),
            ]);
            break;
          }
          case "radius": {
            memberValidators["radius"] = new __CompositeValidator<number>([
              new __RangeValidator(0.1, 50),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("lat").validate(obj.lat, `${path}/lat`),
      ...getMemberValidator("lng").validate(obj.lng, `${path}/lng`),
      ...getMemberValidator("radius").validate(obj.radius, `${path}/radius`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
}

/**
 * List properties response
 * @public
 */
export interface ListPropertiesResponse {
  /**
   * List of properties
   * @public
   */
  properties: (Property)[] | undefined;

  /**
   * Pagination token for next page
   * @public
   */
  nextToken?: string;

  /**
   * Total count
   * @public
   */
  count: number | undefined;
}

export namespace ListPropertiesResponse {
  const memberValidators : {
    properties?: __MultiConstraintValidator<Iterable<Property>>,
    nextToken?: __MultiConstraintValidator<string>,
    count?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ListPropertiesResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "properties": {
            memberValidators["properties"] = new __CompositeCollectionValidator<Property>(
              new __CompositeValidator<(Property)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Property>(
                new __NoOpValidator(),
                Property.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
          case "count": {
            memberValidators["count"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("properties").validate(obj.properties, `${path}/properties`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
      ...getMemberValidator("count").validate(obj.count, `${path}/count`),
    ];
  }
}

/**
 * Get properties by location request
 * @public
 */
export interface GetPropertiesByLocationRequest {
  /**
   * Region from URL path
   * @public
   */
  region: string | undefined;

  /**
   * District from URL path
   * @public
   */
  district: string | undefined;

  /**
   * Ward filter
   * @public
   */
  ward?: string;

  /**
   * Page size
   * @public
   */
  limit?: number;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string;
}

export namespace GetPropertiesByLocationRequest {
  const memberValidators : {
    region?: __MultiConstraintValidator<string>,
    district?: __MultiConstraintValidator<string>,
    ward?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetPropertiesByLocationRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "region": {
            memberValidators["region"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "district": {
            memberValidators["district"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "ward": {
            memberValidators["ward"] = new __NoOpValidator();
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("region").validate(obj.region, `${path}/region`),
      ...getMemberValidator("district").validate(obj.district, `${path}/district`),
      ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
}

/**
 * Get property request
 * @public
 */
export interface GetPropertyRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;
}

export namespace GetPropertyRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetPropertyRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
    ];
  }
}

/**
 * Get property response
 * @public
 */
export interface GetPropertyResponse {
  /**
   * Property details
   * @public
   */
  property: Property | undefined;
}

export namespace GetPropertyResponse {
  const memberValidators : {
    property?: __MultiConstraintValidator<Property>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetPropertyResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<Property>(
              new __CompositeValidator<Property>([
                new __RequiredValidator(),
              ]),
              Property.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
    ];
  }
}

/**
 * @public
 */
export interface GetUserInput {
  /**
   * User ID from URL path
   * @public
   */
  userId: string | undefined;
}

export namespace GetUserInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
    ];
  }
}

/**
 * Landlord user with property management capabilities
 * @public
 */
export interface Landlord {
  /**
   * Unique user identifier
   * @public
   */
  userId: string | undefined;

  /**
   * User email address
   * @public
   */
  email: string | undefined;

  /**
   * Tanzania phone number (+255 format)
   * @public
   */
  phoneNumber: string | undefined;

  /**
   * User first name
   * @public
   */
  firstName: string | undefined;

  /**
   * User last name
   * @public
   */
  lastName: string | undefined;

  /**
   * User type discriminator
   * @public
   */
  userType: UserType | undefined;

  /**
   * Profile image URL
   * @public
   */
  profileImage?: string;

  /**
   * Email verification status
   * @public
   */
  isEmailVerified: boolean | undefined;

  /**
   * Current account status
   * @public
   */
  accountStatus: AccountStatus | undefined;

  /**
   * Account creation timestamp
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Last update timestamp
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * User preferences
   * @public
   */
  preferences?: UserPreferences;

  /**
   * Landlord verification status by admin
   * @public
   */
  isLandlordVerified: boolean | undefined;

  /**
   * Business or company name
   * @public
   */
  businessName?: string;

  /**
   * Business license number
   * @public
   */
  businessLicense?: string;

  /**
   * Tax identification number
   * @public
   */
  taxId?: string;

  /**
   * Number of properties owned
   * @public
   */
  propertyCount: number | undefined;

  /**
   * Verification document URLs
   * @public
   */
  verificationDocuments?: (string)[];
}

export namespace Landlord {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    email?: __MultiConstraintValidator<string>,
    phoneNumber?: __MultiConstraintValidator<string>,
    firstName?: __MultiConstraintValidator<string>,
    lastName?: __MultiConstraintValidator<string>,
    userType?: __MultiConstraintValidator<string>,
    profileImage?: __MultiConstraintValidator<string>,
    isEmailVerified?: __MultiConstraintValidator<boolean>,
    accountStatus?: __MultiConstraintValidator<string>,
    createdAt?: __MultiConstraintValidator<Date>,
    updatedAt?: __MultiConstraintValidator<Date>,
    preferences?: __MultiConstraintValidator<UserPreferences>,
    isLandlordVerified?: __MultiConstraintValidator<boolean>,
    businessName?: __MultiConstraintValidator<string>,
    businessLicense?: __MultiConstraintValidator<string>,
    taxId?: __MultiConstraintValidator<string>,
    propertyCount?: __MultiConstraintValidator<number>,
    verificationDocuments?: __MultiConstraintValidator<Iterable<string>>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Landlord, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "phoneNumber": {
            memberValidators["phoneNumber"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^\\+255[67][0-9]{8}$"),
            ]);
            break;
          }
          case "firstName": {
            memberValidators["firstName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "lastName": {
            memberValidators["lastName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "userType": {
            memberValidators["userType"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "LANDLORD",
                "TENANT",
                "ADMIN",
                ], [
                "LANDLORD",
                "TENANT",
                "ADMIN",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "profileImage": {
            memberValidators["profileImage"] = new __NoOpValidator();
            break;
          }
          case "isEmailVerified": {
            memberValidators["isEmailVerified"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "accountStatus": {
            memberValidators["accountStatus"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "PENDING_EMAIL_VERIFICATION",
                "ACTIVE",
                "PENDING_LANDLORD_VERIFICATION",
                "SUSPENDED",
                "INACTIVE",
                ], [
                "PENDING_EMAIL_VERIFICATION",
                "ACTIVE",
                "PENDING_LANDLORD_VERIFICATION",
                "SUSPENDED",
                "INACTIVE",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "updatedAt": {
            memberValidators["updatedAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "preferences": {
            memberValidators["preferences"] = new __CompositeStructureValidator<UserPreferences>(
              new __NoOpValidator(),
              UserPreferences.validate
            );
            break;
          }
          case "isLandlordVerified": {
            memberValidators["isLandlordVerified"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "businessName": {
            memberValidators["businessName"] = new __CompositeValidator<string>([
              new __LengthValidator(2, 100),
            ]);
            break;
          }
          case "businessLicense": {
            memberValidators["businessLicense"] = new __CompositeValidator<string>([
              new __PatternValidator("^[A-Z0-9-]{5,20}$"),
            ]);
            break;
          }
          case "taxId": {
            memberValidators["taxId"] = new __CompositeValidator<string>([
              new __PatternValidator("^[0-9]{9,12}$"),
            ]);
            break;
          }
          case "propertyCount": {
            memberValidators["propertyCount"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(0, undefined),
            ]);
            break;
          }
          case "verificationDocuments": {
            memberValidators["verificationDocuments"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
      ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
      ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
      ...getMemberValidator("userType").validate(obj.userType, `${path}/userType`),
      ...getMemberValidator("profileImage").validate(obj.profileImage, `${path}/profileImage`),
      ...getMemberValidator("isEmailVerified").validate(obj.isEmailVerified, `${path}/isEmailVerified`),
      ...getMemberValidator("accountStatus").validate(obj.accountStatus, `${path}/accountStatus`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
      ...getMemberValidator("updatedAt").validate(obj.updatedAt, `${path}/updatedAt`),
      ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
      ...getMemberValidator("isLandlordVerified").validate(obj.isLandlordVerified, `${path}/isLandlordVerified`),
      ...getMemberValidator("businessName").validate(obj.businessName, `${path}/businessName`),
      ...getMemberValidator("businessLicense").validate(obj.businessLicense, `${path}/businessLicense`),
      ...getMemberValidator("taxId").validate(obj.taxId, `${path}/taxId`),
      ...getMemberValidator("propertyCount").validate(obj.propertyCount, `${path}/propertyCount`),
      ...getMemberValidator("verificationDocuments").validate(obj.verificationDocuments, `${path}/verificationDocuments`),
    ];
  }
}

/**
 * Previous rental history record
 * @public
 */
export interface RentalHistory {
  /**
   * Previous property address
   * @public
   */
  propertyAddress: string | undefined;

  /**
   * Previous landlord name
   * @public
   */
  landlordName: string | undefined;

  /**
   * Previous landlord contact
   * @public
   */
  landlordContact: string | undefined;

  /**
   * Lease start date
   * @public
   */
  startDate: Date | undefined;

  /**
   * Lease end date
   * @public
   */
  endDate?: Date;

  /**
   * Monthly rent amount in TZS
   * @public
   */
  monthlyRent: number | undefined;

  /**
   * Reason for leaving property
   * @public
   */
  reasonForLeaving?: string;
}

export namespace RentalHistory {
  const memberValidators : {
    propertyAddress?: __MultiConstraintValidator<string>,
    landlordName?: __MultiConstraintValidator<string>,
    landlordContact?: __MultiConstraintValidator<string>,
    startDate?: __MultiConstraintValidator<Date>,
    endDate?: __MultiConstraintValidator<Date>,
    monthlyRent?: __MultiConstraintValidator<number>,
    reasonForLeaving?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RentalHistory, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyAddress": {
            memberValidators["propertyAddress"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(10, 200),
            ]);
            break;
          }
          case "landlordName": {
            memberValidators["landlordName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 100),
            ]);
            break;
          }
          case "landlordContact": {
            memberValidators["landlordContact"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^\\+255[67][0-9]{8}$"),
            ]);
            break;
          }
          case "startDate": {
            memberValidators["startDate"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "endDate": {
            memberValidators["endDate"] = new __NoOpValidator();
            break;
          }
          case "monthlyRent": {
            memberValidators["monthlyRent"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
              new __RangeValidator(0, undefined),
            ]);
            break;
          }
          case "reasonForLeaving": {
            memberValidators["reasonForLeaving"] = new __CompositeValidator<string>([
              new __LengthValidator(undefined, 200),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyAddress").validate(obj.propertyAddress, `${path}/propertyAddress`),
      ...getMemberValidator("landlordName").validate(obj.landlordName, `${path}/landlordName`),
      ...getMemberValidator("landlordContact").validate(obj.landlordContact, `${path}/landlordContact`),
      ...getMemberValidator("startDate").validate(obj.startDate, `${path}/startDate`),
      ...getMemberValidator("endDate").validate(obj.endDate, `${path}/endDate`),
      ...getMemberValidator("monthlyRent").validate(obj.monthlyRent, `${path}/monthlyRent`),
      ...getMemberValidator("reasonForLeaving").validate(obj.reasonForLeaving, `${path}/reasonForLeaving`),
    ];
  }
}

/**
 * Tenant user seeking rental properties
 * @public
 */
export interface Tenant {
  /**
   * Unique user identifier
   * @public
   */
  userId: string | undefined;

  /**
   * User email address
   * @public
   */
  email: string | undefined;

  /**
   * Tanzania phone number (+255 format)
   * @public
   */
  phoneNumber: string | undefined;

  /**
   * User first name
   * @public
   */
  firstName: string | undefined;

  /**
   * User last name
   * @public
   */
  lastName: string | undefined;

  /**
   * User type discriminator
   * @public
   */
  userType: UserType | undefined;

  /**
   * Profile image URL
   * @public
   */
  profileImage?: string;

  /**
   * Email verification status
   * @public
   */
  isEmailVerified: boolean | undefined;

  /**
   * Current account status
   * @public
   */
  accountStatus: AccountStatus | undefined;

  /**
   * Account creation timestamp
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Last update timestamp
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * User preferences
   * @public
   */
  preferences?: UserPreferences;

  /**
   * Employment information
   * @public
   */
  employmentInfo?: EmploymentInfo;

  /**
   * Monthly income in TZS
   * @public
   */
  monthlyIncome?: number;

  /**
   * Emergency contact information
   * @public
   */
  emergencyContact?: ContactInfo;

  /**
   * Previous rental history
   * @public
   */
  rentalHistory?: (RentalHistory)[];

  /**
   * Current lease property ID
   * @public
   */
  currentLease?: string;
}

export namespace Tenant {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    email?: __MultiConstraintValidator<string>,
    phoneNumber?: __MultiConstraintValidator<string>,
    firstName?: __MultiConstraintValidator<string>,
    lastName?: __MultiConstraintValidator<string>,
    userType?: __MultiConstraintValidator<string>,
    profileImage?: __MultiConstraintValidator<string>,
    isEmailVerified?: __MultiConstraintValidator<boolean>,
    accountStatus?: __MultiConstraintValidator<string>,
    createdAt?: __MultiConstraintValidator<Date>,
    updatedAt?: __MultiConstraintValidator<Date>,
    preferences?: __MultiConstraintValidator<UserPreferences>,
    employmentInfo?: __MultiConstraintValidator<EmploymentInfo>,
    monthlyIncome?: __MultiConstraintValidator<number>,
    emergencyContact?: __MultiConstraintValidator<ContactInfo>,
    rentalHistory?: __MultiConstraintValidator<Iterable<RentalHistory>>,
    currentLease?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Tenant, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "phoneNumber": {
            memberValidators["phoneNumber"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^\\+255[67][0-9]{8}$"),
            ]);
            break;
          }
          case "firstName": {
            memberValidators["firstName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "lastName": {
            memberValidators["lastName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "userType": {
            memberValidators["userType"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "LANDLORD",
                "TENANT",
                "ADMIN",
                ], [
                "LANDLORD",
                "TENANT",
                "ADMIN",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "profileImage": {
            memberValidators["profileImage"] = new __NoOpValidator();
            break;
          }
          case "isEmailVerified": {
            memberValidators["isEmailVerified"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "accountStatus": {
            memberValidators["accountStatus"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "PENDING_EMAIL_VERIFICATION",
                "ACTIVE",
                "PENDING_LANDLORD_VERIFICATION",
                "SUSPENDED",
                "INACTIVE",
                ], [
                "PENDING_EMAIL_VERIFICATION",
                "ACTIVE",
                "PENDING_LANDLORD_VERIFICATION",
                "SUSPENDED",
                "INACTIVE",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "updatedAt": {
            memberValidators["updatedAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "preferences": {
            memberValidators["preferences"] = new __CompositeStructureValidator<UserPreferences>(
              new __NoOpValidator(),
              UserPreferences.validate
            );
            break;
          }
          case "employmentInfo": {
            memberValidators["employmentInfo"] = new __CompositeStructureValidator<EmploymentInfo>(
              new __NoOpValidator(),
              EmploymentInfo.validate
            );
            break;
          }
          case "monthlyIncome": {
            memberValidators["monthlyIncome"] = new __CompositeValidator<number>([
              new __RangeValidator(0, undefined),
            ]);
            break;
          }
          case "emergencyContact": {
            memberValidators["emergencyContact"] = new __CompositeStructureValidator<ContactInfo>(
              new __NoOpValidator(),
              ContactInfo.validate
            );
            break;
          }
          case "rentalHistory": {
            memberValidators["rentalHistory"] = new __CompositeCollectionValidator<RentalHistory>(
              new __NoOpValidator(),
              new __CompositeStructureValidator<RentalHistory>(
                new __NoOpValidator(),
                RentalHistory.validate
              )
            );
            break;
          }
          case "currentLease": {
            memberValidators["currentLease"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
      ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
      ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
      ...getMemberValidator("userType").validate(obj.userType, `${path}/userType`),
      ...getMemberValidator("profileImage").validate(obj.profileImage, `${path}/profileImage`),
      ...getMemberValidator("isEmailVerified").validate(obj.isEmailVerified, `${path}/isEmailVerified`),
      ...getMemberValidator("accountStatus").validate(obj.accountStatus, `${path}/accountStatus`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
      ...getMemberValidator("updatedAt").validate(obj.updatedAt, `${path}/updatedAt`),
      ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
      ...getMemberValidator("employmentInfo").validate(obj.employmentInfo, `${path}/employmentInfo`),
      ...getMemberValidator("monthlyIncome").validate(obj.monthlyIncome, `${path}/monthlyIncome`),
      ...getMemberValidator("emergencyContact").validate(obj.emergencyContact, `${path}/emergencyContact`),
      ...getMemberValidator("rentalHistory").validate(obj.rentalHistory, `${path}/rentalHistory`),
      ...getMemberValidator("currentLease").validate(obj.currentLease, `${path}/currentLease`),
    ];
  }
}

/**
 * User profile union for different user types
 * @public
 */
export type UserProfile =
  | UserProfile.AdminMember
  | UserProfile.LandlordMember
  | UserProfile.TenantMember
  | UserProfile.$UnknownMember

/**
 * @public
 */
export namespace UserProfile {

  /**
   * Landlord user with property management capabilities
   * @public
   */
  export interface LandlordMember {
    landlord: Landlord;
    tenant?: never;
    admin?: never;
    $unknown?: never;
  }

  /**
   * Tenant user seeking rental properties
   * @public
   */
  export interface TenantMember {
    landlord?: never;
    tenant: Tenant;
    admin?: never;
    $unknown?: never;
  }

  /**
   * Admin user with system management privileges
   * @public
   */
  export interface AdminMember {
    landlord?: never;
    tenant?: never;
    admin: Admin;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    landlord?: never;
    tenant?: never;
    admin?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    landlord: (value: Landlord) => T;
    tenant: (value: Tenant) => T;
    admin: (value: Admin) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: UserProfile,
    visitor: Visitor<T>
  ): T => {
    if (value.landlord !== undefined) return visitor.landlord(value.landlord);
    if (value.tenant !== undefined) return visitor.tenant(value.tenant);
    if (value.admin !== undefined) return visitor.admin(value.admin);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  const memberValidators : {
    landlord?: __MultiConstraintValidator<Landlord>,
    tenant?: __MultiConstraintValidator<Tenant>,
    admin?: __MultiConstraintValidator<Admin>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UserProfile, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "landlord": {
            memberValidators["landlord"] = new __CompositeStructureValidator<Landlord>(
              new __NoOpValidator(),
              Landlord.validate
            );
            break;
          }
          case "tenant": {
            memberValidators["tenant"] = new __CompositeStructureValidator<Tenant>(
              new __NoOpValidator(),
              Tenant.validate
            );
            break;
          }
          case "admin": {
            memberValidators["admin"] = new __CompositeStructureValidator<Admin>(
              new __NoOpValidator(),
              Admin.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("landlord").validate(obj.landlord, `${path}/landlord`),
      ...getMemberValidator("tenant").validate(obj.tenant, `${path}/tenant`),
      ...getMemberValidator("admin").validate(obj.admin, `${path}/admin`),
    ];
  }
}

/**
 * @public
 */
export interface GetUserOutput {
  /**
   * User profile data
   * @public
   */
  user: UserProfile | undefined;
}

export namespace GetUserOutput {
  const memberValidators : {
    user?: __MultiConstraintValidator<UserProfile>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "user": {
            memberValidators["user"] = new __CompositeStructureValidator<UserProfile>(
              new __CompositeValidator<UserProfile>([
                new __RequiredValidator(),
              ]),
              UserProfile.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("user").validate(obj.user, `${path}/user`),
    ];
  }
}

/**
 * List landlord properties request
 * @public
 */
export interface ListLandlordPropertiesRequest {
  /**
   * Landlord user ID from URL path
   * @public
   */
  userId: string | undefined;

  /**
   * Page size
   * @public
   */
  limit?: number;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string;
}

export namespace ListLandlordPropertiesRequest {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ListLandlordPropertiesRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
}

/**
 * List managed properties request
 * @public
 */
export interface ListManagedPropertiesRequest {
  /**
   * Manager user ID from URL path
   * @public
   */
  managerId: string | undefined;

  /**
   * Page size
   * @public
   */
  limit?: number;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string;
}

export namespace ListManagedPropertiesRequest {
  const memberValidators : {
    managerId?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ListManagedPropertiesRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "managerId": {
            memberValidators["managerId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("managerId").validate(obj.managerId, `${path}/managerId`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
}

/**
 * List properties request
 * @public
 */
export interface ListPropertiesRequest {
  /**
   * Page size
   * @public
   */
  limit?: number;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string;
}

export namespace ListPropertiesRequest {
  const memberValidators : {
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ListPropertiesRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
}

/**
 * Mark property as available request
 * @public
 */
export interface MarkPropertyAsAvailableRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;
}

export namespace MarkPropertyAsAvailableRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MarkPropertyAsAvailableRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
    ];
  }
}

/**
 * Mark property as available response
 * @public
 */
export interface MarkPropertyAsAvailableResponse {
  /**
   * Updated property
   * @public
   */
  property: Property | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace MarkPropertyAsAvailableResponse {
  const memberValidators : {
    property?: __MultiConstraintValidator<Property>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MarkPropertyAsAvailableResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<Property>(
              new __CompositeValidator<Property>([
                new __RequiredValidator(),
              ]),
              Property.validate
            );
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Mark property as rented request
 * @public
 */
export interface MarkPropertyAsRentedRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;
}

export namespace MarkPropertyAsRentedRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MarkPropertyAsRentedRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
    ];
  }
}

/**
 * Mark property as rented response
 * @public
 */
export interface MarkPropertyAsRentedResponse {
  /**
   * Updated property
   * @public
   */
  property: Property | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace MarkPropertyAsRentedResponse {
  const memberValidators : {
    property?: __MultiConstraintValidator<Property>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MarkPropertyAsRentedResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<Property>(
              new __CompositeValidator<Property>([
                new __RequiredValidator(),
              ]),
              Property.validate
            );
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Price range filter
 * @public
 */
export interface PriceRange {
  /**
   * Minimum price
   * @public
   */
  min?: number;

  /**
   * Maximum price
   * @public
   */
  max?: number;
}

export namespace PriceRange {
  const memberValidators : {
    min?: __MultiConstraintValidator<number>,
    max?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PriceRange, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "min": {
            memberValidators["min"] = new __NoOpValidator();
            break;
          }
          case "max": {
            memberValidators["max"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("min").validate(obj.min, `${path}/min`),
      ...getMemberValidator("max").validate(obj.max, `${path}/max`),
    ];
  }
}

/**
 * Property status update
 * @public
 */
export interface PropertyStatusUpdate {
  /**
   * New property status
   * @public
   */
  status: PropertyStatus | undefined;
}

export namespace PropertyStatusUpdate {
  const memberValidators : {
    status?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PropertyStatusUpdate, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "status": {
            memberValidators["status"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "DRAFT",
                "ACTIVE",
                "RENTED",
                "MAINTENANCE",
                ], [
                "DRAFT",
                "ACTIVE",
                "RENTED",
                "MAINTENANCE",
              ]),
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("status").validate(obj.status, `${path}/status`),
    ];
  }
}

/**
 * Remove property manager request
 * @public
 */
export interface RemovePropertyManagerRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;
}

export namespace RemovePropertyManagerRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RemovePropertyManagerRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
    ];
  }
}

/**
 * Remove property manager response
 * @public
 */
export interface RemovePropertyManagerResponse {
  /**
   * Updated property
   * @public
   */
  property: Property | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace RemovePropertyManagerResponse {
  const memberValidators : {
    property?: __MultiConstraintValidator<Property>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RemovePropertyManagerResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<Property>(
              new __CompositeValidator<Property>([
                new __RequiredValidator(),
              ]),
              Property.validate
            );
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Password reset confirmation input
 * @public
 */
export interface ResetPasswordInput {
  /**
   * User's email address
   * @public
   */
  email: string | undefined;

  /**
   * 6-digit confirmation code
   * @public
   */
  confirmationCode: string | undefined;

  /**
   * New password (minimum 8 characters)
   * @public
   */
  newPassword: string | undefined;
}

export namespace ResetPasswordInput {
  const memberValidators : {
    email?: __MultiConstraintValidator<string>,
    confirmationCode?: __MultiConstraintValidator<string>,
    newPassword?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ResetPasswordInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "confirmationCode": {
            memberValidators["confirmationCode"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(6, 6),
            ]);
            break;
          }
          case "newPassword": {
            memberValidators["newPassword"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(8, undefined),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("confirmationCode").validate(obj.confirmationCode, `${path}/confirmationCode`),
      ...getMemberValidator("newPassword").validate(obj.newPassword, `${path}/newPassword`),
    ];
  }
}

/**
 * @public
 */
export interface ResetPasswordOutput {
  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace ResetPasswordOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ResetPasswordOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Application review request
 * @public
 */
export interface ReviewApplicationRequest {
  /**
   * Application ID from URL path
   * @public
   */
  applicationId: string | undefined;

  /**
   * Admin User ID from URL path
   * @public
   */
  userId: string | undefined;

  /**
   * Review decision
   * @public
   */
  decision: ApplicationDecision | undefined;
}

export namespace ReviewApplicationRequest {
  const memberValidators : {
    applicationId?: __MultiConstraintValidator<string>,
    userId?: __MultiConstraintValidator<string>,
    decision?: __MultiConstraintValidator<ApplicationDecision>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ReviewApplicationRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "applicationId": {
            memberValidators["applicationId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "decision": {
            memberValidators["decision"] = new __CompositeStructureValidator<ApplicationDecision>(
              new __CompositeValidator<ApplicationDecision>([
                new __RequiredValidator(),
              ]),
              ApplicationDecision.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("applicationId").validate(obj.applicationId, `${path}/applicationId`),
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("decision").validate(obj.decision, `${path}/decision`),
    ];
  }
}

/**
 * @public
 */
export interface ReviewLandlordApplicationOutput {
  /**
   * Review result message
   * @public
   */
  message: string | undefined;
}

export namespace ReviewLandlordApplicationOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ReviewLandlordApplicationOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Search properties request
 * @public
 */
export interface SearchPropertiesRequest {
  /**
   * Region filter
   * @public
   */
  region?: Region;

  /**
   * District filter
   * @public
   */
  district?: string;

  /**
   * Ward filter
   * @public
   */
  ward?: string;

  /**
   * Property type filter
   * @public
   */
  propertyType?: PropertyType;

  /**
   * Minimum rent
   * @public
   */
  minRent?: number;

  /**
   * Maximum rent
   * @public
   */
  maxRent?: number;

  /**
   * Minimum bedrooms
   * @public
   */
  minBedrooms?: number;

  /**
   * Page size
   * @public
   */
  limit?: number;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string;
}

export namespace SearchPropertiesRequest {
  const memberValidators : {
    region?: __MultiConstraintValidator<string>,
    district?: __MultiConstraintValidator<string>,
    ward?: __MultiConstraintValidator<string>,
    propertyType?: __MultiConstraintValidator<string>,
    minRent?: __MultiConstraintValidator<number>,
    maxRent?: __MultiConstraintValidator<number>,
    minBedrooms?: __MultiConstraintValidator<number>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SearchPropertiesRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "region": {
            memberValidators["region"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "DAR_ES_SALAAM",
                "ARUSHA",
                "DODOMA",
                ], [
                "DAR_ES_SALAAM",
                "ARUSHA",
                "DODOMA",
              ]),
            ]);
            break;
          }
          case "district": {
            memberValidators["district"] = new __NoOpValidator();
            break;
          }
          case "ward": {
            memberValidators["ward"] = new __NoOpValidator();
            break;
          }
          case "propertyType": {
            memberValidators["propertyType"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "APARTMENT",
                "HOUSE",
                "STUDIO",
                "ROOM",
                ], [
                "APARTMENT",
                "HOUSE",
                "STUDIO",
                "ROOM",
              ]),
            ]);
            break;
          }
          case "minRent": {
            memberValidators["minRent"] = new __CompositeValidator<number>([
              new __RangeValidator(0, undefined),
            ]);
            break;
          }
          case "maxRent": {
            memberValidators["maxRent"] = new __CompositeValidator<number>([
              new __RangeValidator(0, undefined),
            ]);
            break;
          }
          case "minBedrooms": {
            memberValidators["minBedrooms"] = new __CompositeValidator<number>([
              new __RangeValidator(0, 20),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("region").validate(obj.region, `${path}/region`),
      ...getMemberValidator("district").validate(obj.district, `${path}/district`),
      ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
      ...getMemberValidator("propertyType").validate(obj.propertyType, `${path}/propertyType`),
      ...getMemberValidator("minRent").validate(obj.minRent, `${path}/minRent`),
      ...getMemberValidator("maxRent").validate(obj.maxRent, `${path}/maxRent`),
      ...getMemberValidator("minBedrooms").validate(obj.minBedrooms, `${path}/minBedrooms`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
}

/**
 * Applied search filters
 * @public
 */
export interface SearchFilters {
  /**
   * Region filter
   * @public
   */
  region?: Region;

  /**
   * District filter
   * @public
   */
  district?: string;

  /**
   * Ward filter
   * @public
   */
  ward?: string;

  /**
   * Property type filter
   * @public
   */
  propertyType?: PropertyType;

  /**
   * Rent range
   * @public
   */
  rentRange?: PriceRange;

  /**
   * Bedroom count
   * @public
   */
  minBedrooms?: number;
}

export namespace SearchFilters {
  const memberValidators : {
    region?: __MultiConstraintValidator<string>,
    district?: __MultiConstraintValidator<string>,
    ward?: __MultiConstraintValidator<string>,
    propertyType?: __MultiConstraintValidator<string>,
    rentRange?: __MultiConstraintValidator<PriceRange>,
    minBedrooms?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SearchFilters, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "region": {
            memberValidators["region"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "DAR_ES_SALAAM",
                "ARUSHA",
                "DODOMA",
                ], [
                "DAR_ES_SALAAM",
                "ARUSHA",
                "DODOMA",
              ]),
            ]);
            break;
          }
          case "district": {
            memberValidators["district"] = new __NoOpValidator();
            break;
          }
          case "ward": {
            memberValidators["ward"] = new __NoOpValidator();
            break;
          }
          case "propertyType": {
            memberValidators["propertyType"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "APARTMENT",
                "HOUSE",
                "STUDIO",
                "ROOM",
                ], [
                "APARTMENT",
                "HOUSE",
                "STUDIO",
                "ROOM",
              ]),
            ]);
            break;
          }
          case "rentRange": {
            memberValidators["rentRange"] = new __CompositeStructureValidator<PriceRange>(
              new __NoOpValidator(),
              PriceRange.validate
            );
            break;
          }
          case "minBedrooms": {
            memberValidators["minBedrooms"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("region").validate(obj.region, `${path}/region`),
      ...getMemberValidator("district").validate(obj.district, `${path}/district`),
      ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
      ...getMemberValidator("propertyType").validate(obj.propertyType, `${path}/propertyType`),
      ...getMemberValidator("rentRange").validate(obj.rentRange, `${path}/rentRange`),
      ...getMemberValidator("minBedrooms").validate(obj.minBedrooms, `${path}/minBedrooms`),
    ];
  }
}

/**
 * Search properties response
 * @public
 */
export interface SearchPropertiesResponse {
  /**
   * Matching properties
   * @public
   */
  properties: (Property)[] | undefined;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string;

  /**
   * Total matches
   * @public
   */
  totalCount: number | undefined;

  /**
   * Applied filters
   * @public
   */
  filters: SearchFilters | undefined;
}

export namespace SearchPropertiesResponse {
  const memberValidators : {
    properties?: __MultiConstraintValidator<Iterable<Property>>,
    nextToken?: __MultiConstraintValidator<string>,
    totalCount?: __MultiConstraintValidator<number>,
    filters?: __MultiConstraintValidator<SearchFilters>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SearchPropertiesResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "properties": {
            memberValidators["properties"] = new __CompositeCollectionValidator<Property>(
              new __CompositeValidator<(Property)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Property>(
                new __NoOpValidator(),
                Property.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
          case "totalCount": {
            memberValidators["totalCount"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "filters": {
            memberValidators["filters"] = new __CompositeStructureValidator<SearchFilters>(
              new __CompositeValidator<SearchFilters>([
                new __RequiredValidator(),
              ]),
              SearchFilters.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("properties").validate(obj.properties, `${path}/properties`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
      ...getMemberValidator("totalCount").validate(obj.totalCount, `${path}/totalCount`),
      ...getMemberValidator("filters").validate(obj.filters, `${path}/filters`),
    ];
  }
}

/**
 * User authentication input
 * @public
 */
export interface SignInInput {
  /**
   * Valid email address
   * @public
   */
  email: string | undefined;

  /**
   * User password
   * @public
   */
  password: string | undefined;
}

export namespace SignInInput {
  const memberValidators : {
    email?: __MultiConstraintValidator<string>,
    password?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SignInInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "password": {
            memberValidators["password"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(8, undefined),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("password").validate(obj.password, `${path}/password`),
    ];
  }
}

/**
 * @public
 */
export interface SignInOutput {
  /**
   * JWT access token
   * @public
   */
  accessToken: string | undefined;

  /**
   * JWT refresh token
   * @public
   */
  refreshToken: string | undefined;

  /**
   * User profile data
   * @public
   */
  user: UserProfile | undefined;
}

export namespace SignInOutput {
  const memberValidators : {
    accessToken?: __MultiConstraintValidator<string>,
    refreshToken?: __MultiConstraintValidator<string>,
    user?: __MultiConstraintValidator<UserProfile>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SignInOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "accessToken": {
            memberValidators["accessToken"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "refreshToken": {
            memberValidators["refreshToken"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "user": {
            memberValidators["user"] = new __CompositeStructureValidator<UserProfile>(
              new __CompositeValidator<UserProfile>([
                new __RequiredValidator(),
              ]),
              UserProfile.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("accessToken").validate(obj.accessToken, `${path}/accessToken`),
      ...getMemberValidator("refreshToken").validate(obj.refreshToken, `${path}/refreshToken`),
      ...getMemberValidator("user").validate(obj.user, `${path}/user`),
    ];
  }
}

/**
 * User registration input data - all users start as tenants
 * @public
 */
export interface SignUpInput {
  /**
   * User email address
   * @public
   */
  email: string | undefined;

  /**
   * Password (minimum 8 characters)
   * @public
   */
  password: string | undefined;

  /**
   * User first name
   * @public
   */
  firstName: string | undefined;

  /**
   * User last name
   * @public
   */
  lastName: string | undefined;

  /**
   * Tanzania phone number (+255 format)
   * @public
   */
  phoneNumber: string | undefined;

  /**
   * Optional user preferences
   * @public
   */
  preferences?: UserPreferences;
}

export namespace SignUpInput {
  const memberValidators : {
    email?: __MultiConstraintValidator<string>,
    password?: __MultiConstraintValidator<string>,
    firstName?: __MultiConstraintValidator<string>,
    lastName?: __MultiConstraintValidator<string>,
    phoneNumber?: __MultiConstraintValidator<string>,
    preferences?: __MultiConstraintValidator<UserPreferences>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SignUpInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "password": {
            memberValidators["password"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(8, undefined),
            ]);
            break;
          }
          case "firstName": {
            memberValidators["firstName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "lastName": {
            memberValidators["lastName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "phoneNumber": {
            memberValidators["phoneNumber"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^\\+255[67][0-9]{8}$"),
            ]);
            break;
          }
          case "preferences": {
            memberValidators["preferences"] = new __CompositeStructureValidator<UserPreferences>(
              new __NoOpValidator(),
              UserPreferences.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("password").validate(obj.password, `${path}/password`),
      ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
      ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
      ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
      ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
    ];
  }
}

/**
 * @public
 */
export interface SignUpOutput {
  /**
   * Generated user ID
   * @public
   */
  userId: string | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace SignUpOutput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SignUpOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Update property data
 * @public
 */
export interface UpdatePropertyData {
  /**
   * Property title
   * @public
   */
  title?: string;

  /**
   * Property description
   * @public
   */
  description?: string;

  /**
   * Property address
   * @public
   */
  address?: AddressInput;

  /**
   * Property specifications
   * @public
   */
  specifications?: PropertySpecificationsInput;

  /**
   * Pricing information
   * @public
   */
  pricing?: PropertyPricingInput;

  /**
   * Available amenities
   * @public
   */
  amenities?: (string)[];

  /**
   * Property media
   * @public
   */
  media?: PropertyMediaInput;

  /**
   * Availability details
   * @public
   */
  availability?: PropertyAvailabilityInput;

  /**
   * Property status
   * @public
   */
  status?: PropertyStatus;
}

export namespace UpdatePropertyData {
  const memberValidators : {
    title?: __MultiConstraintValidator<string>,
    description?: __MultiConstraintValidator<string>,
    address?: __MultiConstraintValidator<AddressInput>,
    specifications?: __MultiConstraintValidator<PropertySpecificationsInput>,
    pricing?: __MultiConstraintValidator<PropertyPricingInput>,
    amenities?: __MultiConstraintValidator<Iterable<string>>,
    media?: __MultiConstraintValidator<PropertyMediaInput>,
    availability?: __MultiConstraintValidator<PropertyAvailabilityInput>,
    status?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdatePropertyData, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "title": {
            memberValidators["title"] = new __CompositeValidator<string>([
              new __LengthValidator(5, 100),
            ]);
            break;
          }
          case "description": {
            memberValidators["description"] = new __CompositeValidator<string>([
              new __LengthValidator(20, 2000),
            ]);
            break;
          }
          case "address": {
            memberValidators["address"] = new __CompositeStructureValidator<AddressInput>(
              new __NoOpValidator(),
              AddressInput.validate
            );
            break;
          }
          case "specifications": {
            memberValidators["specifications"] = new __CompositeStructureValidator<PropertySpecificationsInput>(
              new __NoOpValidator(),
              PropertySpecificationsInput.validate
            );
            break;
          }
          case "pricing": {
            memberValidators["pricing"] = new __CompositeStructureValidator<PropertyPricingInput>(
              new __NoOpValidator(),
              PropertyPricingInput.validate
            );
            break;
          }
          case "amenities": {
            memberValidators["amenities"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "media": {
            memberValidators["media"] = new __CompositeStructureValidator<PropertyMediaInput>(
              new __NoOpValidator(),
              PropertyMediaInput.validate
            );
            break;
          }
          case "availability": {
            memberValidators["availability"] = new __CompositeStructureValidator<PropertyAvailabilityInput>(
              new __NoOpValidator(),
              PropertyAvailabilityInput.validate
            );
            break;
          }
          case "status": {
            memberValidators["status"] = new __CompositeValidator<string>([
              new __EnumValidator([
                "DRAFT",
                "ACTIVE",
                "RENTED",
                "MAINTENANCE",
                ], [
                "DRAFT",
                "ACTIVE",
                "RENTED",
                "MAINTENANCE",
              ]),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("title").validate(obj.title, `${path}/title`),
      ...getMemberValidator("description").validate(obj.description, `${path}/description`),
      ...getMemberValidator("address").validate(obj.address, `${path}/address`),
      ...getMemberValidator("specifications").validate(obj.specifications, `${path}/specifications`),
      ...getMemberValidator("pricing").validate(obj.pricing, `${path}/pricing`),
      ...getMemberValidator("amenities").validate(obj.amenities, `${path}/amenities`),
      ...getMemberValidator("media").validate(obj.media, `${path}/media`),
      ...getMemberValidator("availability").validate(obj.availability, `${path}/availability`),
      ...getMemberValidator("status").validate(obj.status, `${path}/status`),
    ];
  }
}

/**
 * Update property request
 * @public
 */
export interface UpdatePropertyRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;

  /**
   * Updated property data
   * @public
   */
  property: UpdatePropertyData | undefined;
}

export namespace UpdatePropertyRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
    property?: __MultiConstraintValidator<UpdatePropertyData>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdatePropertyRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<UpdatePropertyData>(
              new __CompositeValidator<UpdatePropertyData>([
                new __RequiredValidator(),
              ]),
              UpdatePropertyData.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
    ];
  }
}

/**
 * Update property response
 * @public
 */
export interface UpdatePropertyResponse {
  /**
   * Updated property
   * @public
   */
  property: Property | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace UpdatePropertyResponse {
  const memberValidators : {
    property?: __MultiConstraintValidator<Property>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdatePropertyResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<Property>(
              new __CompositeValidator<Property>([
                new __RequiredValidator(),
              ]),
              Property.validate
            );
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Update property status request
 * @public
 */
export interface UpdatePropertyStatusRequest {
  /**
   * Property ID from URL path
   * @public
   */
  propertyId: string | undefined;

  /**
   * Status update data
   * @public
   */
  statusUpdate: PropertyStatusUpdate | undefined;
}

export namespace UpdatePropertyStatusRequest {
  const memberValidators : {
    propertyId?: __MultiConstraintValidator<string>,
    statusUpdate?: __MultiConstraintValidator<PropertyStatusUpdate>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdatePropertyStatusRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "propertyId": {
            memberValidators["propertyId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "statusUpdate": {
            memberValidators["statusUpdate"] = new __CompositeStructureValidator<PropertyStatusUpdate>(
              new __CompositeValidator<PropertyStatusUpdate>([
                new __RequiredValidator(),
              ]),
              PropertyStatusUpdate.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
      ...getMemberValidator("statusUpdate").validate(obj.statusUpdate, `${path}/statusUpdate`),
    ];
  }
}

/**
 * Update property status response
 * @public
 */
export interface UpdatePropertyStatusResponse {
  /**
   * Updated property
   * @public
   */
  property: Property | undefined;

  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace UpdatePropertyStatusResponse {
  const memberValidators : {
    property?: __MultiConstraintValidator<Property>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdatePropertyStatusResponse, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "property": {
            memberValidators["property"] = new __CompositeStructureValidator<Property>(
              new __CompositeValidator<Property>([
                new __RequiredValidator(),
              ]),
              Property.validate
            );
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("property").validate(obj.property, `${path}/property`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * @public
 */
export interface UpdateUserOutput {
  /**
   * Updated user profile
   * @public
   */
  user: UserProfile | undefined;
}

export namespace UpdateUserOutput {
  const memberValidators : {
    user?: __MultiConstraintValidator<UserProfile>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdateUserOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "user": {
            memberValidators["user"] = new __CompositeStructureValidator<UserProfile>(
              new __CompositeValidator<UserProfile>([
                new __RequiredValidator(),
              ]),
              UserProfile.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("user").validate(obj.user, `${path}/user`),
    ];
  }
}

/**
 * User profile update input
 * @public
 */
export interface UpdateUserData {
  /**
   * User first name
   * @public
   */
  firstName?: string;

  /**
   * User last name
   * @public
   */
  lastName?: string;

  /**
   * Tanzania phone number (+255 format)
   * @public
   */
  phoneNumber?: string;

  /**
   * Profile image URL
   * @public
   */
  profileImage?: string;

  /**
   * User preferences
   * @public
   */
  preferences?: UserPreferences;
}

export namespace UpdateUserData {
  const memberValidators : {
    firstName?: __MultiConstraintValidator<string>,
    lastName?: __MultiConstraintValidator<string>,
    phoneNumber?: __MultiConstraintValidator<string>,
    profileImage?: __MultiConstraintValidator<string>,
    preferences?: __MultiConstraintValidator<UserPreferences>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdateUserData, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "firstName": {
            memberValidators["firstName"] = new __CompositeValidator<string>([
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "lastName": {
            memberValidators["lastName"] = new __CompositeValidator<string>([
              new __LengthValidator(2, 50),
            ]);
            break;
          }
          case "phoneNumber": {
            memberValidators["phoneNumber"] = new __CompositeValidator<string>([
              new __PatternValidator("^\\+255[67][0-9]{8}$"),
            ]);
            break;
          }
          case "profileImage": {
            memberValidators["profileImage"] = new __NoOpValidator();
            break;
          }
          case "preferences": {
            memberValidators["preferences"] = new __CompositeStructureValidator<UserPreferences>(
              new __NoOpValidator(),
              UserPreferences.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
      ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
      ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
      ...getMemberValidator("profileImage").validate(obj.profileImage, `${path}/profileImage`),
      ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
    ];
  }
}

/**
 * User profile update request
 * @public
 */
export interface UpdateUserRequest {
  /**
   * User ID from URL path
   * @public
   */
  userId: string | undefined;

  /**
   * Updated user data
   * @public
   */
  userData?: UpdateUserData;
}

export namespace UpdateUserRequest {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    userData?: __MultiConstraintValidator<UpdateUserData>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdateUserRequest, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "userData": {
            memberValidators["userData"] = new __CompositeStructureValidator<UpdateUserData>(
              new __NoOpValidator(),
              UpdateUserData.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("userData").validate(obj.userData, `${path}/userData`),
    ];
  }
}

/**
 * Email verification input
 * @public
 */
export interface VerifyEmailInput {
  /**
   * User's email address
   * @public
   */
  email: string | undefined;

  /**
   * 6-digit confirmation code
   * @public
   */
  confirmationCode: string | undefined;
}

export namespace VerifyEmailInput {
  const memberValidators : {
    email?: __MultiConstraintValidator<string>,
    confirmationCode?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: VerifyEmailInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "confirmationCode": {
            memberValidators["confirmationCode"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(6, 6),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("confirmationCode").validate(obj.confirmationCode, `${path}/confirmationCode`),
    ];
  }
}

/**
 * @public
 */
export interface VerifyEmailOutput {
  /**
   * Success message
   * @public
   */
  message: string | undefined;
}

export namespace VerifyEmailOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: VerifyEmailOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}
