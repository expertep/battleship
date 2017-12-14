<template>
  <div class="hello">
    <h1 class="title has-text-light">Battle Ship Game </h1>
      <div v-if="user">
        <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
        <h2 class="subtitle has-text-light">{{user.name}}</h2>
      </div>

      <h2 class="subtitle has-text-primary">choose room to play</h2>
      <div v-for="(room, key) in rooms" :key="room['.key']">
          <button class="button is-primary" @click="setroomId(key)" v-if="!room.playerB">{{room.name}}</button>
      </div>
      <a class="button is-light">
        <center>
        <router-link to="CreateRoom">
        <input type="button " value="create room" class="button is-link">
        </router-link>
        </center>
      </a>
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
</style>
