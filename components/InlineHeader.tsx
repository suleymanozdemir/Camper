import { router } from "expo-router";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ChevronLeft from "../assets/icon/Outline/chevron-left.svg";

type InlineHeaderProps = {
    label: string;
};

export function InlineHeader({ label }: InlineHeaderProps) {
    const returnBackScreen = useCallback(() => {
        router.back();
    }, []);

    return (
        <TouchableOpacity onPress={returnBackScreen}>
            <View className="flex-row flex-auto items-center mt-4">
                <ChevronLeft width={32} height={32} fill="black" />
                <Text
                    style={{ fontFamily: "SF-Pro-Display-Medium" }}
                    className="text-2xl ml-4 "
                >
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
