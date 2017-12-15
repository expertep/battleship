<template>
  <div>
    <div class="columns">
      <div class="column is-hidden-mobile">
      </div>
      <div class="column is-8">
        <div class="logo">
          <img src="../assets/battleship.png">
        </div>
        <div v-if="user" class="">
          <center>
          <div class="box user">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong class="has-text-white">{{user.name}}</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
          </center>
            <router-link to="lobby">
              <div class="container">
                <img src="../assets/letplay1.png" class="img">
                <div class="overlay">
                  <div class ="text">
                    <img src="../assets/letplay2.png" class="img">
                  </div>
                </div>
              </div>
            </router-link>
          <div class="container">
            <img src="../assets/logout1.png" class="img">
            <div class="overlay">
              <div class = "text" @click="logout()">
                  <img src="../assets/logout2.png" class="img">
              </div>
            </div>
          </div>
        </div>
        
        <div class="container" v-if="!user" >
          <img src="../assets/login1.png" class="img">
          <div class="overlay">
            <div class = "text" @click="login()">
                <img src="../assets/login2.png" class="img">
            </div>
          </div>
        </div>
      </div>
      <div class="column is-hidden-mobile">
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
.logo {
  margin-bottom: 40px;
  display: block;
}
.user {
  max-width: 300px;
  margin: 50px;
  border-radius: 30px;
  border: 2px solid #125598;
  background: rgba(37,45,56,0.7);
}
.content {
  color: white;
}
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
