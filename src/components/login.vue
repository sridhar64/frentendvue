<template>
  <div class="row">
    <div class="col-md-7 mrgnbtm">
      <h2>Login User</h2>
      <form>
        <div class="row">
          <div class="form-group col-md-12">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input
              type="text"
              class="form-control"
              v-on:keyup.enter="login()"
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
        <button type="button" @click="login()" class="btn btn-danger">
          login
        </button>
        <button type="button" @click="checkr()" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",

  data() {
    return {
      firstName: "",
      email: "",
      firest: "",
      nresult: "",
      output1: "",
      emails: "",
      eresult: "",
      myname: "",
    };
  },
  methods: {
    login() {
      this.$emit("login");
    },
  },
};
</script>
