import * as Clipboard from "expo-clipboard";
import React, { ReactElement } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Vibration,
    View,
} from "react-native";
import Award from "./../assets/icon/Outline/award.svg";
import CopyIcon from "./../assets/icon/Outline/copy.svg";

type CardProps = {
    type: "success" | "error" | "warning" | "info";
    cardType: "reward" | "info" | "step";
    title: string;
    content: string;
    icon: ReactElement;
    iconColor: string;
    iconSize: [number, number];
};

export function Card({
    type,
    cardType,
    title,
    content,
    icon = <Award />,
    iconColor = "#365314",
    iconSize = [24, 24],
}: CardProps) {
    const copyToText = async () => {
        Clipboard.setStringAsync("CMP21992822");
        Vibration.vibrate([1], false);
    };

    return (
        <View
            className="rounded-2xl bg-lime-50 p-4 space-y-2 mb-4"
            style={{ ...styles[type] }}
        >
            {cardType === "info" && (
                <>
                    <Text className="text-lime-600 text-sm">{title}</Text>
                    <View className="flex-row justify-between">
                        <Text className="text-lime-900 text-base">
                            {content}
                        </Text>
                        <TouchableOpacity onPress={copyToText}>
                            <CopyIcon width={24} height={24} fill={"#000"} />
                        </TouchableOpacity>
                    </View>
                </>
            )}
            {cardType === "reward" && (
                <>
                    <View className="flex-row space-x-4">
                        <View className="bg-lime-100 rounded-2xl p-3">
                            {React.cloneElement(icon, {
                                width: iconSize[0],
                                height: iconSize[1],
                                fill: iconColor,
                            })}
                        </View>
                        <View className="space-y-1">
                            <Text
                                style={{
                                    fontFamily: "SF-Pro-Display-SemiBold",
                                }}
                                className="text-lime-900 text-sm"
                            >
                                {title}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "SF-Pro-Display-Regular",
                                }}
                                className="text-lime-600 text-sm"
                            >
                                {content}
                            </Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    success: {
        backgroundColor: "#F7FEE7",
    },
    error: {},
    warning: {},
    info: {},
});
