$version: "2.0"

namespace com.nest.rental

enum UserRole {
    LANDLORD
    PROPERTY_MANAGER
    TENANT
    ADMIN
}

enum AccountStatus {
    PENDING_EMAIL_VERIFICATION
    ACTIVE
    PENDING_LANDLORD_VERIFICATION
    SUSPENDED
    INACTIVE
}

enum Language {
    EN
    SW
}

enum Currency {
    TZS
}

enum AdminLevel {
    SUPER_ADMIN
    MODERATOR
    SUPPORT
}

enum UserType {
    LANDLORD
    TENANT
    ADMIN
}

enum ApplicationType {
    BECOME_LANDLORD
}

enum ApplicationStatus {
    PENDING
    APPROVED
    REJECTED
}
