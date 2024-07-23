import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Formik } from "formik";
import { React, useCallback, useState } from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import * as yup from "yup";
import Logo from "../assets/images/logo/Logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Spin from "../components/Spining";
import { API_URL } from "../services/api";

const LoginScreen = () => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        identifier: null,
        password: null,
    });

    const loginSchema = yup.object().shape({
        identifier: yup
            .string()
            .email("Please enter valid email")
            .required("Email address is required."),
        password: yup.string().required("Password is required."),
    });

    const onForgotPasswordClick = useCallback(() => {
        router.push("/forgotPassword");
    }, []);

    const handleSubmit = useCallback(async (values) => {
        setValues(values);
        setLoading(true);
        console.log("deneme");
        try {
            const res = await fetch(`${API_URL}/auth/local`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            console.log(res);
            if (res.ok) {
                const response = await res.json();
                console.log(response, "response");
                await AsyncStorage.setItem(
                    "token",
                    JSON.stringify(response.jwt)
                );

                router.navigate("/(app)/(home)/home");
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error, "error");
        }
        setLoading(false);
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
                <Spin spining={loading} size="large" />
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
                        <Formik
                            initialValues={values}
                            validationSchema={loginSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            {({ handleSubmit, handleChange, errors }) => (
                                <View style={{ flex: 1 }}>
                                    <Input
                                        type="email"
                                        onChange={handleChange("identifier")}
                                        label="Email"
                                        inputMode="email"
                                        key={1}
                                        error={errors.email}
                                    />
                                    <Input
                                        type="password"
                                        onChange={handleChange("password")}
                                        label="Password"
                                        inputMode="text"
                                        secureTextEntry={true}
                                        key={2}
                                        error={errors.password}
                                    />
                                    <TouchableOpacity
                                        style={{ alignSelf: "center" }}
                                        className="text-gray-400 mt-4"
                                        onPress={onForgotPasswordClick}
                                    >
                                        <Text
                                            style={styles.forGotPassWordText}
                                            className="mb-2 text-lg"
                                        >
                                            Forgot Password?
                                        </Text>
                                    </TouchableOpacity>
                                    <Button
                                        onPress={handleSubmit}
                                        label="Log in"
                                        buttonType="success"
                                        containerClassName="my-4"
                                    />
                                    <Button
                                        label="Register"
                                        buttonType="ghost"
                                        containerClassName=""
                                        onPress={() => router.push("/register")}
                                    />
                                </View>
                            )}
                        </Formik>
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
