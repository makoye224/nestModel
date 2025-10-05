"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaType = exports.ForgotPasswordOutput = exports.ForgotPasswordInput = exports.EmploymentInfo = exports.DeletePropertyResponse = exports.DeletePropertyRequest = exports.CreatePropertyResponse = exports.CreatePropertyRequest = exports.CreatePropertyData = exports.PropertySpecificationsInput = exports.PropertyPricingInput = exports.PropertyMediaInput = exports.PropertyAvailabilityInput = exports.ContactInfo = exports.BecomeLandlordRequest = exports.BecomeLandlordApplication = exports.BecomeLandlordOutput = exports.ValidationException = exports.ValidationExceptionField = exports.UnauthorizedException = exports.RentalValidationException = exports.PropertyNotFoundException = exports.InternalServerError = exports.AssignPropertyManagerResponse = exports.Property = exports.PropertyStatus = exports.PropertySpecifications = exports.PropertyType = exports.PropertyPricing = exports.UtilityType = exports.PropertyMedia = exports.PropertyAvailability = exports.AssignPropertyManagerRequest = exports.PropertyManagerAssignment = exports.ManagementPermissions = exports.ApplicationDecision = exports.ApplicationStatus = exports.Admin = exports.UserType = exports.UserPreferences = exports.NotificationSettings = exports.Language = exports.Currency = exports.AdminLevel = exports.AddressInput = exports.CoordinatesInput = exports.Address = exports.Region = exports.Coordinates = exports.AccountStatus = void 0;
exports.VerifyEmailOutput = exports.VerifyEmailInput = exports.UpdateUserRequest = exports.UpdateUserData = exports.UpdateUserOutput = exports.UpdatePropertyStatusResponse = exports.UpdatePropertyStatusRequest = exports.UpdatePropertyResponse = exports.UpdatePropertyRequest = exports.UpdatePropertyData = exports.SignUpOutput = exports.SignUpInput = exports.SignInOutput = exports.SignInInput = exports.SearchPropertiesResponse = exports.SearchFilters = exports.SearchPropertiesRequest = exports.ReviewLandlordApplicationOutput = exports.ReviewApplicationRequest = exports.ResetPasswordOutput = exports.ResetPasswordInput = exports.RemovePropertyManagerResponse = exports.RemovePropertyManagerRequest = exports.PropertyStatusUpdate = exports.PriceRange = exports.MarkPropertyAsRentedResponse = exports.MarkPropertyAsRentedRequest = exports.MarkPropertyAsAvailableResponse = exports.MarkPropertyAsAvailableRequest = exports.ListPropertiesRequest = exports.ListManagedPropertiesRequest = exports.ListLandlordPropertiesRequest = exports.GetUserOutput = exports.UserProfile = exports.Tenant = exports.RentalHistory = exports.Landlord = exports.GetUserInput = exports.GetPropertyResponse = exports.GetPropertyRequest = exports.GetPropertiesByLocationRequest = exports.ListPropertiesResponse = exports.GetNearbyPropertiesRequest = exports.GetMediaUploadUrlResponse = exports.GetMediaUploadUrlRequest = exports.MediaUploadInput = void 0;
// smithy-typescript generated code
const server_common_1 = require("@aws-smithy/server-common");
/**
 * @public
 * @enum
 */
exports.AccountStatus = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    PENDING_EMAIL_VERIFICATION: "PENDING_EMAIL_VERIFICATION",
    PENDING_LANDLORD_VERIFICATION: "PENDING_LANDLORD_VERIFICATION",
    SUSPENDED: "SUSPENDED",
};
var Coordinates;
(function (Coordinates) {
    const memberValidators = {};
    /**
     * @internal
     */
    Coordinates.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "lat": {
                        memberValidators["lat"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(-90, 90),
                        ]);
                        break;
                    }
                    case "lng": {
                        memberValidators["lng"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(-180, 180),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("lat").validate(obj.lat, `${path}/lat`),
            ...getMemberValidator("lng").validate(obj.lng, `${path}/lng`),
        ];
    };
})(Coordinates || (exports.Coordinates = Coordinates = {}));
/**
 * @public
 * @enum
 */
exports.Region = {
    ARUSHA: "ARUSHA",
    DAR_ES_SALAAM: "DAR_ES_SALAAM",
    DODOMA: "DODOMA",
};
var Address;
(function (Address) {
    const memberValidators = {};
    /**
     * @internal
     */
    Address.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "street": {
                        memberValidators["street"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(5, 200),
                        ]);
                        break;
                    }
                    case "region": {
                        memberValidators["region"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "DAR_ES_SALAAM",
                                "ARUSHA",
                                "DODOMA",
                            ], [
                                "DAR_ES_SALAAM",
                                "ARUSHA",
                                "DODOMA",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "district": {
                        memberValidators["district"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "ward": {
                        memberValidators["ward"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 100),
                        ]);
                        break;
                    }
                    case "coordinates": {
                        memberValidators["coordinates"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), Coordinates.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("street").validate(obj.street, `${path}/street`),
            ...getMemberValidator("region").validate(obj.region, `${path}/region`),
            ...getMemberValidator("district").validate(obj.district, `${path}/district`),
            ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
            ...getMemberValidator("coordinates").validate(obj.coordinates, `${path}/coordinates`),
        ];
    };
})(Address || (exports.Address = Address = {}));
var CoordinatesInput;
(function (CoordinatesInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    CoordinatesInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "lat": {
                        memberValidators["lat"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(-90, 90),
                        ]);
                        break;
                    }
                    case "lng": {
                        memberValidators["lng"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(-180, 180),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("lat").validate(obj.lat, `${path}/lat`),
            ...getMemberValidator("lng").validate(obj.lng, `${path}/lng`),
        ];
    };
})(CoordinatesInput || (exports.CoordinatesInput = CoordinatesInput = {}));
var AddressInput;
(function (AddressInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    AddressInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "street": {
                        memberValidators["street"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(5, 200),
                        ]);
                        break;
                    }
                    case "region": {
                        memberValidators["region"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "DAR_ES_SALAAM",
                                "ARUSHA",
                                "DODOMA",
                            ], [
                                "DAR_ES_SALAAM",
                                "ARUSHA",
                                "DODOMA",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "district": {
                        memberValidators["district"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "ward": {
                        memberValidators["ward"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 100),
                        ]);
                        break;
                    }
                    case "coordinates": {
                        memberValidators["coordinates"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), CoordinatesInput.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("street").validate(obj.street, `${path}/street`),
            ...getMemberValidator("region").validate(obj.region, `${path}/region`),
            ...getMemberValidator("district").validate(obj.district, `${path}/district`),
            ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
            ...getMemberValidator("coordinates").validate(obj.coordinates, `${path}/coordinates`),
        ];
    };
})(AddressInput || (exports.AddressInput = AddressInput = {}));
/**
 * @public
 * @enum
 */
exports.AdminLevel = {
    MODERATOR: "MODERATOR",
    SUPER_ADMIN: "SUPER_ADMIN",
    SUPPORT: "SUPPORT",
};
/**
 * @public
 * @enum
 */
exports.Currency = {
    TZS: "TZS",
};
/**
 * @public
 * @enum
 */
exports.Language = {
    EN: "EN",
    SW: "SW",
};
var NotificationSettings;
(function (NotificationSettings) {
    const memberValidators = {};
    /**
     * @internal
     */
    NotificationSettings.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "sms": {
                        memberValidators["sms"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "push": {
                        memberValidators["push"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
            ...getMemberValidator("sms").validate(obj.sms, `${path}/sms`),
            ...getMemberValidator("push").validate(obj.push, `${path}/push`),
        ];
    };
})(NotificationSettings || (exports.NotificationSettings = NotificationSettings = {}));
var UserPreferences;
(function (UserPreferences) {
    const memberValidators = {};
    /**
     * @internal
     */
    UserPreferences.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "language": {
                        memberValidators["language"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "EN",
                                "SW",
                            ], [
                                "EN",
                                "SW",
                            ]),
                        ]);
                        break;
                    }
                    case "currency": {
                        memberValidators["currency"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "TZS",
                            ], [
                                "TZS",
                            ]),
                        ]);
                        break;
                    }
                    case "notifications": {
                        memberValidators["notifications"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), NotificationSettings.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("language").validate(obj.language, `${path}/language`),
            ...getMemberValidator("currency").validate(obj.currency, `${path}/currency`),
            ...getMemberValidator("notifications").validate(obj.notifications, `${path}/notifications`),
        ];
    };
})(UserPreferences || (exports.UserPreferences = UserPreferences = {}));
/**
 * @public
 * @enum
 */
