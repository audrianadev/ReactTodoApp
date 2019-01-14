import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDoAJlQQ-9uTiV5cghATsxAF7nldaUUwz8",
    authDomain: "react-todo-app-1430e.firebaseapp.com",
    databaseURL: "https://react-todo-app-1430e.firebaseio.com",
    projectId: "react-todo-app-1430e",
    storageBucket: "react-todo-app-1430e.appspot.com",
    messagingSenderId: "1078012667977"
  };
  firebase.initializeApp(config);

  firebase.database().ref().set({
    appName: 'Todo App'
  });
