// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyDj5Sxah_ANm3Av27ubwX2mJiFh-8_W-Dk",
  authDomain: "experts-81553.firebaseapp.com",
  projectId: "experts-81553",
  storageBucket: "experts-81553.appspot.com",
  messagingSenderId: "253299573486",
  appId: "1:253299573486:web:50533239b957820a4529ff",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/register",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],

  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      const user = {
        uid: authResult.user.uid,
        name: authResult.user.displayName,
        photoUrl: authResult.user.photoURL,
        email: authResult.user.email,
        flagNewUser: authResult.additionalUserInfo.isNewUser,
      };

      localStorage.setItem("user", JSON.stringify(user));
      return true;
    },
  },
};

function SignInButton() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default SignInButton;
