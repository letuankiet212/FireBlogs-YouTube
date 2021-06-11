<template>
  <div class="home">
    <Navigation/>
    <Blog :post="welcomeScreen"/>
    <Blog :post="post" :hello="index % 2 == 0 ? 'flex-row-reverse' : ''" v-for="(post,index) in sampleBlogPost"
          :key="index"/>
    <div class="blog-card-wrap bg-gray-100   py-10">
      <div class="container">
        <h3 class="text-3xl pb-3.5 text-upper color-black">view more recent blogs</h3>
        <div class="blog-cards flex j-start flex-wrap">
          <BlogCard :post="post" v-for="(post,index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import BlogCard from "@/components/BlogCard";

export default {
  name: "Home",
  components: {BlogCard, Blog, Footer, Navigation},
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
    sampleBlogCards: [
      {blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1,2021"},
      {blogTitle: "Blog Card #2", blogCoverPhoto: "stock-1", blogDate: "May 1,2021"},
      {blogTitle: "Blog Card #3", blogCoverPhoto: "stock-1", blogDate: "May 1,2021"},
      {blogTitle: "Blog Card #4", blogCoverPhoto: "stock-1", blogDate: "May 1,2021"},
    ]
  })
};
</script>
