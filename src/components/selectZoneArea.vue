<template>
    <div class="container mx-auto justify-center items-center">

        <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#c33838] px-20 mt-2">
            <div class="flex py-8">
                <div class="w-1/2">
                    <div class="flex flex-col items-center">
                        <img class="rounded-lg object-cover"
                            src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.6435-9/72731938_2574051899309409_6564049001522397184_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHRdSCBhPVfSRHFD0ZnBqCa0ezs0S4-0IbR7OzRLj7Qhvb2QYZg8X5pJOOvK9hzplvmzlihcZKxYiNmUhZXgr2M&_nc_ohc=eZg8mzG0RC0AX9OTElM&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfBknZju5JYrdTMQdLS254QUpjyCIjXLNJGmSC4MkOTEpQ&oe=646D9870"
                            alt="">
                    </div>
                </div>
                <div class="w-1/2 flex flex-col items-center">
                    <div>
                        <div class="font-bold text-xl mb-2">Concert's Remark details</div>
                        <br>
                        <div class="flex">
                            <img class="colorZone"
                                src="https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
                                alt="">
                            <p>&ensp; Zone (Green) : 4,800 THB</p>
                        </div>
                        <br>
                        <div class="flex">
                            <img class="colorZone"
                                src="https://htmlcolorcodes.com/assets/images/colors/sky-blue-color-solid-background-1920x1080.png"
                                alt="">
                            <p>&ensp; Zone (Blue) : 4,500 THB</p>
                        </div>
                        <br>
                        <div class="flex">
                            <img class="colorZone"
                                src="https://htmlcolorcodes.com/assets/images/colors/periwinkle-color-solid-background-1920x1080.png"
                                alt="">
                            <p>&ensp; Zone (Purple) : 3,500 THB</p>
                        </div>
                        <br>
                        <div class="flex">
                            <img class="colorZone"
                                src="https://htmlcolorcodes.com/assets/images/colors/burnt-sienna-color-solid-background-1920x1080.png"
                                alt="">
                            <p>&ensp; Zone (Orange) : 2,500 THB</p>
                        </div>
                    </div>
                    <div class="ZoneAreaSelectBox relative inline-block text-left mt-8">
                        <div>
                            <button @click="isOpen = !isOpen" type="button"
                                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                id="Zones-menu" aria-haspopup="true" aria-expanded="true">
                                {{ selectedZone.label }}
                                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div v-show="isOpen"
                            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-red-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="Zones-menu">
                            <div class="py-1" role="none">
                                <a v-for="round in Zones" :key="round.value" @click="selectZone(round)"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem">
                                    {{ round.label }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mb-4">
                <div class="w-1/2">
                    <router-link to="/detail" class="selectZoneBtnLeft mb-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"> ← </router-link>
                </div>
                <div class="w-1/2">
                    <router-link to="/payment" v-if="selectedZone.value" class="selectZoneBtnRight mb-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600">Buy Ticket -></router-link>
                </div>
            </div>
            
            
        </div>


</div></template>
<script>
export default {
    data() {
        return {
            isOpen: false,
            selectedZone: { value: null, label: "Select Zone Area" },
            Zones: [
                { value: "Zone A (Blue)", label: "Zone A (Blue)" },
                { value: "Zone A (Purple)", label: "Zone A (Purple)" },
                { value: "Zone B (Blue)", label: "Zone B (Blue)" },
                { value: "Zone B (Purple)", label: "Zone B (Purple)" },
                { value: "Zone C (Blue)", label: "Zone C (Blue)" },
                { value: "Zone C (Purple)", label: "Zone C (Purple)" },
                { value: "Zone G (Blue)", label: "Zone G (Blue)" },
                { value: "Zone G (Purple)", label: "Zone G (Purple)" },
                { value: "Zone H (Blue)", label: "Zone H (Blue)" },
                { value: "Zone H (Purple)", label: "Zone H (Purple)" },
                { value: "Zone I (Blue)", label: "Zone I (Blue)" },
                { value: "Zone I (Purple)", label: "Zone I (Purple)" },
            ],
        };
    },

    methods: {
        selectZone(zone) {
            this.selectedZone = zone;
            this.isOpen = false;
        },
    },
};
</script>
<style>
.colorZone {
    width: 20px;
    height: 20px;
}
.selectZoneBtnRight {
    width: 20%;
    margin-left: 60%;
}
.selectZoneBtnLeft {
    width: 20%;
    margin-right: 100%;
}
.ZoneAreaSelectBox {
    width: 60%;
}
</style>