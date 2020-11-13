importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

const config = {
  apiKey: "AIzaSyBTJTdRtLwmP6tf022C79dohQoM58fqwO8",
  authDomain: "workre-6ca74.firebaseapp.com",
  databaseURL: "https://workre-6ca74.firebaseio.com",
  projectId: "workre-6ca74",
  storageBucket: "workre-6ca74.appspot.com",
  messagingSenderId: "114374508429",
  appId: "1:114374508429:web:e791c8150523404051c7c4",
  measurementId: "G-01RMCCRYMT",
};
firebase.initializeApp(config);

const initMessaging = firebase.messaging();
