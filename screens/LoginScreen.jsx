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

const LoginScreen = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const loginSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required("Email address is required."),
        password: yup.string().required("Password is required."),
    });

    const onForgotPasswordClick = useCallback(() => {
        router.push("(forgotPassword)/phoneNumber");
    }, []);

    const handleSubmit = useCallback((values) => {
        setValues(values);
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
                        <Formik
                            initialValues={values}
                            validationSchema={loginSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            {({ handleSubmit, handleChange, errors }) => (
                                <View style={{ flex: 1 }}>
                                    <Input
                                        type="email"
                                        onChange={handleChange("email")}
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
                                        className="text-gray-400"
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
