import { Feather } from '@expo/vector-icons';
import React, { RefObject } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { theme } from '../constants/theme';
import { router } from 'expo-router';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedFeather = Animated.createAnimatedComponent(Feather);

type NavigationProps = {
  flatListRef: RefObject<FlatList>;
  flatListIndex: SharedValue<number>;
  dataLength: number;
  children:React.PropsWithChildren
};

export function Navigation({
  dataLength,
  flatListIndex,
  flatListRef,
  children
}: NavigationProps) {

  const prevButtonAnimationStyle = useAnimatedStyle(() => {
    const isFirstScreen = flatListIndex.value >= 1;
    return {
      width: isFirstScreen ? withSpring(40) : withSpring(140),
      backgroundColor: isFirstScreen ? "#365314" : "#84cc16",
      height: 40,
    
    }
  });

  const prevArrowAnimationStyle = useAnimatedStyle(() => {
    const isFirstScreen = flatListIndex.value >= 1;
    return {
      transform: [
        { translateX: isFirstScreen ? withTiming(0) : withTiming(0) },
      ],
    };
  });

  const nextButtonAnimationStyle = useAnimatedStyle(() => {
    const isLastScreen = flatListIndex.value === dataLength - 1;
    return {
      width: isLastScreen ? withSpring(140) : withSpring(40),
      backgroundColor: isLastScreen ? "#84cc16" : "#365314",
      height: 40,
    };
  });

  const nextArrowAnimationStyle = useAnimatedStyle(() => {
    const isLastScreen = flatListIndex.value === dataLength - 1;
    return {
      opacity: isLastScreen ? withTiming(0) : withTiming(1),
      transform: [
        { translateX: isLastScreen ? withTiming(-100) : withTiming(0) },
      ],
    };
  });



  const textAnimationStyle = useAnimatedStyle(() => {
    const isLastScreen = flatListIndex.value === dataLength - 1;
    return {
      opacity: isLastScreen ? withTiming(1) : withTiming(0),
      transform: [
        { translateX: isLastScreen ? withTiming(0) : withTiming(-100) },
      ],
    };
  });

  const handleNextScreen = () => {
    const isLastScreen = flatListIndex.value === dataLength - 1;
    if (!isLastScreen) {
      flatListRef.current?.scrollToIndex({ index: flatListIndex.value + 1 });
    }

    if (isLastScreen) {
      router.push("/login")
    }
  };

  const handlePrevScreen = () => {
    if (flatListIndex.value > 0) {
      flatListRef.current?.scrollToIndex({ index: flatListIndex.value - 1 });
    }
  }

  return (<>
    <AnimatedPressable
      onPress={handlePrevScreen}
      style={[styles.container, prevButtonAnimationStyle]}>
        <AnimatedFeather
          name="arrow-left"
          size={21}
          color={theme.colors.textHighlightColor}
          style={[styles.arrow, prevArrowAnimationStyle]}
        />
      </AnimatedPressable>
    
    {
      children
    }
    <AnimatedPressable
      onPress={handleNextScreen}
      style={[styles.container, nextButtonAnimationStyle]}
    >
      <Animated.Text style={[styles.text, textAnimationStyle]}>
        Get Started
      </Animated.Text>

      <AnimatedFeather
        name="arrow-right"
        size={21}
        color={theme.colors.textHighlightColor}
        style={[styles.arrow, nextArrowAnimationStyle]}
      />
    </AnimatedPressable>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundHighlightColor,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  arrow: {
    position: 'absolute',
  },
  text: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.textHighlightColor,
  },
});