<template>
    <div class="container mx-auto">
        <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#c33838] mt-2">
            <h1 class="font-bold text-xl mb-2">รายการชำระเงิน</h1>
            <div class="flex items-center">
            
            <div class="w-1/3 flex justify-center items-center">
                <img class="imgqrpayment w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1023958942554005526/1100013193977401385/IMG_4573.jpg" alt="">
            </div>
            <div class="w-2/3 font-bold text-l mb-2">
                <h2 class="">ชื่อผู้ใช้ : Sarun Viwatborvornwong</h2>
                <div>
                    <p>รายละเอียดบัตร</p>
                <p>ชื่อคอนเสิร์ต : TMD Concert</p>
                <p>วันที่ 24 เมษายน 2566</p>
                <p>รอบเวลา : 15.00</p>
                <p>โซนที่นั่ง : Zone D (Purple)</p>
                </div>
                
            </div>
            
        </div>
        <router-link to="/detail" class="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"> ชำระเงิน </router-link>
        </div>
    </div>
</template>
<style>
.imgqrpayment{
    width: 70%;
    height: 100%;
}
</style>