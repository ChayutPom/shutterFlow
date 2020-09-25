import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
var database = firebase.database();
var userRef = database.ref("/userdata");
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  // plugins: [
  //   createPersistedState({
  //     getState: (key) => Cookies.getJSON(key),
  //     setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
  //   })
  // ],

  state: {
    appName: 'photo',
    user: null,
    error: null,
    loading: false,
    keyUser: '',
    keyUserF: ','
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setkeyUser (state, payload) {
      state.keyUser = payload
    },
    setkeyUserF (state, payload) {
      state.keyUserF = payload
    },
  },


  actions: {
    userSignUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', firebaseUser)
          commit('setLoading', false)
          
          router.push('/')
        })
        .catch(error => {
          commit('setError', error.message)
          commit('setLoading', false)
        })

    },
    editUser({commit}, payload){
console.log('Edit123');
console.log(commit);
console.log(payload);
userRef.on("value", snapshot => {

  var i=0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  var data = snapshot.child(key).val();
  
        if(data.email == firebase.auth().currentUser.email){
          
          userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
      
       var key2 = Object.keys(snapshot.val())[0];
    this.users = snapshot.val()[key2];
    console.log(this.users);
    commit('setkeyUser', this.users)
    commit('setkeyUserF', key2)
  });
          
        }
       
  } 
      
      });
    },

    userSignIn({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', firebaseUser)
          commit('setLoading', false)
          commit('setError', null)    
          console.log(payload.email);
          userRef.on("value", snapshot => {

            var i=0
            for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
            var key = Object.keys(snapshot.val())[i];
            
            var data = snapshot.child(key).val();
            
                  if(data.email == firebase.auth().currentUser.email){
                    
                    userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
                
                 var key2 = Object.keys(snapshot.val())[0];
              this.users = snapshot.val()[key2];
              console.log(this.users);
              commit('setkeyUser', this.users)
              commit('setkeyUserF', key2)
            });
                    
                  }
                 
            } 
                
                }); 
          router.push('/home')
        })
        .catch(error => {
          commit('setError', error.message)
          commit('setLoading', false)
        })

        // =====================================================

       

    },
 
   
     userSignOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      commit('setkeyUser', null)
      commit('setkeyUserF', null)
      router.push('/')
    }
  },



  
  getters: {
    appTitle (state) {
      return state.appName
    },
    setUser (state) {
      return state.user
    },
    setError (state) {
      return state.error
    },
    setLoading (state) {
      return state.loading
    },
    setkeyUser (state) {
      return state.keyUser
    },
    setkeyUserF (state) {
      return state.keyUserF
    },
    
  }
})