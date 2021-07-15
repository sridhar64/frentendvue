<template>
  <div class="header">
    Vue.js
    <button type="button" @click="check()" class="btn btn-danger">
      Hello {{ usernamess }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["usernamess"],
  data() {
    return {
      firest: "",
    };
  },
  methods: {
    check() {
      console.log(this.usernamess);
    },
    //   createusers() {
    //             this.$emit('createusers')
    //         },
    //   showuserstable() {
    //             this.$emit('showuserstable')
    //         }
  },
};
</script>
