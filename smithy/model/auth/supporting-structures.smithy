$version: "2.0"

namespace com.nest.rental

@documentation("Employment details for tenant verification")
structure EmploymentInfo {
    @documentation("Employer company name")
    @required
    @length(min: 2, max: 100)
    employer: String

    @documentation("Job position/title")
    @required
    @length(min: 2, max: 50)
    position: String

    @documentation("Employment start date")
    @required
    startDate: Timestamp

    @documentation("Work location address")
    workAddress: String

    @documentation("Supervisor contact information")
    @pattern("^\\+255[67][0-9]{8}$")
    supervisorContact: String
}

@documentation("Emergency contact information")
structure ContactInfo {
    @documentation("Contact person full name")
    @required
    @length(min: 2, max: 100)
    name: String

    @documentation("Contact phone number")
    @required
    @pattern("^\\+255[67][0-9]{8}$")
    phoneNumber: String

    @documentation("Relationship to tenant")
    @required
    @length(min: 2, max: 30)
    relationship: String

    @documentation("Contact email address")
    @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    email: String
}

@documentation("Previous rental history record")
structure RentalHistory {
    @documentation("Previous property address")
    @required
    @length(min: 10, max: 200)
    propertyAddress: String

    @documentation("Previous landlord name")
    @required
    @length(min: 2, max: 100)
    landlordName: String

    @documentation("Previous landlord contact")
    @required
    @pattern("^\\+255[67][0-9]{8}$")
    landlordContact: String

    @documentation("Lease start date")
    @required
    startDate: Timestamp

    @documentation("Lease end date")
    endDate: Timestamp

    @documentation("Monthly rent amount in TZS")
    @required
    @range(min: 0)
    monthlyRent: Long

    @documentation("Reason for leaving property")
    @length(max: 200)
    reasonForLeaving: String
}

@documentation("User preferences and settings")
structure UserPreferences {
    @documentation("Preferred language")
    language: Language

    @documentation("Preferred currency")
    currency: Currency

    @documentation("Notification preferences")
    notifications: NotificationSettings
}

@documentation("Notification settings")
structure NotificationSettings {
    @documentation("Email notifications enabled")
    @required
    email: Boolean

    @documentation("SMS notifications enabled")
    @required
    sms: Boolean

    @documentation("Push notifications enabled")
    @required
    push: Boolean
}

@documentation("Application for role upgrade")
structure Application {
    @documentation("Application ID")
    @required
    applicationId: String

    @documentation("User ID")
    @required
    userId: String

    @documentation("Type of application")
    @required
    applicationType: ApplicationType

    @documentation("Application status")
    @required
    status: ApplicationStatus

    @documentation("Business name")
    businessName: String

    @documentation("Business license")
    businessLicense: String

    @documentation("Tax ID")
    taxId: String

    @documentation("Verification documents")
    verificationDocuments: StringList

    @documentation("Created timestamp")
    @required
    createdAt: Timestamp

    @documentation("Updated timestamp")
    @required
    updatedAt: Timestamp
}
