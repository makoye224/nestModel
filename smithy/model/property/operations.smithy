$version: "2.0"

namespace com.nest.rental

use smithy.framework#ValidationException

@documentation("Create a new property listing")
@http(method: "POST", uri: "/create")
operation CreateProperty {
    input: CreatePropertyRequest
    output: CreatePropertyResponse
    errors: [
        ValidationException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Get property details by ID")
@readonly
@http(method: "GET", uri: "/get/{propertyId}")
operation GetProperty {
    input: GetPropertyRequest
    output: GetPropertyResponse
    errors: [
        ValidationException
        RentalValidationException
        PropertyNotFoundException
        InternalServerError
    ]
}

@documentation("Update existing property")
@http(method: "PUT", uri: "/update/{propertyId}")
@idempotent
operation UpdateProperty {
    input: UpdatePropertyRequest
    output: UpdatePropertyResponse
    errors: [
        ValidationException
        PropertyNotFoundException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Delete a property listing")
@http(method: "DELETE", uri: "/delete/{propertyId}")
@idempotent
operation DeleteProperty {
    input: DeletePropertyRequest
    output: DeletePropertyResponse
    errors: [
        ValidationException
        PropertyNotFoundException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("List properties owned by a landlord")
@readonly
@http(method: "GET", uri: "/landlord/{userId}")
operation ListLandlordProperties {
    input: ListLandlordPropertiesRequest
    output: ListPropertiesResponse
    errors: [
        ValidationException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("List all properties with pagination")
@readonly
@http(method: "GET", uri: "/list")
operation ListProperties {
    input: ListPropertiesRequest
    output: ListPropertiesResponse
    errors: [
        ValidationException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Search properties with filters")
@readonly
@http(method: "GET", uri: "/search")
operation SearchProperties {
    input: SearchPropertiesRequest
    output: SearchPropertiesResponse
    errors: [
        ValidationException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Get signed URL for media upload")
@http(method: "POST", uri: "/upload-url/{propertyId}")
operation GetMediaUploadUrl {
    input: GetMediaUploadUrlRequest
    output: GetMediaUploadUrlResponse
    errors: [
        ValidationException
        PropertyNotFoundException
        UnauthorizedException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Update property status only")
@http(method: "PATCH", uri: "/update-status/{propertyId}")
operation UpdatePropertyStatus {
    input: UpdatePropertyStatusRequest
    output: UpdatePropertyStatusResponse
    errors: [
        ValidationException
        PropertyNotFoundException
        UnauthorizedException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Mark property as rented")
@http(method: "POST", uri: "/mark-rented/{propertyId}")
operation MarkPropertyAsRented {
    input: MarkPropertyAsRentedRequest
    output: MarkPropertyAsRentedResponse
    errors: [
        ValidationException
        RentalValidationException
        PropertyNotFoundException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Mark property as available")
@http(method: "POST", uri: "/mark-available/{propertyId}")
operation MarkPropertyAsAvailable {
    input: MarkPropertyAsAvailableRequest
    output: MarkPropertyAsAvailableResponse
    errors: [
        ValidationException
        RentalValidationException
        PropertyNotFoundException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Assign property manager to property")
@http(method: "POST", uri: "/assign-manager/{propertyId}")
operation AssignPropertyManager {
    input: AssignPropertyManagerRequest
    output: AssignPropertyManagerResponse
    errors: [
        ValidationException
        PropertyNotFoundException
        UnauthorizedException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Remove property manager from property")
@http(method: "DELETE", uri: "/remove-manager/{propertyId}")
@idempotent
operation RemovePropertyManager {
    input: RemovePropertyManagerRequest
    output: RemovePropertyManagerResponse
    errors: [
        ValidationException
        RentalValidationException
        PropertyNotFoundException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("List properties managed by a property manager")
@readonly
@http(method: "GET", uri: "/managed/{managerId}")
operation ListManagedProperties {
    input: ListManagedPropertiesRequest
    output: ListPropertiesResponse
    errors: [
        ValidationException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Get properties by location")
@readonly
@http(method: "GET", uri: "/by-location/{region}/{district}")
operation GetPropertiesByLocation {
    input: GetPropertiesByLocationRequest
    output: ListPropertiesResponse
    errors: [
        ValidationException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Get nearby properties by coordinates")
@readonly
@http(method: "GET", uri: "/nearby")
operation GetNearbyProperties {
    input: GetNearbyPropertiesRequest
    output: ListPropertiesResponse
    errors: [
        ValidationException
        RentalValidationException
        InternalServerError
    ]
}
