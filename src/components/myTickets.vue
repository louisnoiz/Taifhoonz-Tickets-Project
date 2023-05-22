<template class="w-full h-full">
    <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
        <div class="container mx-auto py-10 flex flex-col justify-center items-center">
            <div class="w-full flex flex-col gap-4 px-10 h-24 text-start">
                <label class="text-2xl text-white font-semibold tracking-wide">My Tickets</label>
                <div class="w-full mb-5 border-b border-gray-300"></div>
                <div class="w-full flex flex-col gap-8 justify-center items-center">
                    <div class="w-8/12 rounded p-5 flex flex-col gap-4" :style="cssProps" v-for="item, index in namelist"
                        :key="index">
                        <div class="w-full bg-white rounded px-5 py-10 flex flex-row gap-4">
                            <div
                                class="w-9/12 flex flex-col gap-3 pr-4 border-r-2 border-dashed border-[#284265] justify-center items-center text-center">
                                <p class="text-2xl font-semibold tracking-wide">{{ item.name }}</p>
                                <p class="text-gray-500">{{ item.local }}</p>
                                <div class="w-10/12 border-y-2 py-2 border-dashed border-[#284265] flex flex-row gap-2">
                                    <div class="w-4/12 font-semibold text-lg p-2 flex justify-center items-center">
                                        {{ item.date }}
                                    </div>
                                    <div class="w-3/12 p-2 px-3 flex flex-col border-x-2 border-dashed border-[#284265]">
                                        <p class="text-lg font-semibold text-gray-500">ROUND</p>
                                        <p class="text-2xl font-semibold">1</p>
                                    </div>
                                    <div class="w-5/12 p-2 pr-3 flex flex-col">
                                        <p class="text-lg font-semibold text-gray-500">TIME</p>
                                        <p class="text-2xl font-semibold">{{ item.time }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-2/12 px-2 ml-3 flex flex-col gap-2">
                                <div class="flex flex-row gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor"
                                        height="70" width="70">
                                        <path fill="#3b8cf7" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            d="M366.05,146a46.7,46.7,0,0,1-2.42-63.42,3.87,3.87,0,0,0-.22-5.26L319.28,33.14a3.89,3.89,0,0,0-5.5,0l-70.34,70.34a23.62,23.62,0,0,0-5.71,9.24h0a23.66,23.66,0,0,1-14.95,15h0a23.7,23.7,0,0,0-9.25,5.71L33.14,313.78a3.89,3.89,0,0,0,0,5.5l44.13,44.13a3.87,3.87,0,0,0,5.26.22,46.69,46.69,0,0,1,65.84,65.84,3.87,3.87,0,0,0,.22,5.26l44.13,44.13a3.89,3.89,0,0,0,5.5,0l180.4-180.39a23.7,23.7,0,0,0,5.71-9.25h0a23.66,23.66,0,0,1,14.95-15h0a23.62,23.62,0,0,0,9.24-5.71l70.34-70.34a3.89,3.89,0,0,0,0-5.5l-44.13-44.13a3.87,3.87,0,0,0-5.26-.22A46.7,46.7,0,0,1,366.05,146Z"
                                            id="mainIconPathAttribute"></path>
                                        <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            stroke-linecap="round" x1="250.5" y1="140.44" x2="233.99" y2="123.93"></line>
                                        <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            stroke-linecap="round" x1="294.52" y1="184.46" x2="283.51" y2="173.46"></line>
                                        <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            stroke-linecap="round" x1="338.54" y1="228.49" x2="327.54" y2="217.48"></line>
                                        <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            stroke-linecap="round" x1="388.07" y1="278.01" x2="371.56" y2="261.5"></line>
                                    </svg>
                                    <p>Taifhoonz Tickets</p>
                                </div>
                                <div class="flex flex-col gap-1 mb-3">
                                    <p class="text-center text-lg font-semibold">TICKET NO.</p>
                                    <p class="text-center">E12V443</p>
                                </div>
                                <p class="text-center text-3xl text-orange-400 font-semibold">500 THB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default {
    // components: { FileComponent },
    data() {
        return {
            ticket: [],
            id: null,
            cssProps: {
                backgroundImage: `url(${require("../assets/wall.png")})`,
            },
            namelist: [
                {
                    id: 1,
                    name: "LEO presents ‘Move On จนโคจรมาเจอกัน คอนเสิร์ต’",
                    img: "https://res.theconcert.com/w_375,h_499,c_thumb/027c5eaa2474e2ed2093030ebf823a2d1/aw-resize-the-concert-01.jpg",
                    date:
                        "30 Apr 2023",
                    time: "14:00 - 20:00",
                    local: "Mhor Chit 2",
                },
                {
                    id: 2,
                    name: "test test test test test test test test test",
                    img: "https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
                    date:
                        "27 Jul 2023",
                    time: "10:00 - 15:00",
                    local: "Thunder Dome, Muang Thing Thani"
                },
                {
                    id: 3,
                    name: "Safeplanet BON VOYAGE The First Arena Concert",
                    img: "https://plus.unsplash.com/premium_photo-1673283242704-12fcc9c05f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                    date:
                        "7 Feb 2023",
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
                        "20 Dec 2023",
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
                        " 17 May 2023",
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
    methods: {
        viewTicket(id) {
            axios.get(`http://localhost:3000/getTicketByUserId/${id}`)
                .then((res) => {
                    this.ticket = res.data;
                    console.log(this.ticket);
                })
        }
    },
    mounted() {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            const decoded = jwtDecode(token);
            this.id = decoded.payload.id;
            this.ticket = this.viewTicket(this.id);
            console.log(this.ticket);
        }
    },
};
</script>
<style>
.card {
    width: 75%;
    height: 100%;
}
</style>