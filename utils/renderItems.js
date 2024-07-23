import React from "react";

import propTypes from "prop-types";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";

const RenderItem = ({ item, index, x }) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();

    const imageAnimatedStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        const translateYAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [100, 0, 100],
            Extrapolate.CLAMP
        );

        return {
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 1,
            opacity: opacityAnimation,
            transform: [{ translateY: translateYAnimation }],
        };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        const translateYAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [100, 0, 100],
            Extrapolate.CLAMP
        );

        return {
            opacity: opacityAnimation,
            transform: [{ translateY: translateYAnimation }],
        };
    });

    const ImageContent = item.image.default;

    return (
        <View
            className="flex-1 justify-center items-center"
            style={[{ width: SCREEN_WIDTH }]}
        >
            <Animated.View
                style={{
                    ...styles.imageAnimatedContainer,
                    ...imageAnimatedStyle,
                }}
            >
                <View className="">
                    <ImageContent />
                </View>
            </Animated.View>
            <Animated.View style={textAnimatedStyle}>
                <Text
                    className="text-black mb-4 text-3xl text-center px-5"
                    style={styles.itemTitle}
                >
                    {item.title}
                </Text>
                <Text
                    className="text-gray-700 text-xl text-center px-12 pb-4"
                    style={styles.itemText}
                >
                    {item.text}
                </Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemTitle: {
        fontFamily: "SF-Pro-Display-Medium",
    },
    itemText: {
        fontFamily: "SF-Pro-Display-Regular",
    },
});

RenderItem.propTypes = {
    item: propTypes.object,
    index: propTypes.number,
    x: propTypes.object,
};

export default RenderItem;
