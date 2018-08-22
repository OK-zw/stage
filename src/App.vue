<template>
  <div id="app">
   <!--  <app-home></app-home> -->
    <router-view></router-view>
  </div>
</template>


<script>

import AppHome from './components/pages/Home/Home.vue'

export default {
  name: 'App',
  components: {
      AppHome,
      
  }
}
</script>



<style>
    #app{
        height: 100%;
        overflow-x: hidden;
    }

</style>
