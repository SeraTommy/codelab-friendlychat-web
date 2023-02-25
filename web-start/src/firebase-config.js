/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDR9G3ak_IJRwiyOp1UENvgx7eMVF86cFg",
  authDomain: "friendlychat-testabe.firebaseapp.com",
  projectId: "friendlychat-testabe",
  storageBucket: "friendlychat-testabe.appspot.com",
  messagingSenderId: "1074590601687",
  appId: "1:1074590601687:web:ab6d06d7321f3242c03b92"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}