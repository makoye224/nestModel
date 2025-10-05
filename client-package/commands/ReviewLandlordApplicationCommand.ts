// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  ReviewApplicationRequest,
  ReviewLandlordApplicationOutput,
} from "../models/models_0";
import {
  de_ReviewLandlordApplicationCommand,
  se_ReviewLandlordApplicationCommand,
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
 * The input for {@link ReviewLandlordApplicationCommand}.
 */
export interface ReviewLandlordApplicationCommandInput extends ReviewApplicationRequest {}
/**
 * @public
 *
 * The output of {@link ReviewLandlordApplicationCommand}.
 */
export interface ReviewLandlordApplicationCommandOutput extends ReviewLandlordApplicationOutput, __MetadataBearer {}

/**
 * Review landlord application (admin only)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, ReviewLandlordApplicationCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, ReviewLandlordApplicationCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // ReviewApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   decision: { // ApplicationDecision
 *     status: "PENDING" || "APPROVED" || "REJECTED", // required
 *     comments: "STRING_VALUE",
 *   },
 * };
 * const command = new ReviewLandlordApplicationCommand(input);
 * const response = await client.send(command);
 * // { // ReviewLandlordApplicationOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ReviewLandlordApplicationCommandInput - {@link ReviewLandlordApplicationCommandInput}
 * @returns {@link ReviewLandlordApplicationCommandOutput}
 * @see {@link ReviewLandlordApplicationCommandInput} for command's `input` shape.
 * @see {@link ReviewLandlordApplicationCommandOutput} for command's `response` shape.
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
export class ReviewLandlordApplicationCommand extends $Command.classBuilder<ReviewLandlordApplicationCommandInput, ReviewLandlordApplicationCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "ReviewLandlordApplication", {

  })
  .n("RentalPlatformClient", "ReviewLandlordApplicationCommand")
  .f(void 0, void 0)
  .ser(se_ReviewLandlordApplicationCommand)
  .de(de_ReviewLandlordApplicationCommand)
.build() {
}
