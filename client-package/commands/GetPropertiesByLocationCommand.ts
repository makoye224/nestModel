// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  GetPropertiesByLocationRequest,
  ListPropertiesResponse,
} from "../models/models_0";
import {
  de_GetPropertiesByLocationCommand,
  se_GetPropertiesByLocationCommand,
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
 * The input for {@link GetPropertiesByLocationCommand}.
 */
export interface GetPropertiesByLocationCommandInput extends GetPropertiesByLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetPropertiesByLocationCommand}.
 */
export interface GetPropertiesByLocationCommandOutput extends ListPropertiesResponse, __MetadataBearer {}

/**
 * Get properties by location
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, GetPropertiesByLocationCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, GetPropertiesByLocationCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // GetPropertiesByLocationRequest
 *   region: "STRING_VALUE", // required
 *   district: "STRING_VALUE", // required
 *   ward: "STRING_VALUE",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetPropertiesByLocationCommand(input);
 * const response = await client.send(command);
 * // { // ListPropertiesResponse
 * //   properties: [ // PropertyList // required
 * //     { // Property
 * //       propertyId: "STRING_VALUE", // required
 * //       landlordId: "STRING_VALUE", // required
 * //       managerId: "STRING_VALUE",
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       address: { // Address
 * //         street: "STRING_VALUE", // required
 * //         region: "DAR_ES_SALAAM" || "ARUSHA" || "DODOMA", // required
 * //         district: "STRING_VALUE", // required
 * //         ward: "STRING_VALUE", // required
 * //         coordinates: { // Coordinates
 * //           lat: Number("double"), // required
 * //           lng: Number("double"), // required
 * //         },
 * //       },
 * //       propertyType: "APARTMENT" || "HOUSE" || "STUDIO" || "ROOM", // required
 * //       specifications: { // PropertySpecifications
 * //         bedrooms: Number("int"), // required
 * //         bathrooms: Number("int"), // required
 * //         squareMeters: Number("int"), // required
 * //         furnished: true || false, // required
 * //         parking: true || false, // required
 * //       },
 * //       pricing: { // PropertyPricing
 * //         monthlyRent: Number("long"), // required
 * //         deposit: Number("long"), // required
 * //         utilities: "included" || "separate", // required
 * //         utilityCost: Number("long"),
 * //       },
 * //       amenities: [ // StringList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       media: { // PropertyMedia
 * //         images: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         videos: [
 * //           "STRING_VALUE",
 * //         ],
 * //         virtualTour: "STRING_VALUE",
 * //       },
 * //       availability: { // PropertyAvailability
 * //         isAvailable: true || false, // required
 * //         availableFrom: new Date("TIMESTAMP"), // required
 * //         leaseDuration: Number("int"), // required
 * //       },
 * //       status: "DRAFT" || "ACTIVE" || "RENTED" || "MAINTENANCE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   count: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetPropertiesByLocationCommandInput - {@link GetPropertiesByLocationCommandInput}
 * @returns {@link GetPropertiesByLocationCommandOutput}
 * @see {@link GetPropertiesByLocationCommandInput} for command's `input` shape.
 * @see {@link GetPropertiesByLocationCommandOutput} for command's `response` shape.
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
export class GetPropertiesByLocationCommand extends $Command.classBuilder<GetPropertiesByLocationCommandInput, GetPropertiesByLocationCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "GetPropertiesByLocation", {

  })
  .n("RentalPlatformClient", "GetPropertiesByLocationCommand")
  .f(void 0, void 0)
  .ser(se_GetPropertiesByLocationCommand)
  .de(de_GetPropertiesByLocationCommand)
.build() {
}
