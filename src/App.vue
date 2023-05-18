<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-[#2c2c38] border-b border-b-gray-500 p-6 ">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img
          class="fill-current h-8 w-8 mr-2"
          src="./assets/taifhoonz_logo.png"
          alt=""
        />
        <a href="/" class="font-semibold text-xl tracking-wide">
          Taifhoonz Tickets
        </a>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white tracking-wide"
      >
        <div class="text-sm lg:flex-grow">
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-lg mr-4 hover:text-slate-900"
          >
            <router-link to="/">Home</router-link>
          </a>
          <a
            class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-lg hover:text-slate-900"
          >
            <router-link to="/loginpage">Login</router-link>
          </a>
          <a
            class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-lg hover:text-slate-900"
          >
            <router-link to="/signuppage">Signup</router-link>
          </a>
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4"
          >
            <router-link to="/detail">Detail</router-link>
          </a>
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4"
          >
            <router-link to="/selectzone">ZoneArea</router-link>
          </a>
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4"
          >
            <router-link to="/payment">Payment</router-link>
          </a>
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4"
          >
            <router-link to="/allConcert">Concert</router-link>
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-900 mr-4"
          >
            <router-link to="/myticket"
              ><img
                class="ticketbtn"
                src="./assets/ticketnavbar_logo.png"
                alt=""
            /></router-link>
          </a>
          <button
            class="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-slate-900 mr-4"
            v-on:click="() => (this.modal = !this.modal)"
          >
            <!-- <router-link to="/editprofile">Username</router-link> -->
            Username
          </button>
        </div>
      </div>
    </nav>
    <div v-if="this.modal">
      <div class="w-full h-max flex justify-end items-start absolute">
        <div
          class="container w-1/5 mt-1 mr-1 drop-shadow-lg border tracking-wide text-center rounded-lg bg-white"
        >
          <div class="m-8">
            <div class="flex flex-col gap-5 mt-3 text-start">
              <label
                htmlFor="first-name"
                className="block leading-6 text-gray-900"
              >
                Name : Woranun Wareeprasert
              </label>
              <label
                htmlFor="first-name"
                className="block leading-6 text-gray-900"
              >
                Email : aitax159@gmail.com
              </label>
              <div class="flex justify-center items-center">
                <button
                  class="w-1/2 p-1 border rounded-lg bg-rose-500 text-white"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
    RouterLink,
  },
  data() {
    return {
      modal: false,
    };
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300&family=Prompt:wght@200;300;500&display=swap");
#app {
  font-family: "Noto Sans Thai", sans-serif;
  font-family: "Prompt", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: rgb(253, 252, 236);
}
.ticketbtn {
  width: 30px;
  height: 30px;
}
</style>
