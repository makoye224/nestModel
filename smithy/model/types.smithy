$version: "2.0"

namespace com.nest.rental

enum PropertyType {
    APARTMENT
    HOUSE
    STUDIO
    ROOM
}

enum PropertyStatus {
    DRAFT
    ACTIVE
    RENTED
    MAINTENANCE
}

enum Region {
    DAR_ES_SALAAM
    ARUSHA
    DODOMA
}

list PropertyList {
    member: Property
}

list StringList {
    member: String
}
