import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
  /**
   * Specify your server-side environment variables schema here.
   * This way you can ensure the app isn't built with invalid env vars.
   */
  server: {
    // SERVERVAR: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here.
   * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    EXPO_PUBLIC_PROJECT_ID: z.string(),
    // EXPO_PUBLIC_CLIENTVAR: z.string(),
  },

  clientPrefix: "EXPO_PUBLIC_",

  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */
  runtimeEnv: process.env,

  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
