<template>
    <div class="container mx-auto">
        <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#c33838] mt-2 bg-gray-50">
            <h1 class="font-bold text-3xl mt-2">รายการชำระเงิน</h1>
            <div class="flex py-8">
                <div class="w-1/2 flex flex-col justify-center items-center">
                    <img class="imgqrticket w-full rounded-lg"
                        src="https://cdn.discordapp.com/attachments/1023958942554005526/1100109535408046090/frame.png"
                        alt="">
                </div>
                <div class="w-1/2 font-bold text-2xl mt-4">
                    <div class="detailcard flex flex-col items-start">
                        <h2>รายละเอียดบัตร</h2><br>
                    </div>
                    <div class="flex flex-col items-start ml-4">
                        <p>คอนเสิร์ต : TMD Concert</p><br>
                        <p>โซนที่นั่ง : Zone D (Purple)</p><br>
                        <p>รอบวัน : วันที่ 24 เมษายน 2566</p><br>
                        <p>รอบเวลา : 15.00</p><br>
                        <router-link to="/" class="mt-10 ml-4 px-10 py-4 bg-gray-500 text-white font-bold rounded hover:bg-gray-800">
                กลับหน้าหลัก </router-link>
                    </div>
                    <div class="flex flex-col items-center mt-4">
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<style>
.imgqrticket {
    width: 50%;
    height: 90%;
}</style>