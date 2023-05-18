import { Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useRef, useState } from 'react'

const TouchableWithScaling = ({children, onPress}) => {
  const [selected, setSelected] = useState(false)
  const selectedAnim = useRef(new Animated.Value(1)).current

  return (
    <Animated.View style={[{transform: [{ scale: selectedAnim }]}]}>
      <TouchableWithoutFeedback 
        onPress={onPress}      
        onPressIn={() => {
          Animated.sequence([
            Animated.timing(selectedAnim, {
              toValue: 0.96,
              duration: 250,
              useNativeDriver: true,
            })             
          ]).start(() => setSelected(prev=>!prev));
        }}
        onPressOut={() => {
          Animated.sequence([
            Animated.timing(selectedAnim, {
              toValue: 1,
              duration: 250,
              useNativeDriver: true,
            })
          ]).start(() => setSelected(prev=>!prev));
        }}
      >
        {children}
      </TouchableWithoutFeedback>
    </Animated.View>
  )
}

export default TouchableWithScaling