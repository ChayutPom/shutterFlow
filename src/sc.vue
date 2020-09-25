<template>
  <v-app >
    <div class=" ">
    <v-app-bar
      app
      color="primary"
      dark
    ><button onclick="window.history.go(-1); return false;"
               v-if="!$route.meta.hideBack" ><v-icon >mdi-keyboard-backspace</v-icon></button>

      <div class="d-flex align-center" centered>
        
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content >
        <router-view ></router-view>
    </v-content>
    
     

 </div>

          <sctab/> 
   
  </v-app>
  
</template>
 <script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-auth.js"></script>

<script>
import sctab from './components/sctab.vue';


export default {
  
  name: 'App',

  components: {
    sctab,
   
  },


  data: () => ({
    //
  }),
};
</script>

