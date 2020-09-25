<template>
 <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import firebase from "../views/forms/firebaseConfig";
var database = firebase.database();
var taskphotoRef = database.ref("/taskphoto");
export default {
 components: {
          apexchart: VueApexCharts,
        },
       data () {
    return {
      month1:0,
      month2:0,
      month3:0,
      month4:0,
      month5:0,
      month6:0,
      month7:0,
      month8:0,
      month9:0,
      month10:0,
      month11:0,
      month12:0,
       Mmonth1:0,
      Mmonth2:0,
      Mmonth3:0,
      Mmonth4:0,
      Mmonth5:0,
      Mmonth6:0,
      Mmonth7:0,
      Mmonth8:0,
      Mmonth9:0,
      Mmonth10:0,
      Mmonth11:0,
      Mmonth12:0,
      dataMonth:[],
              data: [], 
          test:[{},{}],
          // series: [{
          //   name: 'Net Profit',
          //   data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          // }, {
          //   name: 'Revenue',
          //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          // }],

          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
 xaxis: {
  labels: {
   labels: {
    format: 'MM',
  }
  }
},
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
          
          }
  
  },
  computed: {
    series() {

        return this.test;
    }
    
},

    mounted() {
     
 taskphotoRef.on("value", snapshot => {
  console.log(snapshot.val());
  var i =0
  var nummodel = 0
  var numPhoto = 0
    for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
    

    if(snapshot.child(key).val().taskType == 'model'){
      nummodel = nummodel +1
console.log(nummodel);
}else {
  numPhoto = numPhoto +1
console.log(numPhoto);
}

    }


      });  

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

if(dd<10 ) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
// today = yyyy+'-'+mm+'-'+dd;

// console.log(today); 

taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'01' ).endAt(yyyy+'-'+'01' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth1 = this.Mmonth1+1
  }else {
this.month1 = this.month1+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 }); 
 taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'02' ).endAt(yyyy+'-'+'02' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth2 = this.Mmonth2+1
  }else {
this.month2 = this.month2+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 }); 
taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'03' ).endAt(yyyy+'-'+'03' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth3 = this.Mmonth3+1
  }else {
this.month3 = this.month3+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 }); 
 taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'04' ).endAt(yyyy+'-'+'04' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth4 = this.Mmonth4+1
  }else {
this.month4 = this.month4+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 }); 
 taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'05' ).endAt(yyyy+'-'+'05' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth5 = this.Mmonth5+1
  }else {
this.month5 = this.month5+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 }); 
 taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'06' ).endAt(yyyy+'-'+'06' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth6 = this.Mmonth6+1
  }else {
this.month6 = this.month6+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 }); 
  taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'07' ).endAt(yyyy+'-'+'07' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth7 = this.Mmonth7+1
  }else {
this.month7 = this.month7+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 });
  taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'08' ).endAt(yyyy+'-'+'08' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth8 = this.Mmonth8+1
  }else {
this.month8 = this.month8+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 });



  taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'09' ).endAt(yyyy+'-'+'09' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth9 = this.Mmonth9+1
console.log('sss'+this.Mmonth9);
  }else {
this.month9 = this.month9+1
console.log('ppp'+this.month9);
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 });



  taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'10' ).endAt(yyyy+'-'+'10' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth10 = this.Mmonth10+1
  }else {
this.month10 = this.month10+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 });
  taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'11' ).endAt(yyyy+'-'+'11' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth11 = this.Mmonth11+1
  }else {
this.month11 = this.month11+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 });
  taskphotoRef.orderByChild("taskStart").startAt(yyyy+'-'+'12' ).endAt(yyyy+'-'+'12' +"\uf8ff").on("value", snapshot => {
var i =0
  for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  
  if(snapshot.child(key).val().taskType == 'model'){
this.Mmonth12 = this.Mmonth12+1
  }else {
this.month12 = this.month12+1
  }
  }

this.test = [{
            name: 'Photographer',
            data: [this.month1,this.month2,this.month3,this.month4,this.month5,this.month6,this.month7,this.month8,this.month9,this.month10,this.month11,this.month12]
          }, {
            name: 'Model',
            data: [this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9, this.Mmonth9,this.Mmonth9,this.Mmonth9,this.Mmonth9]
          }]
 });


 
  },
};
</script>