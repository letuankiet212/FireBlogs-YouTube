<template>
  <div class="flex-1 h-36 p-r color-black text-center bg-white mx-0.5 br-5 flex flex-col overflow-hidden btn">
    <img :src="require('../assets/blogCards/' + post.blogCoverPhoto + '.jpg')" alt="" class="w-full h-20 object-cover">
    <div class="text flex-1 text-left text-xl px-1.5">
      <p>
        {{ post.blogTitle }}
      </p>
      <p class="text-sm">
        {{ post.blogDate }}
      </p>
    </div>

    <div class="p-a l-2 b-3 text-upper text-sm">
      view the post
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ['post']
}
</script>

<style scoped>

</style>