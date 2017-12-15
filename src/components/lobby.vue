<template>
  <div class="hello">
    <h1 class="title has-text-light">Battle Ship Game </h1>
      <div v-if="user">
        <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
        <h2 class="subtitle has-text-light">{{user.name}}</h2>
      </div>
       <div style = "font-family: 'Alfa Slab One', cursive;">
    
       </div>
      <h2 class="subtitle has-text-primary">
        choose room to play
        </h2>
      <div v-for="(room, key) in rooms" :key="room['.key']">
          <button class="button is-primary" @click="setroomId(key)" v-if="!room.playerB">{{room.name}}</button>
      </div>
      <div class="container">
        <br>
        <router-link to="CreateRoom">
        <img src="../assets/create1.png" class="img">
        </router-link>
      </div>
      <div><img src="../assets/shipwar.png" class="img"></div>
      </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Placeship',
  data () {
    return {
      boardOnplay: ''
    }
  },
  methods: {
    ...mapActions([
      'getroom',
      'joinroomfirebase',
      'deleteBoard'
    ]),
    setroomId (key) {
      this.joinroomfirebase(key)
      this.$router.push({name: 'room', params: {roomId: key}})
    }
  },
  computed: {
    ...mapGetters([
      'rooms',
      'user'
    ])
  },
  created () {
    this.getroom()
    this.deleteBoard()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
