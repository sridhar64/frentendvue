<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <h2>Create User</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-6">
              <div class="input" :class="{ invalid: $v.firstNames.$error }">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  @blur="$v.firstNames.$touch()"
                  v-model="firstNames"
                  name="firstname"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  required
                />
                <p v-if="(firstnameval = !$v.firstNames.Minl)">
                  provide valid First Name.
                </p>
                <p v-if="(firstnameval1 = !$v.firstNames.required)">
                  field is empty fill it.
                </p>
              </div>
            </div>
            <div class="form-group col-md-6">
              <div class="input" :class="{ invalid: $v.firstNames.$error }">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="lastName"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  required
                />
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
          <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="exampleInputtext-box1">Main Commit</label>
              <input
                type="text"
                class="form-control"
                v-model="textbox"
                name="text-box"
                id="text-box-main"
                aria-describedby="text-boxhelper"
                placeholder="Main Commit"
                required
              />
            </div>
          </div>
          <input type="file" @change="onFileChanged" ><br>
          <img v-show ="needto" id="myImageid" src="" width="310" 
     height="300"/>
<br>
<button class="btn btn-primary" @click="needto = true">Preview Button</button>
          <button
            type="button"
            @click="createUser()"
            class="btn btn-danger"
            v-if="this.tus"
            
          >
            Create
          </button>
          <button @click="goBack()" class="btn btn-secondary">Go Back</button
          ><br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "CreateUser",
  props: ["users"],
  data() {
    return {
      firstNames: "",
      lastName: "",
      email: "",
      firstName: "",
      tus: "true",
      textbox: "",
      pick: "",
      selectedFile: null,
      previewImage:"",
      myImage:'',
      imagetovue:'',
      needto: false
      //   selectedFile:''
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    firstNames: {
      required,
      Minl: minLength(2),
    },
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
     document.getElementById("myImageid").src = myImage.src;
    //  myImagebyid = myImage
    //  console.log(h)
  },
    createUser() {
      var result = this.users.find((obj) => {
        return obj.firstName === this.firstNames && obj.email === this.email;
      });
      if (result == null) {
        const payload = {
          firstName: this.firstNames,
          lastName: this.lastName,
          email: this.email,
          textbox: this.textbox,
          Imgupload_date:this.selectedFile.lastModifiedDate,
          Image_name:this.selectedFile.name,
          Image_blob:this.previewImage,
          MainImg:this.nueimg()
        };
        this.$confirm("Are you sure?").then(() => {
          this.$emit("createUser", payload);
          this.clearForm();
          this.goBack();
        });
      } else {
        this.$alert(
          "Hay You Are Existing User HaHaa Go Back And Try again.",
          "Warning",
          "warning"
        ).then(() =>
          console.warn("Hay You Are Existing User HaHaa Go Back And Try again.")
        );
        this.clearForm1();
        return (this.tus = false);
      }
    },
    goBack() {
      // this.$emit("goBack");
      location.reload();
    },
    clearForm() {
      this.firstNames = "";
      this.lastName = "";
      this.email = "";
      this.textbox = "";
      this.$alert("Thank You For Regestering Plz Refresh once", "Success", "success").then(() =>
        console.success("Thank You For Regestering")
      );
    },
    clearForm1() {
      this.firstNames = "";
      this.lastName = "";
      this.email = "";
      this.textbox = "";
    },
  },
};
</script>
<style scoped>
img {
    max-width: 100%;
    max-height: 100%;
}

.portrait {
    height: 80px;
    width: 30px;
}

.landscape {
    height: 30px;
    width: 80px;
}

.square {
    height: 75px;
    width: 75px;
}

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