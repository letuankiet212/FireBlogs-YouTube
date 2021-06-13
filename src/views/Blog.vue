<template>
  <div class="blog-card-wrap bg-gray-100 py-10 h-screen md:-mb-20">
    <div class="blog-cards container p-r">
      <div class="toggle-edit flex a-center p-a t-0 r-2">
        <span class="color-black text-3xl mr-1">Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" class="p-r bg-white w-8 br-10 "/>
      </div>
      <div class="blog-cards grid-cols-4 grid gap-4 lg:grid-cols-3 md:grid-cols-2 pt-7">
        <BlogCard :post="post" v-for="(post,index) in this.$store.state.sampleBlogCards" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>

import BlogCard from "@/components/BlogCard";

export default {
  name: "Blog",
  components: {
    BlogCard
  },
  computed: {
    editPost: {
      get() {
        return this.$store.state.editPost
      },
      set(payload) {
        this.$store.commit('TOGGLE_EDIT_POST', payload)
      }
    }
  },
  beforeDestroy() {
    this.$store.commit('TOGGLE_EDIT_POST',false)
  }
}
</script>

<style scoped>
input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: white;
  outline: none;
  width: 8rem;
  height: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #303030;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

input:checked[type="checkbox"]:before {
  background: #fff;
  left: 52px;
}
</style>