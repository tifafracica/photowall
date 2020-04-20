import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAJnDO6_Pptjojko5iF_HBvsT7XFXs_Ygw",
  authDomain: "photowall-caee4.firebaseapp.com",
  databaseURL: "https://photowall-caee4.firebaseio.com",
  projectId: "photowall-caee4",
  storageBucket: "photowall-caee4.appspot.com",
  messagingSenderId: "554633489519",
  appId: "1:554633489519:web:e861dbf01bfcc56c88319a",
  measurementId: "G-T6DWF7FV8D"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}

