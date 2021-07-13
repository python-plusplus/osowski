<template>
  <Header /> 
  <router-view /> 
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { 
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
}
</style>
