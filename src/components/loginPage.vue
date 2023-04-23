<template class="w-full h-screen">
  <div class="container mx-auto flex justify-center items-center">
    <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#D2CFCF] p-8 px-20">
      <h1 class="text-3xl font-semibold">Log in</h1>
      <div class="flex justify-center items-center">
        <form class="grid grid-rows gap-4">
          <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
            placeholder="Username" />
          <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
            placeholder="Password" />
          <div class="flex justify-center items-center">
            <button type="submit" class="w-1/2 p-2 rounded-xl drop-shadow-lg bg-orange-300">log in</button>
          </div>
          <router-link to="/loginpage">Sign up</router-link>
        </form>
      </div>

    </div>


  </div>
</template>

<script>
/* ✓ GOOD */
export default {
  name: 'loginPage',
  // ...
}
</script>