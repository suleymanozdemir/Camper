import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback } from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const NewPasswordScreen = () => {
    const returnLoginScreen = useCallback(() => {
        router.back();
    }, []);

    const sendBtnClick = useCallback(() => {
        router.push("(forgotPassword)/passwordChanged");
    }, []);

    return (
        <KeyboardAvoidingView behavior="padding">
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
            >
                <View style={{ flex: 1 }} className="px-10">
                    <TouchableOpacity onPress={returnLoginScreen}>
                        <View className="flex-row flex-auto items-center mt-4">
                            <FontAwesome5
                                name="chevron-left"
                                size={14}
                                color="black"
                            />
                            <Text
                                style={{ fontFamily: "SF-Pro-Display-Medium" }}
                                className="text-2xl ml-4 "
                            >
                                New Password
                            </Text>
                        </View>
                    </TouchableOpacity>
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
