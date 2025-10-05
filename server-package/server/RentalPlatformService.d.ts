import { AssignPropertyManager } from "./operations/AssignPropertyManager";
import { BecomeLandlord } from "./operations/BecomeLandlord";
import { CreateProperty } from "./operations/CreateProperty";
import { DeleteProperty } from "./operations/DeleteProperty";
import { ForgotPassword } from "./operations/ForgotPassword";
import { GetMediaUploadUrl } from "./operations/GetMediaUploadUrl";
import { GetNearbyProperties } from "./operations/GetNearbyProperties";
import { GetPropertiesByLocation } from "./operations/GetPropertiesByLocation";
import { GetProperty } from "./operations/GetProperty";
import { GetUser } from "./operations/GetUser";
import { ListLandlordProperties } from "./operations/ListLandlordProperties";
import { ListManagedProperties } from "./operations/ListManagedProperties";
import { ListProperties } from "./operations/ListProperties";
import { MarkPropertyAsAvailable } from "./operations/MarkPropertyAsAvailable";
import { MarkPropertyAsRented } from "./operations/MarkPropertyAsRented";
import { RemovePropertyManager } from "./operations/RemovePropertyManager";
import { ResetPassword } from "./operations/ResetPassword";
import { ReviewLandlordApplication } from "./operations/ReviewLandlordApplication";
import { SearchProperties } from "./operations/SearchProperties";
import { SignIn } from "./operations/SignIn";
import { SignUp } from "./operations/SignUp";
import { UpdateProperty } from "./operations/UpdateProperty";
import { UpdatePropertyStatus } from "./operations/UpdatePropertyStatus";
import { UpdateUser } from "./operations/UpdateUser";
import { VerifyEmail } from "./operations/VerifyEmail";
import { Mux as __Mux, OperationSerializer as __OperationSerializer, ServerSerdeContext as __ServerSerdeContext, ServiceException as __ServiceException, ServiceHandler as __ServiceHandler, SmithyFrameworkException as __SmithyFrameworkException, ValidationCustomizer as __ValidationCustomizer } from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
export type RentalPlatformServiceOperations = "AssignPropertyManager" | "BecomeLandlord" | "CreateProperty" | "DeleteProperty" | "ForgotPassword" | "GetMediaUploadUrl" | "GetNearbyProperties" | "GetPropertiesByLocation" | "GetProperty" | "GetUser" | "ListLandlordProperties" | "ListManagedProperties" | "ListProperties" | "MarkPropertyAsAvailable" | "MarkPropertyAsRented" | "RemovePropertyManager" | "ResetPassword" | "ReviewLandlordApplication" | "SearchProperties" | "SignIn" | "SignUp" | "UpdateProperty" | "UpdatePropertyStatus" | "UpdateUser" | "VerifyEmail";
export interface RentalPlatformService<Context> {
    AssignPropertyManager: AssignPropertyManager<Context>;
    BecomeLandlord: BecomeLandlord<Context>;
    CreateProperty: CreateProperty<Context>;
    DeleteProperty: DeleteProperty<Context>;
    ForgotPassword: ForgotPassword<Context>;
    GetMediaUploadUrl: GetMediaUploadUrl<Context>;
    GetNearbyProperties: GetNearbyProperties<Context>;
    GetPropertiesByLocation: GetPropertiesByLocation<Context>;
    GetProperty: GetProperty<Context>;
    GetUser: GetUser<Context>;
    ListLandlordProperties: ListLandlordProperties<Context>;
    ListManagedProperties: ListManagedProperties<Context>;
    ListProperties: ListProperties<Context>;
    MarkPropertyAsAvailable: MarkPropertyAsAvailable<Context>;
    MarkPropertyAsRented: MarkPropertyAsRented<Context>;
    RemovePropertyManager: RemovePropertyManager<Context>;
    ResetPassword: ResetPassword<Context>;
    ReviewLandlordApplication: ReviewLandlordApplication<Context>;
    SearchProperties: SearchProperties<Context>;
    SignIn: SignIn<Context>;
    SignUp: SignUp<Context>;
    UpdateProperty: UpdateProperty<Context>;
    UpdatePropertyStatus: UpdatePropertyStatus<Context>;
    UpdateUser: UpdateUser<Context>;
    VerifyEmail: VerifyEmail<Context>;
}
export declare class RentalPlatformServiceHandler<Context> implements __ServiceHandler<Context> {
    private readonly service;
    private readonly mux;
    private readonly serializerFactory;
    private readonly serializeFrameworkException;
    private readonly validationCustomizer;
    /**
     * Construct a RentalPlatformService handler.
     * @param service The {@link RentalPlatformService} implementation that supplies the business logic for RentalPlatformService
     * @param mux The {@link __Mux} that determines which service and operation are being invoked by a given {@link __HttpRequest}
     * @param serializerFactory A factory for an {@link __OperationSerializer} for each operation in RentalPlatformService that
     *                          handles deserialization of requests and serialization of responses
     * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
     * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
     */
    constructor(service: RentalPlatformService<Context>, mux: __Mux<"RentalPlatform", RentalPlatformServiceOperations>, serializerFactory: <T extends RentalPlatformServiceOperations>(op: T) => __OperationSerializer<RentalPlatformService<Context>, T, __ServiceException>, serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>, validationCustomizer: __ValidationCustomizer<RentalPlatformServiceOperations>);
    handle(request: __HttpRequest, context: Context): Promise<__HttpResponse>;
}
export declare const getRentalPlatformServiceHandler: <Context>(service: RentalPlatformService<Context>) => __ServiceHandler<Context, __HttpRequest, __HttpResponse>;
