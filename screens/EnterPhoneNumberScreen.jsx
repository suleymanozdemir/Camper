import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback } from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const EnterPhoneNumberScreen = () => {
    const returnLoginScreen = useCallback(() => {
        router.back();
    }, []);

    const sendBtnClick = useCallback(() => {
        router.push("(forgotPassword)/otpScreen");
    }, []);

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{ flex: 1 }}
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
                                Forgot Password
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View className="flex-initial mt-4">
                        <Text
                            style={{ fontFamily: "SF-Pro-Display-Regular" }}
                            className="text-gray-500 text-lg"
                        >
                            To get your new password you need to put your phone
                            number down below. and we will send you an OTP on
                            that number for confirmation.
                        </Text>
                    </View>
                    <View className="flex mt-">
                        <Input
                            inputMode="tel"
                            label="Phone"
                            secureTextEntry={false}
                            type="phone-pad"
                            placeholder="+1"
                        />
                        <Button
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

const styles = StyleSheet.create({});

export default EnterPhoneNumberScreen;
