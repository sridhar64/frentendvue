<template>
  <div class="container">
    <h2>Users</h2>
    <div>
      <button type="button" @click="check()" class="btn btn-primary">
        Get Current User
      </button>
      <button type="button" @click="checkgot()" class="btn btn-danger">
        Get Current User Commits
      </button>
    </div>
    <table class="table table-bordered" id="iseqchart">
      <thead>
        <tr>
          <th>User Id</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Msgs</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.id">
          <td v-if="output2">{{ item.id }}</td>
          <td v-if="output2">{{ item.firstName }}</td>
          <td v-if="output2">{{ item.lastName }}</td>
          <td v-if="output2" id="your_id">{{ item.email }}</td>
          <td v-if="output2">{{ item.textbox }}</td>
          <td v-if="output2">
            <button type="button" @click="removeRow()" class="btn btn-danger">
              close
            </button>
          </td>
        </tr>
        <tr v-if="output1">
          <td>{{ this.data1 }}</td>
          <td>{{ this.data2 }}</td>
          <td>{{ this.data3 }}</td>
          <td>{{ this.data4 }}</td>
          <td>{{ this.data5 }}</td>
          <td>
            <button type="button" @click="removeRow1()" class="btn btn-danger">
              close
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <table class="table table-bordered" id="iseqchart">
        <thead>
          <tr>
            <th v-if="output1">Commits</th>
            <th v-if="output1">pick</th>
          </tr>
        </thead>
        <tbody v-if="output1">
          <tr v-for="index in result" :key="index.id">
            <td>{{ index.ctextbox }}</td>
            <td><img id="thisismypro" :src=index.pick width="200" 
     height="230"/></td>
            
            <!--<td><button type="button" @click="removeRow()" class="btn btn-danger">close</button></td>-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: ["users", "usernamess", "numberOfUsers", "msgs"],
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      data1: "",
      data2: "",
      data3: "",
      data4: "",
      data5: "",
      data12:'',
      data6: [],
      // data7:'',
      output1: false,
      output2: true,
      hello: [],
      result: "",
    };
  },
  /* eslint-disable no-mixed-spaces-and-tabs */
  methods: {
    removeRow: function (firstName) {
      // disable rule
      console.warn("Removing"); // disable rule
      this.users.pop(firstName, 1); // disable rule
    }, // disable rule
    removeRow1: function (id) {
      // disable rule
      console.warn("Removing", id); // disable rule
      this.users.splice(id, this.numberOfUsers); // disable rule
    }, // disable rule
    check() {
      var nresult = this.users.find((obj) => {
        const hello = {
          ids: obj.id,
          firstNames: obj.firstName,
          lastNames: obj.lastName,
          emails: obj.email,
          textboxs: obj.textbox,
        };
        // console.log("helloooooooooooo", hello);
        hello;
        this.data1 = obj.id;
        this.data2 = obj.firstName;
        this.data3 = obj.lastName;
        this.data4 = obj.email;
        this.data5 = obj.textbox;
        this.data12 = obj.Image_blob;
        return obj.firstName === this.usernamess;
      });
      if (nresult == null) {
        console.warn("Try Again");
        return (this.output1 = false);
      } else {
        console.log("Sucess", (this.output2 = false));
        return (this.output1 = true);
      }
    },
    checkgot() {
      var nresult = this.msgs.find((obj) => {
        // this.data12 = obj.pick
        // console.log(this.data12)
        return obj.namees === this.usernamess;
      });
      if (nresult == null) {
        console.warn("Try Again");
        console.warn("Fail");
        this.output1 = false;
      } else {
        // for(var i =0;i=this.data12.length;i++){
        //   console.log(this.data12)
        // }
        // console.log(this.data12)
        // var sridhar = this.data12
          // document.getElementById("thisismypro").src = sridhar;
        console.success("Sucess");
        this.output1 = true;
        return (this.result = this.msgs.filter(
          (o) => o.namees === this.usernamess
        ));
      }
    },
  },
   mounted() {
     if(this.usernamess == "sridhar reddy"){
       console.log("hay sridhar")
     }else{
     this.check()
     }
    },
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
/* Zebra striping */
tr:nth-of-type(odd) {
  background: #eee;
}
th {
  background: #333;
  color: white;
  font-weight: bold;
}
td,
th {
  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;
}
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 40%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 35%;
    padding-right: 10px;
    white-space: nowrap;
  }
  #your_id{

		padding-left: 22%;
	}

  /*
	Label the data
	*/
  td:nth-of-type(1):before {
    content: "ID";
  }
  td:nth-of-type(2):before {
    content: "First Name";
  }
  td:nth-of-type(3):before {
    content: "Last Name";
  }
  td:nth-of-type(4):before {
    content: "Email";
  }
  td:nth-of-type(5):before {
    content: "Msg";
  }
  td:nth-of-type(6):before {
    content: "Action";
  }
}
</style>
