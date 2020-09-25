<template>
  <div id="app">
    <div class="panel panel-default">
      <div class="panel-heading">
        <strong>All Resources</strong>
      </div>
      <div class="row">
        <div class="search-wrapper panel-heading col-sm-12">
          <input class="form-control" type="text"  v-model="searchQuery" placeholder="Search" />
        </div>
      </div> Resource
      <div v-for="(col, index) in resultQuery" :key="index">
       
        <div>{{ col.email }}</div>

      </div>
      <!-- <div class="table-responsive">
        <table v-if="resources.length" class="table">
          <thead>
            <tr>
              <th>Resource</th>
            </tr>
          </thead>
          <tbody>
            <tr :v-for="(col, index) in resources" :key="index">
              <td>{{col}}</td>
            </tr>
          </tbody>
        </table>
      </div>-->
    </div>
<br><br>
date range
<div>
  start  <input class="form-control" type="text"  v-model="startDate" placeholder="Search" /><br>
   end  <input class="form-control" type="text"  v-model="endDate" placeholder="Search" />


<div v-for="(col, index) in resultQuery2" :key="index">

</div>
<div v-for="(col, index) in asd" :key="index">
       
        <div>{{ col.taskStart }}</div>

</div>

</div>
  </div>
</template>

<script>
import firebase from "./forms/firebaseConfig";
var database = firebase.database();
var photographerRef = database.ref("/photographer");
var taskRef = database.ref("/taskphoto");


export default {
  data() {
    return {
      // item:'',
      dataF: [],
      asd: [],
      photographers:[],
      startDate: null,
      endDate: null ,
      searchQuery: null,
    };
  },
  computed: {
    resultQuery: function () {
    
    
      console.log(this.searchQuery);
      if (this.searchQuery) {
        
        return this.dataF.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.email.toLowerCase().includes(v));
        });
      } else {
        // console.log(this.photographers);
        return this.dataF;
      }
    },
      resultQuery2: function () {

    taskRef.orderByChild("taskStart").startAt(this.startDate).endAt(this.endDate)
  .on("value", snapshot => {
    console.log("got the data!", snapshot.val());
this.asd =snapshot.val()
console.log(this.asd);
  });
 return console.log(this.asd);
    },

  },

  
  mounted() {
  photographerRef.on("value", snapshot => {
    this.photographers =snapshot.val();
          var i=0

            for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
            var keys = Object.keys(snapshot.val())[i]

console.log(this.photographers[keys].email);
const datarec ={
  email: this.photographers[keys].email
}

this.dataF.push(datarec)
            }
      this.photographers = snapshot.val();
          //  console.log( this.photographers);
console.log(this.dataF);
    });
  
  }
};
</script>