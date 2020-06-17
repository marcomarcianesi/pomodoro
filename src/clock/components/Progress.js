import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { formatTimer, BlinkingText } from '../../lib';
import { styles } from '../../styles/index';

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
      <View style={[styles.container, styles.flex3, styles.flexRow]}>
        <View style={[styles.container, styles.flex1, styles.flexColumn]}>
          <View style={[styles.container, styles.flex5, styles.flexRow, styles.alignEnd]}>
            <View style={[styles.container, styles.flex1, styles.alignCenter]}>
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
          <View style={[styles.container, styles.flex1, styles.flexRow, styles.alignEnd]}>
            { 
              !this.props.breaking && <ProgressBar
                color={this.workProgressBarColor()}
                progress={this.workProgressPercentage()} 
                width={null}
                height={10}
                style={[styles.container, styles.flex1]}
              />
            }
            {
              this.props.breaking && <ProgressBar
                color={this.breakProgressBarColor()}
                progress={this.breakProgressPercentage()} 
                width={null}
                height={10}
                style={[styles.container, styles.flex1]}
              />
            }
          </View>
        </View>
      </View>
      <View style={[styles.container, styles.flex1, styles.flexRow, {paddingTop: 5}]}>
        <View style={[styles.container, styles.flex1, styles.alignStart]}>
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
        <View style={[styles.container, styles.flex1, styles.alignEnd]}>
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