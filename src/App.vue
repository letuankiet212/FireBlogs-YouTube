<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navigation"/>
      <router-view/>
      <Footer v-if="!navigation"/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {Footer, Navigation},
  data() {
    return {
      navigation: null
    };
  },
  created() {
    this.checkRoute()
  },
  mounted() {
  },
  methods: {
    checkRoute() {
      if (this.$route.name == "Login" || this.$route.name == "Register" || this.$route.name == "ForgotPassword") {
        this.navigation = true
        return;
      }
      this.navigation = false;
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  },
};
</script>

<style lang="scss">
</style>
