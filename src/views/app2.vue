<template>  
<div>   
    <v-card      height="650"  >
     <v-btn small v-on:click="say()">Normal</v-btn>

<longdo-map 
   @load="test" 
   :zoom="10" 
   :lastViw="false"
> <longdo-map-marker             
               :key="key" v-for="(maps, key) in map"
          
            :location="maps.locations"
      
        />     

</longdo-map>


    </v-card >

</div>
</template>
<script>
import { LongdoMap,LongdoMapMarker   } from 'longdo-map-vue'
LongdoMap.init('19d834440f9ee5958b68123c8a4c6d6b')

import firebase from "./forms/firebaseConfig";

var database = firebase.database();
var mapRef = database.ref("/map");

export default {
   name: 'Foo',
    components: {    
       LongdoMap,
LongdoMapMarker 
       
    },
  data() {
    return {
      map:{},
 markers: [
        {
          location: { lon: 100.58, lat: 13.761 },
          title: "Vue Marker",
          detail: "This is a detail"
        }
      ]
    };
  },
    
methods:{
     test(map) {
  this.map2 = map

       var result = map.location();

       console.log(result);


map.Event.bind('location', function() {
  var location = map.location();
console.log(location);

});
map.Event.bind('click', function() {
    var location = map.location();

  console.log(location);


 
});
map.Event.bind('overlayClick', function(overlay) {
    console.log(overlay)
    
});

     },
say: function () { 
console.log( this.map2.location());
// var marker = new longdo.Marker( this.map2.location());
// this.map2.Overlays.add(marker);
 let data = {
        locations:this.map2.location(),
      }
      
      mapRef.push(data)

alert('เพิ่มที่อยู่เรียบร้อย' )
    }

 },
    mounted() {
    mapRef.on("value", snapshot => {
      this.map = snapshot.val();
      console.log(this.map);
      
    });
  }
};

</script>

