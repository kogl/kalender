import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'



Vue.use(
	VueTextareaAutosize,

)

Vue.config.productionTip = false


firebase.initializeApp({
	apiKey: "AIzaSyAC3Q8NqLGO8Eu8qyQOUVW1O1ty0Kv6xVg",
	authDomain: "calendar-6c96e.firebaseapp.com",
	projectId: "calendar-6c96e",
	storageBucket: "calendar-6c96e.appspot.com",
	messagingSenderId: "320814473933",
	appId: "1:320814473933:web:cfe886213d7c9359a57f84",
	measurementId: "G-N2Q9J42Y8T"
})


export const db = firebase.firestore()

new Vue({
	vuetify,
	render: h => h(App)
}).$mount('#app')
