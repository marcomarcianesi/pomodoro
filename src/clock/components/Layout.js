import React from 'react';
import { View, ImageBackground } from 'react-native';
import { styles } from '../../styles/index'

const IMAGE_URL = require('../assets/pomodoro.png')

export default ({children}) => (
  <View style={styles.root}>
    { children }
    <ImageBackground style={[styles.container, styles.logo]} resizeMode={'contain'} source={IMAGE_URL} />
  </View>
)