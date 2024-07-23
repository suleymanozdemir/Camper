import { React, SafeAreaView } from "react-native";
import OnboardingScreen from "../screens/OnboardingScreen";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <OnboardingScreen />
    </SafeAreaView>
  );
}
