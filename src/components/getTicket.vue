<template class="w-full min-h-screen">
    <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
        <div class="container mx-auto py-10 flex flex-col justify-center items-center text-white">
            <h1 class="font-bold text-3xl mt-2 pb-10 tracking-wide">การชำระเงินเสร็จสิ้น</h1>
            <p class="font-bold text-lg mt-1 tracking-wide">คุณสามารถแสกน QR Code เพื่อบันทึกรายละเอียดการชำระเงินนี้
                และสามารถนำหลักฐานนี้ไปยื่นที่หน้างานได้</p>
            <div class="flex py-8">
                <div class="w-full flex flex-col justify-center items-center">
                    <img class="imgqrticket w-full rounded-lg"
                        src="https://cdn.discordapp.com/attachments/1023958942554005526/1100109535408046090/frame.png"
                        alt="">
                </div>
                <div class="w-full px-8 text-white text-xl tracking-wide">
                    <div class="flex flex-col gap-5 py-4 mt-4 text-left">
                        <p class="mt-5 font-semibold underline underline-offset-4">รายละเอียดบัตร</p>
                        <p>ชื่อคอนเสิร์ต : TMD Concert</p>
                        <p>รอบวัน : 24 เมษายน 2566</p>
                        <p>รอบเวลา : 15.00</p>
                        <p>โซนที่นั่ง : Zone D (Purple)</p>
                        <router-link to="/"
                            class=" w-56 mt-10 px-10 py-4 text-center bg-gray-500 text-white font-bold rounded hover:bg-gray-800">
                            กลับหน้าหลัก </router-link>
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
}
</style>