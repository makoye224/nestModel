// smithy-typescript generated code
import {
  RentalPlatformClient,
  RentalPlatformClientConfig,
} from "./RentalPlatformClient";
import {
  AssignPropertyManagerCommand,
  AssignPropertyManagerCommandInput,
  AssignPropertyManagerCommandOutput,
} from "./commands/AssignPropertyManagerCommand";
import {
  BecomeLandlordCommand,
  BecomeLandlordCommandInput,
  BecomeLandlordCommandOutput,
} from "./commands/BecomeLandlordCommand";
import {
  CreatePropertyCommand,
  CreatePropertyCommandInput,
  CreatePropertyCommandOutput,
} from "./commands/CreatePropertyCommand";
import {
  DeletePropertyCommand,
  DeletePropertyCommandInput,
  DeletePropertyCommandOutput,
} from "./commands/DeletePropertyCommand";
import {
  ForgotPasswordCommand,
  ForgotPasswordCommandInput,
  ForgotPasswordCommandOutput,
} from "./commands/ForgotPasswordCommand";
import {
  GetMediaUploadUrlCommand,
  GetMediaUploadUrlCommandInput,
  GetMediaUploadUrlCommandOutput,
} from "./commands/GetMediaUploadUrlCommand";
import {
  GetNearbyPropertiesCommand,
  GetNearbyPropertiesCommandInput,
  GetNearbyPropertiesCommandOutput,
} from "./commands/GetNearbyPropertiesCommand";
import {
  GetPropertiesByLocationCommand,
  GetPropertiesByLocationCommandInput,
  GetPropertiesByLocationCommandOutput,
} from "./commands/GetPropertiesByLocationCommand";
import {
  GetPropertyCommand,
  GetPropertyCommandInput,
  GetPropertyCommandOutput,
} from "./commands/GetPropertyCommand";
import {
  GetUserCommand,
  GetUserCommandInput,
  GetUserCommandOutput,
} from "./commands/GetUserCommand";
import {
  ListLandlordPropertiesCommand,
  ListLandlordPropertiesCommandInput,
  ListLandlordPropertiesCommandOutput,
} from "./commands/ListLandlordPropertiesCommand";
import {
  ListManagedPropertiesCommand,
  ListManagedPropertiesCommandInput,
  ListManagedPropertiesCommandOutput,
} from "./commands/ListManagedPropertiesCommand";
import {
  ListPropertiesCommand,
  ListPropertiesCommandInput,
  ListPropertiesCommandOutput,
} from "./commands/ListPropertiesCommand";
import {
  MarkPropertyAsAvailableCommand,
  MarkPropertyAsAvailableCommandInput,
  MarkPropertyAsAvailableCommandOutput,
} from "./commands/MarkPropertyAsAvailableCommand";
import {
  MarkPropertyAsRentedCommand,
  MarkPropertyAsRentedCommandInput,
  MarkPropertyAsRentedCommandOutput,
} from "./commands/MarkPropertyAsRentedCommand";
import {
  RemovePropertyManagerCommand,
  RemovePropertyManagerCommandInput,
  RemovePropertyManagerCommandOutput,
} from "./commands/RemovePropertyManagerCommand";
import {
  ResetPasswordCommand,
  ResetPasswordCommandInput,
  ResetPasswordCommandOutput,
} from "./commands/ResetPasswordCommand";
import {
  ReviewLandlordApplicationCommand,
  ReviewLandlordApplicationCommandInput,
  ReviewLandlordApplicationCommandOutput,
} from "./commands/ReviewLandlordApplicationCommand";
import {
  SearchPropertiesCommand,
  SearchPropertiesCommandInput,
  SearchPropertiesCommandOutput,
} from "./commands/SearchPropertiesCommand";
import {
  SignInCommand,
  SignInCommandInput,
  SignInCommandOutput,
} from "./commands/SignInCommand";
import {
  SignUpCommand,
  SignUpCommandInput,
  SignUpCommandOutput,
} from "./commands/SignUpCommand";
import {
  UpdatePropertyCommand,
  UpdatePropertyCommandInput,
  UpdatePropertyCommandOutput,
} from "./commands/UpdatePropertyCommand";
import {
  UpdatePropertyStatusCommand,
  UpdatePropertyStatusCommandInput,
  UpdatePropertyStatusCommandOutput,
} from "./commands/UpdatePropertyStatusCommand";
import {
  UpdateUserCommand,
  UpdateUserCommandInput,
  UpdateUserCommandOutput,
} from "./commands/UpdateUserCommand";
import {
  VerifyEmailCommand,
  VerifyEmailCommandInput,
  VerifyEmailCommandOutput,
} from "./commands/VerifyEmailCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  AssignPropertyManagerCommand,
  BecomeLandlordCommand,
  CreatePropertyCommand,
  DeletePropertyCommand,
  ForgotPasswordCommand,
  GetMediaUploadUrlCommand,
  GetNearbyPropertiesCommand,
  GetPropertiesByLocationCommand,
  GetPropertyCommand,
  GetUserCommand,
  ListLandlordPropertiesCommand,
  ListManagedPropertiesCommand,
  ListPropertiesCommand,
  MarkPropertyAsAvailableCommand,
  MarkPropertyAsRentedCommand,
  RemovePropertyManagerCommand,
  ResetPasswordCommand,
  ReviewLandlordApplicationCommand,
  SearchPropertiesCommand,
  SignInCommand,
  SignUpCommand,
  UpdatePropertyCommand,
  UpdatePropertyStatusCommand,
  UpdateUserCommand,
  VerifyEmailCommand,
}

