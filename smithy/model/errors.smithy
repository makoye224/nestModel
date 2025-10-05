$version: "2.0"

namespace com.nest.rental

@documentation("Validation error for invalid input")
@error("client")
@httpError(400)
structure RentalValidationException {
    @documentation("Error message")
    @required
    message: String
}

@documentation("Unauthorized access error")
@error("client")
@httpError(401)
structure UnauthorizedException {
    @documentation("Error message")
    @required
    message: String
}

@documentation("Property not found error")
@error("client")
@httpError(404)
structure PropertyNotFoundException {
    @documentation("Error message")
    @required
    message: String
}

@documentation("Internal server error")
@error("server")
@httpError(500)
structure InternalServerError {
    @documentation("Error message")
    @required
    message: String
}
