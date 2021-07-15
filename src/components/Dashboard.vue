<template>
  <div class="hello">
    <Header :usernamess="this.myname" />
    <div v-if="this.output1">
      <div class="container mrgnbtm">
        <div class="row">
          <div class="col-md-8">
            <CreateUser
              :users="users"
              @goBack="goBack()"
              @createUser="userCreate($event)"
              @createUser2="userCreate2($event)"
            />
            <commit
              v-if="this.value2"
              @commit="usercommit($event)"
              :usernamess="this.myname"
            />
          </div>
          <div class="col-md-4">
            <profile :users="users"
            :usernamess="this.myname"
            />
            <DisplayBoard
              v-if="this.value2"
              :usernamess="this.myname"
              :numberOfUsers="numberOfUsers"
              :numberOfcommit="numberOfcommit"
              @getAllUsers="getAllUsers()"
              @getAllUserscommit="getAllUserscommit()"
            />
          </div>
        </div>
      </div>
      <div class="row mrgnbtm">
        <Users
          v-if="users.length > 0 && this.value2"
          :msgs="msgs"
          :users="users"
          :numberOfUsers="numberOfUsers"
          :usernamess="this.myname"
        />
      </div>
    </div>
    <div class="container" v-else>
      <div class="col-md-7 mrgnbtm">
        <h2>Login User</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-12">
              <div class="input" :class="{ invalid: $v.firest.$error }">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  @blur="$v.firest.$touch()"
                  v-on:keyup.enter="check()"
                  v-model="firest"
                  name="firstname"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  required
                />
                <p v-if="(firstnameval = !$v.firest.Minl)">
                  Please provide a valid First Name.
                </p>
                <p v-if="(firstnameval1 = !$v.firest.required)">
                  This field must not be empty.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <div class="input" :class="{ invalid: $v.email.$error }">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="text"
                  class="form-control"
                  @blur="$v.email.$touch()"
                  v-model="email"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                />
                <p v-if="(emailval = !$v.email.email)">
                  Please provide a valid email address.
                </p>
                <p v-if="(emailval2 = !$v.email.required)">
                  This field must not be empty.
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            @click="check()"
            class="btn btn-danger"
            :disabled="
              this.emailval ||
              this.emailval2 ||
              this.firstnameval ||
              this.firstnameval1
            "
          >
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
import Header from "./Header.vue";
import CreateUser from "./CreateUser.vue";
import DisplayBoard from "./DisplayBoard.vue";
import Users from "./Users.vue";
import Commit from "./commit.vue";
import profile from "./profile.vue"
import { getAllUsers, createUser } from "../services/UserService";
import { getAllUserscommit, commit } from "../services/UserService";
import { required, email, minLength } from "vuelidate/lib/validators";
// import login from './login.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    CreateUser,
    DisplayBoard,
    Users,
    Commit,
    profile
    // login
  },
  data() {
    return {
      users: [],
      msgs: [],
      numberOfUsers: 0,
      numberOfcommit: 0,
      numberOfmsgs: 0,
      firstName: "",
      email: "",
      firest: "",
      nresult: "",
      output1:false,
      value1: true,
      value2: true,
      value3: true,
      eresult: "",
      myname: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    firest: {
      required,
      Minl: minLength(2),
    },
  },
  methods: {
    getAllUsers() {
      getAllUsers().then((response) => {
        // console.log(response);
        response;
        this.users = response;
        this.numberOfUsers = this.users.length;
        this.value3 = true;
      });
    },
    userCreate(data) {
      // console.log("data:::", data);
      createUser(data).then((response) => {
        // console.log(response);
        response;
        this.getAllUsers();
      });
    },
    getAllUserscommit() {
      getAllUserscommit().then((response) => {
        // console.log(response);
        this.msgs = response;
        this.numberOfcommit = this.msgs.length;
        this.value3 = true;
      });
    },
    usercommit(data) {
      // console.log("this commit data:::", data);
      commit(data).then((response) => {
        // console.log(response);
        response;
        this.getAllUserscommit();
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
        return obj.firstName === this.firest && obj.email === this.email;
      });
      this.$alert("You Are Sucessfully Login", "Success", "success").then(() =>
        console.success("You Are Sucessfully Login")
      );
      if (nresult == null) {
        this.$alert(
          "Hay You Enter Wrong Login-ID Or Password",
          "Warning",
          "warning"
        ).then(() => console.warn("Hay You Enter Wrong Login-ID Or Password"));
        this.clearForm();
        return (this.output1 = false);
      } else {
        console.success("Login Successfully");
        this.value = true;
        this.value3 = false;
        console.log((this.myname = this.firest));
        return (this.output1 = true);
      }
    },
    clearForm() {
      this.firest = "";
      this.email = "";
    },
    goBack(){
      this.firstName="",
      this.email="",
      this.firest="",
      this.nresult="",
      this.output1=false,
      this.eresult= "",
      this.myname= ""
    }
  },
  mounted() {
    this.getAllUsers();
    this.getAllUserscommit();
  },
};
</script>
<style scoped>
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input.invalid label {
  color: red;
}

.input.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>