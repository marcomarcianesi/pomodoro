import React from 'react';
import { View, Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from '../styles';

class Controls extends React.Component {
  isResetEnabled = () => this.props.active

  showReset() {
    return true
  }

  showActivate() {
    return !this.props.active
  }

  showWork() {
    return this.props.active && this.props.breaking
  }

  showBreak() {
    return this.props.active && this.props.working
  }

  render() {
    return(
      <View 
        style={[styles.container, {flex: 3, flexDirection: 'row'}]}
      >
        <View style={[styles.container, {flex: 1, flexDirection: 'row', justifyContent: 'center'}]}>
          {
            this.showActivate() &&
            <TouchableWithoutFeedback style={{marginHorizontal: 40}} onPress={this.props.onActivate} underlayColor={"#DDD"}>
              <Ionicon size={60} name='ios-play' color={'#999'}/>
            </TouchableWithoutFeedback>
          }
          {
            this.showWork() &&
            <TouchableWithoutFeedback style={{marginHorizontal: 40}} onPress={this.props.onWork} underlayColor={"#DDD"}>
              <Ionicon size={60} name='ios-play' color={'#999'} />
            </TouchableWithoutFeedback>
          }
          {
            this.showBreak() &&
            <TouchableWithoutFeedback style={{marginHorizontal: 40}} onPress={this.props.onBreak} underlayColor={"#DDD"}>
              <Ionicon size={60} name='ios-pause' color={'#999'} />
            </TouchableWithoutFeedback>
          }
          {
            this.showReset() &&
            <TouchableWithoutFeedback disabled={!this.isResetEnabled()} style={{marginHorizontal: 40, opacity: this.isResetEnabled() ? 1 : 0.5}} onPress={this.props.onReset} underlayColor={"#DDD"}>
              <Ionicon size={60} name='ios-square' color={'#999'} />
            </TouchableWithoutFeedback>
          }
        </View>
      </View>
    )
  }
}

export default Controls;