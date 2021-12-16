<template>
  <v-app>
    <Navbar/>
     <v-main>
      <v-container fluid class="bg-panel">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'
//import Footer from '@/components/Footer'
export default {
  name: 'App',

  components: {
   Navbar,
   //Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import './assets/styles/common.css';
@import './assets/styles/responsive.css';

</style>
