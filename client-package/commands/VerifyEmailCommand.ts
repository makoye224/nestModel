// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  VerifyEmailInput,
  VerifyEmailOutput,
} from "../models/models_0";
import {
  de_VerifyEmailCommand,
  se_VerifyEmailCommand,
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
 * The input for {@link VerifyEmailCommand}.
 */
export interface VerifyEmailCommandInput extends VerifyEmailInput {}
/**
 * @public
 *
 * The output of {@link VerifyEmailCommand}.
 */
export interface VerifyEmailCommandOutput extends VerifyEmailOutput, __MetadataBearer {}

/**
 * Verify user email with confirmation code
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, VerifyEmailCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, VerifyEmailCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // VerifyEmailInput
 *   email: "STRING_VALUE", // required
 *   confirmationCode: "STRING_VALUE", // required
 * };
 * const command = new VerifyEmailCommand(input);
 * const response = await client.send(command);
 * // { // VerifyEmailOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyEmailCommandInput - {@link VerifyEmailCommandInput}
 * @returns {@link VerifyEmailCommandOutput}
 * @see {@link VerifyEmailCommandInput} for command's `input` shape.
 * @see {@link VerifyEmailCommandOutput} for command's `response` shape.
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
export class VerifyEmailCommand extends $Command.classBuilder<VerifyEmailCommandInput, VerifyEmailCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "VerifyEmail", {

  })
  .n("RentalPlatformClient", "VerifyEmailCommand")
  .f(void 0, void 0)
  .ser(se_VerifyEmailCommand)
  .de(de_VerifyEmailCommand)
.build() {
}
