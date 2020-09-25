<template>
  <v-data-table :headers="headers" :items="desserts" sort-by="firstname" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>USER</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New User</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="firstname"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.lastname" label="lastname"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.phone" label="phone"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.mail" label="email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.photo" label="status_photographer"></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.model" label="status_model"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>


<script>
import firebase from "../views/forms/firebaseConfig";
var database = firebase.database();
var userdataRef = database.ref("/userdata");
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Firstname",
        align: "start",
        value: "name",
      },
      { text: "Lastname", value: "lastname" },
      { text: "Phone", value: "phone" },
      { text: "Email", value: "mail" },
      { text: "Status_photographer", value: "photo", sortable: false },
       { text: "Status_model", value: "model", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      lastname: 0,
      phone: 0,
      mail: 0,
      photo: 0,
      model: 0,
    },
    defaultItem: {
      name: "",
      lastname: 0,
      phone: 0,
      mail: 0,
      photo: 0,
      model: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      userdataRef.on("value", snapshot => {
      this.userdata = snapshot.val();
      var i =0
      for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
            var keys = Object.keys(snapshot.val())[i]
const datarec ={
          key: keys,
          name: this.userdata[keys].firstname,
          lastname: this.userdata[keys].lastname,
          phone: this.userdata[keys].phone,
          mail: this.userdata[keys].email,
          photo: this.userdata[keys].status_photogra,
          model: this.userdata[keys].status_model,
}

this.desserts.push(datarec)

            }

    });
 
    },
    editItem(item) {
      console.log(item.key);
      this.item2 = item.key
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      
  
    },
    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },


    
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
console.log(this.item2);
                  userdataRef.child(this.item2).update({
        firstname: this.editedItem.name,
       lastname: this.editedItem.lastname,
      phone: this.editedItem.phone
  })
      } else {
         
        this.desserts.push(this.editedItem);
        
 
      }
      this.close();
    },
  },

   mounted() {
    
     }
};
</script>