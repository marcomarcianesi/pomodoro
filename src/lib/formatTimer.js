const MINUTES_ON_AN_HOUR  = 60;
const SECONDS_IN_A_MINUTE = 60;
const SECONDS_IN_AN_HOUR  = MINUTES_ON_AN_HOUR * SECONDS_IN_A_MINUTE;

export default (seconds) => {
  if(seconds < SECONDS_IN_A_MINUTE) {
    return new Date(seconds * 1000).toISOString().substr(15, 4)
  } else if(seconds < SECONDS_IN_A_MINUTE * 10) {
    return new Date(seconds * 1000).toISOString().substr(15, 4)
  } else if (seconds < SECONDS_IN_AN_HOUR) {
    return new Date(seconds * 1000).toISOString().substr(14, 5)
  } else if (seconds < SECONDS_IN_AN_HOUR * 10) {
    return new Date(seconds * 1000).toISOString().substr(12, 7)
  }
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}