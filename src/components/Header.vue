<template>
  <header>
    <nav class="container">
      <div id="branding">
        <router-link class=header :to="{name: 'home'}">
          <h3 id="home-logo">Kiona Osowski</h3>
          <p id="home-subtitle">Personal Life Coach</p>
        </router-link>
      </div>
      <div class="nav-links"></div>
        <ul v-show="!mobileNav"> 
          <li><router-link class="link" :to="{name: 'about'}">About</router-link></li>
          <li><router-link class="link" :to="{name: 'services'}">Services</router-link></li>
          <li><router-link class="link" :to="{name: 'blog'}">Blog</router-link></li>
          <li><router-link class="link" :to="{name: 'contact'}">Contact</router-link></li>
        </ul> 
    </nav> 
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link :to="{name: 'about'}">About</router-link></li>
          <li><router-link :to="{name: 'services'}">Services</router-link></li>
          <li><router-link :to="{name: 'blog'}">Blog</router-link></li>
          <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
        </ul> 
    </transition>
  </header> 
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
  name:"Header",
  components:{
    menuIcon
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods:{
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile= false;
      this.mobileNav = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  }
    }
</script>

<style lang="scss" scoped>
</style>