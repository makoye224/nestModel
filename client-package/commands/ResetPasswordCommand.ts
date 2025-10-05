// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  ResetPasswordInput,
  ResetPasswordOutput,
} from "../models/models_0";
import {
  de_ResetPasswordCommand,
  se_ResetPasswordCommand,
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
 * The input for {@link ResetPasswordCommand}.
 */
export interface ResetPasswordCommandInput extends ResetPasswordInput {}
/**
 * @public
 *
 * The output of {@link ResetPasswordCommand}.
 */
export interface ResetPasswordCommandOutput extends ResetPasswordOutput, __MetadataBearer {}

/**
 * Complete password reset with confirmation code
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, ResetPasswordCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, ResetPasswordCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // ResetPasswordInput
 *   email: "STRING_VALUE", // required
 *   confirmationCode: "STRING_VALUE", // required
 *   newPassword: "STRING_VALUE", // required
 * };
 * const command = new ResetPasswordCommand(input);
 * const response = await client.send(command);
 * // { // ResetPasswordOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ResetPasswordCommandInput - {@link ResetPasswordCommandInput}
 * @returns {@link ResetPasswordCommandOutput}
 * @see {@link ResetPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetPasswordCommandOutput} for command's `response` shape.
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
export class ResetPasswordCommand extends $Command.classBuilder<ResetPasswordCommandInput, ResetPasswordCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "ResetPassword", {

  })
  .n("RentalPlatformClient", "ResetPasswordCommand")
  .f(void 0, void 0)
  .ser(se_ResetPasswordCommand)
  .de(de_ResetPasswordCommand)
.build() {
}
