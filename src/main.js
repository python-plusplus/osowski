import { createApp } from "vue"
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"
import "firebase/auth"
import "./firebase/firebaseinit"

// createApp(App).use(router).use(store).mount('#app')

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    createApp(App).use(router).use(store).mount('#app')  
  }
});