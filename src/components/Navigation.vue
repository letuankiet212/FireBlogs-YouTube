<template>
  <header class="h-9 bg-white border-b-1 border-gray-50 p-r">
    <div class="container flex a-center h100">
      <p class="logo text-2xl lg:text-3xl color-black text-bold">
        FireBlogs
      </p>
      <div
          class="menu flex flex-1 j-end a-center md:p-a md:t-0 md:h-screen md:bg-black transition-all duration-700 md:flex-col md:j-start md:px-2 md:pt-3"
          :class="isActive ? 'md:-l-0' : 'md:-l-23'">
        <a href="" class="text-upper text-base lg:text-xl mx-0.5 color-black md:color-white md:py-1">home</a>
        <a href="" class="text-upper text-base lg:text-xl mx-0.5 color-black md:color-white md:py-1">blog</a>
        <a href="" class="text-upper text-base lg:text-xl mx-0.5 color-black md:color-white md:py-1">login/register</a>
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