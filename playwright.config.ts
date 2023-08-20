import { PlaywrightTestConfig } from "@playwright/test";

const defaultConfig = {
  webServer: {
    command: "yarn start",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

const config: PlaywrightTestConfig = {
  ...defaultConfig,
  webServer: {
    ...defaultConfig.webServer,
    port: 3000,
  },
};

export default config;
