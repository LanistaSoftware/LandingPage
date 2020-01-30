<template>
  <div id="app">
    <header>

      <div class="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="./assets/mp4/bg.mp4" type="video/mp4">
      </video>
      <div class="container">
        <nav class="navbar mt-3">
          <a class="navbar-brand" href="#">
            <img src="../src/assets/img/beyaz.png" width="150" alt="">
          </a>
        </nav>
   
        <div class="row">
          <div class="col-6 mt-5 border border-secondary ">
            <h4 class="text-secondary p-3">Projelerimizi, heyecanımızı ve daha fazlasını sizinle paylaşabilmek için çok çalışıyoruz.</h4>
            <form class="p-3 text-light">
              <div class="form-group tex">
                <label for="exampleInputEmail1">Ad Soyad</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="btn-container">
                <button type="submit" class="btn btn-lg btn-warning">Submit</button>
              </div>
            </form>
          </div>
          <div class="col-6 mt-5">
            <div class="cronos">
              <h1 class="text-warning"> 30:20:45:<span class="text-dark">12</span> </h1>
            </div>
          </div>
        </div>

      </div>
    </header>

  </div>
  </template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="less">
body{
  color:bisque;
}
header {
  position: relative;
  background-color: black;
  height: 100vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}
header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

 .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color:rgb(58, 55, 55);
  opacity: 0.5;
  z-index: 1;
}
image{
  widows: 150px;
}
h4{
  text-shadow: 1px white;
  border: solid 1px white;
}
.cronos{
  margin-top:20%;
  text-align: center;
  h1{
  font-size: 72px;
  }
}
.btn-container{
  text-align: right;
}


</style>
