<template>
  <div>
    <div v-if="user">
      <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
      <br>
      <h2 class="subtitle">{{user.displayName}}</h2>
      <button class="button" @click="logout()">Logout</button>
    </div>
    
    <br><br><br>
    <router-link to="lobby">
      <button class="button" v-if="user">LET PLAY</button>
    </router-link>
    </a>
    
    <div style = "font-family: 'Alfa Slab One', cursive;">
      <h1 class= "title is-0"> Welcome </h1>
      <img src="../assets/battleship.png" class="img">
      <br ><br ><br ><br ><br >
      <h3 class ="title is-4"> Login Facebook </h3>


      <div class="container">
        <img src="../assets/login1.png" class="img">
        <div class="overlay">
          <div class = "text" @click="login()" v-if="!user" >
              <img src="../assets/login2.png" class="img">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      newPostInput: ''
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'me'
    ])
  },
  methods: {
    ...mapActions([
      'logout',
      'login',
      'init'
    ])
  },
  created () {
    this.init()
  }
}
</script>

<style scoped>
.photo-url {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}
h1 {
    color: white;
    font-size: 80px;
    text-shadow: 5px 5px 5px #aaa;
}
h2 {
    color: white;
    text-shadow: 3px 3px 3px #aaa;
}
h3 {
    color: white;
    text-shadow: 2px 2px 2px #aaa;
}

.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
