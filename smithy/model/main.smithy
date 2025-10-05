$version: "2.0"

namespace com.nest.rental

use aws.protocols#restJson1

@title("Tanzania Rental Platform API")
@restJson1
service RentalPlatform {
    version: "2024-01-01"
    operations: [
        // Auth operations
        SignUp
        SignIn
        BecomeLandlord
        ForgotPassword
        ResetPassword
        GetUser
        UpdateUser
        VerifyEmail
        ReviewLandlordApplication
        // Property operations
        CreateProperty
        GetProperty
        UpdateProperty
        DeleteProperty
        ListProperties
        ListLandlordProperties
        SearchProperties
        GetMediaUploadUrl
        UpdatePropertyStatus
        MarkPropertyAsRented
        MarkPropertyAsAvailable
        AssignPropertyManager
        RemovePropertyManager
        ListManagedProperties
        GetPropertiesByLocation
        GetNearbyProperties
    ]
    errors: [
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}
