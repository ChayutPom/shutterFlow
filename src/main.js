import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase'
import InstantSearch from 'vue-instantsearch';
import VueApexCharts from 'vue-apexcharts'

import Chat from 'vue-beautiful-chat'
var database = firebase.database();
var userRef = database.ref("/userdata");
import 'vue-instant/dist/vue-instant.css'
import VueInstant from 'vue-instant/dist/vue-instant.common'
Vue.use(VueInstant)
Vue.use(VueApexCharts)
Vue.use(Chat)
Vue.use(InstantSearch);



Vue.config.productionTip = false

new Vue({
  
  router,
  store,
  vuetify,
  render: h => h(App),

  created () {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        // store.dispatch('autoSignIn', firebaseUser)
      }
    })
  },
  mounted() {
console.log('test123333');

userRef.on("value", snapshot => {

  var i=0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  var data = snapshot.child(key).val();
  
        if(data.email == firebase.auth().currentUser.email){
          
          userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
      
       var key2 = Object.keys(snapshot.val())[0];
    this.users = snapshot.val()[key2];

  });
          
        }
       
  } 
      
      });    
  }
  
}).$mount('#app')

