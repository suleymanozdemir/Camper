import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    label: string;
    styles: object;
    textStyle: object;
    onPress: Function;
    buttonType: "success" | "error" | "warning" | "ghost";
    containerClassName: string;
};

export function Button({
    label,
    styles,
    buttonType,
    textStyle,
    onPress = () => {
        console.log("clicked");
    },
    containerClassName,
}: ButtonProps) {
    const [btnActive, setBtnActive] = useState(false);
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPressIn={() => setBtnActive(true)}
            onPressOut={() => setBtnActive(false)}
            onPress={(e) => onPress(e)}
            style={{
                ...styles,
                ...buttonStyles[buttonType],
            }}
            className={`py-4 items-center justify-center rounded-xl border ${containerClassName}`}
        >
            <Text
                style={{
                    ...textStyles.common,
                    ...textStyle,
                    ...textStyles[buttonType],
                }}
                className={"font-semibold text-sm"}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const buttonStyles = StyleSheet.create({
    success: {
        backgroundColor: "#84cc16",
        borderColor: "#84cc16",
    },
    error: {
        backgroundColor: "#ef4444",
        borderColor: "#ef4444",
    },
    warning: {
        backgroundColor: "#eab308",
        borderColor: "#eab308",
    },
    ghost: {
        backgroundColor: "#fff",
        borderColor: "#84cc16",
    },
    activeSuccess: {},
    activeError: {},
    activeWarning: {},
    activeGhost: {},
});

const textStyles = StyleSheet.create({
    common: {
        fontFamily: "SF-Pro-Display-Medium",
    },
    success: {
        color: "#fff",
    },
    error: {
        color: "#fff",
    },
    warning: {
        color: "#fff",
    },
    ghost: {
        color: "#84cc16",
    },
});
