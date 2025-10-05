// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  SignUpInput,
  SignUpOutput,
} from "../models/models_0";
import {
  de_SignUpCommand,
  se_SignUpCommand,
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
 * The input for {@link SignUpCommand}.
 */
export interface SignUpCommandInput extends SignUpInput {}
/**
 * @public
 *
 * The output of {@link SignUpCommand}.
 */
export interface SignUpCommandOutput extends SignUpOutput, __MetadataBearer {}

/**
 * Register a new user account - defaults to tenant role
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, SignUpCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, SignUpCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // SignUpInput
 *   email: "STRING_VALUE", // required
 *   password: "STRING_VALUE", // required
 *   firstName: "STRING_VALUE", // required
 *   lastName: "STRING_VALUE", // required
 *   phoneNumber: "STRING_VALUE", // required
 *   preferences: { // UserPreferences
 *     language: "EN" || "SW",
 *     currency: "TZS",
 *     notifications: { // NotificationSettings
 *       email: true || false, // required
 *       sms: true || false, // required
 *       push: true || false, // required
 *     },
 *   },
 * };
 * const command = new SignUpCommand(input);
 * const response = await client.send(command);
 * // { // SignUpOutput
 * //   userId: "STRING_VALUE", // required
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SignUpCommandInput - {@link SignUpCommandInput}
 * @returns {@link SignUpCommandOutput}
 * @see {@link SignUpCommandInput} for command's `input` shape.
 * @see {@link SignUpCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerError} (server fault)
 *  Internal server error
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  Unauthorized access error
 *
 * @throws {@link RentalPlatformServiceException}
 * <p>Base exception class for all service exceptions from RentalPlatform service.</p>
 *
 * @public
 */
export class SignUpCommand extends $Command.classBuilder<SignUpCommandInput, SignUpCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "SignUp", {

  })
  .n("RentalPlatformClient", "SignUpCommand")
  .f(void 0, void 0)
  .ser(se_SignUpCommand)
  .de(de_SignUpCommand)
.build() {
}
