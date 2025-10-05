// smithy-typescript generated code
import {
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  defaultRentalPlatformHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssignPropertyManagerCommandInput,
  AssignPropertyManagerCommandOutput,
} from "./commands/AssignPropertyManagerCommand";
import {
  BecomeLandlordCommandInput,
  BecomeLandlordCommandOutput,
} from "./commands/BecomeLandlordCommand";
import {
  CreatePropertyCommandInput,
  CreatePropertyCommandOutput,
} from "./commands/CreatePropertyCommand";
import {
  DeletePropertyCommandInput,
  DeletePropertyCommandOutput,
} from "./commands/DeletePropertyCommand";
import {
  ForgotPasswordCommandInput,
  ForgotPasswordCommandOutput,
} from "./commands/ForgotPasswordCommand";
import {
  GetMediaUploadUrlCommandInput,
  GetMediaUploadUrlCommandOutput,
} from "./commands/GetMediaUploadUrlCommand";
import {
  GetNearbyPropertiesCommandInput,
  GetNearbyPropertiesCommandOutput,
} from "./commands/GetNearbyPropertiesCommand";
import {
  GetPropertiesByLocationCommandInput,
  GetPropertiesByLocationCommandOutput,
} from "./commands/GetPropertiesByLocationCommand";
import {
  GetPropertyCommandInput,
  GetPropertyCommandOutput,
} from "./commands/GetPropertyCommand";
import {
  GetUserCommandInput,
  GetUserCommandOutput,
} from "./commands/GetUserCommand";
import {
  ListLandlordPropertiesCommandInput,
  ListLandlordPropertiesCommandOutput,
} from "./commands/ListLandlordPropertiesCommand";
import {
  ListManagedPropertiesCommandInput,
  ListManagedPropertiesCommandOutput,
} from "./commands/ListManagedPropertiesCommand";
import {
  ListPropertiesCommandInput,
  ListPropertiesCommandOutput,
} from "./commands/ListPropertiesCommand";
import {
  MarkPropertyAsAvailableCommandInput,
  MarkPropertyAsAvailableCommandOutput,
} from "./commands/MarkPropertyAsAvailableCommand";
import {
  MarkPropertyAsRentedCommandInput,
  MarkPropertyAsRentedCommandOutput,
} from "./commands/MarkPropertyAsRentedCommand";
import {
  RemovePropertyManagerCommandInput,
  RemovePropertyManagerCommandOutput,
} from "./commands/RemovePropertyManagerCommand";
import {
  ResetPasswordCommandInput,
  ResetPasswordCommandOutput,
} from "./commands/ResetPasswordCommand";
import {
  ReviewLandlordApplicationCommandInput,
  ReviewLandlordApplicationCommandOutput,
} from "./commands/ReviewLandlordApplicationCommand";
import {
  SearchPropertiesCommandInput,
  SearchPropertiesCommandOutput,
} from "./commands/SearchPropertiesCommand";
import {
  SignInCommandInput,
  SignInCommandOutput,
} from "./commands/SignInCommand";
import {
  SignUpCommandInput,
  SignUpCommandOutput,
} from "./commands/SignUpCommand";
import {
  UpdatePropertyCommandInput,
  UpdatePropertyCommandOutput,
} from "./commands/UpdatePropertyCommand";
import {
  UpdatePropertyStatusCommandInput,
  UpdatePropertyStatusCommandOutput,
} from "./commands/UpdatePropertyStatusCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput,
} from "./commands/UpdateUserCommand";
import {
  VerifyEmailCommandInput,
  VerifyEmailCommandOutput,
} from "./commands/VerifyEmailCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  RuntimeExtension,
  RuntimeExtensionsConfig,
  resolveRuntimeExtensions,
} from "./runtimeExtensions";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  CustomEndpointsInputConfig,
  CustomEndpointsResolvedConfig,
  resolveCustomEndpointsConfig,
} from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemePlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  Provider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

export { __Client }

/**
 * @public
 */
