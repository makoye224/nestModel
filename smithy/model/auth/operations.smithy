$version: "2.0"

namespace com.nest.rental

use smithy.framework#ValidationException

@documentation("Register a new user account - defaults to tenant role")
@http(method: "POST", uri: "/signup")
operation SignUp {
    input: SignUpInput

    output := {
        @documentation("Generated user ID")
        @required
        userId: String

        @documentation("Success message")
        @required
        message: String
    }

    errors: [
        ValidationException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Apply to upgrade account to landlord")
@http(method: "POST", uri: "/user/{userId}/become-landlord")
operation BecomeLandlord {
    input: BecomeLandlordRequest

    output := {
        @documentation("Application status message")
        @required
        message: String

        @documentation("Application ID for tracking")
        @required
        applicationId: String
    }

    errors: [
        ValidationException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Authenticate user and return tokens")
@http(method: "POST", uri: "/login")
operation SignIn {
    input: SignInInput

    output := {
        @documentation("JWT access token")
        @required
        accessToken: String

        @documentation("JWT refresh token")
        @required
        refreshToken: String

        @documentation("User profile data")
        @required
        user: UserProfile
    }

    errors: [
        ValidationException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Initiate password reset process")
@http(method: "POST", uri: "/forgot-password")
operation ForgotPassword {
    input: ForgotPasswordInput

    output := {
        @documentation("Confirmation message")
        @required
        message: String
    }

    errors: [
        ValidationException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Complete password reset with confirmation code")
@http(method: "POST", uri: "/reset-password")
operation ResetPassword {
    input: ResetPasswordInput

    output := {
        @documentation("Success message")
        @required
        message: String
    }

    errors: [
        ValidationException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Verify user email with confirmation code")
@http(method: "POST", uri: "/verify-email")
operation VerifyEmail {
    input: VerifyEmailInput

    output := {
        @documentation("Success message")
        @required
        message: String
    }

    errors: [
        ValidationException
        RentalValidationException
        InternalServerError
    ]
}

@documentation("Review landlord application (admin only)")
@http(method: "POST", uri: "/admin/{applicationId}/{userId}")
operation ReviewLandlordApplication {
    input: ReviewApplicationRequest

    output := {
        @documentation("Review result message")
        @required
        message: String
    }

    errors: [
        ValidationException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Retrieve user profile by ID")
@http(method: "GET", uri: "/user/{userId}")
@readonly
operation GetUser {
    input := {
        @documentation("User ID from URL path")
        @httpLabel
        @required
        userId: String
    }

    output := {
        @documentation("User profile data")
        @required
        user: UserProfile
    }

    errors: [
        ValidationException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}

@documentation("Update user profile information")
@http(method: "PUT", uri: "/user/{userId}")
@idempotent
operation UpdateUser {
    input: UpdateUserRequest

    output := {
        @documentation("Updated user profile")
        @required
        user: UserProfile
    }

    errors: [
        ValidationException
        RentalValidationException
        UnauthorizedException
        InternalServerError
    ]
}
