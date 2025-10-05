// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  UpdateUserOutput,
  UpdateUserRequest,
} from "../models/models_0";
import {
  de_UpdateUserCommand,
  se_UpdateUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandInput extends UpdateUserRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandOutput extends UpdateUserOutput, __MetadataBearer {}

/**
 * Update user profile information
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, UpdateUserCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, UpdateUserCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // UpdateUserRequest
 *   userId: "STRING_VALUE", // required
 *   userData: { // UpdateUserData
 *     firstName: "STRING_VALUE",
 *     lastName: "STRING_VALUE",
 *     phoneNumber: "STRING_VALUE",
 *     profileImage: "STRING_VALUE",
 *     preferences: { // UserPreferences
 *       language: "EN" || "SW",
 *       currency: "TZS",
 *       notifications: { // NotificationSettings
 *         email: true || false, // required
 *         sms: true || false, // required
 *         push: true || false, // required
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserOutput
 * //   user: { // UserProfile Union: only one key present
 * //     landlord: { // Landlord
 * //       userId: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       phoneNumber: "STRING_VALUE", // required
 * //       firstName: "STRING_VALUE", // required
 * //       lastName: "STRING_VALUE", // required
 * //       userType: "LANDLORD" || "TENANT" || "ADMIN", // required
 * //       profileImage: "STRING_VALUE",
 * //       isEmailVerified: true || false, // required
 * //       accountStatus: "PENDING_EMAIL_VERIFICATION" || "ACTIVE" || "PENDING_LANDLORD_VERIFICATION" || "SUSPENDED" || "INACTIVE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       preferences: { // UserPreferences
 * //         language: "EN" || "SW",
 * //         currency: "TZS",
 * //         notifications: { // NotificationSettings
 * //           email: true || false, // required
 * //           sms: true || false, // required
 * //           push: true || false, // required
 * //         },
 * //       },
 * //       isLandlordVerified: true || false, // required
 * //       businessName: "STRING_VALUE",
 * //       businessLicense: "STRING_VALUE",
 * //       taxId: "STRING_VALUE",
 * //       propertyCount: Number("int"), // required
 * //       verificationDocuments: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     tenant: { // Tenant
 * //       userId: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       phoneNumber: "STRING_VALUE", // required
 * //       firstName: "STRING_VALUE", // required
 * //       lastName: "STRING_VALUE", // required
 * //       userType: "LANDLORD" || "TENANT" || "ADMIN", // required
 * //       profileImage: "STRING_VALUE",
 * //       isEmailVerified: true || false, // required
 * //       accountStatus: "PENDING_EMAIL_VERIFICATION" || "ACTIVE" || "PENDING_LANDLORD_VERIFICATION" || "SUSPENDED" || "INACTIVE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       preferences: {
 * //         language: "EN" || "SW",
 * //         currency: "TZS",
 * //         notifications: {
 * //           email: true || false, // required
 * //           sms: true || false, // required
 * //           push: true || false, // required
 * //         },
 * //       },
 * //       employmentInfo: { // EmploymentInfo
 * //         employer: "STRING_VALUE", // required
 * //         position: "STRING_VALUE", // required
 * //         startDate: new Date("TIMESTAMP"), // required
 * //         workAddress: "STRING_VALUE",
 * //         supervisorContact: "STRING_VALUE",
 * //       },
 * //       monthlyIncome: Number("long"),
 * //       emergencyContact: { // ContactInfo
 * //         name: "STRING_VALUE", // required
 * //         phoneNumber: "STRING_VALUE", // required
 * //         relationship: "STRING_VALUE", // required
 * //         email: "STRING_VALUE",
 * //       },
 * //       rentalHistory: [ // RentalHistoryList
 * //         { // RentalHistory
 * //           propertyAddress: "STRING_VALUE", // required
 * //           landlordName: "STRING_VALUE", // required
 * //           landlordContact: "STRING_VALUE", // required
 * //           startDate: new Date("TIMESTAMP"), // required
 * //           endDate: new Date("TIMESTAMP"),
 * //           monthlyRent: Number("long"), // required
 * //           reasonForLeaving: "STRING_VALUE",
 * //         },
 * //       ],
 * //       currentLease: "STRING_VALUE",
 * //     },
 * //     admin: { // Admin
 * //       userId: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       phoneNumber: "STRING_VALUE", // required
 * //       firstName: "STRING_VALUE", // required
 * //       lastName: "STRING_VALUE", // required
 * //       userType: "LANDLORD" || "TENANT" || "ADMIN", // required
 * //       profileImage: "STRING_VALUE",
 * //       isEmailVerified: true || false, // required
 * //       accountStatus: "PENDING_EMAIL_VERIFICATION" || "ACTIVE" || "PENDING_LANDLORD_VERIFICATION" || "SUSPENDED" || "INACTIVE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       preferences: {
 * //         language: "EN" || "SW",
 * //         currency: "TZS",
 * //         notifications: {
 * //           email: true || false, // required
 * //           sms: true || false, // required
 * //           push: true || false, // required
 * //         },
 * //       },
 * //       adminLevel: "SUPER_ADMIN" || "MODERATOR" || "SUPPORT", // required
 * //       permissions: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUserCommandInput - {@link UpdateUserCommandInput}
 * @returns {@link UpdateUserCommandOutput}
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link RentalPlatformClientResolvedConfig | config} for RentalPlatformClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link RentalValidationException} (client fault)
 *  Validation error for invalid input
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  Unauthorized access error
 *
 * @throws {@link InternalServerError} (server fault)
 *  Internal server error
 *
 * @throws {@link RentalPlatformServiceException}
 * <p>Base exception class for all service exceptions from RentalPlatform service.</p>
 *
 * @public
 */
export class UpdateUserCommand extends $Command.classBuilder<UpdateUserCommandInput, UpdateUserCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "UpdateUser", {

  })
  .n("RentalPlatformClient", "UpdateUserCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUserCommand)
  .de(de_UpdateUserCommand)
.build() {
}
