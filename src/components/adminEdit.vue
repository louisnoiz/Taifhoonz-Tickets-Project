<template class="w-full min-h-screen">
    <div class="w-full min-h-screen ">
        <div class="container mx-auto py-10 flex flex-col justify-center items-center ">
            <div class="w-full flex justify-end items-center px-20">
                <div v-if="!handleEdit" class="w-full flex justify-end items-center px-10">
                    <button class="w-24 text-white ml-10 bg-red-500 hover:bg-red-600  p-2 rounded text-lg tracking-wide"
                        @click="() => handleEdit = true">
                        Edit
                    </button>
                </div>
                <div v-else class="w-full flex justify-end items-center px-10">
                    <button class="w-24 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded text-lg  tracking-wide"
                        @click="() => SaveData()">
                        Save
                    </button>
                    <button class="w-24 ml-10 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded text-lg tracking-wide"
                        @click="() => handleEdit = false">
                        Cancel
                    </button>
                </div>
            </div>
            <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 px-20 mt-2 ">
                <div v-if="!handleEdit" class="w-full flex flex-col items-center">
                    <img class="w-80 object-cover rounded-lg mt-8"
                        src="https://res.theconcert.com/w_375,h_499,c_thumb/027c5eaa2474e2ed2093030ebf823a2d1/aw-resize-the-concert-01.jpg" />
                </div>
                <div v-else class="w-full flex flex-col mt-4 py-4">
                    <label class="text-lg text-left block mb-1">Image :</label>
                    <input id="file-input" class="hide-file-input hidden" type="file" accept="image/*"
                        @change="onFileChange($event)" />
                    <label
                        class="w-full h-96 bg-white p-3 mr-4 flex flex-col gap-4 justify-center items-center border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100"
                        for="file-input">
                        <!-- Show Image -->
                <img v-if="filePreview" :src="filePreview" alt="fileName" style="max-height: 256px">
                        <p>Upload a file</p>
                        <p class="text-gray-500">{{ fileName ? fileName : "No file chosen" }}</p>
                    </label>
                </div>
                <div class="w-full px-8">
                    <div v-if="!handleEdit" class="flex flex-col gap-4 py-4 mt-4 text-left">
                        <div class="text-3xl font-bold tracking-wide">
                            {{ concert.name }}
                        </div>
                        <span class="w-full font-base text-lg text-left">
                            Artist : {{ concert.artist }}
                        </span>
                        <span class="w-full font-base text-lg text-left">
                            Date : {{ formatDate(concert.dateStart) }} - {{ formatDate(concert.dateEnd) }}
                        </span>
                        <span class="w-full font-base text-lg text-left">
                            Local : {{ concert.location }}
                        </span>
                        <p class="text-gray-700 tracking-wide text-justify indent-14">
                            {{ concert.details }}
                        </p>
                    </div>
                    <div v-else class="flex flex-col gap-4 py-4 mt-4 text-left">
                        <div class="w-full">
                            <label class="block text-lg mb-1">Name :</label>
                            <textarea type="text" name="name" id="name" row="2" v-model="concert.name"
                                class="h-18 py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full "></textarea>
                        </div>
                        <div class="flex flex-row gap-4">
                            <div class="w-1/2">
                                <label class="block text-lg mb-1">Date Start :</label>
                                <input type="date" name="dateStart" id="dateStart" v-model="date"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-1/2">
                                <label class="block text-lg mb-1">Date End :</label>
                                <input type="date" name="dateStart" id="dateStart" v-model="date"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                        </div>
                        <div class="w-full">
                            <label class="block text-lg mb-1">Location :</label>
                            <textarea type="text" name="localtion" id="localtion" row="3" v-model="concert.location"
                                class="h-24 py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full "></textarea>
                        </div>
                    </div>
                </div>

                <!-- Show Image -->
                <!-- <img v-if="filePreview" :src="filePreview" alt="fileName" style="max-height: 256px"> -->

            </div>
            <div v-if="!handleEdit" class="w-full mt-10 flex flex-col gap-4">
                <div class="w-full mt-2 px-20 text-left flex flex-col gap-4">
                    <div class="w-full mt-2 bg-white text-left flex flex-col">
                        <div class="w-full flex">
                            <div class="w-1/12 py-2 border flex items-center justify-center">
                                <label class="text-lg text-center">Round</label>
                            </div>
                            <div class="w-3/12 border flex items-center justify-center">
                                <label class="text-lg text-center">Date</label>
                            </div>
                            <div class="w-4/12 border flex items-center justify-center">
                                <label class="text-lg text-center">Time Start</label>
                            </div>
                            <div class="w-4/12 border flex items-center justify-center">
                                <label class="text-lg text-center">Time End</label>
                            </div>
                        </div>
                        <div class="w-full flex" v-for="item, index in rounds" :key="index">
                            <div class="w-1/12 py-2 border flex items-center justify-center">
                                <label class="text-lg text-center">{{ index + 1 }}</label>
                            </div>
                            <div class="w-3/12 border flex items-center justify-center">
                                <label class="text-lg text-center">{{ formatDate(item.date) }}</label>
                            </div>
                            <div class="w-4/12 border flex items-center justify-center">
                                <label class="text-lg text-center">{{ item.startTime }}</label>
                            </div>
                            <div class="w-4/12 border flex items-center justify-center">
                                <label class="text-lg text-center">{{ item.endTime }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="w-full flex flex-col gap-4">
                <div class="w-full px-20 text-left">
                    <label class="text-lg block mb-1">Detail :</label>
                    <textarea name="detail" id="detail"
                    v-model="concert.details"
                        className="h-56 py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"></textarea>
                </div>
                <div class="w-full mt-2 px-20 text-left flex flex-col gap-4">
                    <label class="text-lg block w-36">Round :</label>
                    <div v-for="item, index in rounds" :key="index"
                        class="bg-white w-full flex rounded border border-gray-300 items-center">
                        <div class="bg-white w-full flex flex-row gap-10 p-10">
                            <div class="w-1/12 flex items-center">Round {{ index + 1 }}</div>
                            <div class="w-3/12 flex items-center">
                                <label class="w-24">Date : </label>
                                <input type="date" name="date" id="date" v-model="date"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-3/12 flex items-center">
                                <label class="w-36">Time Start : </label>
                                <input type="time" name="dateEnd" id="dateEnd" v-model="concert.startTime"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-3/12 flex items-center">
                                <label class="w-36">Time End : </label>
                                <input type="time" name="dateEnd" id="dateEnd" v-model="date"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-1/12 flex items-center">
                                <button @click="() => deleteRound(index)" class="shadow-sm bg-blue-500 hover:bg-blue-600 rounded w-24 py-2">
                                    <p class="text-lg text-white">Delete</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-end">
                        <button class="bg-orange-300/90 hover:bg-orange-400/90 shadow-sm rounded py-2 w-36"
                        @click="() => addRound()">
                            <p class="text-lg">Add Round</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            isOpen: false,
            selectedRound: { value: null, label: "Select Round and Time" },
            concert: {},
            rounds: [],
            handleEdit: true,
            filePreview: '',
            fileName: '',
            // dateStart: "",
            // dateEnd: this.concert?.dateEnd
        };
    },
    mounted() {
        const id = this.$route.params.concertId
        axios
            .get("http://localhost:3000/getConcertById/" + id)
            .then((res) => {
                this.concert = res.data;
            })
            .catch((err) => {
                console.log(err);
            });
              
        axios.get("http://localhost:3000/getRoundByConcertId/" + id)
            .then((res) => {
                this.rounds = res.data;
            })
            .catch((err) => {
                console.log(err);
            });

    },
    methods: {
        addRound() {
            this.rounds.push({ date: "", startTime: "", endTime: "" })
        },
        deleteRound(index) {
            this.rounds.splice(index, 1)
        },
        formatDate(dateString) {
            const date = moment(dateString);
            return date.format('DD-MM-YYYY');
        },
        onFileChange($event) {
            const file = $event.target.files[0]
            const reader = new FileReader()
            if (file) {
                reader.readAsDataURL(file)
                reader.onload = () => {
                    // Set a new property on the captured `file` and set it to the converted base64 image
                    file.previewBase64 = reader.result
                    // Emit the file with the new previewBase64 property on it
                    this.filePreview = file.previewBase64
                    this.fileName = file.name;
                    this.$emit('file-updated', file)
                }
                reader.onerror = (error) => {
                    console.log('Error ', error)
                }
                console.log("file :" + file)
            }
        },
        SaveData() {
            // console.log("start = " + this.dateStart)
            // console.log("end = " + this.dateStart)
            // console.log("end = " + this.dateStart)
            // console.log(this.concert)
        }
    },
};
</script>
  
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

input[type='file']:focus+.file-label {
    box-shadow: 0 0 0 4px #bae6fd;
}
</style>
  