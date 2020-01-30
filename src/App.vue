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
            <h5 class="altlogo pt-3">Think. Create. Develop</h5>
          </a>
          <ul class="footer-icons text-center">
            <h5 class="text-light">Bizi takip et!</h5>

					<li><a href="#"><div class="social border border-secondary"><i class="fab fa-facebook-f"></i></div></a></li>
					<li><a href="#"><div class="social border border-secondary"><i class="fab fa-twitter"></i></div></a></li>
					<li><a href="#"><div class="social border border-secondary"><i class="fab fa-linkedin"></i></div></a></li>
					<li><a href="#"><div class="social border border-secondary"><i class="fab fa-instagram"></i></div></a></li>
					<li><a href="#"><div class="social border border-secondary"><i class="fab fa-pinterest"></i></div></a></li>

				</ul>
        </nav>
   
        <div class="row">
          <div class="col-6 mt-5 border border-secondary ">
            <h3 class="pl-3 pt-4">İletişime geç.</h3>
            <h4 class="text-light pl-3 pt-4">Heyecanımıza ortak olmak için bizimle iletişime geçin.</h4>
            <form class="p-3 text-warning">
              <div class="form-group tex">
                <label for="inputName">Ad Soyad</label>
                <input type="email" class="form-control" id="inputName" aria-describedby="emailHelp"
                  placeholder="İsim ve Soyisim giriniz.">
              </div>
              <div class="form-group">
                <label for="inputEmail">Email adresinizi giriniz.</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"
                  placeholder="Enter adresinizi giriniz.">
              </div>
              <div class="form-group">
                <label for="messageBox">Mesajınızı bırakabilirsiniz.</label>
                <textarea class="form-control" id="messageBox" rows="3" placeholder="Mesajınızı giriniz."></textarea>
              </div>
              <div class="btn-container">
                <button type="submit" class="btn btn-lg btn-warning text-light">Gönder</button>
              </div>
            </form>
          </div>
          <div class="col-6 mt-5">
            <div class="cronos">
              <h2 class="heading">Projelerimizi, heyecanımızı ve daha fazlasını sizinle paylaşabilmek için çok çalışıyoruz.</h2>
              <hr class="border border-secondary mt-5">
              <h1 class="text-warning pt-2"> 30:20:45:<span class="second">12</span> </h1>
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
  font-family: 'Josefin Sans', sans-serif;
  color:#FFC107;
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
input, select, textarea{
    color: white !important;
}

textarea:focus, input:focus {
    color: white !important;
}
input,textarea
{
    background: transparent !important;

    color:white;
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
font-size:21px;
font-family: 'Martel', serif;
}
.cronos{
  
  text-align: center;
  h1{
  font-size: 72px;
  }
  h2{
    font-family: 'Martel', serif;
    color:white;
  }
}
.btn-container{
  text-align: right;
}
.altlogo{
  color:#AC1958;
}
.second{
  color:#AC1958;
}
.social{
  width: 50px;
  
}
li,ul{
  list-style: none;
}
li{

  float: left;
  padding: 2px;
}
i{
  font-size: 3  0px;
  color:#FFC107;
  padding:10px;
}


</style>
