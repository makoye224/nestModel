$version: "2.0"

namespace com.nest.rental

@documentation("Create property response")
structure CreatePropertyResponse {
    @documentation("Created property")
    @required
    property: Property

    @documentation("Success message")
    @required
    message: String
}

@documentation("Get property response")
structure GetPropertyResponse {
    @documentation("Property details")
    @required
    property: Property
}

@documentation("Update property response")
structure UpdatePropertyResponse {
    @documentation("Updated property")
    @required
    property: Property

    @documentation("Success message")
    @required
    message: String
}

@documentation("Delete property response")
structure DeletePropertyResponse {
    @documentation("Success message")
    @required
    message: String
}

@documentation("List properties response")
structure ListPropertiesResponse {
    @documentation("List of properties")
    @required
    properties: PropertyList

    @documentation("Pagination token for next page")
    nextToken: String

    @documentation("Total count")
    @required
    count: Integer
}

@documentation("Search properties response")
structure SearchPropertiesResponse {
    @documentation("Matching properties")
    @required
    properties: PropertyList

    @documentation("Pagination token")
    nextToken: String

    @documentation("Total matches")
    @required
    totalCount: Integer

    @documentation("Applied filters")
    @required
    filters: SearchFilters
}

@documentation("Applied search filters")
structure SearchFilters {
    @documentation("Region filter")
    region: Region

    @documentation("District filter")
    district: String

    @documentation("Ward filter")
    ward: String

    @documentation("Property type filter")
    propertyType: PropertyType

    @documentation("Rent range")
    rentRange: PriceRange

    @documentation("Bedroom count")
    minBedrooms: Integer
}

@documentation("Price range filter")
structure PriceRange {
    @documentation("Minimum price")
    min: Long

    @documentation("Maximum price")
    max: Long
}

@documentation("Property summary for listings")
structure PropertySummary {
    @documentation("Property ID")
    @required
    propertyId: String

    @documentation("Property title")
    @required
    title: String

    @documentation("Property type")
    @required
    propertyType: PropertyType

    @documentation("Monthly rent")
    @required
    monthlyRent: Long

    @documentation("Number of bedrooms")
    @required
    bedrooms: Integer

    @documentation("Number of bathrooms")
    @required
    bathrooms: Integer

    @documentation("Region")
    @required
    region: Region

    @documentation("District")
    @required
    district: String

    @documentation("Ward")
    @required
    ward: String

    @documentation("Main image URL")
    mainImage: String

    @documentation("Property status")
    @required
    status: PropertyStatus

    @documentation("Is available")
    @required
    isAvailable: Boolean
}

@documentation("List of properties")
list PropertyList {
    member: Property
}

@documentation("List of property summaries")
list PropertySummaryList {
    member: PropertySummary
}

@documentation("Get media upload URL response")
structure GetMediaUploadUrlResponse {
    @documentation("S3 file key")
    @required
    fileKey: String

    @documentation("Pre-signed URL for upload")
    @required
    presignedUrl: String

    @documentation("Final CloudFront URL after upload")
    @required
    cloudfrontUrl: String

    @documentation("Success message")
    @required
    message: String
}

@documentation("Update property status response")
structure UpdatePropertyStatusResponse {
    @documentation("Updated property")
    @required
    property: Property

    @documentation("Success message")
    @required
    message: String
}

@documentation("Mark property as rented response")
structure MarkPropertyAsRentedResponse {
    @documentation("Updated property")
    @required
    property: Property

    @documentation("Success message")
    @required
    message: String
}

@documentation("Mark property as available response")
structure MarkPropertyAsAvailableResponse {
    @documentation("Updated property")
    @required
    property: Property

    @documentation("Success message")
    @required
    message: String
}

@documentation("Assign property manager response")
structure AssignPropertyManagerResponse {
    @documentation("Updated property")
    @required
    property: Property

    @documentation("Success message")
    @required
    message: String
}

@documentation("Remove property manager response")
structure RemovePropertyManagerResponse {
    @documentation("Updated property")
    @required
    property: Property

    @documentation("Success message")
    @required
    message: String
}
