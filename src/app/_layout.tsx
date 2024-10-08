import "@bacons/text-decoder/install";
import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as Updates from "expo-updates";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { View } from "react-native";

import { env } from "~/env";
import { cn } from "~/lib/utils";
import { Providers } from "~/providers/providers";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colorScheme } = useColorScheme();

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.error("Failed to fetch the update", error);
    }
  }

  useEffect(() => {
    if (env.NODE_ENV !== "development") {
      onFetchUpdateAsync().then(console.log).catch(console.error);
    }
  }, []);

  return (
    <Providers>
      {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme == "dark" ? "#171717" : "#F8FAFC",
          },
          contentStyle: {
            backgroundColor: colorScheme == "dark" ? "#09090B" : "#FFFFFF",
          },
        }}
      />
      <View className={cn({ dark: colorScheme === "dark" })}>{children}</View>
      <StatusBar />
    </Providers>
  );
}
