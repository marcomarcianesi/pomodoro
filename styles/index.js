import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const DEBUG = true;
export const kaciukasPink = 'rgb(255,165,210)'

const styles = StyleSheet.create({
  container: (() => (DEBUG ? {
    borderColor: 'black',
    borderWidth: 2,
    padding: 1,
    margin: 1
  } : {}))(),
  root: {
    flex: 1,
    backgroundColor: kaciukasPink,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20
  },
  fixedTop: {
    // ...StyleSheet.absoluteFillObject,
    top: Constants.statusBarHeight,
    right: 10,
    position: 'absolute', // add if dont work with above
  },
  timeInput: {
    height: 60,
    width: 200,
    textAlign: 'center',
    fontSize: 40,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1
  },
  timeLabel: {
    fontSize: 30,
    lineHeight: 60,
    marginRight: 10,
    marginLeft: 10
  },
  timeInputContainer: {
    flex: 0,
    height: 100,
    flexDirection: 'row',
  },
  logo: {
    padding: 5, 
    flex: 1, 
    alignSelf: 'stretch', 
    width: 100
  }
});

export { styles }