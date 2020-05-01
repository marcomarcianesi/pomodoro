import React from 'react';
import { Animated, View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import formatTimer from '../lib/formatTimer';
import BlinkingText from '../lib/BlinkingText';
import { styles } from '../styles/index';

class Progress extends React.PureComponent {
  workProgressPercentage = () => {
    return (this.props.workedSeconds || 0) / (this.props.workSeconds || 1) 
  }

  breakProgressPercentage = () => {
    return (this.props.brokenSeconds || 0) / (this.props.breakSeconds || 1) 
  }

  workProgressBarColor = () => {
    if(this.workProgressPercentage() <= 1) {
      return "rgba(0, 122, 255, 1)"
    }
    return "rgba(179, 58, 58, 1)"
  }

  breakProgressBarColor = () => {
    if(this.breakProgressPercentage() <= 1) {
      return "rgba(100, 94, 0, 1)"
    }
    return "rgba(179, 58, 58, 1)"
  }

  render() {
    return(
      <>
      <View style={[styles.container, {flex: 3, justifyContent: 'flex-end', flexDirection: 'row'}]}>
        <View style={[styles.container, {flex: 1, flexDirection: 'column', alignItems: 'flex-end'}]}>
          <View style={[styles.container, {flex: 5, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row'}]}>
            <View style={[styles.container, { flex: 1, alignItems: 'center' }]}>
              <BlinkingText 
                style={{fontSize: 40, color: 'rgba(179, 58, 58, 1)'}}
              >
              {
                this.props.shouldBreak && 'Time for a break!'
              } 
              {
                this.props.shouldWork && 'Time to work!'
              } 
              </BlinkingText>
            </View>
          </View>
          <View style={[styles.container, {flex: 1, flexDirection: 'row', alignItems: 'flex-end'}]}>
            { 
              !this.props.breaking && <ProgressBar
                color={this.workProgressBarColor()}
                progress={this.workProgressPercentage()} 
                width={null}
                height={10}
                style={[styles.container, {flex: 1}]}
              />
            }
            {
              this.props.breaking && <ProgressBar
                color={this.breakProgressBarColor()}
                progress={this.breakProgressPercentage()} 
                width={null}
                height={10}
                style={[styles.container, {flex: 1}]}
              />
            }
          </View>
        </View>
      </View>
      <View style={[styles.container, {flex: 1, flexDirection: 'row', paddingTop: 5}]}>
        <View style={[styles.container, {flex: 1, alignItems: 'flex-start'}]}>
        {
          !this.props.breaking && <Text>
            {formatTimer(this.props.workedSeconds)}
          </Text>
        }
        {
          this.props.breaking && <Text>
            {formatTimer(this.props.brokenSeconds)}
          </Text>
        }
        </View>
        <View style={[styles.container, {flex: 1, alignItems: 'flex-end'}]}>
        {
          !this.props.breaking && <Text>
            {formatTimer(this.props.workSeconds)}
          </Text>
        }
        {
          this.props.breaking && <Text>
            {formatTimer(this.props.breakSeconds)}
          </Text>
        }
        </View>
      </View>
      </>
    )
  }
}

export default Progress