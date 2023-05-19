<template class="w-full min-h-screen">
  <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
    <div class="container mx-auto pt-10 flex justify-center items-center">

      <div
        class="w-7/12 flex flex-col gap-6 mt-8 pt-16 justify-center items-center border rounded-xl drop-shadow-lg border-[#D2CFCF] p-8 px-20">
        <h1 class="text-3xl font-bold text-white tracking-wide mb-5">Sign Up</h1>
        <div class="flex justify-center items-center">
          <form class="w-full grid grid-rows gap-6">
            <div class="grid grid-cols-2 gap-4">
              <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                placeholder="First name" v-model="firstname"/>
              <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                placeholder="Last name" v-model="lastname"/>
            </div>
            <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
              placeholder="Username" v-model="username"/>
            <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
              placeholder="Phone" />
            <input type="email" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
              placeholder="Email" />
            <div class="grid grid-cols-2 gap-4">
              <input type="password" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                placeholder="Password" v-model="password"/>
              <input type="password" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                placeholder="Confirm Password" />
            </div>
            <div class="flex justify-center items-center mt-4">
              <button type="submit" class="w-1/2 p-2 rounded-xl drop-shadow-lg bg-orange-300" @click="signup">Create an account</button>
            </div>
            <router-link to="/loginpage">Sign in</router-link>
          </form>
        </div>
      </div>



    </div>


  </div>
</template>
  
<script>
/* ✓ GOOD */
import axios from 'axios';
export default {
  name: 'signupPage',
  // ...
  data() {
    return {
      username: '',
      firstname: '',
      lastname:'',
      password: '',
    }
  },
  methods: {
    signup() {
      const data = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
      };
      axios.post('http://localhost:3000/signup', data)
        .then((res) => {
          console.log(res);
          this.$router.push('/loginpage');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>