export type ServiceInputTypes =
  | AssignPropertyManagerCommandInput
  | BecomeLandlordCommandInput
  | CreatePropertyCommandInput
  | DeletePropertyCommandInput
  | ForgotPasswordCommandInput
  | GetMediaUploadUrlCommandInput
  | GetNearbyPropertiesCommandInput
  | GetPropertiesByLocationCommandInput
  | GetPropertyCommandInput
  | GetUserCommandInput
  | ListLandlordPropertiesCommandInput
  | ListManagedPropertiesCommandInput
  | ListPropertiesCommandInput
  | MarkPropertyAsAvailableCommandInput
  | MarkPropertyAsRentedCommandInput
  | RemovePropertyManagerCommandInput
  | ResetPasswordCommandInput
  | ReviewLandlordApplicationCommandInput
  | SearchPropertiesCommandInput
  | SignInCommandInput
  | SignUpCommandInput
  | UpdatePropertyCommandInput
  | UpdatePropertyStatusCommandInput
  | UpdateUserCommandInput
  | VerifyEmailCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssignPropertyManagerCommandOutput
  | BecomeLandlordCommandOutput
  | CreatePropertyCommandOutput
  | DeletePropertyCommandOutput
  | ForgotPasswordCommandOutput
  | GetMediaUploadUrlCommandOutput
  | GetNearbyPropertiesCommandOutput
  | GetPropertiesByLocationCommandOutput
  | GetPropertyCommandOutput
  | GetUserCommandOutput
  | ListLandlordPropertiesCommandOutput
  | ListManagedPropertiesCommandOutput
  | ListPropertiesCommandOutput
  | MarkPropertyAsAvailableCommandOutput
  | MarkPropertyAsRentedCommandOutput
  | RemovePropertyManagerCommandOutput
  | ResetPasswordCommandOutput
  | ReviewLandlordApplicationCommandOutput
  | SearchPropertiesCommandOutput
  | SignInCommandOutput
  | SignUpCommandOutput
  | UpdatePropertyCommandOutput
  | UpdatePropertyStatusCommandOutput
  | UpdateUserCommandOutput
  | VerifyEmailCommandOutput;

/**
 * @public
 */
export interface ClientDefaults
  extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

}

/**
 * @public
 */
export type RentalPlatformClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & UserAgentInputConfig
  & CustomEndpointsInputConfig
  & RetryInputConfig
  & HostHeaderInputConfig
  & HttpAuthSchemeInputConfig
/**
 * @public
 *
 *  The configuration interface of RentalPlatformClient class constructor that set the region, credentials and other options.
 */
export interface RentalPlatformClientConfig extends RentalPlatformClientConfigType {}

/**
 * @public
 */
export type RentalPlatformClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RuntimeExtensionsConfig
  & UserAgentResolvedConfig
  & CustomEndpointsResolvedConfig
  & RetryResolvedConfig
  & HostHeaderResolvedConfig
  & HttpAuthSchemeResolvedConfig
/**
 * @public
 *
 *  The resolved configuration interface of RentalPlatformClient class. This is resolved and normalized from the {@link RentalPlatformClientConfig | constructor configuration interface}.
 */
export interface RentalPlatformClientResolvedConfig extends RentalPlatformClientResolvedConfigType {}

/**
 * @public
 */
export class RentalPlatformClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RentalPlatformClientResolvedConfig
> {
  /**
   * The resolved configuration of RentalPlatformClient class. This is resolved and normalized from the {@link RentalPlatformClientConfig | constructor configuration interface}.
   */
  readonly config: RentalPlatformClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RentalPlatformClientConfig>) {
    let _config_0 = __getRuntimeConfig(configuration || {});
    let _config_1 = resolveUserAgentConfig(_config_0);
    let _config_2 = resolveCustomEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveHttpAuthSchemeConfig(_config_4);
    let _config_6 = resolveRuntimeExtensions(_config_5, configuration?.extensions || []);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getUserAgentPlugin(this.config
    ));
    this.middlewareStack.use(getRetryPlugin(this.config
    ));
    this.middlewareStack.use(getContentLengthPlugin(this.config
    ));
    this.middlewareStack.use(getHostHeaderPlugin(this.config
    ));
    this.middlewareStack.use(getLoggerPlugin(this.config
    ));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config
    ));
    this.middlewareStack.use(getHttpAuthSchemePlugin(this.config
      , {
        httpAuthSchemeParametersProvider: defaultRentalPlatformHttpAuthSchemeParametersProvider,identityProviderConfigProvider: async (config: RentalPlatformClientResolvedConfig) => new DefaultIdentityProviderConfig({
        }), }
    ));
    this.middlewareStack.use(getHttpSigningPlugin(this.config
    ));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
