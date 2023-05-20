<template class="w-full h-screen">
  <div class="bg-[#2c2c38] w-full">
    <div class="w-full h-screen" :style="cssProps">
      <div class="container mx-auto flex flex-row gap-5 justify-center items-center">
        <div class="w-full py-36 px-5 my-10 flex flex-col gap-3 text-left">
          <p class="text-white text-5xl font-semibold tracking-wide">
            RADWIMPS Asian Tour 2023 in Bangkok
          </p>
          <p class="text-white tracking-wide mt-3">Please be informed that service fee will be adjusted from 20 baht per
            ticket to 30 baht starting from April 1st, 2023 onwards . . .</p>
          <p class="text-white tracking-wide">Show Date : Thursday 27 July 2023</p>
          <p class="text-white tracking-wide">Venue : Union Hall, Union Mall</p>
          <p class="text-white tracking-wide">Ticket Price : 3,400 / 2,600</p>
          <a href="#"
            class="w-36 mt-3 border-2 border-orange-500 hover:bg-orange-500/10 text-orange-500 rounded text-sm text-center p-2 tracking-wide">
            COMING SOON
          </a>
        </div>
        <div class="w-full my-10 flex justify-center">
          <img class="w-96 h-auto rounded" src="../assets/concert.png" alt="Image" />
        </div>
      </div>
    </div>
    <div class="w-full h-screen bg-gray-300/20" >
      <div class="container mx-auto flex flex-row gap-5 justify-center items-center">
        <div class="w-full py-36 px-5 my-10 flex flex-col gap-3 text-left">
          <p class="text-white text-5xl font-semibold tracking-wide">
            RADWIMPS Asian Tour 2023 in Bangkok
          </p>
          <p class="text-white tracking-wide mt-3">Please be informed that service fee will be adjusted from 20 baht per
            ticket to 30 baht starting from April 1st, 2023 onwards . . .</p>
          <p class="text-white tracking-wide">Show Date : Thursday 27 July 2023</p>
          <p class="text-white tracking-wide">Venue : Union Hall, Union Mall</p>
          <p class="text-white tracking-wide">Ticket Price : 3,400 / 2,600</p>
          <a href="#"
            class="w-36 mt-3 border-2 border-orange-500 hover:bg-orange-500/10 text-orange-500 rounded text-sm text-center p-2 tracking-wide">
            COMING SOON
          </a>
        </div>
        <div class="w-full my-10 flex justify-center">
          <img class="w-96 h-auto rounded" src="../assets/concert.png" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { RouterLink } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "homePage",
  // components: {
  //   // HelloWorld
  //   RouterLink,
  // },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("../assets/wall.png")})`,
      },
    };
  },
  methods: {},
};
</script>

<style>
/* .card {
  width: 100%;
  height: 100%;
} */
img {
  width: 20%;
  height: 20%;
}


</style>
