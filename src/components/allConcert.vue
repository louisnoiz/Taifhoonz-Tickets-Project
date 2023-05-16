<template class="w-full h-screen">
    <div class="bg-[#2c2c38]">
      <div class="container mx-auto flex justify-center items-center">
        <div
          class="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-rows gap-8 my-10"
        >
          <div
            className="w-full grid mb-5 rounded-md shadow-md hover:bg-gray-700/10"
            id="app"
            v-for="(item, index) in this.namelist"
            :key="index"
          >
            <a href="#" class="">
              <div
                class="w-full p-5 flex flex-col gap-4 justify-center items-center"
              >
                <img class="w-40 h-auto" v-bind:src="item.img" alt="Image" />
                <p class="font-bold text-white">
                  {{ item.name }}
                </p>
                <p class="font-base text-white">
                  {{ item.detail }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import { RouterLink } from "vue-router";
  // import HelloWorld from './components/HelloWorld.vue'
  
  export default {
    name: "allConcert",
    // components: {
    //   // HelloWorld
    //   RouterLink,
    // },
    data() {
      return {
        namelist: [
          {
            id: 1,
            name: "LEO presents ‘Move On จนโคจรมาเจอกัน คอนเสิร์ต’",
            img: "https://res.theconcert.com/w_375,h_499,c_thumb/027c5eaa2474e2ed2093030ebf823a2d1/aw-resize-the-concert-01.jpg",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: 2,
            name: "test test test test test test test test test",
            img: "https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: 3,
            name: "Safeplanet BON VOYAGE The First Arena Concert",
            img: "https://plus.unsplash.com/premium_photo-1673283242704-12fcc9c05f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: 4,
            name: "หมอลำใจเกินร้อย บอย ศิริชัย วันที่ 19 พ.ค. สนามกินซ่า รังสิต",
            img: "https://images.unsplash.com/photo-1553831755-2a0a5370efe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: 5,
            name: "NO MAN’S LAND ROV CUP GET HIGH ทลายป้อม",
            img: "https://images.unsplash.com/photo-1535117399959-7df1714b4202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: 6,
            name: "aalskd;lk;lk;l;lklk;lk;lk;",
            img: "https://images.unsplash.com/photo-1552550018-5253c1b171e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: 7,
            name: "An Evening with SLEEPING SHEEP Live at The Concert Hall",
            img: "https://images.unsplash.com/photo-1558225818-388ab5bcd45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: 8,
            name: "LOMOSONIC Live Concert Presented by On Top Cafe' and Bar",
            img: "https://images.unsplash.com/photo-1588732807335-2132a3f9489e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: 9,
            name: "Safeplanet BON VOYAGE The First Arena Concert",
            img: "https://plus.unsplash.com/premium_photo-1673283242704-12fcc9c05f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            detail:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
        ],
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
  .app {
  }
  </style>
  