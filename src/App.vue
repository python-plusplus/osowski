<template> 
  <HelloWorld msg="Welcome to the gucci gang yeet"/>
  <TestButton/>
  <TestButton/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestButton from './components/TestButton.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
