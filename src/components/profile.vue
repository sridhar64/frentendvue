<template>
  <div class="display-board">
  <img id="hellowworld" src="" width="310" 
     height="300"/>
    </div>
</template>

<script>
export default {
  name: "profile",
  props: ["users","usernamess"],
  data() {
    return {
      data5: "",
    };
  },
  methods: {
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
        this.data5 = obj.Image_blob;
        return obj.firstName === this.usernamess;
      });
      if (nresult == null) {
        console.warn("Try Again");
        return (this.output1 = false);
      } else {
          var sridhar = this.data5
          document.getElementById("hellowworld").src = sridhar;
        console.log("Sucess");
        return (this.output1 = true);
      }
    },
     mounted() {
     this.check()
    },
  },
  mounted(){
    this.check()
  }
  
};
</script>
