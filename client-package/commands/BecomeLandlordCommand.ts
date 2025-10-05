// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  BecomeLandlordOutput,
  BecomeLandlordRequest,
} from "../models/models_0";
import {
  de_BecomeLandlordCommand,
  se_BecomeLandlordCommand,
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
 * The input for {@link BecomeLandlordCommand}.
 */
export interface BecomeLandlordCommandInput extends BecomeLandlordRequest {}
/**
 * @public
 *
 * The output of {@link BecomeLandlordCommand}.
 */
export interface BecomeLandlordCommandOutput extends BecomeLandlordOutput, __MetadataBearer {}

/**
 * Apply to upgrade account to landlord
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, BecomeLandlordCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, BecomeLandlordCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // BecomeLandlordRequest
 *   userId: "STRING_VALUE", // required
 *   application: { // BecomeLandlordApplication
 *     businessName: "STRING_VALUE", // required
 *     businessLicense: "STRING_VALUE",
 *     taxId: "STRING_VALUE",
 *     verificationDocuments: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new BecomeLandlordCommand(input);
 * const response = await client.send(command);
 * // { // BecomeLandlordOutput
 * //   message: "STRING_VALUE", // required
 * //   applicationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param BecomeLandlordCommandInput - {@link BecomeLandlordCommandInput}
 * @returns {@link BecomeLandlordCommandOutput}
 * @see {@link BecomeLandlordCommandInput} for command's `input` shape.
 * @see {@link BecomeLandlordCommandOutput} for command's `response` shape.
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
export class BecomeLandlordCommand extends $Command.classBuilder<BecomeLandlordCommandInput, BecomeLandlordCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "BecomeLandlord", {

  })
  .n("RentalPlatformClient", "BecomeLandlordCommand")
  .f(void 0, void 0)
  .ser(se_BecomeLandlordCommand)
  .de(de_BecomeLandlordCommand)
.build() {
}
