$version: "2.0"

namespace com.nest.rental

@documentation("Property entity with all details")
structure Property {
    @documentation("Unique property identifier")
    @required
    propertyId: String

    @documentation("Property owner ID")
    @required
    landlordId: String

    @documentation("Optional property manager ID")
    managerId: String

    @documentation("Property title")
    @required
    @length(min: 5, max: 100)
    title: String

    @documentation("Property description")
    @required
    @length(min: 20, max: 2000)
    description: String

    @documentation("Property address details")
    @required
    address: Address

    @documentation("Type of property")
    @required
    propertyType: PropertyType

    @documentation("Property specifications")
    @required
    specifications: PropertySpecifications

    @documentation("Pricing information")
    @required
    pricing: PropertyPricing

    @documentation("Available amenities")
    @required
    amenities: StringList

    @documentation("Property media files")
    @required
    media: PropertyMedia

    @documentation("Availability information")
    @required
    availability: PropertyAvailability

    @documentation("Current property status")
    @required
    status: PropertyStatus

    @documentation("Creation timestamp")
    @required
    createdAt: Timestamp

    @documentation("Last update timestamp")
    @required
    updatedAt: Timestamp
}

@documentation("Property address information")
structure Address {
    @documentation("Street address")
    @required
    @length(min: 5, max: 200)
    street: String

    @documentation("Region in Tanzania")
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
    coordinates: Coordinates
}

@documentation("GPS coordinates")
structure Coordinates {
    @documentation("Latitude")
    @required
    @range(min: -90, max: 90)
    lat: Double

    @documentation("Longitude")
    @required
    @range(min: -180, max: 180)
    lng: Double
}

@documentation("Property specifications")
structure PropertySpecifications {
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

    @documentation("Is property furnished")
    @required
    furnished: Boolean

    @documentation("Has parking space")
    @required
    parking: Boolean
}

@documentation("Property pricing details")
structure PropertyPricing {
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

    @documentation("Monthly utility cost in TZS if separate")
    @range(min: 0, max: 1000000)
    utilityCost: Long
}

@documentation("Property media files")
structure PropertyMedia {
    @documentation("Property image URLs")
    @required
    images: StringList

    @documentation("Property video URLs")
    videos: StringList

    @documentation("Virtual tour URL")
    virtualTour: String
}

@documentation("Property availability information")
structure PropertyAvailability {
    @documentation("Is property currently available")
    @required
    isAvailable: Boolean

    @documentation("Date when property becomes available")
    @required
    availableFrom: Timestamp

    @documentation("Lease duration in months")
    @required
    @range(min: 1, max: 60)
    leaseDuration: Integer
}

@documentation("Utility arrangement type")
enum UtilityType {
    @enumValue("included")
    INCLUDED = "included"

    @enumValue("separate")
    SEPARATE = "separate"
}
