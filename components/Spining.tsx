import React, { ReactNode } from "react";
import { ActivityIndicator } from "react-native";

type Spining = {
    children: ReactNode;
    spining: boolean;
    size: "small" | "large";
};

const Spin = ({ children, spining = false, size }: Spining) => {
    return (
        spining && (
            <ActivityIndicator
                animating={spining}
                size={size}
                style={{
                    flex: 1,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9,
                    backgroundColor: "rgba(255,255,255,.5)",
                }}
            />
        )
    );
};

export default Spin;
