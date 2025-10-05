// smithy-typescript generated code
import { RentalPlatformHttpAuthSchemeProvider } from "./httpAuthSchemeProvider";
import { HttpAuthScheme } from "@smithy/types";

/**
 * @internal
 */
export interface HttpAuthExtensionConfiguration {
  setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void;
  httpAuthSchemes(): HttpAuthScheme[];
  setHttpAuthSchemeProvider(httpAuthSchemeProvider: RentalPlatformHttpAuthSchemeProvider): void;
  httpAuthSchemeProvider(): RentalPlatformHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export type HttpAuthRuntimeConfig = Partial<{
  httpAuthSchemes: HttpAuthScheme[];
  httpAuthSchemeProvider: RentalPlatformHttpAuthSchemeProvider;
}>;

/**
 * @internal
 */
export const getHttpAuthExtensionConfiguration = (runtimeConfig: HttpAuthRuntimeConfig): HttpAuthExtensionConfiguration => {
  let _httpAuthSchemes = runtimeConfig.httpAuthSchemes!;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider!;
  return {
    setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void {
      const index = _httpAuthSchemes.findIndex(scheme => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes(): HttpAuthScheme[] {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider: RentalPlatformHttpAuthSchemeProvider): void {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider(): RentalPlatformHttpAuthSchemeProvider {
      return _httpAuthSchemeProvider;
    },
  }
};

/**
 * @internal
 */
export const resolveHttpAuthRuntimeConfig = (config: HttpAuthExtensionConfiguration): HttpAuthRuntimeConfig => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
  };
};
