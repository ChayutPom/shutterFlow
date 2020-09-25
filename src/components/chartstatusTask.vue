<template>
 <div id="chart">
        <apexchart type="radialBar" height="390" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import firebase from "../views/forms/firebaseConfig";
var database = firebase.database();
var taskphotoRef = database.ref("/taskphoto");
export default {
    components: {
          apexchart: VueApexCharts ,
        },
      data () {
    return {
          datastatus: [],      
           test: [], 
            //   series: [76, 67, 61, 90],
          chartOptions: {
            chart: {
              height: 390,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels: {
                  name: {
                    show: false,
                  },
                  value: {
                    show: false,
                  }
                }
              }
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5', '#39539E'],
            labels: ['รอการตอบรับ', 'ช่างภาพรับงาน', 'งานที่รอส่ง', 'เสร็จสิ้น','งานถูกยกเลิก'],
            legend: {
              show: true,
              floating: true,
              fontSize: '16px',
              position: 'left',
              offsetX: 160,
              offsetY: 15,
              labels: {
                useSeriesColors: true,
              },
              markers: {
                size: 0
              },
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
              itemMargin: {
                vertical: 3
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                    show: false
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
     
 taskphotoRef.on("value", snapshot => {
     var s1 = 0 
     var s2 =0 
     var s3 =0
     var s4 =0
     var s5 =0
     console.log(snapshot.val());
     var i =0
       for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  console.log(snapshot.child(key).val().statusTask);

if(snapshot.child(key).val().statusTask == 'รอการตอบรับ'){
s1 = s1+1
}
if(snapshot.child(key).val().statusTask == 'ช่างภาพรับงาน'){
s2 = s2+1
}
if(snapshot.child(key).val().statusTask == 'งานที่รอส่ง'){
s3 = s3+1
}
if(snapshot.child(key).val().statusTask == 'เสร็จสิ้น'){
s4 = s4+1
}
if(snapshot.child(key).val().statusTask == 'งานถูกยกเลิก'){
s5 = s5+1
}
  }

   const datarec ={
status1 : s1,
  status2 : s2,
  status3 : s3,
  status4 : s4,
  status5 : s5,
}

this.datastatus.push(datarec)
this.test = [this.datastatus[0].status1,this.datastatus[0].status2,this.datastatus[0].status3,this.datastatus[0].status4,this.datastatus[0].status5]
      

     });

  },
}
</script>