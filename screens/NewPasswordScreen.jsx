import { router } from "expo-router";
import React, { useCallback } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { Button } from "../components/Button";
import { InlineHeader } from "../components/InlineHeader";
import { Input } from "../components/Input";

const NewPasswordScreen = () => {
    const sendBtnClick = useCallback(() => {
        router.push("/forgotPassword/passwordChanged");
    }, []);

    return (
        <KeyboardAvoidingView behavior="padding">
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
            >
                <View style={{ flex: 1 }} className="px-10">
                    <InlineHeader label="New Password" />
                    <View className="mt-4">
                        <Text
                            style={{ fontFamily: "SF-Pro-Display-Regular" }}
                            className="text-gray-500 text-lg"
                        >
                            Enter your new password below and please don’t
                            forget it now. it’s important to you to remember
                            your password.
                        </Text>
                    </View>
                    <View className="mt-4">
                        <Input
                            inputMode="text"
                            label="Set Password"
                            secureTextEntry={true}
                            type="default"
                        />
                        <Button
                            containerClassName="mt-4"
                            buttonType="success"
                            label="Send"
                            onPress={sendBtnClick}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default NewPasswordScreen;
