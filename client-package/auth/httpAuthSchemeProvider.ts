// smithy-typescript generated code
import { RentalPlatformClientResolvedConfig } from "../RentalPlatformClient";
import {
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { getSmithyContext } from "@smithy/util-middleware";

/**
 * @internal
 */
export interface RentalPlatformHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
}

/**
 * @internal
 */
export interface RentalPlatformHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<RentalPlatformClientResolvedConfig, HandlerExecutionContext, RentalPlatformHttpAuthSchemeParameters, object> {}

/**
 * @internal
 */
export const defaultRentalPlatformHttpAuthSchemeParametersProvider = async (config: RentalPlatformClientResolvedConfig, context: HandlerExecutionContext, input: object): Promise<RentalPlatformHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
  };
};

function createSmithyApiNoAuthHttpAuthOption(authParameters: RentalPlatformHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#noAuth",
  };
};

/**
 * @internal
 */
export interface RentalPlatformHttpAuthSchemeProvider extends HttpAuthSchemeProvider<RentalPlatformHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultRentalPlatformHttpAuthSchemeProvider: RentalPlatformHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    default: {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
    };
  };
  return options;
};

/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: RentalPlatformHttpAuthSchemeProvider;

}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: RentalPlatformHttpAuthSchemeProvider;

}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(config: T & HttpAuthSchemeInputConfig): T & HttpAuthSchemeResolvedConfig => {
  return {
    ...config,
  } as T & HttpAuthSchemeResolvedConfig;
};
