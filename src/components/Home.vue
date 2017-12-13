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
    
    <div>
      <h1 class= "title is-1"> Battleship </h1>
      <h2 class ="title is-4"> Login Facebook </h2>
      <button class="button" @click="login()" v-if="!user">login</button>
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
</style>
