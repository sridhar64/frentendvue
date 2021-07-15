<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <h2></h2>
        <form>
          <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="exampleInputtext-box1">Sub commit</label>
              <input
                type="text"
                class="form-control"
                v-model="textbox"
                name="text-box"
                id="text-box-commit"
                aria-describedby="text-boxhelper"
                placeholder="Sub commit"
                required
              />
            </div>
          </div>
          <input type="file" @change="onFileChanged">
          
          <div v-show="hellopre" >
          <img id="mypickcom" src="" width="310" height="300"/>
          <br>
          </div>
           
     
     <button class="btn btn-primary" @click='hellopre = true'>previewImage</button>
          <button type="button" @click="commit()" class="btn btn-danger">
            {{ usernamess }} commit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commit",
  props: ["users", "usernamess"],
  data() {
    return {
      textbox: "",
      previewImage:'',
      hellopre : false
    };
  },
  methods: {
    onFileChanged (event) {
    this.selectedFile = event.target.files[0]
    const reader = new FileReader();
                reader.readAsDataURL(this.selectedFile);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                };
                this.nueimg()
                },
                nueimg(){
                var binaryData = [];
binaryData.push(this.selectedFile);
               let objectURL = URL.createObjectURL(new Blob(binaryData, {type: "image/png"}));
    let myImage = new Image();
    myImage.src = objectURL;
    let imagetovue = myImage.src  
             imagetovue
     console.log(myImage);
     document.getElementById("mypickcom").src = myImage.src;
    //  myImagebyid = myImage
    //  console.log(h)
  },
    commit() {
      const payload = {
        namees: this.usernamess,
        ctextbox: this.textbox,
        pick:this.previewImage
      };
      console.log(this.mypickcom)
      this.$emit("commit", payload);
      this.clearcommit();
      this.$alert(
      "You Commit Was Sucessfully Save In DB",
      "Success",
      "success"
    ).then(() => console.success("You Commit Was Sucessfully Save In DB"));
    },
    clearcommit() {
      this.textbox = "";
      this.imagetovue = null;
    },
  },
};
</script>
