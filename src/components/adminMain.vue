<template class="w-full h-screen">
    <!-- <div class="bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]"> -->
    <div class="container mx-auto flex flex-col justify-center items-center">
        <div class="w-full flex justify-left pt-10">
            <div class="w-1/12"></div>
            <div class="w-8/12">
                <input class="w-2/3 p-2 bg-white text-lg text-center border border-gray-500/30 rounded-lg"
                    placeholder="Search" />
            </div>
            <div class="w-3/12 flex flex-row gap-5 justify-end">
                <router-link to="/create"><button class="w-24 rounded bg-blue-500 hover:bg-blue-600 text-white text-lg py-2">Create</button></router-link>
                <button v-if="!handleDelete" @click="() => handleDelete = true" class="w-24 rounded bg-red-500 hover:bg-red-600 text-white py-2 text-lg">Delete</button>
                <button v-else @click="() => handleDelete = false" class="w-24 rounded bg-gray-500 hover:bg-gray-600 text-white py-2 text-lg">Cancel</button>
            </div>
        </div>
        <div class="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-rows gap-8 my-10">
            <div className="w-full grid mb-5" id="app" v-for="(item, index) in this.namelist" :key="index">
                <a href="" class="shadow-md rounded">
                    <router-link to="/edit">
                        <div class="w-full py-5 flex flex-col gap-4 justify-center items-center">
                            <div class="bg-cover bg-center w-auto h-96" :style="img_concert">
                                <div class="w-72 h-72"></div>
                            </div>
                            <p class="flex flex-col gap-3 px-11">
                                <span class="font-bold text-left">
                                    {{ item.name }}
                                </span>
                            </p>
                        </div>
                    </router-link>
                </a>
                <div class="w-full flex flex-row" v-if="handleDelete">
                    <!-- <button class="w-full h-16 flex justify-center items-center py-2 bg-yellow-200 rounded-l-lg hover:bg-yellow-300/80">Edit</button> -->
                    <button
                        class="w-full h-16 text-white text-lg flex justify-center items-center py-2 bg-red-500 rounded-b-lg hover:bg-red-600">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>
  
<script>
export default {
    name: 'adminMain',
    props: {
        msg: String
    },
    data() {
        return {
            handleDelete: false,
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
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
  