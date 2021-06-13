<template>
  <div class="blog-wrapper">
    <div class="blog-content h-64 md:h-72  flex md:flex-col "
         :class="post.welcomeScreen ? 'bg-gray-500' :'bg-white ' + hello">
      <div class="w-2/5 p-r md:w-full md:order-1 flex-1" v-if="post.welcomeScreen">
        <div class="centered">
          <p class="text-3xl text-upper">
            {{ post.title }}
          </p>
          <br>
          <p>
            {{ post.blogPost }}
          </p>
          <br>
          <div class="flex btn hover:color-blue-400 transition-colors duration-700">
            <p class="text-base text-bold  lg:text-xl">
              LOGIN/REGISTER
            </p>

            <arrow class="w-1.5 ml-0.5"/>
          </div>
        </div>
      </div>
      <div class="w-2/5 p-r md:w-full md:order-1 flex-1" v-else>
        <div class="centered color-black">
          <p class="text-3xl text-upper">
            {{ post.title }}
          </p>
          <br>
          <p>
            {{ post.blogPost }}
          </p>
          <br>
          <div class="flex btn hover:color-blue-400 transition-colors duration-700">
            <p  class="text-base text-bold  lg:text-xltext-upper">view more
            </p>
            <arrow class="w-1.5 ml-0.5"/>
          </div>
        </div>
      </div>
      <div class="w-3/5 md:w-full md:order-0 md:h-40 ">
        <img :src="require('../assets/blogPhotos/' + post.photo + '.jpg')" alt="" class="w100 h-full  object-fill">
      </div>
    </div>
  </div>
</template>

<script>
import arrow from './../assets/Icons/arrow-right-light.svg'

export default {
  name: "Blog",
  props: ['post', 'hello'],
  components: {
    arrow
  }
}
</script>

<style scoped>

</style>