<template>
  <div
      class="h-40 lg:h-48 md:h-32 p-r color-black text-center bg-white br-5 flex flex-col overflow-hidden btn w-full p-r">
    <div class="p-a r-1 t-1 flex" v-show="edtPost">
      <div class="btn-edit w-3 h-3 lg:w-4 lg:h-4 br-full p-r bg-gray-50 border-1 border-gray-400  mr-1 btn">
        <IconEdit class=" w-full h-full  p-0.5 color-gray-500" style="margin-left: 0.2rem"/>
      </div>
      <div class="btn-edit w-3 h-3 lg:w-4 lg:h-4 br-full p-r bg-gray-50 border-1 border-gray-400  btn">
        <IconDel class=" w-full h-full  p-0.5 color-gray-500"/>
      </div>
    </div>

    <img :src="require('../assets/blogCards/' + post.blogCoverPhoto + '.jpg')" alt="" class="w-full h-20 object-cover">
    <div class="text flex-1 text-left text-xl lg:text-3xl pt-1 px-1.5 sm:text-3xl">
      <p>
        {{ post.blogTitle }}
      </p>
      <p class="text-sm lg:text-xl sm:text-2xl sm:mt-1">
        {{ post.blogDate }}
      </p>
    </div>
    <div class="p-a l-2 b-3 lg:b-1 text-upper text-sm lg:text-xl sm:text-2xl">
      view the post
    </div>
  </div>
</template>

<script>
import IconEdit from '../assets/Icons/edit-regular.svg'
import IconDel from '../assets/Icons/trash-regular.svg'

export default {
  name: "BlogCard",
  props: ['post'],
  components: {
    IconEdit, IconDel
  },
  computed: {
    edtPost() {
      return this.$store.state.editPost
    }
  }
}
</script>

<style scoped>

</style>