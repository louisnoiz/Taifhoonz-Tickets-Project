<template class="w-full h-screen">
    <div class="container mx-auto grid grid-rows gap-4 flex justify-center items-center">
        <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#D2CFCF] p-8">
          <h1 class="text-3xl font-semibold">Sign Up</h1>
          <div class="flex justify-center items-center">
            <form class="w-2/3 grid grid-rows gap-4">
              <div class="grid grid-cols-2 gap-4">
                <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                  placeholder="First name" />
                <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                  placeholder="Last name" />
              </div>
              <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                placeholder="Username" />
              <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                placeholder="Phone" />
              <input type="email" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                placeholder="Email" />
              <div class="grid grid-cols-2 gap-4">
                <input type="password" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                  placeholder="Password" />
                <input type="password" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                  placeholder="Confirm Password" />
              </div>
              <div class="flex justify-center items-center">
                <button type="submit" class="w-1/2 p-2 rounded-xl drop-shadow-lg bg-orange-300">Create an account</button>
              </div>
              <router-link to="/loginpage">Sign in</router-link>
            </form>
          </div>
  
      </div>
  
  
    </div>
  </template>
  
  <script>
/* ✓ GOOD */
export default {
  name: 'signupPage',
  // ...
}
</script>