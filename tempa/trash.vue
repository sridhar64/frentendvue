<template>
  <div class="hello">
    <Header />
    <div v-if="this.output1">
      <div class="container mrgnbtm">
        <div class="row">
          <div class="col-md-8">
            <CreateUser :users="users" @createUser="userCreate($event)" />
            <!--<Commit @createtext="userMsg($event)"/>-->
          </div>
          <div class="col-md-4">
            <DisplayBoard
              v-if="this.value2"
              :numberOfUsers="numberOfUsers"
              @getAllUsers="getAllUsers()"
            />
          </div>
        </div>
      </div>
      <div class="row mrgnbtm">
        <Users v-if="users.length > 0 && this.value3" :users="users" />
      </div>
    </div>
    <div class="container" v-else>
      <div class="col-md-7 mrgnbtm">
        <h2>Login User</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="exampleInputEmail1">First Name</label>
              <input
                type="text"
                class="form-control"
                v-on:keyup.enter="check()"
                v-model="firest"
                name="firstname"
                id="firstname"
                aria-describedby="emailHelp"
                placeholder="First Name"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="text"
                class="form-control"
                v-model="emails"
                name="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <button type="button" @click="check()" class="btn btn-danger">
            login
          </button>
          <button type="button" @click="checkr()" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import CreateUser from "../src/components/CreateUser.vue";
import DisplayBoard from "../src/components/DisplayBoard.vue";
import Users from "../src/components/Users.vue";
import { getAllUsers, createUser } from "../src/services/UserService";

export default {
  name: "Dashboard",
  components: {
    Header,
    CreateUser,
    DisplayBoard,
    Users,
  },
  data() {
    return {
      users: [],
      numberOfUsers: 0,
      numberOfmsgs: 0,
      firstName: "",
      email: "",
      firest: "",
      nresult: "",
      output1: "",
      value1: true,
      value2: true,
      value3: false,
      emails: "",
      eresult: "",
    };
  },
  methods: {
    getAllUsers() {
      getAllUsers().then((response) => {
        console.log(response);
        this.users = response;
        this.numberOfUsers = this.users.length;
      });
    },
    userCreate(data) {
      console.log("data:::", data);
      createUser(data).then((response) => {
        console.log(response);
        this.getAllUsers();
      });
    },

    //register
    checkr() {
      this.output1 = true;
      this.value1 = true;
      this.value2 = false;
      this.value3 = false;
    },
    //login validation
    check() {
      var nresult = this.users.find((obj) => {
        return obj.firstName === this.firest && obj.email === this.emails;
      });
      if (nresult == null) {
        console.warn("try again");
        alert("hay you enter wrong user id and password");
        return (this.output1 = false);
      } else {
        console.success("done");
        this.value = true;
        return (this.output1 = true);
      }
    },
  },
  mounted() {
    this.getAllUsers();
  },
};
</script>
