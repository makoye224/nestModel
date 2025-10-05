// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  ForgotPasswordInput,
  ForgotPasswordOutput,
} from "../models/models_0";
import {
  de_ForgotPasswordCommand,
  se_ForgotPasswordCommand,
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
 * The input for {@link ForgotPasswordCommand}.
 */
export interface ForgotPasswordCommandInput extends ForgotPasswordInput {}
/**
 * @public
 *
 * The output of {@link ForgotPasswordCommand}.
 */
export interface ForgotPasswordCommandOutput extends ForgotPasswordOutput, __MetadataBearer {}

/**
 * Initiate password reset process
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, ForgotPasswordCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, ForgotPasswordCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // ForgotPasswordInput
 *   email: "STRING_VALUE", // required
 * };
 * const command = new ForgotPasswordCommand(input);
 * const response = await client.send(command);
 * // { // ForgotPasswordOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ForgotPasswordCommandInput - {@link ForgotPasswordCommandInput}
 * @returns {@link ForgotPasswordCommandOutput}
 * @see {@link ForgotPasswordCommandInput} for command's `input` shape.
 * @see {@link ForgotPasswordCommandOutput} for command's `response` shape.
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
export class ForgotPasswordCommand extends $Command.classBuilder<ForgotPasswordCommandInput, ForgotPasswordCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "ForgotPassword", {

  })
  .n("RentalPlatformClient", "ForgotPasswordCommand")
  .f(void 0, void 0)
  .ser(se_ForgotPasswordCommand)
  .de(de_ForgotPasswordCommand)
.build() {
}
