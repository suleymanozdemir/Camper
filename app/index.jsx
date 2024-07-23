import { React, SafeAreaView } from "react-native";
import OnboardingScreen from "../screens/OnboardingScreen";

export default function Index() {
    return (
        <SafeAreaView className="flex-auto items-center justify-stretch bg-white">
            <OnboardingScreen />
        </SafeAreaView>
    );
}
