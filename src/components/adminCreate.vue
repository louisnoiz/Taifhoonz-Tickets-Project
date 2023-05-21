<template class="w-full min-h-screen">
    <div class="w-full min-h-screen ">
        <div class="container mx-auto py-10 flex flex-col justify-center items-center ">
            <div class="w-full flex justify-end items-center px-20">
                <div class="w-full flex justify-end items-center px-10">
                    <button class="w-24 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded text-lg tracking-wide"
                        @click="create()">
                        Create
                    </button>
                    <router-link to="/admin">
                        <button
                            class="w-24 ml-10 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded text-lg tracking-wide">
                            Cancel
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 px-20 mt-2 ">
                <div class="w-full flex flex-col mt-4 py-4">
                    <label class="text-lg text-left block mb-1">Image :</label>
                    <input id="file-input" class="hide-file-input hidden" type="file" accept="image/*"
                        @change="onFileChange($event)" />
                    <label
                        class="w-full h-96 bg-white p-3 mr-4 flex flex-col gap-4 justify-center items-center border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100"
                        for="file-input">
                        <p>Upload a file</p>
                        <p class="text-gray-500">{{ fileName ? fileName : "No file chosen" }}</p>
                    </label>
                </div>
                <div class="w-full px-8">
                    <div class="flex flex-col gap-4 py-4 mt-4 text-left">
                        <div class="w-full">
                            <label class="block text-lg mb-1">Concert Name :</label>
                            <input type="text" name="name" id="name" v-model="name"
                                class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                        </div>
                        <div class="w-full">
                            <label class="block text-lg mb-1">Artist :</label>
                            <input type="text" name="artist" id="artist" v-model="artist"
                                class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                        </div>
                        <div class="flex flex-row gap-4">
                            <div class="w-1/2">
                                <label class="block text-lg mb-1">Date Start :</label>
                                <input type="date" name="dateStart" id="dateStart" v-model="dateStart"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-1/2">
                                <label class="block text-lg mb-1">Date End :</label>
                                <input type="date" name="dateStart" id="dateStart" v-model="dateEnd"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                        </div>
                        <!-- <div class="flex flex-row gap-4">
                            <div class="w-1/2">
                                <label class="block text-lg mb-1">Time Start :</label>
                                <input type="time" name="timeStart" id="timeStart" v-model=""
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-1/2">
                                <label class="block text-lg mb-1">Time End :</label>
                                <input type="time" name="timeStart" id="timeStart" v-model=""
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                        </div> -->
                        <div class="w-full">
                            <label class="block text-lg mb-1">Location :</label>
                            <textarea type="text" name="localtion" id="localtion" row="2" v-model="localtion"
                                class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full "></textarea>
                        </div>
                    </div>
                </div>

                <!-- Show Image -->
                <!-- <img v-if="filePreview" :src="filePreview" alt="fileName" style="max-height: 256px"> -->

            </div>
            <div class="w-full flex flex-col gap-4">
                <div class="w-full px-20 text-left">
                    <label class="text-lg block mb-1">Detail :</label>
                    <textarea name="detail" id="detail" v-model="details"
                        className="h-56 py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"></textarea>
                </div>
                <div class="w-full mt-2 px-20 text-left flex flex-col gap-4">
                    <label class="text-lg block w-36">Round :</label>
                    <div v-for="item, index in rounds" :key="index"
                        class="bg-white w-full flex rounded border border-gray-300 items-center">
                        <div class="bg-white w-full flex flex-row gap-10 p-10">
                            <div class="w-2/12 flex items-center">Round {{ index + 1 }}</div>
                            <div class="w-3/12 flex items-center">
                                <label class="w-24">Date : </label>
                                <input type="date" name="date" id="date" v-model="item.date"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-3/12 flex items-center">
                                <label class="w-36">Time Start : </label>
                                <input type="time" name="dateEnd" id="dateEnd" v-model="item.timeStart"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-3/12 flex items-center">
                                <label class="w-36">Time End : </label>
                                <input type="time" name="dateEnd" id="dateEnd" v-model="item.timeEnd"
                                    class="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " />
                            </div>
                            <div class="w-1/12 flex items-center">
                                <button class="shadow-sm bg-blue-500 hover:bg-blue-600 rounded w-24 py-2"
                                    @click="() => deleteRound(index)">
                                    <p class="text-lg text-white">Delete</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-end">
                        <button class="bg-orange-300 hover:bg-orange-400 shadow-sm rounded py-2 w-36"
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
// import FileComponent from "./FileComponent"
import axios from 'axios';
export default {
    // components: { FileComponent },
    data() {
        return {
            name: '',
            details: '',
            localtion: '',
            artist: '',
            dateStart: '',
            dateEnd: '',
            rounds: [{ date: "", timeStart: "", timeEnd: "" }],
            filePreview: '',
            fileName: '',
            image: null,
        };
    },
    methods: {
        addRound() {
            this.rounds.push({ date: "", timeStart: "", timeEnd: "" })
        },
        create() {
            let formData = new FormData();
            formData.append('image', this.image);
            formData.append('name', this.name);
            formData.append('details', this.details);
            formData.append('localtion', this.localtion);
            formData.append('dateStart', this.dateStart);
            formData.append('dateEnd', this.dateEnd);
            formData.append('artist', this.artist);
            formData.append('rounds', this.rounds);

            axios.post('http://localhost:3000/createConcert', formData)
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
        },
        deleteRound(index) {
            this.rounds.splice(index, 1)
        },
        selectRound(round) {
            this.selectedRound = round;
            this.isOpen = false;
        },
        onFileChange($event) {
            const file = $event.target.files[0]
            this.image = file
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
    },
};
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

/* .hide-file-input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
} */

/* .file-label {
    color: #fff;
    background-color: #3730a3;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
} */

input[type='file']:focus+.file-label {
    box-shadow: 0 0 0 4px #bae6fd;
}
</style>
  