import React, { ReactElement, ReactFragment, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

type TabButton = {
    label: string;
    accessibilityState: object;
    accessibilityLabel: string;
    restProps: object;
    children: ReactFragment;
    icon: ReactElement;
    onPress: void;
};

export function TabButton({
    label,
    accessibilityLabel,
    accessibilityState,
    children,
    icon,
    onPress,
    ...restProps
}: TabButton) {
    const isActive = accessibilityState.selected;
    const containerWidth = useSharedValue(48);
    const opactiy = useSharedValue(0);
    const backgroundColor = useSharedValue(false);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: `${containerWidth.value}%`,
            borderRadius: 16,
            overflow: "hidden",
        };
    });

    const animatedText = useAnimatedStyle(() => {
        return {
            opacity: opactiy.value,
            color: "ECFCCB",
        };
    });

    const backgroundInterpolate = useAnimatedStyle(
        () => ({
            backgroundColor: withTiming(isActive ? "#65A30D" : "transparent", {
                duration: 300,
            }),
        }),
        [isActive]
    );

    useEffect(() => {
        if (isActive) {
            containerWidth.value = withSpring(100);
            opactiy.value = withSpring(1);
        } else {
            containerWidth.value = withSpring(48);
            opactiy.value = withSpring(0);
        }
    }, [isActive]);

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container]}>
            <Animated.View
                style={[animatedStyle, styles.wrapper, backgroundInterpolate]}
            >
                <View>{icon}</View>
                {isActive && (
                    <Animated.View
                        className="text-lime-100 ml-1"
                        style={[
                            animatedText,
                            {
                                fontFamily: "SF-Pro-Display-Medium",
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center",
                            },
                        ]}
                    >
                        <Text className="text-lime-100 text-xs ">
                            {accessibilityLabel}
                        </Text>
                    </Animated.View>
                )}
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
    },
    wrapper: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 9,
    },
});
