$version: "2.0"

namespace com.nest.rental

use com.nest.rental#AccountStatus
use com.nest.rental#AdminLevel
use com.nest.rental#ContactInfo
use com.nest.rental#EmploymentInfo
use com.nest.rental#RentalHistoryList
use com.nest.rental#StringList
use com.nest.rental#UserPreferences
use com.nest.rental#UserType

@documentation("Base user structure with common fields")
@mixin
structure BaseUser {
    @documentation("Unique user identifier")
    @required
    userId: String

    @documentation("User email address")
    @required
    @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    email: String

    @documentation("Tanzania phone number (+255 format)")
    @required
    @pattern("^\\+255[67][0-9]{8}$")
    phoneNumber: String

    @documentation("User first name")
    @required
    @length(min: 2, max: 50)
    firstName: String

    @documentation("User last name")
    @required
    @length(min: 2, max: 50)
    lastName: String

    @documentation("User type discriminator")
    @required
    userType: UserType

    @documentation("Profile image URL")
    profileImage: String

    @documentation("Email verification status")
    @required
    isEmailVerified: Boolean

    @documentation("Current account status")
    @required
    accountStatus: AccountStatus

    @documentation("Account creation timestamp")
    @required
    createdAt: Timestamp

    @documentation("Last update timestamp")
    @required
    updatedAt: Timestamp

    @documentation("User preferences")
    preferences: UserPreferences
}

@documentation("Landlord user with property management capabilities")
structure Landlord with [BaseUser] {
    @documentation("Landlord verification status by admin")
    @required
    isLandlordVerified: Boolean

    @documentation("Business or company name")
    @length(min: 2, max: 100)
    businessName: String

    @documentation("Business license number")
    @pattern("^[A-Z0-9-]{5,20}$")
    businessLicense: String

    @documentation("Tax identification number")
    @pattern("^[0-9]{9,12}$")
    taxId: String

    @documentation("Number of properties owned")
    @required
    @range(min: 0)
    propertyCount: Integer

    @documentation("Verification document URLs")
    verificationDocuments: StringList
}

@documentation("Tenant user seeking rental properties")
structure Tenant with [BaseUser] {
    @documentation("Employment information")
    employmentInfo: EmploymentInfo

    @documentation("Monthly income in TZS")
    @range(min: 0)
    monthlyIncome: Long

    @documentation("Emergency contact information")
    emergencyContact: ContactInfo

    @documentation("Previous rental history")
    rentalHistory: RentalHistoryList

    @documentation("Current lease property ID")
    currentLease: String
}

@documentation("Admin user with system management privileges")
structure Admin with [BaseUser] {
    @documentation("Administrative access level")
    @required
    adminLevel: AdminLevel

    @documentation("Specific admin permissions")
    permissions: StringList
}

@documentation("User profile union for different user types")
union UserProfile {
    landlord: Landlord
    tenant: Tenant
    admin: Admin
}
