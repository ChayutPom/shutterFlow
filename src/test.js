new Vue({
    el: '#app2',
    data() {
      return {
          searchQuery: null,
          resources:[
              {title:"ABE Attendance",uri:"aaaa.com",category:"a",icon:null},
              {title:"Accounting Services",uri:"aaaa.com",category:"a",icon:null},
              {title:"Administration",uri:"aaaa.com",category:"a",icon:null},
              {title:"Advanced Student Lookup",uri:"bbbb.com",category:"b",icon:null},
              {title:"Art & Sciences",uri:"bbbb.com",category:"b",icon:null},
              {title:"Auxiliares Services",uri:"bbbb.com",category:"b",icon:null},
              {title:"Basic Skills",uri:"cccc.com",category:"c",icon:null},
              {title:"Board of Trustees",uri:"dddd.com",category:"d",icon:null}
          ]
      };
    },
    computed: {
      resultQuery(){
        if(this.searchQuery){
        return this.resources.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
        })
        }else{
          return this.resources;
        }
      }
    }
   
  
  })