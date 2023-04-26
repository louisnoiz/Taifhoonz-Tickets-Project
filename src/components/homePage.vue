<template class="w-full h-screen">
  <div class="container mx-auto flex justify-center items-center">
    <div class="grid grid-cols-4 my-10 gap-8">
      <section class="section" id="app">
        <div class="content">
          <div class="flex flex-wrap">
            <div class="ml-auto">
              <div
                class="card max-w-xs rounded overflow-hidden shadow-lg bg-red-200 w-auto"
              >
                <img
                  class="imageConcert w-full"
                  src="https://res.theconcert.com/w_375,h_499,c_thumb/027c5eaa2474e2ed2093030ebf823a2d1/aw-resize-the-concert-01.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-l mb-2">
                    LEO presents ‘Move On จนโคจรมาเจอกัน คอนเสิร์ต’
                  </div>
                  <router-link to="/detail">Details</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style>
.card {
  width: 75%;
  height: 100%;
}
</style>
