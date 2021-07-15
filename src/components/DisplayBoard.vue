<template>
  <div class="display-board">
    <h4>Users Created</h4>
    <div class="number">
      {{ numberOfUsers }}:
      {{ numberOfcommit }}
    </div>
    <div class="btn">
      <button @click="getAllUsers()" type="button" class="btn btn-warning" :disabled = !this.thisisadmin>
        Get all Users
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayBoard",
  props: ["numberOfUsers", "numberOfcommit", "usernamess"],
  data() {
    return {
      thisisadmin: this.usernamess == "sridhar reddy",
    }
    },
  methods: {
    getAllUsers() {
      this.$emit("getAllUsers");
      // this.getAllUserscommit()
    },
    getAllUserscommit() {
      this.$emit("getAllUserscommit");
    },
  },
  mounted() {
     console.log("admin test",this.usernamess == "sridhar reddy")
    },
};
</script>
