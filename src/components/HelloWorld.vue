<template> 
  <div id="header">
    <div id="left">
      <a href="localhost:8080">
        <h3 id="home-logo">Kiona Osowski</h3>
        <p id="home-subtitle">Personal Life Coach</p>
      </a>
    </div>

    <div id="right">
      <ul>
        <li><a href="https://www.google.com">Home</a></li>
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div> 
  </div> 

  <div id="jumbotron" class="big-section">
    <div id="title">
    <h4 id="upper-title">AMBITION IS THE FIRST STEP TOWARDS</h4>
    <h1 id="main-title">SUCCESS</h1>
    <p id="sub-title">Now Available for Online Coaching</p>
    </div>

    <button id="jumbo-button" type="button">Book Now</button>
  </div>

  <div id="section-1" class="small-section">
    <div id="about-me">
      <h2 class="section-header">ABOUT ME</h2>
      <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. 
        <br><br>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
      </p>

      <button>Read More</button>
    </div> 
    <img>
  </div>

  <div id="section-2" class="big-section">
    <div id="how-i-can-help">
      <h2 class="section-header">HOW I CAN HELP YOU</h2>
    </div>
  </div>

  <div id="Footer" class="small-section">
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
