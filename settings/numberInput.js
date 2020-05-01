import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../styles/index'
import parseNumber from '../lib/parseNumber'

const DEFAULT_SECONDS = 6;

const numberInput = ({label, value, onChange}) => {
  return(
    <View style={styles.timeInputContainer}>
      <Text style={styles.timeLabel}>{label}</Text>
      <TextInput style={styles.timeInput}
        placeholder={"Seconds"} 
        onChangeText={text => onChange(parseNumber(text))}
        value={value.toString()}
        keyboardType={'numeric'}
      />
      <Text style={styles.timeLabel}>secs</Text>
    </View>
  )
}

export default numberInput