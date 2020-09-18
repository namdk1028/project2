import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCujGKcLoCmz_gPH8r-LH-qQ3qmGpgNiTg",
  authDomain: "ssafy-ai.firebaseapp.com",
  databaseURL: "https://ssafy-ai.firebaseio.com",
  projectId: "ssafy-ai",
  storageBucket: "ssafy-ai.appspot.com",
  messagingSenderId: "53423978141",
  appId: "1:53423978141:web:c440973311e78056408674",
  measurementId: "G-9MB3QGBXNT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
