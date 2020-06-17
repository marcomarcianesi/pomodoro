import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { controls } from '../../../styles/index';

export default ({onPress, iconReleased, iconPressed, style={}, disabled=false}) => (
  <TouchableWithoutFeedback disabled={disabled} style={{...style, marginHorizontal: 40}} onPress={onPress}>
    <Ionicon size={controls.size} name={iconReleased} color={controls.color}/>
  </TouchableWithoutFeedback>
);