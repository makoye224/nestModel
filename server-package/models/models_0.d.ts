import { ServiceException as __BaseException, ValidationFailure as __ValidationFailure } from "@aws-smithy/server-common";
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
/**
 * @public
 * @enum
 */
export declare const AccountStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly PENDING_EMAIL_VERIFICATION: "PENDING_EMAIL_VERIFICATION";
    readonly PENDING_LANDLORD_VERIFICATION: "PENDING_LANDLORD_VERIFICATION";
    readonly SUSPENDED: "SUSPENDED";
};
/**
 * @public
 */
export type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus];
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
export declare namespace Coordinates {
    /**
     * @internal
     */
    const validate: (obj: Coordinates, path?: string) => __ValidationFailure[];
}
/**
 * @public
 * @enum
 */
export declare const Region: {
    readonly ARUSHA: "ARUSHA";
    readonly DAR_ES_SALAAM: "DAR_ES_SALAAM";
    readonly DODOMA: "DODOMA";
};
/**
 * @public
 */
export type Region = typeof Region[keyof typeof Region];
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
export declare namespace Address {
    /**
     * @internal
     */
    const validate: (obj: Address, path?: string) => __ValidationFailure[];
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
export declare namespace CoordinatesInput {
    /**
     * @internal
     */
    const validate: (obj: CoordinatesInput, path?: string) => __ValidationFailure[];
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
export declare namespace AddressInput {
    /**
     * @internal
     */
    const validate: (obj: AddressInput, path?: string) => __ValidationFailure[];
}
/**
 * @public
 * @enum
 */
export declare const AdminLevel: {
    readonly MODERATOR: "MODERATOR";
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly SUPPORT: "SUPPORT";
};
/**
 * @public
 */
export type AdminLevel = typeof AdminLevel[keyof typeof AdminLevel];
/**
 * @public
 * @enum
 */
export declare const Currency: {
    readonly TZS: "TZS";
};
/**
 * @public
 */
export type Currency = typeof Currency[keyof typeof Currency];
/**
 * @public
 * @enum
 */
export declare const Language: {
    readonly EN: "EN";
    readonly SW: "SW";
};
/**
 * @public
 */
export type Language = typeof Language[keyof typeof Language];
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
export declare namespace NotificationSettings {
    /**
     * @internal
     */
    const validate: (obj: NotificationSettings, path?: string) => __ValidationFailure[];
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
export declare namespace UserPreferences {
    /**
     * @internal
     */
    const validate: (obj: UserPreferences, path?: string) => __ValidationFailure[];
}
/**
 * @public
 * @enum
 */
export declare const UserType: {
    readonly ADMIN: "ADMIN";
    readonly LANDLORD: "LANDLORD";
    readonly TENANT: "TENANT";
};
/**
 * @public
 */
export type UserType = typeof UserType[keyof typeof UserType];
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
export declare namespace Admin {
    /**
     * @internal
     */
    const validate: (obj: Admin, path?: string) => __ValidationFailure[];
}
/**
 * @public
 * @enum
 */
export declare const ApplicationStatus: {
    readonly APPROVED: "APPROVED";
    readonly PENDING: "PENDING";
    readonly REJECTED: "REJECTED";
};
/**
 * @public
 */
export type ApplicationStatus = typeof ApplicationStatus[keyof typeof ApplicationStatus];
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
export declare namespace ApplicationDecision {
    /**
     * @internal
     */
    const validate: (obj: ApplicationDecision, path?: string) => __ValidationFailure[];
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
export declare namespace ManagementPermissions {
    /**
     * @internal
     */
    const validate: (obj: ManagementPermissions, path?: string) => __ValidationFailure[];
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
export declare namespace PropertyManagerAssignment {
    /**
     * @internal
     */
    const validate: (obj: PropertyManagerAssignment, path?: string) => __ValidationFailure[];
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
export declare namespace AssignPropertyManagerRequest {
    /**
     * @internal
     */
    const validate: (obj: AssignPropertyManagerRequest, path?: string) => __ValidationFailure[];
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
export declare namespace PropertyAvailability {
    /**
     * @internal
     */
    const validate: (obj: PropertyAvailability, path?: string) => __ValidationFailure[];
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
export declare namespace PropertyMedia {
    /**
     * @internal
     */
    const validate: (obj: PropertyMedia, path?: string) => __ValidationFailure[];
}
/**
 * @public
 * @enum
 */
export declare const UtilityType: {
    readonly INCLUDED: "included";
    readonly SEPARATE: "separate";
};
/**
 * @public
 */
export type UtilityType = typeof UtilityType[keyof typeof UtilityType];
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
export declare namespace PropertyPricing {
    /**
     * @internal
     */
    const validate: (obj: PropertyPricing, path?: string) => __ValidationFailure[];
}
/**
 * @public
 * @enum
 */
export declare const PropertyType: {
    readonly APARTMENT: "APARTMENT";
    readonly HOUSE: "HOUSE";
    readonly ROOM: "ROOM";
    readonly STUDIO: "STUDIO";
};
/**
 * @public
 */
export type PropertyType = typeof PropertyType[keyof typeof PropertyType];
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
export declare namespace PropertySpecifications {
    /**
     * @internal
     */
    const validate: (obj: PropertySpecifications, path?: string) => __ValidationFailure[];
}
/**
 * @public
 * @enum
 */
export declare const PropertyStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DRAFT: "DRAFT";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly RENTED: "RENTED";
};
/**
 * @public
 */
export type PropertyStatus = typeof PropertyStatus[keyof typeof PropertyStatus];
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
export declare namespace Property {
    /**
     * @internal
     */
    const validate: (obj: Property, path?: string) => __ValidationFailure[];
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
export declare namespace AssignPropertyManagerResponse {
    /**
     * @internal
     */
    const validate: (obj: AssignPropertyManagerResponse, path?: string) => __ValidationFailure[];
}
/**
 * Internal server error
 * @public
 */
export declare class InternalServerError extends __BaseException {
    readonly name: "InternalServerError";
    readonly $fault: "server";
    constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>);
}
/**
 * Property not found error
 * @public
 */
export declare class PropertyNotFoundException extends __BaseException {
    readonly name: "PropertyNotFoundException";
    readonly $fault: "client";
    constructor(opts: __ExceptionOptionType<PropertyNotFoundException, __BaseException>);
}
/**
 * Validation error for invalid input
 * @public
 */
export declare class RentalValidationException extends __BaseException {
    readonly name: "RentalValidationException";
    readonly $fault: "client";
    constructor(opts: __ExceptionOptionType<RentalValidationException, __BaseException>);
}
/**
 * Unauthorized access error
 * @public
 */
export declare class UnauthorizedException extends __BaseException {
    readonly name: "UnauthorizedException";
    readonly $fault: "client";
    constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>);
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
export declare namespace ValidationExceptionField {
    /**
     * @internal
     */
    const validate: (obj: ValidationExceptionField, path?: string) => __ValidationFailure[];
}
/**
 * A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 * @public
 */
export declare class ValidationException extends __BaseException {
    readonly name: "ValidationException";
    readonly $fault: "client";
    /**
     * A list of specific failures encountered while validating the input.
     * A member can appear in this list more than once if it failed to satisfy multiple constraints.
     * @public
     */
    fieldList?: (ValidationExceptionField)[];
    constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>);
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
export declare namespace BecomeLandlordOutput {
    /**
     * @internal
     */
    const validate: (obj: BecomeLandlordOutput, path?: string) => __ValidationFailure[];
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
export declare namespace BecomeLandlordApplication {
    /**
     * @internal
     */
    const validate: (obj: BecomeLandlordApplication, path?: string) => __ValidationFailure[];
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
export declare namespace BecomeLandlordRequest {
    /**
     * @internal
     */
    const validate: (obj: BecomeLandlordRequest, path?: string) => __ValidationFailure[];
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
export declare namespace ContactInfo {
    /**
     * @internal
     */
    const validate: (obj: ContactInfo, path?: string) => __ValidationFailure[];
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
export declare namespace PropertyAvailabilityInput {
    /**
     * @internal
     */
    const validate: (obj: PropertyAvailabilityInput, path?: string) => __ValidationFailure[];
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
export declare namespace PropertyMediaInput {
    /**
     * @internal
     */
    const validate: (obj: PropertyMediaInput, path?: string) => __ValidationFailure[];
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
export declare namespace PropertyPricingInput {
    /**
     * @internal
     */
    const validate: (obj: PropertyPricingInput, path?: string) => __ValidationFailure[];
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
export declare namespace PropertySpecificationsInput {
    /**
     * @internal
     */
    const validate: (obj: PropertySpecificationsInput, path?: string) => __ValidationFailure[];
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
export declare namespace CreatePropertyData {
    /**
     * @internal
     */
    const validate: (obj: CreatePropertyData, path?: string) => __ValidationFailure[];
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
export declare namespace CreatePropertyRequest {
    /**
     * @internal
     */
    const validate: (obj: CreatePropertyRequest, path?: string) => __ValidationFailure[];
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
export declare namespace CreatePropertyResponse {
    /**
     * @internal
     */
    const validate: (obj: CreatePropertyResponse, path?: string) => __ValidationFailure[];
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
export declare namespace DeletePropertyRequest {
    /**
     * @internal
     */
    const validate: (obj: DeletePropertyRequest, path?: string) => __ValidationFailure[];
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
export declare namespace DeletePropertyResponse {
    /**
     * @internal
     */
    const validate: (obj: DeletePropertyResponse, path?: string) => __ValidationFailure[];
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
export declare namespace EmploymentInfo {
    /**
     * @internal
     */
    const validate: (obj: EmploymentInfo, path?: string) => __ValidationFailure[];
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
export declare namespace ForgotPasswordInput {
    /**
     * @internal
     */
    const validate: (obj: ForgotPasswordInput, path?: string) => __ValidationFailure[];
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
export declare namespace ForgotPasswordOutput {
    /**
     * @internal
     */
    const validate: (obj: ForgotPasswordOutput, path?: string) => __ValidationFailure[];
}
/**
 * @public
 * @enum
 */
export declare const MediaType: {
    readonly IMAGE: "image";
    readonly VIDEO: "video";
    readonly VIRTUAL_TOUR: "virtual_tour";
};
/**
 * @public
 */
export type MediaType = typeof MediaType[keyof typeof MediaType];
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
export declare namespace MediaUploadInput {
    /**
     * @internal
     */
    const validate: (obj: MediaUploadInput, path?: string) => __ValidationFailure[];
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
export declare namespace GetMediaUploadUrlRequest {
    /**
     * @internal
     */
    const validate: (obj: GetMediaUploadUrlRequest, path?: string) => __ValidationFailure[];
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
export declare namespace GetMediaUploadUrlResponse {
    /**
     * @internal
     */
    const validate: (obj: GetMediaUploadUrlResponse, path?: string) => __ValidationFailure[];
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
export declare namespace GetNearbyPropertiesRequest {
    /**
     * @internal
     */
    const validate: (obj: GetNearbyPropertiesRequest, path?: string) => __ValidationFailure[];
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
export declare namespace ListPropertiesResponse {
    /**
     * @internal
     */
    const validate: (obj: ListPropertiesResponse, path?: string) => __ValidationFailure[];
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
export declare namespace GetPropertiesByLocationRequest {
    /**
     * @internal
     */
    const validate: (obj: GetPropertiesByLocationRequest, path?: string) => __ValidationFailure[];
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
export declare namespace GetPropertyRequest {
    /**
     * @internal
     */
    const validate: (obj: GetPropertyRequest, path?: string) => __ValidationFailure[];
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
export declare namespace GetPropertyResponse {
    /**
     * @internal
     */
    const validate: (obj: GetPropertyResponse, path?: string) => __ValidationFailure[];
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
export declare namespace GetUserInput {
    /**
     * @internal
     */
    const validate: (obj: GetUserInput, path?: string) => __ValidationFailure[];
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
export declare namespace Landlord {
    /**
     * @internal
     */
    const validate: (obj: Landlord, path?: string) => __ValidationFailure[];
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
export declare namespace RentalHistory {
    /**
     * @internal
     */
    const validate: (obj: RentalHistory, path?: string) => __ValidationFailure[];
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
export declare namespace Tenant {
    /**
     * @internal
     */
    const validate: (obj: Tenant, path?: string) => __ValidationFailure[];
}
/**
 * User profile union for different user types
 * @public
 */
export type UserProfile = UserProfile.AdminMember | UserProfile.LandlordMember | UserProfile.TenantMember | UserProfile.$UnknownMember;
/**
 * @public
 */
export declare namespace UserProfile {
    /**
     * Landlord user with property management capabilities
     * @public
     */
    interface LandlordMember {
        landlord: Landlord;
        tenant?: never;
        admin?: never;
        $unknown?: never;
    }
    /**
     * Tenant user seeking rental properties
     * @public
     */
    interface TenantMember {
        landlord?: never;
        tenant: Tenant;
        admin?: never;
        $unknown?: never;
    }
    /**
     * Admin user with system management privileges
     * @public
     */
    interface AdminMember {
        landlord?: never;
        tenant?: never;
        admin: Admin;
        $unknown?: never;
    }
    /**
     * @public
     */
    interface $UnknownMember {
        landlord?: never;
        tenant?: never;
        admin?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        landlord: (value: Landlord) => T;
        tenant: (value: Tenant) => T;
        admin: (value: Admin) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: UserProfile, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const validate: (obj: UserProfile, path?: string) => __ValidationFailure[];
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
export declare namespace GetUserOutput {
    /**
     * @internal
     */
    const validate: (obj: GetUserOutput, path?: string) => __ValidationFailure[];
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
export declare namespace ListLandlordPropertiesRequest {
    /**
     * @internal
     */
    const validate: (obj: ListLandlordPropertiesRequest, path?: string) => __ValidationFailure[];
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
export declare namespace ListManagedPropertiesRequest {
    /**
     * @internal
     */
    const validate: (obj: ListManagedPropertiesRequest, path?: string) => __ValidationFailure[];
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
export declare namespace ListPropertiesRequest {
    /**
     * @internal
     */
    const validate: (obj: ListPropertiesRequest, path?: string) => __ValidationFailure[];
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
export declare namespace MarkPropertyAsAvailableRequest {
    /**
     * @internal
     */
    const validate: (obj: MarkPropertyAsAvailableRequest, path?: string) => __ValidationFailure[];
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
export declare namespace MarkPropertyAsAvailableResponse {
    /**
     * @internal
     */
    const validate: (obj: MarkPropertyAsAvailableResponse, path?: string) => __ValidationFailure[];
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
export declare namespace MarkPropertyAsRentedRequest {
    /**
     * @internal
     */
    const validate: (obj: MarkPropertyAsRentedRequest, path?: string) => __ValidationFailure[];
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
export declare namespace MarkPropertyAsRentedResponse {
    /**
     * @internal
     */
    const validate: (obj: MarkPropertyAsRentedResponse, path?: string) => __ValidationFailure[];
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
export declare namespace PriceRange {
    /**
     * @internal
     */
    const validate: (obj: PriceRange, path?: string) => __ValidationFailure[];
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
export declare namespace PropertyStatusUpdate {
    /**
     * @internal
     */
    const validate: (obj: PropertyStatusUpdate, path?: string) => __ValidationFailure[];
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
export declare namespace RemovePropertyManagerRequest {
    /**
     * @internal
     */
    const validate: (obj: RemovePropertyManagerRequest, path?: string) => __ValidationFailure[];
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
export declare namespace RemovePropertyManagerResponse {
    /**
     * @internal
     */
    const validate: (obj: RemovePropertyManagerResponse, path?: string) => __ValidationFailure[];
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
export declare namespace ResetPasswordInput {
    /**
     * @internal
     */
    const validate: (obj: ResetPasswordInput, path?: string) => __ValidationFailure[];
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
export declare namespace ResetPasswordOutput {
    /**
     * @internal
     */
    const validate: (obj: ResetPasswordOutput, path?: string) => __ValidationFailure[];
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
export declare namespace ReviewApplicationRequest {
    /**
     * @internal
     */
    const validate: (obj: ReviewApplicationRequest, path?: string) => __ValidationFailure[];
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
export declare namespace ReviewLandlordApplicationOutput {
    /**
     * @internal
     */
    const validate: (obj: ReviewLandlordApplicationOutput, path?: string) => __ValidationFailure[];
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
export declare namespace SearchPropertiesRequest {
    /**
     * @internal
     */
    const validate: (obj: SearchPropertiesRequest, path?: string) => __ValidationFailure[];
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
export declare namespace SearchFilters {
    /**
     * @internal
     */
    const validate: (obj: SearchFilters, path?: string) => __ValidationFailure[];
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
export declare namespace SearchPropertiesResponse {
    /**
     * @internal
     */
    const validate: (obj: SearchPropertiesResponse, path?: string) => __ValidationFailure[];
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
export declare namespace SignInInput {
    /**
     * @internal
     */
    const validate: (obj: SignInInput, path?: string) => __ValidationFailure[];
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
export declare namespace SignInOutput {
    /**
     * @internal
     */
    const validate: (obj: SignInOutput, path?: string) => __ValidationFailure[];
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
export declare namespace SignUpInput {
    /**
     * @internal
     */
    const validate: (obj: SignUpInput, path?: string) => __ValidationFailure[];
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
export declare namespace SignUpOutput {
    /**
     * @internal
     */
    const validate: (obj: SignUpOutput, path?: string) => __ValidationFailure[];
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
export declare namespace UpdatePropertyData {
    /**
     * @internal
     */
    const validate: (obj: UpdatePropertyData, path?: string) => __ValidationFailure[];
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
export declare namespace UpdatePropertyRequest {
    /**
     * @internal
     */
    const validate: (obj: UpdatePropertyRequest, path?: string) => __ValidationFailure[];
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
export declare namespace UpdatePropertyResponse {
    /**
     * @internal
     */
    const validate: (obj: UpdatePropertyResponse, path?: string) => __ValidationFailure[];
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
export declare namespace UpdatePropertyStatusRequest {
    /**
     * @internal
     */
    const validate: (obj: UpdatePropertyStatusRequest, path?: string) => __ValidationFailure[];
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
export declare namespace UpdatePropertyStatusResponse {
    /**
     * @internal
     */
    const validate: (obj: UpdatePropertyStatusResponse, path?: string) => __ValidationFailure[];
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
export declare namespace UpdateUserOutput {
    /**
     * @internal
     */
    const validate: (obj: UpdateUserOutput, path?: string) => __ValidationFailure[];
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
export declare namespace UpdateUserData {
    /**
     * @internal
     */
    const validate: (obj: UpdateUserData, path?: string) => __ValidationFailure[];
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
export declare namespace UpdateUserRequest {
    /**
     * @internal
     */
    const validate: (obj: UpdateUserRequest, path?: string) => __ValidationFailure[];
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
export declare namespace VerifyEmailInput {
    /**
     * @internal
     */
    const validate: (obj: VerifyEmailInput, path?: string) => __ValidationFailure[];
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
export declare namespace VerifyEmailOutput {
    /**
     * @internal
     */
    const validate: (obj: VerifyEmailOutput, path?: string) => __ValidationFailure[];
}
