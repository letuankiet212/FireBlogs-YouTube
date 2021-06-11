<template>
  <div class="footer bg-gray-500 py-10">
    <div class="container flex a-center md:flex-col" >
      <div class="left w-1/2 md:w-full flex a-center md:flex-col">
        <div class="w-1/2 md:w-full">
          <p class="text-2xl sm:text-3xl text-bold md:text-center">
            FireBlogs
          </p>
          <div class="flex a-center mt-2 md:j-center my-1.5">
            <a href="" class="block w-3 mx-0.5 "><youtube/></a>
            <a href="" class="block w-3 mx-0.5 "><twitter/></a>
            <a href="" class="block w-3 mx-0.5 "><instagram/></a>
            <a href="" class="block w-3 mx-0.5 "><linkedin/></a>
          </div>
        </div>
        <div class="flex-1 p-r md:flex ">
          <a href=""
             class="text-upper text-base block my-1.5 hover:color-blue-300 transition-colors duration-300 md:mx-1.5  sm:text-2xl">Home</a>
          <a href=""
             class="text-upper text-base block my-1.5 hover:color-blue-300 transition-colors duration-300 md:mx-1.5 sm:text-2xl">Blog</a>
          <a href="" class="text-upper text-base block my-1.5 hover:color-blue-300 transition-colors duration-300 md:mx-1.5 sm:text-2xl">LOGIN
            IN/register</a>
        </div>
      </div>
      <div class="right flex-1 flex a-end j-end">
        <p class="text-base text-right lg:text-xl md:text-base sm:text-2xl">Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import youtube from "../assets/Icons/youtube-brands.svg"
import twitter from "../assets/Icons/twitter-brands.svg"
import instagram from "../assets/Icons/instagram-brands.svg"
import linkedin from "../assets/Icons/linkedin-brands.svg"

export default {
  name: "Footer",
  components:{
    youtube,twitter,instagram,linkedin
  }
}
</script>

<style scoped>

</style>