export interface RentalPlatform {
  /**
   * @see {@link AssignPropertyManagerCommand}
   */
  assignPropertyManager(
    args: AssignPropertyManagerCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AssignPropertyManagerCommandOutput>;
  assignPropertyManager(
    args: AssignPropertyManagerCommandInput,
    cb: (err: any, data?: AssignPropertyManagerCommandOutput) => void
  ): void;
  assignPropertyManager(
    args: AssignPropertyManagerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignPropertyManagerCommandOutput) => void
  ): void;

  /**
   * @see {@link BecomeLandlordCommand}
   */
  becomeLandlord(
    args: BecomeLandlordCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<BecomeLandlordCommandOutput>;
  becomeLandlord(
    args: BecomeLandlordCommandInput,
    cb: (err: any, data?: BecomeLandlordCommandOutput) => void
  ): void;
  becomeLandlord(
    args: BecomeLandlordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BecomeLandlordCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePropertyCommand}
   */
  createProperty(
    args: CreatePropertyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreatePropertyCommandOutput>;
  createProperty(
    args: CreatePropertyCommandInput,
    cb: (err: any, data?: CreatePropertyCommandOutput) => void
  ): void;
  createProperty(
    args: CreatePropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePropertyCommand}
   */
  deleteProperty(
    args: DeletePropertyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeletePropertyCommandOutput>;
  deleteProperty(
    args: DeletePropertyCommandInput,
    cb: (err: any, data?: DeletePropertyCommandOutput) => void
  ): void;
  deleteProperty(
    args: DeletePropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link ForgotPasswordCommand}
   */
  forgotPassword(
    args: ForgotPasswordCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ForgotPasswordCommandOutput>;
  forgotPassword(
    args: ForgotPasswordCommandInput,
    cb: (err: any, data?: ForgotPasswordCommandOutput) => void
  ): void;
  forgotPassword(
    args: ForgotPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ForgotPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMediaUploadUrlCommand}
   */
  getMediaUploadUrl(
    args: GetMediaUploadUrlCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetMediaUploadUrlCommandOutput>;
  getMediaUploadUrl(
    args: GetMediaUploadUrlCommandInput,
    cb: (err: any, data?: GetMediaUploadUrlCommandOutput) => void
  ): void;
  getMediaUploadUrl(
    args: GetMediaUploadUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaUploadUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNearbyPropertiesCommand}
   */
  getNearbyProperties(
    args: GetNearbyPropertiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetNearbyPropertiesCommandOutput>;
  getNearbyProperties(
    args: GetNearbyPropertiesCommandInput,
    cb: (err: any, data?: GetNearbyPropertiesCommandOutput) => void
  ): void;
  getNearbyProperties(
    args: GetNearbyPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNearbyPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPropertiesByLocationCommand}
   */
  getPropertiesByLocation(
    args: GetPropertiesByLocationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPropertiesByLocationCommandOutput>;
  getPropertiesByLocation(
    args: GetPropertiesByLocationCommandInput,
    cb: (err: any, data?: GetPropertiesByLocationCommandOutput) => void
  ): void;
  getPropertiesByLocation(
    args: GetPropertiesByLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPropertiesByLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPropertyCommand}
   */
  getProperty(
    args: GetPropertyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPropertyCommandOutput>;
  getProperty(
    args: GetPropertyCommandInput,
    cb: (err: any, data?: GetPropertyCommandOutput) => void
  ): void;
  getProperty(
    args: GetPropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLandlordPropertiesCommand}
   */
  listLandlordProperties(
    args: ListLandlordPropertiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListLandlordPropertiesCommandOutput>;
  listLandlordProperties(
    args: ListLandlordPropertiesCommandInput,
    cb: (err: any, data?: ListLandlordPropertiesCommandOutput) => void
  ): void;
  listLandlordProperties(
    args: ListLandlordPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLandlordPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedPropertiesCommand}
   */
  listManagedProperties(
    args: ListManagedPropertiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListManagedPropertiesCommandOutput>;
  listManagedProperties(
    args: ListManagedPropertiesCommandInput,
    cb: (err: any, data?: ListManagedPropertiesCommandOutput) => void
  ): void;
  listManagedProperties(
    args: ListManagedPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPropertiesCommand}
   */
  listProperties(): Promise<ListPropertiesCommandOutput>;
  listProperties(
    args: ListPropertiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListPropertiesCommandOutput>;
  listProperties(
    args: ListPropertiesCommandInput,
    cb: (err: any, data?: ListPropertiesCommandOutput) => void
  ): void;
  listProperties(
    args: ListPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link MarkPropertyAsAvailableCommand}
   */
  markPropertyAsAvailable(
    args: MarkPropertyAsAvailableCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<MarkPropertyAsAvailableCommandOutput>;
  markPropertyAsAvailable(
    args: MarkPropertyAsAvailableCommandInput,
    cb: (err: any, data?: MarkPropertyAsAvailableCommandOutput) => void
  ): void;
  markPropertyAsAvailable(
    args: MarkPropertyAsAvailableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MarkPropertyAsAvailableCommandOutput) => void
  ): void;

  /**
   * @see {@link MarkPropertyAsRentedCommand}
   */
  markPropertyAsRented(
    args: MarkPropertyAsRentedCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<MarkPropertyAsRentedCommandOutput>;
  markPropertyAsRented(
    args: MarkPropertyAsRentedCommandInput,
    cb: (err: any, data?: MarkPropertyAsRentedCommandOutput) => void
  ): void;
  markPropertyAsRented(
    args: MarkPropertyAsRentedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MarkPropertyAsRentedCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePropertyManagerCommand}
   */
  removePropertyManager(
    args: RemovePropertyManagerCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RemovePropertyManagerCommandOutput>;
  removePropertyManager(
    args: RemovePropertyManagerCommandInput,
    cb: (err: any, data?: RemovePropertyManagerCommandOutput) => void
  ): void;
  removePropertyManager(
    args: RemovePropertyManagerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePropertyManagerCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetPasswordCommand}
   */
  resetPassword(
    args: ResetPasswordCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ResetPasswordCommandOutput>;
  resetPassword(
    args: ResetPasswordCommandInput,
    cb: (err: any, data?: ResetPasswordCommandOutput) => void
  ): void;
  resetPassword(
    args: ResetPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link ReviewLandlordApplicationCommand}
   */
  reviewLandlordApplication(
    args: ReviewLandlordApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ReviewLandlordApplicationCommandOutput>;
  reviewLandlordApplication(
    args: ReviewLandlordApplicationCommandInput,
    cb: (err: any, data?: ReviewLandlordApplicationCommandOutput) => void
  ): void;
  reviewLandlordApplication(
    args: ReviewLandlordApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReviewLandlordApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPropertiesCommand}
   */
  searchProperties(): Promise<SearchPropertiesCommandOutput>;
  searchProperties(
    args: SearchPropertiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SearchPropertiesCommandOutput>;
  searchProperties(
    args: SearchPropertiesCommandInput,
    cb: (err: any, data?: SearchPropertiesCommandOutput) => void
  ): void;
  searchProperties(
    args: SearchPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link SignInCommand}
   */
  signIn(
    args: SignInCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SignInCommandOutput>;
  signIn(
    args: SignInCommandInput,
    cb: (err: any, data?: SignInCommandOutput) => void
  ): void;
  signIn(
    args: SignInCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignInCommandOutput) => void
  ): void;

  /**
   * @see {@link SignUpCommand}
   */
  signUp(
    args: SignUpCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SignUpCommandOutput>;
  signUp(
    args: SignUpCommandInput,
    cb: (err: any, data?: SignUpCommandOutput) => void
  ): void;
  signUp(
    args: SignUpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignUpCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePropertyCommand}
   */
  updateProperty(
    args: UpdatePropertyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdatePropertyCommandOutput>;
  updateProperty(
    args: UpdatePropertyCommandInput,
    cb: (err: any, data?: UpdatePropertyCommandOutput) => void
  ): void;
  updateProperty(
    args: UpdatePropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePropertyStatusCommand}
   */
  updatePropertyStatus(
    args: UpdatePropertyStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdatePropertyStatusCommandOutput>;
  updatePropertyStatus(
    args: UpdatePropertyStatusCommandInput,
    cb: (err: any, data?: UpdatePropertyStatusCommandOutput) => void
  ): void;
  updatePropertyStatus(
    args: UpdatePropertyStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePropertyStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyEmailCommand}
   */
  verifyEmail(
    args: VerifyEmailCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<VerifyEmailCommandOutput>;
  verifyEmail(
    args: VerifyEmailCommandInput,
    cb: (err: any, data?: VerifyEmailCommandOutput) => void
  ): void;
  verifyEmail(
    args: VerifyEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyEmailCommandOutput) => void
  ): void;

}

/**
 * @public
 */
export class RentalPlatform extends RentalPlatformClient implements RentalPlatform {}
createAggregatedClient(commands, RentalPlatform);
