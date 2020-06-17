import React from 'react';
import { View } from 'react-native';
import ControlButton from './ControlButton';
import { styles } from '../../../styles/index';

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
        style={[styles.container, styles.flex3]}
      >
        <View style={[styles.container, styles.flex1, styles.flexRow]}>
          {
            this.showActivate() && <ControlButton 
              onPress={this.props.onActivate}
              iconReleased='ios-play'
            />
          }
          {
            this.showWork() && <ControlButton 
            onPress={this.props.onWork}
            iconReleased='ios-play'
          />
          }
          {
            this.showBreak() && <ControlButton 
            onPress={this.props.onBreak}
            iconReleased='ios-pause'
          />
          }
          {
            this.showReset() && <ControlButton 
            disabled={!this.isResetEnabled()}
            style={{opacity: this.isResetEnabled() ? 1 : 0.5}}
            onPress={this.props.onReset}
            iconReleased='ios-square'
          />
          }
        </View>
      </View>
    )
  }
}

export default Controls;