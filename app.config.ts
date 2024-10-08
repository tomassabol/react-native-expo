import type { ConfigContext, ExpoConfig } from "expo/config";
import { getPackageJson } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "expo-app",
  slug: "expo-app",
  scheme: "expo-app",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- safe
  version: getPackageJson(__dirname).version,
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    // TODO: Add your update URL here
    // url: "your-update-url",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "your.bundle.identifier",
    supportsTablet: true,
  },
  android: {
    package: "your.bundle.identifier",
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
  },
  // TODO: Add your EAS build configuration here
  // extra: {
  //   eas: {
  //     projectId: "your-eas-project-id",
  //   },
  // },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  plugins: ["expo-router", "expo-updates"],
});
