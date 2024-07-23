import { router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import ChevronLeft from "../assets/icon/Outline/chevron-left.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { createCampArea } from "../services/api";

const AddTripFormScreen = () => {
    const [values, setValues] = useState({
        name: null,
        description: null,
        isWorking: null,
    });

    const handleSubmit = (value) => {
        createCampArea(value);
    };

    return (
        <View className="px-4 flex-initial">
            <TouchableOpacity onPress={() => router.back()}>
                <View className="flex-row items-center mt-4 flex-initial">
                    <ChevronLeft width={32} height={32} fill={"#000"} />
                    <Text
                        style={{ fontFamily: "SF-Pro-Display-Medium" }}
                        className="text-2xl ml-4 "
                    >
                        Add camp area
                    </Text>
                </View>
                <View className="flex-initial">
                    <Formik
                        initialValues={values}
                        //validationSchema={loginSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            errors,
                            values,
                            setFieldValue,
                        }) => (
                            <View>
                                <Input
                                    type="name"
                                    onChange={handleChange("name")}
                                    label="Name"
                                    inputMode="text"
                                    error={errors.name}
                                />
                                <Input
                                    type="default"
                                    onChange={handleChange("description")}
                                    label="Description"
                                    inputMode="text"
                                    error={errors.description}
                                />
                                <View className="flex-row items-center space-x-4">
                                    <Text
                                        className="text-gray-500 my-2 text-base"
                                        style={{
                                            fontFamily:
                                                "SF-Pro-Display-Regular",
                                        }}
                                    >
                                        Open
                                    </Text>
                                    <Switch
                                        value={values.isWorking}
                                        className="my-4"
                                        onChange={(value) =>
                                            setFieldValue(
                                                "isWorking",
                                                value.nativeEvent.value
                                            )
                                        }
                                    />
                                </View>

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
                                    onPress={() =>
                                        router.push("/(register)/register")
                                    }
                                />
                            </View>
                        )}
                    </Formik>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default AddTripFormScreen;
