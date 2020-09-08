<template>
  <div>
    <h1>Logout</h1>
    <p v-if="!this.$store.getters.isLogged">You are now logged out.</p>
    <p v-else>You are still logged in for some reason. </p>
  </div>
</template>

<script>
export default {

    mounted() {
             this.$store.dispatch("logout").catch(err => {
            console.log("From Logout.vue");
            console.log(err);
            });
    }
    

};
</script>