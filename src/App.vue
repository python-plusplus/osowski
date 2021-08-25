<template>
  <Header v-if="!navigation"/> 
  <router-view /> 
  <Footer v-if="!navigation" />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import firebase from 'firebase/app'
// import "firebase/auth"
// import "./firebase/firebaseinit"


export default {
  name: 'App',
  components: { 
    Header,
    Footer
  },
  created(){
    this.checkRoute(); 
  },
  data() {
    return {
      navigation: null,
    };
  }, 
  methods: {
    checkRoute() {
      if (this.$route.name === "login" || this.$route.name === "register" || this.$route.name === "forgotpassword") {
        this.navigation = true;  
        return;
      } 
      this.navigation = false;  
    }
  },
  watch:{
    $route() {
      this.checkRoute();
    } 
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito');

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
