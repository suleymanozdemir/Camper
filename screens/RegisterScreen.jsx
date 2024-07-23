import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

import { router } from "expo-router";
import { Formik } from "formik";
import * as yup from "yup";
import Logo from "../assets/images/logo/Logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Spin from "../components/Spining";
import { API_URL } from "../services/api";

const RegisterScreen = () => {
    const [values, setValues] = useState({
        username: null,
        email: null,
        phone: null,
        password: null,
    });

    const [loading, setLoading] = useState(false);

    const registerSchema = yup.object().shape({
        username: yup.string().required("Name is required."),
        email: yup
            .string()
            .email("Please enter valid email")
            .required("Email address is required."),
        phone: yup.number().required("Phone number is required."),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required("Password is required."),
    });

    const onSubmitPressed = async (values) => {
        setValues(values);
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/auth/local/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (res.ok) {
                const response = await res.json();
                router.navigate("/login");
            }
        } catch (error) {
            console.log(error.name, "error");
        }
        setLoading(false);
    };

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
            contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
                alignContent: "stretch",
            }}
        >
            <ScrollView
                keyboardShouldPersistTaps={"always"}
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "stretch",
                    paddingHorizontal: 40,
                }}
                keyboardDismissMode={"on-drag"}
            >
                <Spin spining={loading} size="large" />
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Spin />
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Logo width={"100%"} height={63} />
                    </View>
                    <Formik
                        validationSchema={registerSchema}
                        initialValues={values}
                        onSubmit={onSubmitPressed}
                    >
                        {({ handleSubmit, handleChange, errors }) => (
                            <View style={{ flex: 4 }}>
                                <Input
                                    inputMode="text"
                                    label="Name"
                                    secureTextEntry={false}
                                    type="default"
                                    isRequired={true}
                                    name="username"
                                    onChange={handleChange("username")}
                                    error={errors.username}
                                />
                                <Input
                                    inputMode="email"
                                    label="Email"
                                    secureTextEntry={false}
                                    type="email-address"
                                    name="email"
                                    onChange={handleChange("email")}
                                    error={errors.email}
                                />
                                <Input
                                    inputMode="numeric"
                                    label="Phone"
                                    secureTextEntry={false}
                                    type="number-pad"
                                    name="phone"
                                    onChange={handleChange("phone")}
                                    error={errors.phone}
                                />
                                <Input
                                    inputMode="text"
                                    label="Password"
                                    secureTextEntry={true}
                                    type="default"
                                    name="password"
                                    onChange={handleChange("password")}
                                    error={errors.password}
                                />
                                <Button
                                    buttonType="success"
                                    label="Register"
                                    containerClassName="mt-4"
                                    onPress={handleSubmit}
                                />
                                <Button
                                    buttonType="ghost"
                                    label="Log In"
                                    containerClassName="mt-4"
                                    onPress={() => router.replace("/login")}
                                />
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
