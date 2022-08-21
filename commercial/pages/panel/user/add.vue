<template>
  <div>
    <div class="row bg-light">
        <div class="col-3 bg-light"></div>
        <div class="col-6 bg-light d-block"> 
           <div class="adduser-form bg-white d-block border-white shadow rounded-3 m-3 p-6 text-center">
               <p class="fs-3 text-black p-3 direction-rtl text-decoration-none">add-user</p>
              <!--email-->
               <input v-model=" user_data.email" type="text" size="50" class=" my-4 p-2 border border-black rounded-2" name="email" data-type="1" placeholder="آدرس ایمیل"> 
                <!--password-->
               <input  v-model="user_data.phone_number" type="text" size="50" class=" my-4 p-2 border border-black rounded-2" name="phone_number" placeholder="تلفن همراه">  
               <!--name-->
               <input v-model=" user_data.name" type="text" size="50" class=" my-4 p-2 border border-black rounded-2" name="name" data-type="1" placeholder="نام">  
               <button class="signup-btn  b1 fs-6 p-2 my-4 rounded-pill"  @click="submit()">اضافه کردن کاربر</button>
           </div>   
        </div> 
          
        <div class="col-3 bg-light"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_data: {
        email: "",
        phone_number: "",
        name: "",
      },
      confirm_pass: "",
    };
  },
  methods:{
    submit() {
      this.$axios
        .post("", this.user_data)
        .then((response)=>{
          console.log(response.user_data)
          this.user_data=response.data;
    })
        .catch((error)=>{
          console.log(error);
        }) 
      alert('کاربر اضافه شد')
      // axios => send to backend 
      // response <= backend      
    }
  }

}
</script>

<style>

.b1 {
  background: #040080; 
  color: #45f2b6;
  width: 60%;
}

</style>