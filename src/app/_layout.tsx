import "@bacons/text-decoder/install";
import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";

import { ReactQueryProvider } from "~/providers/query-provider";
import { View } from "react-native";
import { cn } from "~/lib/utils";
import * as Updates from "expo-updates";
import { useEffect } from "react";

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
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      console.error("Failed to fetch the update", error);
    }
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      onFetchUpdateAsync();
    }
  }, []);

  return (
    <ReactQueryProvider>
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
    </ReactQueryProvider>
  );
}
