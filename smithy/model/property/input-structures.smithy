$version: "2.0"

namespace com.nest.rental

@documentation("Create property request")
structure CreatePropertyRequest {
    @documentation("Property data")
    @httpPayload
    @required
    property: CreatePropertyData
}

@documentation("Create property data")
structure CreatePropertyData {
    @documentation("Property owner ID")
    @required
    landlordId: String

    @documentation("Property title")
    @required
    @length(min: 5, max: 100)
    title: String

    @documentation("Property description")
    @required
    @length(min: 20, max: 2000)
    description: String

    @documentation("Property address")
    @required
    address: AddressInput

    @documentation("Property type")
    @required
    propertyType: PropertyType

    @documentation("Property specifications")
    @required
    specifications: PropertySpecificationsInput

    @documentation("Pricing information")
    @required
    pricing: PropertyPricingInput

    @documentation("Available amenities")
    amenities: StringList

    @documentation("Property media")
    media: PropertyMediaInput

    @documentation("Availability details")
    @required
    availability: PropertyAvailabilityInput
}

@documentation("Update property request")
structure UpdatePropertyRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String

    @documentation("Updated property data")
    @httpPayload
    @required
    property: UpdatePropertyData
}

@documentation("Update property data")
structure UpdatePropertyData {
    @documentation("Property title")
    @length(min: 5, max: 100)
    title: String

    @documentation("Property description")
    @length(min: 20, max: 2000)
    description: String

    @documentation("Property address")
    address: AddressInput

    @documentation("Property specifications")
    specifications: PropertySpecificationsInput

    @documentation("Pricing information")
    pricing: PropertyPricingInput

    @documentation("Available amenities")
    amenities: StringList

    @documentation("Property media")
    media: PropertyMediaInput

    @documentation("Availability details")
    availability: PropertyAvailabilityInput

    @documentation("Property status")
    status: PropertyStatus
}

@documentation("Address input")
structure AddressInput {
    @documentation("Street address")
    @required
    @length(min: 5, max: 200)
    street: String

    @documentation("Region")
    @required
    region: Region

    @documentation("District (format: reg_district)")
    @required
    @length(min: 2, max: 50)
    district: String

    @documentation("Ward (format: reg_district_ward)")
    @required
    @length(min: 2, max: 100)
    ward: String

    @documentation("GPS coordinates")
    coordinates: CoordinatesInput
}

@documentation("Coordinates input")
structure CoordinatesInput {
    @documentation("Latitude")
    @required
    @range(min: -90, max: 90)
    lat: Double

    @documentation("Longitude")
    @required
    @range(min: -180, max: 180)
    lng: Double
}

@documentation("Property specifications input")
structure PropertySpecificationsInput {
    @documentation("Number of bedrooms")
    @required
    @range(min: 0, max: 20)
    bedrooms: Integer

    @documentation("Number of bathrooms")
    @required
    @range(min: 1, max: 20)
    bathrooms: Integer

    @documentation("Area in square meters")
    @required
    @range(min: 10, max: 10000)
    squareMeters: Integer

    @documentation("Is furnished")
    @required
    furnished: Boolean

    @documentation("Has parking")
    @required
    parking: Boolean
}

@documentation("Property pricing input")
structure PropertyPricingInput {
    @documentation("Monthly rent in TZS")
    @required
    @range(min: 50000, max: 50000000)
    monthlyRent: Long

    @documentation("Security deposit in TZS")
    @required
    @range(min: 0, max: 100000000)
    deposit: Long

    @documentation("Utility arrangement")
    @required
    utilities: UtilityType

    @documentation("Utility cost if separate")
    @range(min: 0, max: 1000000)
    utilityCost: Long
}

@documentation("Property media input")
structure PropertyMediaInput {
    @documentation("Image URLs")
    images: StringList

    @documentation("Video URLs")
    videos: StringList

    @documentation("Virtual tour URL")
    virtualTour: String
}

@documentation("Property availability input")
structure PropertyAvailabilityInput {
    @documentation("Is available")
    @required
    isAvailable: Boolean

    @documentation("Available from date")
    @required
    availableFrom: Timestamp

    @documentation("Lease duration in months")
    @required
    @range(min: 1, max: 60)
    leaseDuration: Integer
}

@documentation("Get property request")
structure GetPropertyRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String
}

@documentation("Delete property request")
structure DeletePropertyRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String
}

@documentation("List landlord properties request")
structure ListLandlordPropertiesRequest {
    @documentation("Landlord user ID from URL path")
    @httpLabel
    @required
    userId: String

    @documentation("Page size")
    @httpQuery("limit")
    @range(min: 1, max: 100)
    limit: Integer

    @documentation("Pagination token")
    @httpQuery("nextToken")
    nextToken: String
}

@documentation("List properties request")
structure ListPropertiesRequest {
    @documentation("Page size")
    @httpQuery("limit")
    @range(min: 1, max: 100)
    limit: Integer

    @documentation("Pagination token")
    @httpQuery("nextToken")
    nextToken: String
}

