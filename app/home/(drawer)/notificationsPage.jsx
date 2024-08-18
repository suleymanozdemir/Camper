import { router } from "expo-router";
import React, { useId } from "react";
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Award from "../../../assets/icon/Outline/award.svg";
import ChevronLeft from "../../../assets/icon/Outline/chevron-left.svg";
import { Card } from "../../../components/Card";

const NotificationPage = () => {
    const goBack = () => {
        router.back();
    };

    const data = [
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
        {
            id: useId(),
            content: "You recieved the welcome badge",
            title: "Congratulations!",
        },
    ];

    return (
        <SafeAreaView className="flex-1 justify-stretch items-stretch bg-white px-20">
            <View className="flex-1 px-4">
                <View className="mb-4">
                    <TouchableOpacity onPress={goBack}>
                        <View className="flex-row flex-auto items-center mt-4">
                            <ChevronLeft width={32} height={32} fill="black" />
                            <Text
                                style={{ fontFamily: "SF-Pro-Display-Medium" }}
                                className="text-2xl ml-4 "
                            >
                                Notifications
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Card
                            cardType="reward"
                            title={item.title}
                            content={item.content}
                            icon={<Award />}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default NotificationPage;
