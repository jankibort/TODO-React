import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'

const firebase = require('firebase');
require('firebase/firestore')

firebase.initializeApp({
  apiKey: "AIzaSyBs-t18xjXSdrrmP3uEtuSE12LO_3nerBY",
  authDomain: "todolist-7f424.firebaseapp.com",
  databaseURL: "https://todolist-7f424.firebaseio.com",
  projectId: "todolist-7f424",
  storageBucket: "todolist-7f424.appspot.com",
  messagingSenderId: "1086781685315",
  appId: "1:1086781685315:web:8e6fb2b140d48d0b765ef6"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
