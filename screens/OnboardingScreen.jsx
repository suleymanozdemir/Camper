import PropTypes from "prop-types";
import {
    React,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

import { router } from "expo-router";
import { useCallback } from "react";
import { Navigation } from "../components/Navigation";
import { Pagination } from "../components/Pagination";
import { theme } from "../constants/theme";
import { data } from "../data/screens";

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
            width: SCREEN_WIDTH * 0.8,
            height: SCREEN_WIDTH * 0.8,
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

    return (
        <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
            <Animated.Image
                source={item.image}
                style={{ ...imageAnimatedStyle }}
            />

            <Animated.View style={textAnimatedStyle}>
                <Text className="text-gray-100" style={styles.itemTitle}>
                    {item.title}
                </Text>
                <Text className="text-gray-100" style={styles.itemText}>
                    {item.text}
                </Text>
            </Animated.View>
        </View>
    );
};

export default function OnboardingScreen() {
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const flatListRef = useAnimatedRef();

    const flatListIndex = useSharedValue(0);
    const x = useSharedValue(0);

    const onViewableItemsChanged = ({ viewableItems }) => {
        flatListIndex.value = viewableItems[0].index ?? 0;
    };

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            x.value = event.contentOffset.x;
        },
    });

    const goRegisterScreen = useCallback(() => {
        router.push("/(register)/register");
    }, []);

    return (
        <View style={styles.container}>
            <Animated.FlatList
                ref={flatListRef}
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item, index }) => (
                    <RenderItem index={index} item={item} x={x} />
                )}
                onScroll={onScroll}
                scrollEventThrottle={16}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                pagingEnabled
                onViewableItemsChanged={onViewableItemsChanged}
            />

            <View style={styles.footerContainer}>
                <Navigation
                    flatListRef={flatListRef}
                    flatListIndex={flatListIndex}
                    dataLength={data.length}
                >
                    <Pagination data={data} screenWidth={SCREEN_WIDTH} x={x} />
                </Navigation>
            </View>
            <View style={styles.registerText}>
                <View>
                    <Text>Don’t have an Account?</Text>
                </View>
                <View style={{ marginLeft: 6 }}>
                    <TouchableOpacity onPress={goRegisterScreen}>
                        <Text
                            style={{ fontWeight: "500" }}
                            className="text-gray-900"
                        >
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    itemTitle: {
        fontFamily: "SF-Pro-Display-Bold",
        fontSize: 32,
        textAlign: "center",
        marginBottom: 10,
        color: theme.colors.textTitleColor,
    },
    itemText: {
        fontFamily: "SF-Pro-Display-Light",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
        marginHorizontal: 30,
        color: theme.colors.textColor,
    },
    footerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20,
    },
    registerText: {
        fontFamily: "SF-Pro-Display-Light",
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        flexDirection: "row",
    },
});

RenderItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    x: PropTypes.object,
};
