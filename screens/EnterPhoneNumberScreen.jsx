import { router } from "expo-router";
import React, { useCallback } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { Button } from "../components/Button";
import { InlineHeader } from "../components/InlineHeader";
import { Input } from "../components/Input";

const EnterPhoneNumberScreen = () => {
    const sendBtnClick = useCallback(() => {
        router.navigate("/forgotPassword/otpScreen");
    }, []);

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{ flex: 1 }}
            >
                <View style={{ flex: 1 }} className="px-10">
                    <InlineHeader label="Forgot password" />
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
                            containerClassName="mt-4"
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default EnterPhoneNumberScreen;
