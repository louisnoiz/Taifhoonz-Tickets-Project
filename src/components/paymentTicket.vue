<template>
    <div class="container mx-auto">
        <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#c33838] mt-2 bg-gray-50">
            <h1 class="font-bold text-3xl mt-2">รายการชำระเงิน</h1>
            <div class="flex py-8">
                <div class="w-1/2 flex flex-col justify-center items-center">
                    <img class="imgqrpayment w-full rounded-lg"
                        src="https://cdn.discordapp.com/attachments/1023958942554005526/1100013193977401385/IMG_4573.jpg"
                        alt="">
                </div>
                <div class="w-1/2 font-bold text-2xl mt-4">
                    <div class="detailcard flex flex-col items-start">
                        <h2>ชื่อผู้ใช้ : Sarun Viwatborvornwong</h2><br>
                        <p>รายละเอียดบัตร</p><br>
                    </div>
                    <div class="flex flex-col items-start ml-4">
                        <p>ชื่อคอนเสิร์ต : TMD Concert</p><br>
                        <p>วันที่ 24 เมษายน 2566</p><br>
                        <p>รอบเวลา : 15.00</p><br>
                        <p>โซนที่นั่ง : Zone D (Purple)</p><br>
                        <router-link to="/getticket" class="ml-4 px-10 py-4 bg-red-500 text-white font-bold rounded hover:bg-red-600">
                ชำระเงิน </router-link>
                    </div>
                    <div class="flex flex-col items-center mt-4">
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<style>
.imgqrpayment {
    width: 60%;
    height: 100%;
}</style>