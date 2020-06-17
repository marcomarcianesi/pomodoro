import React from 'react';
import { Vibration } from 'react-native';
import { registerForLocalNotificationsAsync, sendLocalNotification } from '../../lib/pushNotifications';

const fib = [2, 3, 5, 8, 13, 21, 34];
const multiplier = 2;

class Notifier extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {    
    this.startCounting();
    registerForLocalNotificationsAsync();
  }

  componentWillUnmount() {
    this.stopCounting();
  }

  shouldComponentUpdate() {
    return false
  }

  startCounting = () => {
    if(fib[this.state.counter]) {
      this.timeoutCallback = setTimeout(
        this.notify, 
        this.state.counter * multiplier * fib[this.state.counter] * 1000
      );
    }    
  }

  stopCounting = () => {
    clearTimeout(this.timeoutCallback)
  }

  notify = () => {
    console.log("vibratin")
    Vibration.vibrate([500, 500, 500]);
    sendLocalNotification({
      title: "Pomodoro", 
      body: "Time for a break",
      android: {
        icon: '../../assets/notification.png'
      }
    })
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    }, this.startCounting);
  }

  render() {
    return null;
  }
}

export default Notifier