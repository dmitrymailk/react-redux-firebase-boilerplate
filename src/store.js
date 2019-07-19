import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import thunk from "redux-thunk";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import mydata from "./reducers/mydata";

// My project
// const firebaseConfig = {
//   apiKey: "AIzaSyB8WMsoJHxg8mpOM5G5SNuAeM-I0W2naQs",
//   authDomain: "reactclientpanel-3cfd5.firebaseapp.com",
//   databaseURL: "https://reactclientpanel-3cfd5.firebaseio.com",
//   projectId: "reactclientpanel-3cfd5",
//   storageBucket: "reactclientpanel-3cfd5.appspot.com",
//   messagingSenderId: "754011141747",
//   appId: "1:754011141747:web:93602268af7e7d12"
// };

// Hackaton VLG
var firebaseConfig = {
  apiKey: "AIzaSyCeKADqKcfqVei8_YRTHjNka0Bl2o3nBgI",
  authDomain: "hackatonvlg.firebaseapp.com",
  databaseURL: "https://hackatonvlg.firebaseio.com",
  projectId: "hackatonvlg",
  storageBucket: "hackatonvlg.appspot.com",
  messagingSenderId: "864025289467",
  appId: "1:864025289467:web:18090d929a16bb6f"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// init firebase
firebase.initializeApp(firebaseConfig);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// ТУТ ДОБАВЛЯЕМ НОВЫЕ REDUCERS
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  mydata
});

// Create initial state
const initialState = {};

const middleware = [thunk];

// create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    composeWithDevTools(applyMiddleware(...middleware))
  )
);

export default store;
