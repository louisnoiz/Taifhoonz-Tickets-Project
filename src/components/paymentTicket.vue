<template class="w-full min-h-screen">
    <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
        <div class="container mx-auto py-10 flex flex-col justify-center items-center ">
            <h1 class="font-bold text-3xl mt-2 text-white pb-10">รายการชำระเงิน</h1>
            <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 px-20 mt-2">
                <div class="w-full flex flex-col justify-center items-center">
                    <img class="imgqrpayment w-full rounded-lg"
                        src="https://cdn.discordapp.com/attachments/1023958942554005526/1100013193977401385/IMG_4573.jpg"
                        alt="" />
                </div>
                <div class="w-full font-bold text-xl text-left mt-4 text-white">
                    <div class="detailcard flex flex-col items-start">
                        <h2>ชื่อผู้ใช้ : Sarun Viwatborvornwong</h2><br>
                        <p>รายละเอียดบัตร</p><br>
                    </div>
                    <div class="flex flex-col items-start ml-4">
                        <p>ชื่อคอนเสิร์ต : TMD Concert</p><br>
                        <p>วันที่ 24 เมษายน 2566</p><br>
                        <p>รอบเวลา : 15.00</p><br>
                        <p>โซนที่นั่ง : Zone D (Purple)</p><br>
                        <router-link to="/getticket"
                            class="ml-4 px-10 py-4 bg-red-500 text-white font-bold rounded hover:bg-red-600">
                            ชำระเงิน </router-link>
                    </div>
                    <div class="flex flex-col items-center mt-4">

                    </div>
                </div>
            </div>







            <!-- <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#c33838] mt-2">
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
                            <router-link to="/getticket"
                                class="ml-4 px-10 py-4 bg-red-500 text-white font-bold rounded hover:bg-red-600">
                                ชำระเงิน </router-link>
                        </div>
                        <div class="flex flex-col items-center mt-4">

                        </div>
                    </div>
                </div>
            </div> -->

        </div>
    </div>
</template>
<style>
.imgqrpayment {
    width: 60%;
    height: 100%;
}
</style>