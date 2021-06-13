<template>
  <div class="form-wrap">
    <form action="" class="login">
      <p class="login-register">
        Dont'have an account?
        <router-link :to="{name:'Register'}" class="router-link"></router-link>
      </p>
      <h2>Login to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input id="" v-model="email" name="" placeholder="Email" type="text">
          <EmailIcon/>
        </div>
        <div class="input">
          <input id="" v-model="password" name="" placeholder="Email" type="password">
          <PasswordIcon/>
        </div>
      </div>
      <router-link class="forgot-password" :to="{name:'ForgotPassword'}">Forgot your Password </router-link>
    </form>
  </div>
</template>

<script>
import EmailIcon from "../assets/Icons/envelope-regular.svg"
import PasswordIcon from "../assets/Icons/lock-alt-solid.svg"
export default {
  name: "Login",
  components:{
    EmailIcon,
    PasswordIcon
  }
}
</script>

<style scoped>

</style>