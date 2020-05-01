import React from 'react';
import { connect } from 'react-redux';
import { applySettings } from '../redux/actions';
import { Button, View } from 'react-native';
import { styles } from '../styles'
import NumberInput from './numberInput';

class Settings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      breakSeconds: props.defaultBreakSeconds,
      workSeconds: props.defaultWorkSeconds
    }
  }

  onChangeBreak = (value) => {
    this.setState({
      breakSeconds: value
    })
  }

  onChangeWork = (value) => {
    this.setState({
      workSeconds: value
    })
  }

  submitIntervals = () => {
    this.props.saveSettings({
      workSeconds: this.state.workSeconds, 
      breakSeconds: this.state.breakSeconds
    });
  }

  render() {
    return (
      <View style={styles.root}>
        <NumberInput 
          value={this.state.workSeconds}
          onChange={this.onChangeWork}
          label={"Work:"}
        />
        <NumberInput 
          value={this.state.breakSeconds}
          onChange={this.onChangeBreak}
          label={"Break:"}
        />
        <Button style={styles.button} onPress={this.submitIntervals} title="Apply" />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  defaultBreakSeconds: state.settings.breakSeconds,
  defaultWorkSeconds:  state.settings.workSeconds,
});

const mapDispatchToProps = (dispatch) => ({
  saveSettings: (settings) => dispatch(applySettings(settings))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);