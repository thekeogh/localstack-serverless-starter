/**
 * Extends the NodeJS ProcessEnv interface with environment variable type definitions.
 *
 * @remarks
 * Provides type safety for environment variables used throughout the application. This includes AWS
 * credentials, environment mode settings, and custom application variables. The definitions ensure
 * type checking when accessing process.env values.
 */
declare namespace NodeJS {
  interface ProcessEnv {
    // Environment
    readonly NODE_ENV: "development" | "staging" | "production" | "test" | "ci";

    // AWS
    readonly AWS_ACCESS_KEY_ID: string;
    readonly AWS_SECRET_ACCESS_KEY: string;

    // Examples
    readonly TEST_ENV_VAR: string;
    readonly TEST_ENV_CONSTANT: string;
  }
}
