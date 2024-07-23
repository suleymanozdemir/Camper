import {
    React,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";

import { Button } from "@/components/Button";
import { router } from "expo-router";
import { useCallback } from "react";
import { Navigation } from "../components/Navigation";
import { Pagination } from "../components/Pagination";
import { data } from "../data/screens";
import RenderItem from "../utils/renderItems";

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
        router.push("/register");
    }, []);

    const goLoginScreen = useCallback(() => {
        router.push("/login");
    }, []);

    return (
        <View style={styles.container}>
            <Animated.FlatList
                className="flex-auto"
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

            <View className="px-4 flex-row justify-between flex-1 mt-4">
                <Navigation
                    flatListRef={flatListRef}
                    flatListIndex={flatListIndex}
                    dataLength={data.length}
                >
                    <Pagination data={data} screenWidth={SCREEN_WIDTH} x={x} />
                </Navigation>
            </View>

            <View className="">
                <View className="px-4 ">
                    <Button
                        label="Log in"
                        buttonType="success"
                        onPress={goLoginScreen}
                    />
                </View>
                <View className="flex-row mt-4 justify-center ">
                    <View>
                        <Text
                            style={{ fontFamily: "SF-Pro-Display-Regular" }}
                            className="text-gray-900 text-base"
                        >
                            Don’t have an Account?
                        </Text>
                    </View>
                    <View className="ml-2">
                        <TouchableOpacity onPress={goRegisterScreen}>
                            <Text
                                style={{ fontFamily: "SF-Pro-Display-Medium" }}
                                className="text-gray-900 text-base"
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
