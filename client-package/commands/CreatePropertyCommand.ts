// smithy-typescript generated code
import {
  RentalPlatformClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RentalPlatformClient";
import {
  CreatePropertyRequest,
  CreatePropertyResponse,
} from "../models/models_0";
import {
  de_CreatePropertyCommand,
  se_CreatePropertyCommand,
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
 * The input for {@link CreatePropertyCommand}.
 */
export interface CreatePropertyCommandInput extends CreatePropertyRequest {}
/**
 * @public
 *
 * The output of {@link CreatePropertyCommand}.
 */
export interface CreatePropertyCommandOutput extends CreatePropertyResponse, __MetadataBearer {}

/**
 * Create a new property listing
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RentalPlatformClient, CreatePropertyCommand } from "@com.nest/nest-service-client"; // ES Modules import
 * // const { RentalPlatformClient, CreatePropertyCommand } = require("@com.nest/nest-service-client"); // CommonJS import
 * const client = new RentalPlatformClient(config);
 * const input = { // CreatePropertyRequest
 *   property: { // CreatePropertyData
 *     landlordId: "STRING_VALUE", // required
 *     title: "STRING_VALUE", // required
 *     description: "STRING_VALUE", // required
 *     address: { // AddressInput
 *       street: "STRING_VALUE", // required
 *       region: "DAR_ES_SALAAM" || "ARUSHA" || "DODOMA", // required
 *       district: "STRING_VALUE", // required
 *       ward: "STRING_VALUE", // required
 *       coordinates: { // CoordinatesInput
 *         lat: Number("double"), // required
 *         lng: Number("double"), // required
 *       },
 *     },
 *     propertyType: "APARTMENT" || "HOUSE" || "STUDIO" || "ROOM", // required
 *     specifications: { // PropertySpecificationsInput
 *       bedrooms: Number("int"), // required
 *       bathrooms: Number("int"), // required
 *       squareMeters: Number("int"), // required
 *       furnished: true || false, // required
 *       parking: true || false, // required
 *     },
 *     pricing: { // PropertyPricingInput
 *       monthlyRent: Number("long"), // required
 *       deposit: Number("long"), // required
 *       utilities: "included" || "separate", // required
 *       utilityCost: Number("long"),
 *     },
 *     amenities: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     media: { // PropertyMediaInput
 *       images: [
 *         "STRING_VALUE",
 *       ],
 *       videos: [
 *         "STRING_VALUE",
 *       ],
 *       virtualTour: "STRING_VALUE",
 *     },
 *     availability: { // PropertyAvailabilityInput
 *       isAvailable: true || false, // required
 *       availableFrom: new Date("TIMESTAMP"), // required
 *       leaseDuration: Number("int"), // required
 *     },
 *   },
 * };
 * const command = new CreatePropertyCommand(input);
 * const response = await client.send(command);
 * // { // CreatePropertyResponse
 * //   property: { // Property
 * //     propertyId: "STRING_VALUE", // required
 * //     landlordId: "STRING_VALUE", // required
 * //     managerId: "STRING_VALUE",
 * //     title: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     address: { // Address
 * //       street: "STRING_VALUE", // required
 * //       region: "DAR_ES_SALAAM" || "ARUSHA" || "DODOMA", // required
 * //       district: "STRING_VALUE", // required
 * //       ward: "STRING_VALUE", // required
 * //       coordinates: { // Coordinates
 * //         lat: Number("double"), // required
 * //         lng: Number("double"), // required
 * //       },
 * //     },
 * //     propertyType: "APARTMENT" || "HOUSE" || "STUDIO" || "ROOM", // required
 * //     specifications: { // PropertySpecifications
 * //       bedrooms: Number("int"), // required
 * //       bathrooms: Number("int"), // required
 * //       squareMeters: Number("int"), // required
 * //       furnished: true || false, // required
 * //       parking: true || false, // required
 * //     },
 * //     pricing: { // PropertyPricing
 * //       monthlyRent: Number("long"), // required
 * //       deposit: Number("long"), // required
 * //       utilities: "included" || "separate", // required
 * //       utilityCost: Number("long"),
 * //     },
 * //     amenities: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     media: { // PropertyMedia
 * //       images: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       videos: [
 * //         "STRING_VALUE",
 * //       ],
 * //       virtualTour: "STRING_VALUE",
 * //     },
 * //     availability: { // PropertyAvailability
 * //       isAvailable: true || false, // required
 * //       availableFrom: new Date("TIMESTAMP"), // required
 * //       leaseDuration: Number("int"), // required
 * //     },
 * //     status: "DRAFT" || "ACTIVE" || "RENTED" || "MAINTENANCE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreatePropertyCommandInput - {@link CreatePropertyCommandInput}
 * @returns {@link CreatePropertyCommandOutput}
 * @see {@link CreatePropertyCommandInput} for command's `input` shape.
 * @see {@link CreatePropertyCommandOutput} for command's `response` shape.
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
export class CreatePropertyCommand extends $Command.classBuilder<CreatePropertyCommandInput, CreatePropertyCommandOutput, RentalPlatformClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: RentalPlatformClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("RentalPlatform", "CreateProperty", {

  })
  .n("RentalPlatformClient", "CreatePropertyCommand")
  .f(void 0, void 0)
  .ser(se_CreatePropertyCommand)
  .de(de_CreatePropertyCommand)
.build() {
}
