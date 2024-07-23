import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button";
import Header from "../components/Header";
import Empty from "./../assets/images/common/Empty.svg";
import { Card } from "./../components/Card";

const AddTripScreen = () => {
    return (
        <View className="flex-auto p-4 space-y-4">
            <Header title={"Camping Trips"} />
            <View className="flex-initial">
                <Card
                    type="success"
                    cardType="info"
                    title="your ID"
                    content="CMP21992822"
                />
            </View>
            <View className="flex-1 justify-center  space-y-8 ">
                <Empty width={"100%"} height="250" />
                <Text
                    style={{ fontFamily: "SF-Pro-Display-Regular" }}
                    className="text-xl text-center"
                >
                    You didn’t add any trips before.
                </Text>
            </View>
            <View className="flex-initial px-4">
                <Button
                    buttonType="success"
                    label="Start New Trip"
                    onPress={() => router.navigate("/addTripFormPage")}
                />
            </View>
        </View>
    );
};

export default AddTripScreen;
