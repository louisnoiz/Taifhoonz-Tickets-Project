<template class="w-full h-screen">
  <div class="bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
    <div class="container mx-auto flex flex-col justify-center items-center">
      <div class="w-full flex justify-left pt-10">
        <a href="" class="w-48 text-white text-xl hover:text-indigo-500 font-semibold underline underline-offset-8">Now Showing</a>
        <a href="" class="w-48 text-white text-xl hover:text-indigo-500 font-semibold underline underline-offset-8">Coming soon</a>
      </div>
      <div class="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-rows gap-8 my-10">
        <div className="w-full grid mb-5 rounded-md shadow-md hover:bg-gray-700/10" id="app"
          v-for="(item, index) in this.namelist" :key="index">
          <a href="" class="">
            <router-link to="/detail">
            <div class="w-full py-5 flex flex-col gap-4 justify-center items-center">
              <div class="bg-cover bg-center w-auto h-96" :style="img_concert">
                <div class="w-72 h-72"></div>
              </div>
              <p class="flex flex-col gap-3 px-11">
                <span class="font-bold text-white text-left">
                  {{ item.name }}
                </span>
                <span class="font-base text-sm text-white text-left">
                  Date: {{ item.date }}
                </span>
                <span class="font-base text-sm text-white text-left">
                  Time: {{ item.time }}
                </span>
                <span class="font-base text-sm text-white text-left">
                  Local: {{ item.local }}
                </span>
              </p>

            </div>
          </router-link>
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
      img_concert: {
        backgroundImage: `url(${require("../assets/img_concert.jpg")})`,
      },
      namelist: [
        {
          id: 1,
          name: "LEO presents ‘Move On จนโคจรมาเจอกัน คอนเสิร์ต’",
          img: "https://res.theconcert.com/w_375,h_499,c_thumb/027c5eaa2474e2ed2093030ebf823a2d1/aw-resize-the-concert-01.jpg",
          date:
            "30 Apr 2023",
          time: "14:00 - 20:00",
          local: "Mhor Chit 2"
        },
        {
          id: 2,
          name: "test test test test test test test test test",
          img: "https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
          date:
            "23 - 27 Jul 2023",
          time: "10:00 - 15:00",
          local: "Thunder Dome, Muang Thing Thani"
        },
        {
          id: 3,
          name: "Safeplanet BON VOYAGE The First Arena Concert",
          img: "https://plus.unsplash.com/premium_photo-1673283242704-12fcc9c05f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          date:
            "3 - 7 Feb 2023",
          time: "19:00 - 23:30",
          local: "ESC Park Bangkok"
        },
        {
          id: 4,
          name: "หมอลำใจเกินร้อย บอย ศิริชัย วันที่ 19 พ.ค. สนามกินซ่า รังสิต",
          img: "https://images.unsplash.com/photo-1553831755-2a0a5370efe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80",
          date:
            "2 Jun 2023",
          time: "14:30 - 18:30",
          local: "Thunder Dome, Muang Thing Thani"
        },
        {
          id: 5,
          name: "NO MAN’S LAND ROV CUP GET HIGH ทลายป้อม",
          img: "https://images.unsplash.com/photo-1535117399959-7df1714b4202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          date:
            "1 Dec 2023",
          time: "18:00 - 22:00",
          local: "Show DC Hall"
        },
        {
          id: 6,
          name: "Lorem Ipsum is simply dummy text of the printing",
          img: "https://images.unsplash.com/photo-1552550018-5253c1b171e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          date:
            "18 - 20 Dec 2023",
          time: "18:00 - 22:00",
          local: "Mhor Chit 2"
        },
        {
          id: 7,
          name: "An Evening with SLEEPING SHEEP Live at The Concert Hall",
          img: "https://images.unsplash.com/photo-1558225818-388ab5bcd45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          date:
            "5 Jul 2023",
          time: "18:00 - 22:00",
          local: "Thunder Dome, Muang Thing Thani"
        },
        {
          id: 8,
          name: "LOMOSONIC Live Concert Presented by On Top Cafe' and Bar",
          img: "https://images.unsplash.com/photo-1588732807335-2132a3f9489e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          date:
            "16 - 17 May 2023",
          time: "18:00 - 22:00",
          local: "JJ Hall"
        },
        {
          id: 9,
          name: "Safeplanet BON VOYAGE The First Arena Concert",
          img: "https://plus.unsplash.com/premium_photo-1673283242704-12fcc9c05f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          date:
            "24 Oct 2023",
          time: "18:00 - 22:00",
          local: "Mhor Chit 2"
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

.app {}
</style>
  