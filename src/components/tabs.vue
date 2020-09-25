<template>
<div>
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>
  
        <v-app-bar-nav-icon    @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>DashBord ShutterFlow</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="auto"
      >
        <v-container style="height: 150px;">
             
              <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
         <v-card
      class="mx-auto"
      max-width="300"
      tile
    >
      <v-list rounded>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i" router :to="item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
      </v-navigation-drawer>
        </v-container>
      </v-sheet>
</div>

</template>

<script>
export default {
data () {
    return {
      drawer: null,
         item: 1,
    items: [
      { text: 'Dash Board', icon: 'mdi-clock',route:"/home" },
      { text: 'User Profile', icon: 'mdi-account',route:"/UserProfile" },
      { text: 'Photografpher Profile', icon: 'mdi-flag',route:"/Photographer" },
      { text: 'Model Profile', icon: 'mdi-flag',route:"/model" },
      { text: 'finance', icon: 'mdi-flag',route:"/finance" },
      { text: 'Report', icon: 'mdi-flag',route:"/report" },
      { text: 'Map', icon: 'mdi-flag',route:"/map" },
    ],
    }
  },
}
</script>
