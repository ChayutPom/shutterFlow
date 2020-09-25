<template>
  <div id="chart">
    <vue-apex-charts type="pie" width="400" :options="chartOptions" :series="series"> </vue-apex-charts>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import firebase from "../views/forms/firebaseConfig";

var database = firebase.database();
var photoRef = database.ref("/photographer");


export default {
  name: 'PieChart',
  components: { VueApexCharts },
  
  data () {
    return {
    dataphotogra: [],   
    test: [],   
    chartOptions: {
        labels: ['ภาพถ่ายบุคคล', 'รับปริญญา', 'พรีเวดดิ้ง', 'งานแต่งงาน', 'งานอีเวนต์', 'สินค้า/อาหาร', 'สถาปัตตยกรรม'],
        responsive: [{
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    }
  
  },
  computed: {
    series() {

        return this.test;
    }
},
    mounted() {
       photoRef.on("value", snapshot => {
  var i=0
  var p1 = 0
  var p2 =0
  var p3 =0
  var p4 =0
  var p5 =0
  var p6 =0
  var p7 =0

  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  var photo1 = snapshot.child(key).val().typePhoto.type.photo1;
  var photo2 = snapshot.child(key).val().typePhoto.type.photo2;
  var photo3 = snapshot.child(key).val().typePhoto.type.photo3;
  var photo4 = snapshot.child(key).val().typePhoto.type.photo4;
  var photo5 = snapshot.child(key).val().typePhoto.type.photo5;
  var photo6 = snapshot.child(key).val().typePhoto.type.photo6;
  var photo7 = snapshot.child(key).val().typePhoto.type.photo7;




if(photo1 == 'success'){
 p1 =  p1+1
}
 if(photo2 == 'success'){
p2= p2+1
}
 if(photo3 == 'success'){
p3= p3+1
}
if(photo4 == 'success'){
p4= p4+1
}
if(photo5 == 'success'){
p5= p5+1
}
if(photo6 == 'success'){
p6= p6+1
}
if(photo7 == 'success'){
p7= p7+1
}

  }  
  const datarec ={
  11: p1,
  22: p2,
  33: p3,
  44: p4,
  55: p5,
  66: p6,
  77: p7
  
}

this.dataphotogra.push(datarec)

this.test = [this.dataphotogra[0][11],this.dataphotogra[0][22],this.dataphotogra[0][33],this.dataphotogra[0][44],this.dataphotogra[0][55],this.dataphotogra[0][66],this.dataphotogra[0][77]]
      });

    


  },

}
</script>