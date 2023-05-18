import { Animated } from "react-native"

export const bounceUp = (bounceAnim: Animated.Value) => {
  // Will change bounceAnim value the following sequence -10, 0, -5, 0
  Animated.sequence([
    Animated.timing(bounceAnim, {
      toValue: -10,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(bounceAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(bounceAnim, {
      toValue: -5,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(bounceAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    })
  ]).start()
}