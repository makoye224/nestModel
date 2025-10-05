// smithy-typescript generated code
import { RentalPlatformServiceException as __BaseException } from "./RentalPlatformServiceException";
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

/**
 * Internal server error
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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

  /**
   * @internal
   */
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
