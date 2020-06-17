import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

const registerForLocalNotificationsAsync = async() => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (Constants.isDevice && status === 'granted') {
    console.log('Notification permissions granted.');
  }
};

const sendLocalNotification = async ({title, body}) => {
  console.log("Sending notification... in teoria")
  Notifications.presentLocalNotificationAsync({title, body})
}

export { registerForLocalNotificationsAsync, sendLocalNotification };