import { FontAwesome5 } from "@expo/vector-icons";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Button } from "../components/Button";

const OTPScreen = ({ route }) => {
    const [code, setCode] = useState("");

    const returnLoginScreen = useCallback(() => {
        router.back();
    }, []);

    const sendOtp = useCallback(() => {
        router.push(route ? route : "(forgotPassword)/newPassword");
    }, []);

    return (
        <KeyboardAvoidingView behavior="padding">
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
            >
                <View style={{ flex: 1 }} className="px-10">
                    <TouchableOpacity onPress={returnLoginScreen}>
                        <View className="flex-row items-center mt-4">
                            <FontAwesome5
                                name="chevron-left"
                                size={14}
                                color="black"
                            />
                            <Text
                                style={{ fontFamily: "SF-Pro-Display-Medium" }}
                                className="text-2xl ml-4 "
                            >
                                Confirm OTP
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View className="mt-4" style={{ flex: 1 }}>
                        <Text
                            style={{ fontFamily: "SF-Pro-Display-Regular" }}
                            className="text-gray-500 text-lg"
                        >
                            Please confirm your 4 digit OTP. which is sent on
                            this number +1202-555-0174 Change number.
                        </Text>
                    </View>
                    <View className="mt-4" style={{ flex: 1 }}>
                        <OTPInputView
                            style={{ width: "80%", alignSelf: "center" }}
                            pinCount={4}
                            placeholderCharacter="1"
                            code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            onCodeChanged={(code) => setCode(code)}
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={
                                styles.underlineStyleHighLighted
                            }
                            selectionColor="#000"
                            placeholderTextColor="#71717A"
                            onCodeFilled={(code) => {
                                console.log(
                                    `Code is ${code}, you are good to go!`
                                );
                            }}
                            autoFocusOnLoad
                            editable
                        />
                        <Button
                            styles={{ width: "100%" }}
                            buttonType="success"
                            label="Send"
                            onPress={sendOtp}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45,
        borderBottomColor: "#71717A",
        color: "#000",
    },

    borderStyleHighLighted: {
        borderBottomColor: "#000",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderBottomColor: "#71717A",
        color: "#000",
    },

    underlineStyleHighLighted: {
        color: "#000",
        borderBottomColor: "#84CC16",
    },
});
export default OTPScreen;
