// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  DeletePropertyRequest,
  DeletePropertyResponse,
} from "../models/models_0";
import {
  de_DeletePropertyCommand,
  se_DeletePropertyCommand,
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
 * The input for {@link DeletePropertyCommand}.
 */
export interface DeletePropertyCommandInput extends DeletePropertyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePropertyCommand}.
 */
export interface DeletePropertyCommandOutput extends DeletePropertyResponse, __MetadataBearer {}

/**
 * Delete a property listing
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, DeletePropertyCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, DeletePropertyCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // DeletePropertyRequest
 *   propertyId: "STRING_VALUE", // required
 * };
 * const command = new DeletePropertyCommand(input);
 * const response = await client.send(command);
 * // { // DeletePropertyResponse
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeletePropertyCommandInput - {@link DeletePropertyCommandInput}
 * @returns {@link DeletePropertyCommandOutput}
 * @see {@link DeletePropertyCommandInput} for command's `input` shape.
 * @see {@link DeletePropertyCommandOutput} for command's `response` shape.
 * @see {@link RentalPlatformClientResolvedConfig | config} for RentalPlatformClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link PropertyNotFoundException} (client fault)
 *  Property not found error
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  Unauthorized access error
 *
 * @throws {@link InternalServerError} (server fault)
 *  Internal server error
 *
 * @throws {@link RentalValidationException} (client fault)
 *  Validation error for invalid input
 *
 * @throws {@link RentalPlatformServiceException}
 * <p>Base exception class for all service exceptions from RentalPlatform service.</p>
 *
 * @public
 */
export class DeletePropertyCommand extends $Command.classBuilder<DeletePropertyCommandInput, DeletePropertyCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "DeleteProperty", {

  })
  .n("RentalPlatformClient", "DeletePropertyCommand")
  .f(void 0, void 0)
  .ser(se_DeletePropertyCommand)
  .de(de_DeletePropertyCommand)
.build() {
}
