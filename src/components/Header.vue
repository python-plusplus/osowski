<template>
  <div id="header">
    <div id="left">
      <a id="frame1" href="localhost:8080">
        <h3 id="home-logo">Kiona Osowski</h3>
        <p id="home-subtitle">Personal Life Coach</p>
      </a>
    </div>
    <div id="spacer"></div>
      <ul id="right-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link :to="{name: 'about'}">About</router-link></li>
        <li><router-link :to="{name: 'services'}">Services</router-link></li>
        <li><router-link :to="{name: 'blog'}">Blog</router-link></li>
        <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
      </ul> 
  </div> 
</template>

<script>
    export default {
        name:"Header"
    }
</script>

<style scoped>
#header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: fixed;
  width: 100%;
  height: 165px;
  left: 0px;
  top: 0px;

  font-family: Nunito;
  font-style: normal;
  

  color: #000000; 
  background: white;
}

#right-list{
    list-style-type: none;
    /* Auto Layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 

    position: static;
    width: 25%;
    height: 165px; 
    top: 0px;

}

#right-list > li{ 
  flex: 1;
  padding:0px 10px 0px 10px; 
}

#right-list > li > a{
  font-size: 20px;
  color: inherit;
  text-decoration-color: none;
  text-decoration: none;
  font-weight: 100;
}

#spacer{
  width: 33.3%;
}  
#left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: static;
    width: 25%;
    height: 165px;
    left: 0px;
    top: 0px;


    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
}

#frame1{
    /* Frame 1 */
    position: static;

    font-size: 20px;
    color: inherit;
    text-decoration: none; 
}

#home-logo{
  margin-bottom: 10px;
}

#home-subtitle{
  margin-top: 0px;
}

</style>