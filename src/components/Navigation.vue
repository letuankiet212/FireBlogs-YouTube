<template>
  <header class="h-9 bg-white border-b-1 border-gray-50 p-r z-2">
    <div class="container flex a-center h100">
      <p class="logo text-2xl lg:text-3xl color-black text-bold">
        FireBlogs
      </p>
      <div
          class="menu flex flex-1 j-end a-center md:p-a md:t-0 md:h-screen md:bg-gray-500 transition-all duration-700 md:flex-col md:j-start md:px-2 md:pt-3 md:a-start "
          :class="isActive ? 'md:-l-0' : 'md:-l-30'">
        <a href="" class="text-upper text-base lg:text-xl md:text-xl sm:text-2xl mx-1.5 color-black md:color-white md:py-1 hover:color-blue-400 transition-colors duration-300">home</a>
        <a href="" class="text-upper text-base lg:text-xl md:text-xl sm:text-2xl mx-1.5 color-black md:color-white md:py-1 hover:color-blue-400 transition-colors duration-300">blog</a>
        <a href="" class="text-upper text-base lg:text-xl md:text-xl sm:text-2xl mx-1.5 color-black md:color-white md:py-1 hover:color-blue-400 transition-colors duration-300">login/register</a>
      </div>
      <div class="flex-1 flex j-end hidden btn" @click="isActive = !isActive">
        <menu-icon class="h-4 color-black"/>
      </div>
    </div>
  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg'

export default {
  name: "Navigation",
  components: {
    menuIcon
  },
  data: () => ({
    isActive: false
  })
}
</script>

<style scoped>

</style>