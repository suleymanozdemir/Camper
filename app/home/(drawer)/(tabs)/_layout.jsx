import { Tabs } from "expo-router";
import React from "react";
import BriefCase from "../../../../assets/icon/Fill/briefcase.svg";
import FileText from "../../../../assets/icon/Fill/file-text.svg";
import List from "../../../../assets/icon/Outline/list.svg";
import { TabButton } from "../../../../components/TabButton";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false,

                tabBarStyle: {
                    paddingTop: 9,
                    paddingHorizontal: 12,
                    borderTopWidth: 0,
                    backgroundColor: "#84CC16",
                },
                elevation: 0, // for Android
                shadowOffset: {
                    width: 0,
                    height: 0, // for iOS
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarAccessibilityLabel: "Home",
                    tabBarIcon: () => null,
                    tabBarButton: (props) => (
                        <TabButton
                            icon={
                                <FileText
                                    height={18}
                                    width={18}
                                    fill="#F7FEE7"
                                />
                            }
                            {...props}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="backPack"
                options={{
                    tabBarAccessibilityLabel: "Backpack",
                    tabBarIcon: () => null,
                    tabBarButton: (props) => (
                        <TabButton
                            icon={
                                <BriefCase
                                    height={18}
                                    width={18}
                                    fill="#F7FEE7"
                                />
                            }
                            {...props}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="todoPage"
                options={{
                    tabBarAccessibilityLabel: "List",
                    tabBarIcon: () => null,
                    tabBarButton: (props) => (
                        <TabButton
                            icon={
                                <List height={18} width={18} fill="#F7FEE7" />
                            }
                            {...props}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settingsPage"
                options={{
                    tabBarAccessibilityLabel: "List",
                    tabBarIcon: () => null,
                    tabBarButton: (props) => (
                        <TabButton
                            icon={
                                <List height={18} width={18} fill="#F7FEE7" />
                            }
                            {...props}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
