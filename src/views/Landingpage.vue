<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  
   <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    
   
      <vx-card
    title="Gradient Background Color"
    title-color="#fff"
    content-color="#fff"
    class="w-1/2 opacity-75">
    <p class="mb-3">You can use <strong>card-background</strong> prop to change background color of card. This prop supports hex, rgba, rgb and theme colors.</p>
    <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>
</vx-card>
      
    
  
  </div>
</template>

<script>
export default{
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false,
    }
  }
}
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
}
</style>
