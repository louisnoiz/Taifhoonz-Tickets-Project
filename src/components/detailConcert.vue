<template>
    <div class="container mx-auto">
        <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#c33838] px-20 mt-2 bg-gray-50">
            <div class="flex py-8">
                <div class="w-1/2">
                    <div class="flex flex-col items-center">
                        <div class="text-2xl font-bold">LEO presents ‘Move On จนโคจรมาเจอกัน คอนเสิร์ต’</div>
                        <img class="w-80 object-cover rounded-lg mt-8"
                            src="https://res.theconcert.com/w_375,h_499,c_thumb/027c5eaa2474e2ed2093030ebf823a2d1/aw-resize-the-concert-01.jpg">
                    </div>
                </div>
                <div class="w-1/2 px-8">
                    <div class="py-4 mt-4">
                        <div class="text-2xl font-bold mb-2">Concert Details</div>
                        <p class="text-gray-700 mt-8">ปี 2023 นี้เป็นปีแห่งความปัง เราได้โคจรมาเจอกันอีกครั้งกับ LEO
                            presents
                            ‘Move On จนโคจรมาเจอกัน คอนเสิร์ต’ 💫
                            ไม่ว่าราศีไหน ก็จะได้พบกับเหล่าศิลปินที่ฟังแล้วอินไปถึงจักรวาล ✨
                            INK WARUNTORN | NONT TANONT | BOWKYLION | JEFF SATUR | EARTH PATRAVEE | TATTOO COLOUR | ZEAL |
                            ETC.
                            | POLYCAT | SLOT MACHINE | SCRUBB | THREE MAN DOWN | TILLY BIRDS | SLAPKISS | PAPER PLANES |
                            HYBS |
                            SAFEPLANET | DEPT
                            2 วัน 6 รอบการแสดง 18 ศิลปิน
                            วันเสาร์ที่ 10 มิถุนายน 2566
                            รอบที่ 1 เวลา 14.00
                            THE SUN ☀️ ETC. | JEFF SATUR | HYBS
                            “ผู้จุดประกาย คือแสงที่สาดส่องไปยังทุกแห่งหน จนเกิดเป็นความสดใส ความสุข ความสำเร็จ”
                            รอบที่ 2 เวลา 17.30</p>
                    </div>
                    <div class="relative inline-block text-left">
                        <div>
                            <button @click="isOpen = !isOpen" type="button"
                                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-6 py-4 bg-red-500 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                id="rounds-menu" aria-haspopup="true" aria-expanded="true">
                                {{ selectedRound.label }}
                                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div v-show="isOpen"
                            class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-red-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="rounds-menu">
                            <div class="py-1" role="none">
                                <a v-for="round in rounds" :key="round.value" @click="selectRound(round)"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem">
                                    {{ round.label }}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <router-link to="/selectzone" v-if="selectedRound.value" class="selectZoneBtn mb-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600">Select Zone -></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            selectedRound: { value: null, label: "Select Round and Time" },
            rounds: [
                { value: "round1", label: "Round 1 -- FRI 22 APR 2023" },
                { value: "round2", label: "Round 2 -- SAT 23 APR 2023" },
                { value: "round3", label: "Round 3 -- SUN 24 APR 2023" },
            ],
        };
    },

    methods: {
        selectRound(round) {
            this.selectedRound = round;
            this.isOpen = false;
        },
    },
};
</script>
<style>
.selectZoneBtn {
    width: 20%;
    margin-left: 85%;
}
</style>
  