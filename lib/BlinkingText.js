import React, { useState } from 'react';
import { Animated } from 'react-native';

const configTo = (value) => ({
  toValue: value,
  duration: 2 * 1000,
  useNativeDriver: true
})

export default ({style, children}) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, configTo(1)),
        Animated.delay(1 * 1000),
        Animated.timing(fadeAnim, configTo(0))
      ])
    ).start()
    
  }, []);

  return(
    <Animated.Text style={{...style, opacity: fadeAnim}}>
      {children}
    </Animated.Text>
  )
}