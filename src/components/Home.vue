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
          <br><br>
            <router-link to="lobby">
              <button class="letplay let" @click="CreateRoom()"></button>
            </router-link>
            <br><br>
            <button class="logout" @click="logout()"></button>
        </div>
        <button class="logout" @click="login()" v-if="!user"></button>
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
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
button{
  background-color: Transparent;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  transition: .5s ease;
}
.letplay{
  background-image: url("../assets/letplay1.png");
  width:150px;
  height:54px;
  
}
.letplay:hover{
  background-image: url("../assets/letplay2.png");
  width:200px;
  height:72px;
}
.logout{
  background-image: url("../assets/logout1.png");
  width:122px;
  height:42px;
  
}
.logout:hover{
  background-image: url("../assets/logout2.png");
  width:127px;
  height:45px;
}
.login{
  background-image: url("../assets/login1.png");
  width:150px;
  height:54px;
}
.login:hover{
  background-image: url("../assets/login2.png");
  width:200px;
  height:72px;
}
</style>
