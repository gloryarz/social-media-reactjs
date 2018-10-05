import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAjJOccmVzGilFQrv4rISTJMxBRn7_Yjiw",
  authDomain: "reactjssocialmedia.firebaseapp.com",
  databaseURL: "https://reactjssocialmedia.firebaseio.com",
  projectId: "reactjssocialmedia",
  storageBucket: "reactjssocialmedia.appspot.com",
  messagingSenderId: "544316527350"
};

const fbsConfig = firebase.initializeApp(config);

export { fbsConfig };