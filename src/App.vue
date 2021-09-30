<template>
  <navbar></navbar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: { Navbar }
};
</script>

<style>
* 
Navbar{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: wheat;
  font-family: Roboto, sans-serif;
}

.container {
  width: 800px;
  margin: 0 auto;
  padding: 15px;
}
</style>
