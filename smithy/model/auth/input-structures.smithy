$version: "2.0"

namespace com.nest.rental

@documentation("User registration input data - all users start as tenants")
structure SignUpInput {
    @documentation("User email address")
    @required
    @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    email: String

    @documentation("Password (minimum 8 characters)")
    @required
    @length(min: 8)
    password: String

    @documentation("User first name")
    @required
    @length(min: 2, max: 50)
    firstName: String

    @documentation("User last name")
    @required
    @length(min: 2, max: 50)
    lastName: String

    @documentation("Tanzania phone number (+255 format)")
    @required
    @pattern("^\\+255[67][0-9]{8}$")
    phoneNumber: String

    @documentation("Optional user preferences")
    preferences: UserPreferences
}

@documentation("Landlord upgrade application request")
structure BecomeLandlordRequest {
    @documentation("User ID from URL path")
    @httpLabel
    @required
    userId: String

    @documentation("Application data")
    @httpPayload
    @required
    application: BecomeLandlordApplication
}

@documentation("Landlord upgrade application input")
structure BecomeLandlordApplication {
    @documentation("Business or company name")
    @required
    @length(min: 2, max: 100)
    businessName: String

    @documentation("Business license number")
    @pattern("^[A-Z0-9-]{5,20}$")
    businessLicense: String

    @documentation("Tax identification number")
    @pattern("^[0-9]{9,12}$")
    taxId: String

    @documentation("Verification document URLs")
    verificationDocuments: StringList
}

@documentation("User authentication input")
structure SignInInput {
    @documentation("Valid email address")
    @required
    @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    email: String

    @documentation("User password")
    @required
    @length(min: 8)
    password: String
}

@documentation("Password reset request input")
structure ForgotPasswordInput {
    @documentation("User's email address")
    @required
    @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    email: String
}

@documentation("Password reset confirmation input")
structure ResetPasswordInput {
    @documentation("User's email address")
    @required
    @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    email: String

    @documentation("6-digit confirmation code")
    @required
    @length(min: 6, max: 6)
    confirmationCode: String

    @documentation("New password (minimum 8 characters)")
    @required
    @length(min: 8)
    newPassword: String
}

@documentation("Email verification input")
structure VerifyEmailInput {
    @documentation("User's email address")
    @required
    @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    email: String

    @documentation("6-digit confirmation code")
    @required
    @length(min: 6, max: 6)
    confirmationCode: String
}

@documentation("User profile update request")
structure UpdateUserRequest {
    @documentation("User ID from URL path")
    @httpLabel
    @required
    userId: String

    @documentation("Updated user data")
    @httpPayload
    userData: UpdateUserData
}

@documentation("User profile update input")
structure UpdateUserData {
    @documentation("User first name")
    @length(min: 2, max: 50)
    firstName: String

    @documentation("User last name")
    @length(min: 2, max: 50)
    lastName: String

    @documentation("Tanzania phone number (+255 format)")
    @pattern("^\\+255[67][0-9]{8}$")
    phoneNumber: String

    @documentation("Profile image URL")
    profileImage: String

    @documentation("User preferences")
    preferences: UserPreferences
}

@documentation("Application review request")
structure ReviewApplicationRequest {
    @documentation("Application ID from URL path")
    @httpLabel
    @required
    applicationId: String

    @documentation("Admin User ID from URL path")
    @httpLabel
    @required
    userId: String

    @documentation("Review decision")
    @httpPayload
    @required
    decision: ApplicationDecision
}

@documentation("Application review decision")
structure ApplicationDecision {
    @documentation("Approval status")
    @required
    status: ApplicationStatus

    @documentation("Admin comments")
    comments: String
}
