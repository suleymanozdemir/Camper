import { React, useCallback, useState } from "react";
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

import { router } from "expo-router";
import Logo from "../assets/images/logo/Logo.svg";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

    const onLoginBtnClick = useCallback(() => {
        setIsPasswordCorrect(!isPasswordCorrect);
    }, [email, password, isPasswordCorrect]);

    const onForgotPasswordClick = useCallback(() => {
        router.push("(forgotPassword)/phoneNumber");
    }, []);

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView
                style={{ flex: 2 }}
                contentContainerStyle={{
                    flex: 1,
                }}
                keyboardShouldPersistTaps={"always"}
                keyboardDismissMode={"on-drag"}
            >
                <View style={{ flex: 1, paddingHorizontal: 42 }}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Logo width={"100%"} height={63} />
                    </View>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <Input
                                type="email"
                                onChange={setEmail}
                                label="Email"
                                inputMode="email"
                                value={email}
                                key={1}
                            />
                            <Input
                                type="password"
                                onChange={setPassword}
                                label="Password"
                                inputMode="text"
                                secureTextEntry={true}
                                value={password}
                                wrongPassword={!isPasswordCorrect}
                                key={2}
                            />
                            <TouchableOpacity
                                style={{ alignSelf: "center" }}
                                className="text-gray-400"
                                onPress={() => onForgotPasswordClick()}
                            >
                                <Text
                                    style={styles.forGotPassWordText}
                                    className="mb-2 text-lg"
                                >
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                            <Button
                                onPress={() => onLoginBtnClick()}
                                styles={{ marginBottom: 16 }}
                                label="Log in"
                                buttonType="success"
                                containerClassName="mt-4"
                            />
                            <Button
                                label="Register"
                                buttonType="ghost"
                                containerClassName="mt-4"
                                onPress={() =>
                                    router.push("/(register)/register")
                                }
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    forGotPassWordText: {
        fontFamily: "SF-Pro-Display-Regular",
        color: "rgb(156 163 175)",
    },
});

export default LoginScreen;
