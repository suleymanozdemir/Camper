import { useDrawerProgress } from "@react-navigation/drawer";
import React from "react";
import { Platform, useWindowDimensions } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";

const DrawerSceneWrapper = ({ children }) => {
    const progress = useDrawerProgress();
    const { width } = useWindowDimensions();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(progress.value, [0, 1], [1, 0.7], "clamp"),
            },
            {
                translateX: interpolate(
                    progress.value,
                    [0, 1],
                    [0, Platform.OS === "android" ? width - 130 : -60],
                    "clamp"
                ),
            },
        ],
        borderRadius: interpolate(progress.value, [0, 1], [0, 36], "clamp"),
        overflow: "hidden",
    }));

    return (
        <Animated.View style={[animatedStyle]} className="flex-1">
            {children}
        </Animated.View>
    );
};

export default DrawerSceneWrapper;
