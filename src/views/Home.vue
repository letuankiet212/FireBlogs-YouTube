<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" :hello="index % 2 == 0 ? 'flex-row-reverse' : ''" v-for="(post,index) in sampleBlogPost"
          :key="index"/>
    <div class="blog-card-wrap bg-gray-100 py-10">
      <div class="container">
        <h3 class="text-3xl pb-3.5 text-upper color-black">view more recent blogs</h3>
        <div class="blog-cards grid-cols-4 grid gap-1 md:grid-cols-3 sm:grid-cols-2">
          <BlogCard :post="post" v-for="(post,index) in this.$store.state.sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="container py-12 flex j-space-between color-black a-center md:flex-col">
        <p class="text-5xl text-upper w-1/3 md:w-full" >
          Never miss a post. Register for your free account <br class="md:hidden"> today!
        </p>
        <div class="flex-1 md:mt-2.5">
          <span class="bg-gray-500 br-full color-white py-1.5 px-2.5 text-base float-right btn hover:bg-black transition-colors duration-500 md:text-2xl">
            REGISTER FOR FIREBLOG
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import BlogCard from "@/components/BlogCard";

export default {
  name: "Home",
  components: {BlogCard, BlogPost},
  data: () => ({
    welcomeScreen: {
      title: "Welcome!",
      blogPost: "Weekly blog articles with all things programing including HTML,CSS,JavaScript and more.Register today to never miss a",
      welcomeScreen: true,
      photo: "coding"
    },
    sampleBlogPost: [
      {
        title: "This is a Fillter Title!",
        blogPost: "This is a filler blog post title!",
        photo: "beautiful-stories",
      },
      {
        title: "This is a Fillter Title2!",
        blogPost: "This is a filler blog post title!",
        photo: "designed-for-everyone",
      },
    ],

  })
};
</script>