exports.UserType = {
    ADMIN: "ADMIN",
    LANDLORD: "LANDLORD",
    TENANT: "TENANT",
};
var Admin;
(function (Admin) {
    const memberValidators = {};
    /**
     * @internal
     */
    Admin.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                    case "phoneNumber": {
                        memberValidators["phoneNumber"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^\\+255[67][0-9]{8}$"),
                        ]);
                        break;
                    }
                    case "firstName": {
                        memberValidators["firstName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "lastName": {
                        memberValidators["lastName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "userType": {
                        memberValidators["userType"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "LANDLORD",
                                "TENANT",
                                "ADMIN",
                            ], [
                                "LANDLORD",
                                "TENANT",
                                "ADMIN",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "profileImage": {
                        memberValidators["profileImage"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "isEmailVerified": {
                        memberValidators["isEmailVerified"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "accountStatus": {
                        memberValidators["accountStatus"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "PENDING_EMAIL_VERIFICATION",
                                "ACTIVE",
                                "PENDING_LANDLORD_VERIFICATION",
                                "SUSPENDED",
                                "INACTIVE",
                            ], [
                                "PENDING_EMAIL_VERIFICATION",
                                "ACTIVE",
                                "PENDING_LANDLORD_VERIFICATION",
                                "SUSPENDED",
                                "INACTIVE",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "createdAt": {
                        memberValidators["createdAt"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "updatedAt": {
                        memberValidators["updatedAt"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "preferences": {
                        memberValidators["preferences"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), UserPreferences.validate);
                        break;
                    }
                    case "adminLevel": {
                        memberValidators["adminLevel"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "SUPER_ADMIN",
                                "MODERATOR",
                                "SUPPORT",
                            ], [
                                "SUPER_ADMIN",
                                "MODERATOR",
                                "SUPPORT",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "permissions": {
                        memberValidators["permissions"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.NoOpValidator());
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
            ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
            ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
            ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
            ...getMemberValidator("userType").validate(obj.userType, `${path}/userType`),
            ...getMemberValidator("profileImage").validate(obj.profileImage, `${path}/profileImage`),
            ...getMemberValidator("isEmailVerified").validate(obj.isEmailVerified, `${path}/isEmailVerified`),
            ...getMemberValidator("accountStatus").validate(obj.accountStatus, `${path}/accountStatus`),
            ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
            ...getMemberValidator("updatedAt").validate(obj.updatedAt, `${path}/updatedAt`),
            ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
            ...getMemberValidator("adminLevel").validate(obj.adminLevel, `${path}/adminLevel`),
            ...getMemberValidator("permissions").validate(obj.permissions, `${path}/permissions`),
        ];
    };
})(Admin || (exports.Admin = Admin = {}));
/**
 * @public
 * @enum
 */
exports.ApplicationStatus = {
    APPROVED: "APPROVED",
    PENDING: "PENDING",
    REJECTED: "REJECTED",
};
var ApplicationDecision;
(function (ApplicationDecision) {
    const memberValidators = {};
    /**
     * @internal
     */
    ApplicationDecision.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "status": {
                        memberValidators["status"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "PENDING",
                                "APPROVED",
                                "REJECTED",
                            ], [
                                "PENDING",
                                "APPROVED",
                                "REJECTED",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "comments": {
                        memberValidators["comments"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("status").validate(obj.status, `${path}/status`),
            ...getMemberValidator("comments").validate(obj.comments, `${path}/comments`),
        ];
    };
})(ApplicationDecision || (exports.ApplicationDecision = ApplicationDecision = {}));
var ManagementPermissions;
(function (ManagementPermissions) {
    const memberValidators = {};
    /**
     * @internal
     */
    ManagementPermissions.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "collectRent": {
                        memberValidators["collectRent"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "handleMaintenance": {
                        memberValidators["handleMaintenance"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "screenTenants": {
                        memberValidators["screenTenants"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "updateListing": {
                        memberValidators["updateListing"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("collectRent").validate(obj.collectRent, `${path}/collectRent`),
            ...getMemberValidator("handleMaintenance").validate(obj.handleMaintenance, `${path}/handleMaintenance`),
            ...getMemberValidator("screenTenants").validate(obj.screenTenants, `${path}/screenTenants`),
            ...getMemberValidator("updateListing").validate(obj.updateListing, `${path}/updateListing`),
        ];
    };
})(ManagementPermissions || (exports.ManagementPermissions = ManagementPermissions = {}));
var PropertyManagerAssignment;
(function (PropertyManagerAssignment) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertyManagerAssignment.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "managerId": {
                        memberValidators["managerId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "permissions": {
                        memberValidators["permissions"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), ManagementPermissions.validate);
                        break;
                    }
                    case "commissionRate": {
                        memberValidators["commissionRate"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(0, 50),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("managerId").validate(obj.managerId, `${path}/managerId`),
            ...getMemberValidator("permissions").validate(obj.permissions, `${path}/permissions`),
            ...getMemberValidator("commissionRate").validate(obj.commissionRate, `${path}/commissionRate`),
        ];
    };
})(PropertyManagerAssignment || (exports.PropertyManagerAssignment = PropertyManagerAssignment = {}));
var AssignPropertyManagerRequest;
(function (AssignPropertyManagerRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    AssignPropertyManagerRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "assignment": {
                        memberValidators["assignment"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertyManagerAssignment.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
            ...getMemberValidator("assignment").validate(obj.assignment, `${path}/assignment`),
        ];
    };
})(AssignPropertyManagerRequest || (exports.AssignPropertyManagerRequest = AssignPropertyManagerRequest = {}));
var PropertyAvailability;
(function (PropertyAvailability) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertyAvailability.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "isAvailable": {
                        memberValidators["isAvailable"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "availableFrom": {
                        memberValidators["availableFrom"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "leaseDuration": {
                        memberValidators["leaseDuration"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(1, 60),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("isAvailable").validate(obj.isAvailable, `${path}/isAvailable`),
            ...getMemberValidator("availableFrom").validate(obj.availableFrom, `${path}/availableFrom`),
            ...getMemberValidator("leaseDuration").validate(obj.leaseDuration, `${path}/leaseDuration`),
        ];
    };
})(PropertyAvailability || (exports.PropertyAvailability = PropertyAvailability = {}));
var PropertyMedia;
(function (PropertyMedia) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertyMedia.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "images": {
                        memberValidators["images"] = new server_common_1.CompositeCollectionValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), new server_common_1.NoOpValidator());
                        break;
                    }
                    case "videos": {
                        memberValidators["videos"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.NoOpValidator());
                        break;
                    }
                    case "virtualTour": {
                        memberValidators["virtualTour"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("images").validate(obj.images, `${path}/images`),
            ...getMemberValidator("videos").validate(obj.videos, `${path}/videos`),
            ...getMemberValidator("virtualTour").validate(obj.virtualTour, `${path}/virtualTour`),
        ];
    };
})(PropertyMedia || (exports.PropertyMedia = PropertyMedia = {}));
/**
 * @public
 * @enum
 */
exports.UtilityType = {
    INCLUDED: "included",
    SEPARATE: "separate",
};
var PropertyPricing;
(function (PropertyPricing) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertyPricing.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "monthlyRent": {
                        memberValidators["monthlyRent"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(50000, 50000000),
                        ]);
                        break;
                    }
                    case "deposit": {
                        memberValidators["deposit"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(0, 100000000),
                        ]);
                        break;
                    }
                    case "utilities": {
                        memberValidators["utilities"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "included",
                                "separate",
                            ], [
                                "included",
                                "separate",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "utilityCost": {
                        memberValidators["utilityCost"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(0, 1000000),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("monthlyRent").validate(obj.monthlyRent, `${path}/monthlyRent`),
            ...getMemberValidator("deposit").validate(obj.deposit, `${path}/deposit`),
            ...getMemberValidator("utilities").validate(obj.utilities, `${path}/utilities`),
            ...getMemberValidator("utilityCost").validate(obj.utilityCost, `${path}/utilityCost`),
        ];
    };
})(PropertyPricing || (exports.PropertyPricing = PropertyPricing = {}));
/**
 * @public
 * @enum
 */
exports.PropertyType = {
    APARTMENT: "APARTMENT",
    HOUSE: "HOUSE",
    ROOM: "ROOM",
    STUDIO: "STUDIO",
};
var PropertySpecifications;
(function (PropertySpecifications) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertySpecifications.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "bedrooms": {
                        memberValidators["bedrooms"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(0, 20),
                        ]);
                        break;
                    }
                    case "bathrooms": {
                        memberValidators["bathrooms"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(1, 20),
                        ]);
                        break;
                    }
                    case "squareMeters": {
                        memberValidators["squareMeters"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(10, 10000),
                        ]);
                        break;
                    }
                    case "furnished": {
                        memberValidators["furnished"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "parking": {
                        memberValidators["parking"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("bedrooms").validate(obj.bedrooms, `${path}/bedrooms`),
            ...getMemberValidator("bathrooms").validate(obj.bathrooms, `${path}/bathrooms`),
            ...getMemberValidator("squareMeters").validate(obj.squareMeters, `${path}/squareMeters`),
            ...getMemberValidator("furnished").validate(obj.furnished, `${path}/furnished`),
            ...getMemberValidator("parking").validate(obj.parking, `${path}/parking`),
        ];
    };
})(PropertySpecifications || (exports.PropertySpecifications = PropertySpecifications = {}));
/**
 * @public
 * @enum
 */
exports.PropertyStatus = {
    ACTIVE: "ACTIVE",
    DRAFT: "DRAFT",
    MAINTENANCE: "MAINTENANCE",
    RENTED: "RENTED",
};
var Property;
(function (Property) {
    const memberValidators = {};
    /**
     * @internal
     */
    Property.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "landlordId": {
                        memberValidators["landlordId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "managerId": {
                        memberValidators["managerId"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "title": {
                        memberValidators["title"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(5, 100),
                        ]);
                        break;
                    }
                    case "description": {
                        memberValidators["description"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(20, 2000),
                        ]);
                        break;
                    }
                    case "address": {
                        memberValidators["address"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Address.validate);
                        break;
                    }
                    case "propertyType": {
                        memberValidators["propertyType"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "APARTMENT",
                                "HOUSE",
                                "STUDIO",
                                "ROOM",
                            ], [
                                "APARTMENT",
                                "HOUSE",
                                "STUDIO",
                                "ROOM",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "specifications": {
                        memberValidators["specifications"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertySpecifications.validate);
                        break;
                    }
                    case "pricing": {
                        memberValidators["pricing"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertyPricing.validate);
                        break;
                    }
                    case "amenities": {
                        memberValidators["amenities"] = new server_common_1.CompositeCollectionValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), new server_common_1.NoOpValidator());
                        break;
                    }
                    case "media": {
                        memberValidators["media"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertyMedia.validate);
                        break;
                    }
                    case "availability": {
                        memberValidators["availability"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertyAvailability.validate);
                        break;
                    }
                    case "status": {
                        memberValidators["status"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "DRAFT",
                                "ACTIVE",
                                "RENTED",
                                "MAINTENANCE",
                            ], [
                                "DRAFT",
                                "ACTIVE",
                                "RENTED",
                                "MAINTENANCE",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "createdAt": {
                        memberValidators["createdAt"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "updatedAt": {
                        memberValidators["updatedAt"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
            ...getMemberValidator("landlordId").validate(obj.landlordId, `${path}/landlordId`),
            ...getMemberValidator("managerId").validate(obj.managerId, `${path}/managerId`),
            ...getMemberValidator("title").validate(obj.title, `${path}/title`),
            ...getMemberValidator("description").validate(obj.description, `${path}/description`),
            ...getMemberValidator("address").validate(obj.address, `${path}/address`),
            ...getMemberValidator("propertyType").validate(obj.propertyType, `${path}/propertyType`),
            ...getMemberValidator("specifications").validate(obj.specifications, `${path}/specifications`),
            ...getMemberValidator("pricing").validate(obj.pricing, `${path}/pricing`),
            ...getMemberValidator("amenities").validate(obj.amenities, `${path}/amenities`),
            ...getMemberValidator("media").validate(obj.media, `${path}/media`),
            ...getMemberValidator("availability").validate(obj.availability, `${path}/availability`),
            ...getMemberValidator("status").validate(obj.status, `${path}/status`),
            ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
            ...getMemberValidator("updatedAt").validate(obj.updatedAt, `${path}/updatedAt`),
        ];
    };
})(Property || (exports.Property = Property = {}));
var AssignPropertyManagerResponse;
(function (AssignPropertyManagerResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    AssignPropertyManagerResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Property.validate);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(AssignPropertyManagerResponse || (exports.AssignPropertyManagerResponse = AssignPropertyManagerResponse = {}));
/**
 * Internal server error
 * @public
 */
class InternalServerError extends server_common_1.ServiceException {
    constructor(opts) {
        super({
            name: "InternalServerError",
            $fault: "server",
            ...opts
        });
        this.name = "InternalServerError";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
exports.InternalServerError = InternalServerError;
/**
 * Property not found error
 * @public
 */
class PropertyNotFoundException extends server_common_1.ServiceException {
    constructor(opts) {
        super({
            name: "PropertyNotFoundException",
            $fault: "client",
            ...opts
        });
        this.name = "PropertyNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PropertyNotFoundException.prototype);
    }
}
exports.PropertyNotFoundException = PropertyNotFoundException;
/**
 * Validation error for invalid input
 * @public
 */
class RentalValidationException extends server_common_1.ServiceException {
    constructor(opts) {
        super({
            name: "RentalValidationException",
            $fault: "client",
            ...opts
        });
        this.name = "RentalValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RentalValidationException.prototype);
    }
}
exports.RentalValidationException = RentalValidationException;
/**
 * Unauthorized access error
 * @public
 */
class UnauthorizedException extends server_common_1.ServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
exports.UnauthorizedException = UnauthorizedException;
var ValidationExceptionField;
(function (ValidationExceptionField) {
    const memberValidators = {};
    /**
     * @internal
     */
    ValidationExceptionField.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "path": {
                        memberValidators["path"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("path").validate(obj.path, `${path}/path`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(ValidationExceptionField || (exports.ValidationExceptionField = ValidationExceptionField = {}));
/**
 * A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 * @public
 */
class ValidationException extends server_common_1.ServiceException {
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts
        });
        this.name = "ValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.fieldList = opts.fieldList;
    }
}
exports.ValidationException = ValidationException;
var BecomeLandlordOutput;
(function (BecomeLandlordOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    BecomeLandlordOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "applicationId": {
                        memberValidators["applicationId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
            ...getMemberValidator("applicationId").validate(obj.applicationId, `${path}/applicationId`),
        ];
    };
})(BecomeLandlordOutput || (exports.BecomeLandlordOutput = BecomeLandlordOutput = {}));
var BecomeLandlordApplication;
(function (BecomeLandlordApplication) {
    const memberValidators = {};
    /**
     * @internal
     */
    BecomeLandlordApplication.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "businessName": {
                        memberValidators["businessName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 100),
                        ]);
                        break;
                    }
                    case "businessLicense": {
                        memberValidators["businessLicense"] = new server_common_1.CompositeValidator([
                            new server_common_1.PatternValidator("^[A-Z0-9-]{5,20}$"),
                        ]);
                        break;
                    }
                    case "taxId": {
                        memberValidators["taxId"] = new server_common_1.CompositeValidator([
                            new server_common_1.PatternValidator("^[0-9]{9,12}$"),
                        ]);
                        break;
                    }
                    case "verificationDocuments": {
                        memberValidators["verificationDocuments"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.NoOpValidator());
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("businessName").validate(obj.businessName, `${path}/businessName`),
            ...getMemberValidator("businessLicense").validate(obj.businessLicense, `${path}/businessLicense`),
            ...getMemberValidator("taxId").validate(obj.taxId, `${path}/taxId`),
            ...getMemberValidator("verificationDocuments").validate(obj.verificationDocuments, `${path}/verificationDocuments`),
        ];
    };
})(BecomeLandlordApplication || (exports.BecomeLandlordApplication = BecomeLandlordApplication = {}));
var BecomeLandlordRequest;
(function (BecomeLandlordRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    BecomeLandlordRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "application": {
                        memberValidators["application"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), BecomeLandlordApplication.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("application").validate(obj.application, `${path}/application`),
        ];
    };
})(BecomeLandlordRequest || (exports.BecomeLandlordRequest = BecomeLandlordRequest = {}));
var ContactInfo;
(function (ContactInfo) {
    const memberValidators = {};
    /**
     * @internal
     */
    ContactInfo.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "name": {
                        memberValidators["name"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 100),
                        ]);
                        break;
                    }
                    case "phoneNumber": {
                        memberValidators["phoneNumber"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^\\+255[67][0-9]{8}$"),
                        ]);
                        break;
                    }
                    case "relationship": {
                        memberValidators["relationship"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 30),
                        ]);
                        break;
                    }
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("name").validate(obj.name, `${path}/name`),
            ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
            ...getMemberValidator("relationship").validate(obj.relationship, `${path}/relationship`),
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
        ];
    };
})(ContactInfo || (exports.ContactInfo = ContactInfo = {}));
var PropertyAvailabilityInput;
(function (PropertyAvailabilityInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertyAvailabilityInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "isAvailable": {
                        memberValidators["isAvailable"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "availableFrom": {
                        memberValidators["availableFrom"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "leaseDuration": {
                        memberValidators["leaseDuration"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(1, 60),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("isAvailable").validate(obj.isAvailable, `${path}/isAvailable`),
            ...getMemberValidator("availableFrom").validate(obj.availableFrom, `${path}/availableFrom`),
            ...getMemberValidator("leaseDuration").validate(obj.leaseDuration, `${path}/leaseDuration`),
        ];
    };
})(PropertyAvailabilityInput || (exports.PropertyAvailabilityInput = PropertyAvailabilityInput = {}));
var PropertyMediaInput;
(function (PropertyMediaInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertyMediaInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "images": {
                        memberValidators["images"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.NoOpValidator());
                        break;
                    }
                    case "videos": {
                        memberValidators["videos"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.NoOpValidator());
                        break;
                    }
                    case "virtualTour": {
                        memberValidators["virtualTour"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("images").validate(obj.images, `${path}/images`),
            ...getMemberValidator("videos").validate(obj.videos, `${path}/videos`),
            ...getMemberValidator("virtualTour").validate(obj.virtualTour, `${path}/virtualTour`),
        ];
    };
})(PropertyMediaInput || (exports.PropertyMediaInput = PropertyMediaInput = {}));
var PropertyPricingInput;
(function (PropertyPricingInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertyPricingInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "monthlyRent": {
                        memberValidators["monthlyRent"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(50000, 50000000),
                        ]);
                        break;
                    }
                    case "deposit": {
                        memberValidators["deposit"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(0, 100000000),
                        ]);
                        break;
                    }
                    case "utilities": {
                        memberValidators["utilities"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "included",
                                "separate",
                            ], [
                                "included",
                                "separate",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "utilityCost": {
                        memberValidators["utilityCost"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(0, 1000000),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("monthlyRent").validate(obj.monthlyRent, `${path}/monthlyRent`),
            ...getMemberValidator("deposit").validate(obj.deposit, `${path}/deposit`),
            ...getMemberValidator("utilities").validate(obj.utilities, `${path}/utilities`),
            ...getMemberValidator("utilityCost").validate(obj.utilityCost, `${path}/utilityCost`),
        ];
    };
})(PropertyPricingInput || (exports.PropertyPricingInput = PropertyPricingInput = {}));
var PropertySpecificationsInput;
(function (PropertySpecificationsInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertySpecificationsInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "bedrooms": {
                        memberValidators["bedrooms"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(0, 20),
                        ]);
                        break;
                    }
                    case "bathrooms": {
                        memberValidators["bathrooms"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(1, 20),
                        ]);
                        break;
                    }
                    case "squareMeters": {
                        memberValidators["squareMeters"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(10, 10000),
                        ]);
                        break;
                    }
                    case "furnished": {
                        memberValidators["furnished"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "parking": {
                        memberValidators["parking"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("bedrooms").validate(obj.bedrooms, `${path}/bedrooms`),
            ...getMemberValidator("bathrooms").validate(obj.bathrooms, `${path}/bathrooms`),
            ...getMemberValidator("squareMeters").validate(obj.squareMeters, `${path}/squareMeters`),
            ...getMemberValidator("furnished").validate(obj.furnished, `${path}/furnished`),
            ...getMemberValidator("parking").validate(obj.parking, `${path}/parking`),
        ];
    };
})(PropertySpecificationsInput || (exports.PropertySpecificationsInput = PropertySpecificationsInput = {}));
var CreatePropertyData;
(function (CreatePropertyData) {
    const memberValidators = {};
    /**
     * @internal
     */
    CreatePropertyData.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "landlordId": {
                        memberValidators["landlordId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "title": {
                        memberValidators["title"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(5, 100),
                        ]);
                        break;
                    }
                    case "description": {
                        memberValidators["description"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(20, 2000),
                        ]);
                        break;
                    }
                    case "address": {
                        memberValidators["address"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), AddressInput.validate);
                        break;
                    }
                    case "propertyType": {
                        memberValidators["propertyType"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "APARTMENT",
                                "HOUSE",
                                "STUDIO",
                                "ROOM",
                            ], [
                                "APARTMENT",
                                "HOUSE",
                                "STUDIO",
                                "ROOM",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "specifications": {
                        memberValidators["specifications"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertySpecificationsInput.validate);
                        break;
                    }
                    case "pricing": {
                        memberValidators["pricing"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertyPricingInput.validate);
                        break;
                    }
                    case "amenities": {
                        memberValidators["amenities"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.NoOpValidator());
                        break;
                    }
                    case "media": {
                        memberValidators["media"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), PropertyMediaInput.validate);
                        break;
                    }
                    case "availability": {
                        memberValidators["availability"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertyAvailabilityInput.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("landlordId").validate(obj.landlordId, `${path}/landlordId`),
            ...getMemberValidator("title").validate(obj.title, `${path}/title`),
            ...getMemberValidator("description").validate(obj.description, `${path}/description`),
            ...getMemberValidator("address").validate(obj.address, `${path}/address`),
            ...getMemberValidator("propertyType").validate(obj.propertyType, `${path}/propertyType`),
            ...getMemberValidator("specifications").validate(obj.specifications, `${path}/specifications`),
            ...getMemberValidator("pricing").validate(obj.pricing, `${path}/pricing`),
            ...getMemberValidator("amenities").validate(obj.amenities, `${path}/amenities`),
            ...getMemberValidator("media").validate(obj.media, `${path}/media`),
            ...getMemberValidator("availability").validate(obj.availability, `${path}/availability`),
        ];
    };
})(CreatePropertyData || (exports.CreatePropertyData = CreatePropertyData = {}));
var CreatePropertyRequest;
(function (CreatePropertyRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    CreatePropertyRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), CreatePropertyData.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
        ];
    };
})(CreatePropertyRequest || (exports.CreatePropertyRequest = CreatePropertyRequest = {}));
var CreatePropertyResponse;
(function (CreatePropertyResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    CreatePropertyResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Property.validate);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(CreatePropertyResponse || (exports.CreatePropertyResponse = CreatePropertyResponse = {}));
var DeletePropertyRequest;
(function (DeletePropertyRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    DeletePropertyRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
        ];
    };
})(DeletePropertyRequest || (exports.DeletePropertyRequest = DeletePropertyRequest = {}));
var DeletePropertyResponse;
(function (DeletePropertyResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    DeletePropertyResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(DeletePropertyResponse || (exports.DeletePropertyResponse = DeletePropertyResponse = {}));
var EmploymentInfo;
(function (EmploymentInfo) {
    const memberValidators = {};
    /**
     * @internal
     */
    EmploymentInfo.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "employer": {
                        memberValidators["employer"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 100),
                        ]);
                        break;
                    }
                    case "position": {
                        memberValidators["position"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "startDate": {
                        memberValidators["startDate"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "workAddress": {
                        memberValidators["workAddress"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "supervisorContact": {
                        memberValidators["supervisorContact"] = new server_common_1.CompositeValidator([
                            new server_common_1.PatternValidator("^\\+255[67][0-9]{8}$"),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("employer").validate(obj.employer, `${path}/employer`),
            ...getMemberValidator("position").validate(obj.position, `${path}/position`),
            ...getMemberValidator("startDate").validate(obj.startDate, `${path}/startDate`),
            ...getMemberValidator("workAddress").validate(obj.workAddress, `${path}/workAddress`),
            ...getMemberValidator("supervisorContact").validate(obj.supervisorContact, `${path}/supervisorContact`),
        ];
    };
})(EmploymentInfo || (exports.EmploymentInfo = EmploymentInfo = {}));
var ForgotPasswordInput;
(function (ForgotPasswordInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    ForgotPasswordInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
        ];
    };
})(ForgotPasswordInput || (exports.ForgotPasswordInput = ForgotPasswordInput = {}));
var ForgotPasswordOutput;
(function (ForgotPasswordOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    ForgotPasswordOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(ForgotPasswordOutput || (exports.ForgotPasswordOutput = ForgotPasswordOutput = {}));
/**
 * @public
 * @enum
 */
exports.MediaType = {
    IMAGE: "image",
    VIDEO: "video",
    VIRTUAL_TOUR: "virtual_tour",
};
var MediaUploadInput;
(function (MediaUploadInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    MediaUploadInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "mediaType": {
                        memberValidators["mediaType"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "image",
                                "video",
                                "virtual_tour",
                            ], [
                                "image",
                                "video",
                                "virtual_tour",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "fileName": {
                        memberValidators["fileName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(1, 255),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("mediaType").validate(obj.mediaType, `${path}/mediaType`),
            ...getMemberValidator("fileName").validate(obj.fileName, `${path}/fileName`),
        ];
    };
})(MediaUploadInput || (exports.MediaUploadInput = MediaUploadInput = {}));
var GetMediaUploadUrlRequest;
(function (GetMediaUploadUrlRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    GetMediaUploadUrlRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "media": {
                        memberValidators["media"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), MediaUploadInput.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
            ...getMemberValidator("media").validate(obj.media, `${path}/media`),
        ];
    };
})(GetMediaUploadUrlRequest || (exports.GetMediaUploadUrlRequest = GetMediaUploadUrlRequest = {}));
var GetMediaUploadUrlResponse;
(function (GetMediaUploadUrlResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    GetMediaUploadUrlResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "fileKey": {
                        memberValidators["fileKey"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "presignedUrl": {
                        memberValidators["presignedUrl"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "cloudfrontUrl": {
                        memberValidators["cloudfrontUrl"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("fileKey").validate(obj.fileKey, `${path}/fileKey`),
            ...getMemberValidator("presignedUrl").validate(obj.presignedUrl, `${path}/presignedUrl`),
            ...getMemberValidator("cloudfrontUrl").validate(obj.cloudfrontUrl, `${path}/cloudfrontUrl`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(GetMediaUploadUrlResponse || (exports.GetMediaUploadUrlResponse = GetMediaUploadUrlResponse = {}));
var GetNearbyPropertiesRequest;
(function (GetNearbyPropertiesRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    GetNearbyPropertiesRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "lat": {
                        memberValidators["lat"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(-90, 90),
                        ]);
                        break;
                    }
                    case "lng": {
                        memberValidators["lng"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(-180, 180),
                        ]);
                        break;
                    }
                    case "radius": {
                        memberValidators["radius"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(0.1, 50),
                        ]);
                        break;
                    }
                    case "limit": {
                        memberValidators["limit"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(1, 100),
                        ]);
                        break;
                    }
                    case "nextToken": {
                        memberValidators["nextToken"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("lat").validate(obj.lat, `${path}/lat`),
            ...getMemberValidator("lng").validate(obj.lng, `${path}/lng`),
            ...getMemberValidator("radius").validate(obj.radius, `${path}/radius`),
            ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
            ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
        ];
    };
})(GetNearbyPropertiesRequest || (exports.GetNearbyPropertiesRequest = GetNearbyPropertiesRequest = {}));
var ListPropertiesResponse;
(function (ListPropertiesResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    ListPropertiesResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "properties": {
                        memberValidators["properties"] = new server_common_1.CompositeCollectionValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), Property.validate));
                        break;
                    }
                    case "nextToken": {
                        memberValidators["nextToken"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "count": {
                        memberValidators["count"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("properties").validate(obj.properties, `${path}/properties`),
            ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
            ...getMemberValidator("count").validate(obj.count, `${path}/count`),
        ];
    };
})(ListPropertiesResponse || (exports.ListPropertiesResponse = ListPropertiesResponse = {}));
var GetPropertiesByLocationRequest;
(function (GetPropertiesByLocationRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    GetPropertiesByLocationRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "region": {
                        memberValidators["region"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "district": {
                        memberValidators["district"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "ward": {
                        memberValidators["ward"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "limit": {
                        memberValidators["limit"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(1, 100),
                        ]);
                        break;
                    }
                    case "nextToken": {
                        memberValidators["nextToken"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("region").validate(obj.region, `${path}/region`),
            ...getMemberValidator("district").validate(obj.district, `${path}/district`),
            ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
            ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
            ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
        ];
    };
})(GetPropertiesByLocationRequest || (exports.GetPropertiesByLocationRequest = GetPropertiesByLocationRequest = {}));
var GetPropertyRequest;
(function (GetPropertyRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    GetPropertyRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
        ];
    };
})(GetPropertyRequest || (exports.GetPropertyRequest = GetPropertyRequest = {}));
var GetPropertyResponse;
(function (GetPropertyResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    GetPropertyResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Property.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
        ];
    };
})(GetPropertyResponse || (exports.GetPropertyResponse = GetPropertyResponse = {}));
var GetUserInput;
(function (GetUserInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    GetUserInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
        ];
    };
})(GetUserInput || (exports.GetUserInput = GetUserInput = {}));
var Landlord;
(function (Landlord) {
    const memberValidators = {};
    /**
     * @internal
     */
    Landlord.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                    case "phoneNumber": {
                        memberValidators["phoneNumber"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^\\+255[67][0-9]{8}$"),
                        ]);
                        break;
                    }
                    case "firstName": {
                        memberValidators["firstName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "lastName": {
                        memberValidators["lastName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "userType": {
                        memberValidators["userType"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "LANDLORD",
                                "TENANT",
                                "ADMIN",
                            ], [
                                "LANDLORD",
                                "TENANT",
                                "ADMIN",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "profileImage": {
                        memberValidators["profileImage"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "isEmailVerified": {
                        memberValidators["isEmailVerified"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "accountStatus": {
                        memberValidators["accountStatus"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "PENDING_EMAIL_VERIFICATION",
                                "ACTIVE",
                                "PENDING_LANDLORD_VERIFICATION",
                                "SUSPENDED",
                                "INACTIVE",
                            ], [
                                "PENDING_EMAIL_VERIFICATION",
                                "ACTIVE",
                                "PENDING_LANDLORD_VERIFICATION",
                                "SUSPENDED",
                                "INACTIVE",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "createdAt": {
                        memberValidators["createdAt"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "updatedAt": {
                        memberValidators["updatedAt"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "preferences": {
                        memberValidators["preferences"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), UserPreferences.validate);
                        break;
                    }
                    case "isLandlordVerified": {
                        memberValidators["isLandlordVerified"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "businessName": {
                        memberValidators["businessName"] = new server_common_1.CompositeValidator([
                            new server_common_1.LengthValidator(2, 100),
                        ]);
                        break;
                    }
                    case "businessLicense": {
                        memberValidators["businessLicense"] = new server_common_1.CompositeValidator([
                            new server_common_1.PatternValidator("^[A-Z0-9-]{5,20}$"),
                        ]);
                        break;
                    }
                    case "taxId": {
                        memberValidators["taxId"] = new server_common_1.CompositeValidator([
                            new server_common_1.PatternValidator("^[0-9]{9,12}$"),
                        ]);
                        break;
                    }
                    case "propertyCount": {
                        memberValidators["propertyCount"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(0, undefined),
                        ]);
                        break;
                    }
                    case "verificationDocuments": {
                        memberValidators["verificationDocuments"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.NoOpValidator());
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
            ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
            ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
            ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
            ...getMemberValidator("userType").validate(obj.userType, `${path}/userType`),
            ...getMemberValidator("profileImage").validate(obj.profileImage, `${path}/profileImage`),
            ...getMemberValidator("isEmailVerified").validate(obj.isEmailVerified, `${path}/isEmailVerified`),
            ...getMemberValidator("accountStatus").validate(obj.accountStatus, `${path}/accountStatus`),
            ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
            ...getMemberValidator("updatedAt").validate(obj.updatedAt, `${path}/updatedAt`),
            ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
            ...getMemberValidator("isLandlordVerified").validate(obj.isLandlordVerified, `${path}/isLandlordVerified`),
            ...getMemberValidator("businessName").validate(obj.businessName, `${path}/businessName`),
            ...getMemberValidator("businessLicense").validate(obj.businessLicense, `${path}/businessLicense`),
            ...getMemberValidator("taxId").validate(obj.taxId, `${path}/taxId`),
            ...getMemberValidator("propertyCount").validate(obj.propertyCount, `${path}/propertyCount`),
            ...getMemberValidator("verificationDocuments").validate(obj.verificationDocuments, `${path}/verificationDocuments`),
        ];
    };
})(Landlord || (exports.Landlord = Landlord = {}));
var RentalHistory;
(function (RentalHistory) {
    const memberValidators = {};
    /**
     * @internal
     */
    RentalHistory.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyAddress": {
                        memberValidators["propertyAddress"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(10, 200),
                        ]);
                        break;
                    }
                    case "landlordName": {
                        memberValidators["landlordName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 100),
                        ]);
                        break;
                    }
                    case "landlordContact": {
                        memberValidators["landlordContact"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^\\+255[67][0-9]{8}$"),
                        ]);
                        break;
                    }
                    case "startDate": {
                        memberValidators["startDate"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "endDate": {
                        memberValidators["endDate"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "monthlyRent": {
                        memberValidators["monthlyRent"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.RangeValidator(0, undefined),
                        ]);
                        break;
                    }
                    case "reasonForLeaving": {
                        memberValidators["reasonForLeaving"] = new server_common_1.CompositeValidator([
                            new server_common_1.LengthValidator(undefined, 200),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyAddress").validate(obj.propertyAddress, `${path}/propertyAddress`),
            ...getMemberValidator("landlordName").validate(obj.landlordName, `${path}/landlordName`),
            ...getMemberValidator("landlordContact").validate(obj.landlordContact, `${path}/landlordContact`),
            ...getMemberValidator("startDate").validate(obj.startDate, `${path}/startDate`),
            ...getMemberValidator("endDate").validate(obj.endDate, `${path}/endDate`),
            ...getMemberValidator("monthlyRent").validate(obj.monthlyRent, `${path}/monthlyRent`),
            ...getMemberValidator("reasonForLeaving").validate(obj.reasonForLeaving, `${path}/reasonForLeaving`),
        ];
    };
})(RentalHistory || (exports.RentalHistory = RentalHistory = {}));
var Tenant;
(function (Tenant) {
    const memberValidators = {};
    /**
     * @internal
     */
    Tenant.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                    case "phoneNumber": {
                        memberValidators["phoneNumber"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^\\+255[67][0-9]{8}$"),
                        ]);
                        break;
                    }
                    case "firstName": {
                        memberValidators["firstName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "lastName": {
                        memberValidators["lastName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "userType": {
                        memberValidators["userType"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "LANDLORD",
                                "TENANT",
                                "ADMIN",
                            ], [
                                "LANDLORD",
                                "TENANT",
                                "ADMIN",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "profileImage": {
                        memberValidators["profileImage"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "isEmailVerified": {
                        memberValidators["isEmailVerified"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "accountStatus": {
                        memberValidators["accountStatus"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "PENDING_EMAIL_VERIFICATION",
                                "ACTIVE",
                                "PENDING_LANDLORD_VERIFICATION",
                                "SUSPENDED",
                                "INACTIVE",
                            ], [
                                "PENDING_EMAIL_VERIFICATION",
                                "ACTIVE",
                                "PENDING_LANDLORD_VERIFICATION",
                                "SUSPENDED",
                                "INACTIVE",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "createdAt": {
                        memberValidators["createdAt"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "updatedAt": {
                        memberValidators["updatedAt"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "preferences": {
                        memberValidators["preferences"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), UserPreferences.validate);
                        break;
                    }
                    case "employmentInfo": {
                        memberValidators["employmentInfo"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), EmploymentInfo.validate);
                        break;
                    }
                    case "monthlyIncome": {
                        memberValidators["monthlyIncome"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(0, undefined),
                        ]);
                        break;
                    }
                    case "emergencyContact": {
                        memberValidators["emergencyContact"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), ContactInfo.validate);
                        break;
                    }
                    case "rentalHistory": {
                        memberValidators["rentalHistory"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), RentalHistory.validate));
                        break;
                    }
                    case "currentLease": {
                        memberValidators["currentLease"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
            ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
            ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
            ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
            ...getMemberValidator("userType").validate(obj.userType, `${path}/userType`),
            ...getMemberValidator("profileImage").validate(obj.profileImage, `${path}/profileImage`),
            ...getMemberValidator("isEmailVerified").validate(obj.isEmailVerified, `${path}/isEmailVerified`),
            ...getMemberValidator("accountStatus").validate(obj.accountStatus, `${path}/accountStatus`),
            ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
            ...getMemberValidator("updatedAt").validate(obj.updatedAt, `${path}/updatedAt`),
            ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
            ...getMemberValidator("employmentInfo").validate(obj.employmentInfo, `${path}/employmentInfo`),
            ...getMemberValidator("monthlyIncome").validate(obj.monthlyIncome, `${path}/monthlyIncome`),
            ...getMemberValidator("emergencyContact").validate(obj.emergencyContact, `${path}/emergencyContact`),
            ...getMemberValidator("rentalHistory").validate(obj.rentalHistory, `${path}/rentalHistory`),
            ...getMemberValidator("currentLease").validate(obj.currentLease, `${path}/currentLease`),
        ];
    };
})(Tenant || (exports.Tenant = Tenant = {}));
/**
 * @public
 */
var UserProfile;
(function (UserProfile) {
    UserProfile.visit = (value, visitor) => {
        if (value.landlord !== undefined)
            return visitor.landlord(value.landlord);
        if (value.tenant !== undefined)
            return visitor.tenant(value.tenant);
        if (value.admin !== undefined)
            return visitor.admin(value.admin);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    const memberValidators = {};
    /**
     * @internal
     */
    UserProfile.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "landlord": {
                        memberValidators["landlord"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), Landlord.validate);
                        break;
                    }
                    case "tenant": {
                        memberValidators["tenant"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), Tenant.validate);
                        break;
                    }
                    case "admin": {
                        memberValidators["admin"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), Admin.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("landlord").validate(obj.landlord, `${path}/landlord`),
            ...getMemberValidator("tenant").validate(obj.tenant, `${path}/tenant`),
            ...getMemberValidator("admin").validate(obj.admin, `${path}/admin`),
        ];
    };
})(UserProfile || (exports.UserProfile = UserProfile = {}));
var GetUserOutput;
(function (GetUserOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    GetUserOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "user": {
                        memberValidators["user"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), UserProfile.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("user").validate(obj.user, `${path}/user`),
        ];
    };
})(GetUserOutput || (exports.GetUserOutput = GetUserOutput = {}));
var ListLandlordPropertiesRequest;
(function (ListLandlordPropertiesRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    ListLandlordPropertiesRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "limit": {
                        memberValidators["limit"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(1, 100),
                        ]);
                        break;
                    }
                    case "nextToken": {
                        memberValidators["nextToken"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
            ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
        ];
    };
})(ListLandlordPropertiesRequest || (exports.ListLandlordPropertiesRequest = ListLandlordPropertiesRequest = {}));
var ListManagedPropertiesRequest;
(function (ListManagedPropertiesRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    ListManagedPropertiesRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "managerId": {
                        memberValidators["managerId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "limit": {
                        memberValidators["limit"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(1, 100),
                        ]);
                        break;
                    }
                    case "nextToken": {
                        memberValidators["nextToken"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("managerId").validate(obj.managerId, `${path}/managerId`),
            ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
            ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
        ];
    };
})(ListManagedPropertiesRequest || (exports.ListManagedPropertiesRequest = ListManagedPropertiesRequest = {}));
var ListPropertiesRequest;
(function (ListPropertiesRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    ListPropertiesRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "limit": {
                        memberValidators["limit"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(1, 100),
                        ]);
                        break;
                    }
                    case "nextToken": {
                        memberValidators["nextToken"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
            ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
        ];
    };
})(ListPropertiesRequest || (exports.ListPropertiesRequest = ListPropertiesRequest = {}));
var MarkPropertyAsAvailableRequest;
(function (MarkPropertyAsAvailableRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    MarkPropertyAsAvailableRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
        ];
    };
})(MarkPropertyAsAvailableRequest || (exports.MarkPropertyAsAvailableRequest = MarkPropertyAsAvailableRequest = {}));
var MarkPropertyAsAvailableResponse;
(function (MarkPropertyAsAvailableResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    MarkPropertyAsAvailableResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Property.validate);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(MarkPropertyAsAvailableResponse || (exports.MarkPropertyAsAvailableResponse = MarkPropertyAsAvailableResponse = {}));
var MarkPropertyAsRentedRequest;
(function (MarkPropertyAsRentedRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    MarkPropertyAsRentedRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
        ];
    };
})(MarkPropertyAsRentedRequest || (exports.MarkPropertyAsRentedRequest = MarkPropertyAsRentedRequest = {}));
var MarkPropertyAsRentedResponse;
(function (MarkPropertyAsRentedResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    MarkPropertyAsRentedResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Property.validate);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(MarkPropertyAsRentedResponse || (exports.MarkPropertyAsRentedResponse = MarkPropertyAsRentedResponse = {}));
var PriceRange;
(function (PriceRange) {
    const memberValidators = {};
    /**
     * @internal
     */
    PriceRange.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "min": {
                        memberValidators["min"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "max": {
                        memberValidators["max"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("min").validate(obj.min, `${path}/min`),
            ...getMemberValidator("max").validate(obj.max, `${path}/max`),
        ];
    };
})(PriceRange || (exports.PriceRange = PriceRange = {}));
var PropertyStatusUpdate;
(function (PropertyStatusUpdate) {
    const memberValidators = {};
    /**
     * @internal
     */
    PropertyStatusUpdate.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "status": {
                        memberValidators["status"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "DRAFT",
                                "ACTIVE",
                                "RENTED",
                                "MAINTENANCE",
                            ], [
                                "DRAFT",
                                "ACTIVE",
                                "RENTED",
                                "MAINTENANCE",
                            ]),
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("status").validate(obj.status, `${path}/status`),
        ];
    };
})(PropertyStatusUpdate || (exports.PropertyStatusUpdate = PropertyStatusUpdate = {}));
var RemovePropertyManagerRequest;
(function (RemovePropertyManagerRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    RemovePropertyManagerRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
        ];
    };
})(RemovePropertyManagerRequest || (exports.RemovePropertyManagerRequest = RemovePropertyManagerRequest = {}));
var RemovePropertyManagerResponse;
(function (RemovePropertyManagerResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    RemovePropertyManagerResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Property.validate);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(RemovePropertyManagerResponse || (exports.RemovePropertyManagerResponse = RemovePropertyManagerResponse = {}));
var ResetPasswordInput;
(function (ResetPasswordInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    ResetPasswordInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                    case "confirmationCode": {
                        memberValidators["confirmationCode"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(6, 6),
                        ]);
                        break;
                    }
                    case "newPassword": {
                        memberValidators["newPassword"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(8, undefined),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
            ...getMemberValidator("confirmationCode").validate(obj.confirmationCode, `${path}/confirmationCode`),
            ...getMemberValidator("newPassword").validate(obj.newPassword, `${path}/newPassword`),
        ];
    };
})(ResetPasswordInput || (exports.ResetPasswordInput = ResetPasswordInput = {}));
var ResetPasswordOutput;
(function (ResetPasswordOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    ResetPasswordOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(ResetPasswordOutput || (exports.ResetPasswordOutput = ResetPasswordOutput = {}));
var ReviewApplicationRequest;
(function (ReviewApplicationRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    ReviewApplicationRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "applicationId": {
                        memberValidators["applicationId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "decision": {
                        memberValidators["decision"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), ApplicationDecision.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("applicationId").validate(obj.applicationId, `${path}/applicationId`),
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("decision").validate(obj.decision, `${path}/decision`),
        ];
    };
})(ReviewApplicationRequest || (exports.ReviewApplicationRequest = ReviewApplicationRequest = {}));
var ReviewLandlordApplicationOutput;
(function (ReviewLandlordApplicationOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    ReviewLandlordApplicationOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(ReviewLandlordApplicationOutput || (exports.ReviewLandlordApplicationOutput = ReviewLandlordApplicationOutput = {}));
var SearchPropertiesRequest;
(function (SearchPropertiesRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    SearchPropertiesRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "region": {
                        memberValidators["region"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "DAR_ES_SALAAM",
                                "ARUSHA",
                                "DODOMA",
                            ], [
                                "DAR_ES_SALAAM",
                                "ARUSHA",
                                "DODOMA",
                            ]),
                        ]);
                        break;
                    }
                    case "district": {
                        memberValidators["district"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "ward": {
                        memberValidators["ward"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "propertyType": {
                        memberValidators["propertyType"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "APARTMENT",
                                "HOUSE",
                                "STUDIO",
                                "ROOM",
                            ], [
                                "APARTMENT",
                                "HOUSE",
                                "STUDIO",
                                "ROOM",
                            ]),
                        ]);
                        break;
                    }
                    case "minRent": {
                        memberValidators["minRent"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(0, undefined),
                        ]);
                        break;
                    }
                    case "maxRent": {
                        memberValidators["maxRent"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(0, undefined),
                        ]);
                        break;
                    }
                    case "minBedrooms": {
                        memberValidators["minBedrooms"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(0, 20),
                        ]);
                        break;
                    }
                    case "limit": {
                        memberValidators["limit"] = new server_common_1.CompositeValidator([
                            new server_common_1.RangeValidator(1, 100),
                        ]);
                        break;
                    }
                    case "nextToken": {
                        memberValidators["nextToken"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("region").validate(obj.region, `${path}/region`),
            ...getMemberValidator("district").validate(obj.district, `${path}/district`),
            ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
            ...getMemberValidator("propertyType").validate(obj.propertyType, `${path}/propertyType`),
            ...getMemberValidator("minRent").validate(obj.minRent, `${path}/minRent`),
            ...getMemberValidator("maxRent").validate(obj.maxRent, `${path}/maxRent`),
            ...getMemberValidator("minBedrooms").validate(obj.minBedrooms, `${path}/minBedrooms`),
            ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
            ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
        ];
    };
})(SearchPropertiesRequest || (exports.SearchPropertiesRequest = SearchPropertiesRequest = {}));
var SearchFilters;
(function (SearchFilters) {
    const memberValidators = {};
    /**
     * @internal
     */
    SearchFilters.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "region": {
                        memberValidators["region"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "DAR_ES_SALAAM",
                                "ARUSHA",
                                "DODOMA",
                            ], [
                                "DAR_ES_SALAAM",
                                "ARUSHA",
                                "DODOMA",
                            ]),
                        ]);
                        break;
                    }
                    case "district": {
                        memberValidators["district"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "ward": {
                        memberValidators["ward"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "propertyType": {
                        memberValidators["propertyType"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "APARTMENT",
                                "HOUSE",
                                "STUDIO",
                                "ROOM",
                            ], [
                                "APARTMENT",
                                "HOUSE",
                                "STUDIO",
                                "ROOM",
                            ]),
                        ]);
                        break;
                    }
                    case "rentRange": {
                        memberValidators["rentRange"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), PriceRange.validate);
                        break;
                    }
                    case "minBedrooms": {
                        memberValidators["minBedrooms"] = new server_common_1.NoOpValidator();
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("region").validate(obj.region, `${path}/region`),
            ...getMemberValidator("district").validate(obj.district, `${path}/district`),
            ...getMemberValidator("ward").validate(obj.ward, `${path}/ward`),
            ...getMemberValidator("propertyType").validate(obj.propertyType, `${path}/propertyType`),
            ...getMemberValidator("rentRange").validate(obj.rentRange, `${path}/rentRange`),
            ...getMemberValidator("minBedrooms").validate(obj.minBedrooms, `${path}/minBedrooms`),
        ];
    };
})(SearchFilters || (exports.SearchFilters = SearchFilters = {}));
var SearchPropertiesResponse;
(function (SearchPropertiesResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    SearchPropertiesResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "properties": {
                        memberValidators["properties"] = new server_common_1.CompositeCollectionValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), Property.validate));
                        break;
                    }
                    case "nextToken": {
                        memberValidators["nextToken"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "totalCount": {
                        memberValidators["totalCount"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "filters": {
                        memberValidators["filters"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), SearchFilters.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("properties").validate(obj.properties, `${path}/properties`),
            ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
            ...getMemberValidator("totalCount").validate(obj.totalCount, `${path}/totalCount`),
            ...getMemberValidator("filters").validate(obj.filters, `${path}/filters`),
        ];
    };
})(SearchPropertiesResponse || (exports.SearchPropertiesResponse = SearchPropertiesResponse = {}));
var SignInInput;
(function (SignInInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    SignInInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                    case "password": {
                        memberValidators["password"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(8, undefined),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
            ...getMemberValidator("password").validate(obj.password, `${path}/password`),
        ];
    };
})(SignInInput || (exports.SignInInput = SignInInput = {}));
var SignInOutput;
(function (SignInOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    SignInOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "accessToken": {
                        memberValidators["accessToken"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "refreshToken": {
                        memberValidators["refreshToken"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "user": {
                        memberValidators["user"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), UserProfile.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("accessToken").validate(obj.accessToken, `${path}/accessToken`),
            ...getMemberValidator("refreshToken").validate(obj.refreshToken, `${path}/refreshToken`),
            ...getMemberValidator("user").validate(obj.user, `${path}/user`),
        ];
    };
})(SignInOutput || (exports.SignInOutput = SignInOutput = {}));
var SignUpInput;
(function (SignUpInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    SignUpInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                    case "password": {
                        memberValidators["password"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(8, undefined),
                        ]);
                        break;
                    }
                    case "firstName": {
                        memberValidators["firstName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "lastName": {
                        memberValidators["lastName"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "phoneNumber": {
                        memberValidators["phoneNumber"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^\\+255[67][0-9]{8}$"),
                        ]);
                        break;
                    }
                    case "preferences": {
                        memberValidators["preferences"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), UserPreferences.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
            ...getMemberValidator("password").validate(obj.password, `${path}/password`),
            ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
            ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
            ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
            ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
        ];
    };
})(SignUpInput || (exports.SignUpInput = SignUpInput = {}));
var SignUpOutput;
(function (SignUpOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    SignUpOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(SignUpOutput || (exports.SignUpOutput = SignUpOutput = {}));
var UpdatePropertyData;
(function (UpdatePropertyData) {
    const memberValidators = {};
    /**
     * @internal
     */
    UpdatePropertyData.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "title": {
                        memberValidators["title"] = new server_common_1.CompositeValidator([
                            new server_common_1.LengthValidator(5, 100),
                        ]);
                        break;
                    }
                    case "description": {
                        memberValidators["description"] = new server_common_1.CompositeValidator([
                            new server_common_1.LengthValidator(20, 2000),
                        ]);
                        break;
                    }
                    case "address": {
                        memberValidators["address"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), AddressInput.validate);
                        break;
                    }
                    case "specifications": {
                        memberValidators["specifications"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), PropertySpecificationsInput.validate);
                        break;
                    }
                    case "pricing": {
                        memberValidators["pricing"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), PropertyPricingInput.validate);
                        break;
                    }
                    case "amenities": {
                        memberValidators["amenities"] = new server_common_1.CompositeCollectionValidator(new server_common_1.NoOpValidator(), new server_common_1.NoOpValidator());
                        break;
                    }
                    case "media": {
                        memberValidators["media"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), PropertyMediaInput.validate);
                        break;
                    }
                    case "availability": {
                        memberValidators["availability"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), PropertyAvailabilityInput.validate);
                        break;
                    }
                    case "status": {
                        memberValidators["status"] = new server_common_1.CompositeValidator([
                            new server_common_1.EnumValidator([
                                "DRAFT",
                                "ACTIVE",
                                "RENTED",
                                "MAINTENANCE",
                            ], [
                                "DRAFT",
                                "ACTIVE",
                                "RENTED",
                                "MAINTENANCE",
                            ]),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("title").validate(obj.title, `${path}/title`),
            ...getMemberValidator("description").validate(obj.description, `${path}/description`),
            ...getMemberValidator("address").validate(obj.address, `${path}/address`),
            ...getMemberValidator("specifications").validate(obj.specifications, `${path}/specifications`),
            ...getMemberValidator("pricing").validate(obj.pricing, `${path}/pricing`),
            ...getMemberValidator("amenities").validate(obj.amenities, `${path}/amenities`),
            ...getMemberValidator("media").validate(obj.media, `${path}/media`),
            ...getMemberValidator("availability").validate(obj.availability, `${path}/availability`),
            ...getMemberValidator("status").validate(obj.status, `${path}/status`),
        ];
    };
})(UpdatePropertyData || (exports.UpdatePropertyData = UpdatePropertyData = {}));
var UpdatePropertyRequest;
(function (UpdatePropertyRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    UpdatePropertyRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), UpdatePropertyData.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
        ];
    };
})(UpdatePropertyRequest || (exports.UpdatePropertyRequest = UpdatePropertyRequest = {}));
var UpdatePropertyResponse;
(function (UpdatePropertyResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    UpdatePropertyResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Property.validate);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(UpdatePropertyResponse || (exports.UpdatePropertyResponse = UpdatePropertyResponse = {}));
var UpdatePropertyStatusRequest;
(function (UpdatePropertyStatusRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    UpdatePropertyStatusRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "propertyId": {
                        memberValidators["propertyId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "statusUpdate": {
                        memberValidators["statusUpdate"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), PropertyStatusUpdate.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("propertyId").validate(obj.propertyId, `${path}/propertyId`),
            ...getMemberValidator("statusUpdate").validate(obj.statusUpdate, `${path}/statusUpdate`),
        ];
    };
})(UpdatePropertyStatusRequest || (exports.UpdatePropertyStatusRequest = UpdatePropertyStatusRequest = {}));
var UpdatePropertyStatusResponse;
(function (UpdatePropertyStatusResponse) {
    const memberValidators = {};
    /**
     * @internal
     */
    UpdatePropertyStatusResponse.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "property": {
                        memberValidators["property"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), Property.validate);
                        break;
                    }
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("property").validate(obj.property, `${path}/property`),
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(UpdatePropertyStatusResponse || (exports.UpdatePropertyStatusResponse = UpdatePropertyStatusResponse = {}));
var UpdateUserOutput;
(function (UpdateUserOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    UpdateUserOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "user": {
                        memberValidators["user"] = new server_common_1.CompositeStructureValidator(new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]), UserProfile.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("user").validate(obj.user, `${path}/user`),
        ];
    };
})(UpdateUserOutput || (exports.UpdateUserOutput = UpdateUserOutput = {}));
var UpdateUserData;
(function (UpdateUserData) {
    const memberValidators = {};
    /**
     * @internal
     */
    UpdateUserData.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "firstName": {
                        memberValidators["firstName"] = new server_common_1.CompositeValidator([
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "lastName": {
                        memberValidators["lastName"] = new server_common_1.CompositeValidator([
                            new server_common_1.LengthValidator(2, 50),
                        ]);
                        break;
                    }
                    case "phoneNumber": {
                        memberValidators["phoneNumber"] = new server_common_1.CompositeValidator([
                            new server_common_1.PatternValidator("^\\+255[67][0-9]{8}$"),
                        ]);
                        break;
                    }
                    case "profileImage": {
                        memberValidators["profileImage"] = new server_common_1.NoOpValidator();
                        break;
                    }
                    case "preferences": {
                        memberValidators["preferences"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), UserPreferences.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("firstName").validate(obj.firstName, `${path}/firstName`),
            ...getMemberValidator("lastName").validate(obj.lastName, `${path}/lastName`),
            ...getMemberValidator("phoneNumber").validate(obj.phoneNumber, `${path}/phoneNumber`),
            ...getMemberValidator("profileImage").validate(obj.profileImage, `${path}/profileImage`),
            ...getMemberValidator("preferences").validate(obj.preferences, `${path}/preferences`),
        ];
    };
})(UpdateUserData || (exports.UpdateUserData = UpdateUserData = {}));
var UpdateUserRequest;
(function (UpdateUserRequest) {
    const memberValidators = {};
    /**
     * @internal
     */
    UpdateUserRequest.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "userId": {
                        memberValidators["userId"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                    case "userData": {
                        memberValidators["userData"] = new server_common_1.CompositeStructureValidator(new server_common_1.NoOpValidator(), UpdateUserData.validate);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
            ...getMemberValidator("userData").validate(obj.userData, `${path}/userData`),
        ];
    };
})(UpdateUserRequest || (exports.UpdateUserRequest = UpdateUserRequest = {}));
var VerifyEmailInput;
(function (VerifyEmailInput) {
    const memberValidators = {};
    /**
     * @internal
     */
    VerifyEmailInput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "email": {
                        memberValidators["email"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
                        ]);
                        break;
                    }
                    case "confirmationCode": {
                        memberValidators["confirmationCode"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                            new server_common_1.LengthValidator(6, 6),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("email").validate(obj.email, `${path}/email`),
            ...getMemberValidator("confirmationCode").validate(obj.confirmationCode, `${path}/confirmationCode`),
        ];
    };
})(VerifyEmailInput || (exports.VerifyEmailInput = VerifyEmailInput = {}));
var VerifyEmailOutput;
(function (VerifyEmailOutput) {
    const memberValidators = {};
    /**
     * @internal
     */
    VerifyEmailOutput.validate = (obj, path = "") => {
        function getMemberValidator(member) {
            if (memberValidators[member] === undefined) {
                switch (member) {
                    case "message": {
                        memberValidators["message"] = new server_common_1.CompositeValidator([
                            new server_common_1.RequiredValidator(),
                        ]);
                        break;
                    }
                }
            }
            return memberValidators[member];
        }
        return [
            ...getMemberValidator("message").validate(obj.message, `${path}/message`),
        ];
    };
})(VerifyEmailOutput || (exports.VerifyEmailOutput = VerifyEmailOutput = {}));
