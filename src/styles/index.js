import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const DEBUG = false;
export const controls = {
  color: 'rgb(150, 150, 150)',
  size:  60
}
export const kaciukasPink = 'rgb(255,165,210)'

const flexes = {
  flex1:       { flex: 1 },
  flex2:       { flex: 2 },
  flex3:       { flex: 3 },
  flex4:       { flex: 4 },
  flex5:       { flex: 5 },
  flexRow:     { flexDirection: 'row' },
  flexColumn:  { flexDirection: 'column' },
  alignCenter: { alignItems: 'center' },
  alignStart:  { alignItems: 'flex-start' },
  alignEnd:    { alignItems: 'flex-end' }
}

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
  ...flexes,
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
    width: 50
  }
});

export { styles }