import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="bg-background">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full bg-background p-4 flex items-center justify-center">
        <Text className="text-center text-5xl font-bold text-foreground">
          Create <Text className="text-primary">T3</Text> Expo
        </Text>
        <Text className="text-center text-4xl text-foreground">
          A simple example of a Expo app with Tailwind CSS
        </Text>
      </View>
    </SafeAreaView>
  );
}
