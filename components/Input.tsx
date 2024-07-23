import React, { useState } from "react";
import { InputModeOptions, KeyboardType, Text, TextInput } from "react-native";

type InputProps = {
    type: KeyboardType;
    placeholder: string;
    onChange: FunctionStringCallback;
    value: string;
    label: string;
    inputMode: InputModeOptions;
    secureTextEntry: boolean;
    wrongPassword: boolean;
    ref: HTMLElement;
    isRequired: boolean;
    error: string;
};

export function Input({
    label,
    type,
    placeholder,
    onChange,
    inputMode,
    secureTextEntry,
    wrongPassword,
    error,
}: InputProps) {
    const [isActiveInput, setIsActiveInput] = useState(false);
    return (
        <>
            {label && (
                <Text
                    className="text-gray-500 my-2 text-base"
                    style={{ fontFamily: "SF-Pro-Display-Regular" }}
                >
                    {label}
                </Text>
            )}

            <TextInput
                className={`bg-gray-50 p-4 rounded-xl border ${
                    wrongPassword || error
                        ? "border-red-700"
                        : !isActiveInput
                        ? "border-gray-100"
                        : "border-lime-500 bg-white"
                }`}
                autoComplete="off"
                style={{ fontSize: 16 }}
                autoCorrect={false}
                returnKeyType="done"
                blurOnSubmit={true}
                autoCapitalize="none"
                keyboardType={type}
                placeholder={placeholder}
                inputMode={inputMode}
                onChangeText={onChange}
                maxLength={100}
                secureTextEntry={secureTextEntry}
                onFocus={(e) => setIsActiveInput(true)}
                onBlur={(e) => setIsActiveInput(false)}
            />
            {error && (
                <Text className="text-xs text-red-700 mt-1">{error}</Text>
            )}
        </>
    );
}
