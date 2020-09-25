<template>
    <h1>asf</h1>
</template>
<script>
import firebase from "../views/forms/firebaseConfig";
var database = firebase.database();
var taskphotoRef = database.ref("/taskphoto");
var modelRef = database.ref("/model");
var photographerRef = database.ref("/photographer");
var userdataRef = database.ref("/userdata");
export default {
     
     
     mounted() {
taskphotoRef.on("value", snapshot => {
    console.log(snapshot.numChildren());
    this.task = snapshot.numChildren()
     });
     modelRef.on("value", snapshot => {
             console.log(snapshot.numChildren());
    this.model = snapshot.numChildren()
     });
     photographerRef.on("value", snapshot => {
             console.log(snapshot.numChildren());
    this.photgra = snapshot.numChildren()
     });
     userdataRef.on("value", snapshot => {
             console.log(snapshot.numChildren());
    this.user = snapshot.numChildren()
     });
     }
}
</script>