import React from 'react';
import { View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { styles } from '../styles/index';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default ({onReset}) => (
  <View style={[styles.container, {flex: 1, justifyContent: 'flex-end', flexDirection: 'row', margin: 10}]}>
    <View style={[styles.container, {flex: 1, flexDirection: 'row', justifyContent: 'flex-end', width: 100}]}>
      <TouchableHighlight onPress={onReset} underlayColor={"#DDD"}>
        <Ionicon size={30} name='ios-square' />
      </TouchableHighlight>
    </View>
  </View>
);