@documentation("Search properties request")
structure SearchPropertiesRequest {
    @documentation("Region filter")
    @httpQuery("region")
    region: Region

    @documentation("District filter")
    @httpQuery("district")
    district: String

    @documentation("Ward filter")
    @httpQuery("ward")
    ward: String

    @documentation("Property type filter")
    @httpQuery("propertyType")
    propertyType: PropertyType

    @documentation("Minimum rent")
    @httpQuery("minRent")
    @range(min: 0)
    minRent: Long

    @documentation("Maximum rent")
    @httpQuery("maxRent")
    @range(min: 0)
    maxRent: Long

    @documentation("Minimum bedrooms")
    @httpQuery("minBedrooms")
    @range(min: 0, max: 20)
    minBedrooms: Integer

    @documentation("Page size")
    @httpQuery("limit")
    @range(min: 1, max: 100)
    limit: Integer

    @documentation("Pagination token")
    @httpQuery("nextToken")
    nextToken: String
}

@documentation("Get signed URL for media upload request")
structure GetMediaUploadUrlRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String

    @documentation("Media upload data")
    @httpPayload
    @required
    media: MediaUploadInput
}

@documentation("Media upload input")
structure MediaUploadInput {
    @documentation("User ID for folder organization")
    @required
    userId: String

    @documentation("Media type for folder organization")
    @required
    mediaType: MediaType

    @documentation("File name")
    @required
    @length(min: 1, max: 255)
    fileName: String
}

@documentation("Update property status request")
structure UpdatePropertyStatusRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String

    @documentation("Status update data")
    @httpPayload
    @required
    statusUpdate: PropertyStatusUpdate
}

@documentation("Property status update")
structure PropertyStatusUpdate {
    @documentation("New property status")
    @required
    status: PropertyStatus
}

@documentation("Mark property as rented request")
structure MarkPropertyAsRentedRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String
}

@documentation("Mark property as available request")
structure MarkPropertyAsAvailableRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String
}

@documentation("Assign property manager request")
structure AssignPropertyManagerRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String

    @documentation("Manager assignment data")
    @httpPayload
    @required
    assignment: PropertyManagerAssignment
}

@documentation("Property manager assignment")
structure PropertyManagerAssignment {
    @documentation("Property manager user ID")
    @required
    managerId: String

    @documentation("Management permissions")
    permissions: ManagementPermissions

    @documentation("Commission rate percentage")
    @range(min: 0, max: 50)
    commissionRate: Double
}

@documentation("Management permissions")
structure ManagementPermissions {
    @documentation("Can collect rent")
    collectRent: Boolean

    @documentation("Can handle maintenance")
    handleMaintenance: Boolean

    @documentation("Can screen tenants")
    screenTenants: Boolean

    @documentation("Can update listing")
    updateListing: Boolean
}

@documentation("Remove property manager request")
structure RemovePropertyManagerRequest {
    @documentation("Property ID from URL path")
    @httpLabel
    @required
    propertyId: String
}

@documentation("List managed properties request")
structure ListManagedPropertiesRequest {
    @documentation("Manager user ID from URL path")
    @httpLabel
    @required
    managerId: String

    @documentation("Page size")
    @httpQuery("limit")
    @range(min: 1, max: 100)
    limit: Integer

    @documentation("Pagination token")
    @httpQuery("nextToken")
    nextToken: String
}

@documentation("Get properties by location request")
structure GetPropertiesByLocationRequest {
    @documentation("Region from URL path")
    @httpLabel
    @required
    region: String

    @documentation("District from URL path")
    @httpLabel
    @required
    district: String

    @documentation("Ward filter")
    @httpQuery("ward")
    ward: String

    @documentation("Page size")
    @httpQuery("limit")
    @range(min: 1, max: 100)
    limit: Integer

    @documentation("Pagination token")
    @httpQuery("nextToken")
    nextToken: String
}

@documentation("Get nearby properties request")
structure GetNearbyPropertiesRequest {
    @documentation("Latitude")
    @httpQuery("lat")
    @required
    @range(min: -90, max: 90)
    lat: Double

    @documentation("Longitude")
    @httpQuery("lng")
    @required
    @range(min: -180, max: 180)
    lng: Double

    @documentation("Radius in kilometers")
    @httpQuery("radius")
    @range(min: 0.1, max: 50)
    radius: Double

    @documentation("Page size")
    @httpQuery("limit")
    @range(min: 1, max: 100)
    limit: Integer

    @documentation("Pagination token")
    @httpQuery("nextToken")
    nextToken: String
}

@documentation("Media types")
enum MediaType {
    @enumValue("image")
    IMAGE = "image"

    @enumValue("video")
    VIDEO = "video"

    @enumValue("virtual_tour")
    VIRTUAL_TOUR = "virtual_tour"
}
