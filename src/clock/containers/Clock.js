import React from 'react';
import { connect } from 'react-redux';
import { Layout, Notifier, Progress, Controls } from '../components';

class Clock extends React.PureComponent {
  state = {
    workedSeconds: 0,
    brokenSeconds: 0,
    working: false,
    breaking: false,
    active: false,
    intervalReference: null
  }

  componentDidMount() {
    const intervalReference = setInterval(this.tick, 1000);
    this.setState({
      intervalReference
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalReference)
  }

  tick = () => {
    if(this.state.active) {
      if(this.state.working) {
        this.setState({
          workedSeconds: this.state.workedSeconds + 1
        })
      }

      if(this.state.breaking) {
        this.setState({
          brokenSeconds: this.state.brokenSeconds + 1
        })
      }
    }    
  }

  shouldWork() {
    return this.state.breaking && this.props.breakSeconds < this.state.brokenSeconds
  }

  shouldBreak() {
    return this.state.working && this.props.workSeconds < this.state.workedSeconds
  }

  activate = () => {
    this.setState({
      active: true,
      working: true
    })
  }

  reset = () => {
    this.setState({
      active: false,
      working: false,
      breaking: false,
      workedSeconds: 0,
      brokenSeconds: 0
    })
  }

  break = () => {
    this.setState({
      breaking: true,
      working: false,
      workedSeconds: 0
    });
  }

  work = () => {
    this.setState({
      breaking: false,
      working: true,
      brokenSeconds: 0
    });
  }

  progressProps = () => ({
    working:       this.state.working,
    breaking:      this.state.breaking,
    workSeconds:   this.props.workSeconds,
    breakSeconds:  this.props.breakSeconds,
    workedSeconds: this.state.workedSeconds,
    brokenSeconds: this.state.brokenSeconds,
    shouldBreak:   this.shouldBreak(),
    shouldWork:    this.shouldWork()
  })

  controlsProps = () => ({
    onActivate: this.activate,
    workSeconds: this.props.workSeconds,
    breakSeconds: this.props.breakSeconds,
    workedSeconds: this.state.workedSeconds,
    brokenSeconds: this.state.brokenSeconds,
    onWork: this.work,
    onBreak: this.break,
    onReset: this.reset,
    active: this.state.active,
    breaking: this.state.breaking,
    working: this.state.working
  })

  render() {
    return (
      <Layout>
        <Progress {...this.progressProps()} />    
        {
          (this.shouldBreak() || this.shouldWork()) && <Notifier />
        }
        <Controls {...this.controlsProps()} />
      </Layout>
    )
  }
};

const mapStateToProps = (state) => (
  { 
    workSeconds: state.settings.workSeconds, 
    breakSeconds: state.settings.breakSeconds 
  }
);

export default connect(mapStateToProps)(Clock);