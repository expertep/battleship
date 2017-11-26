<template>
  <div class="room">
    <h1 class="title has-text-light">Battle Ship Game </h1>
    <h1 class="title has-text-light">{{party.name}}</h1>
    <div class="columns is-centered roomplayer">
      <div class="column">
        <div v-if="me == party.own">
         <h1>head</h1>
        </div>
        <img :src="Players.playerA.picture" class="photo-url" alt="">
        <h2 class="subtitle has-text-light">{{Players.playerA.name}}</h2>
        <h2 class="subtitle has-text-primary"></h2>
        <input type="button" :value="status.A" class="button is-link is-center" @click="statusplayer('A')">
      </div>
      <div class="column">
        <div v-if="party.playerB">
          <img :src="Players.playerB.picture" class="photo-url" alt="">
          <h2 class="subtitle has-text-light">{{Players.playerB.name}}</h2>
          <h2 class="subtitle has-text-primary"></h2>
          <input type="button" :value="status.B" class="button is-link is-center" @click="statusplayer('B')">
        </div>

      </div>
    </div>
    <div class="columns">
      <div class="column">
        <input type="button " value="Play" class="button is-danger" @click="startgame()">
      </div>

      <div class="ready">
        <button class="button is-primary is-large" @click="Playgame()">READY</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      boardOnplay: '0011',
      roomId: '',
      status: {
        A: 'Wait',
        B: 'Wait'
      }
    }
  },
  methods: {
    ...mapActions([
      'init',
      'updateparty',
      'loadPlayer',
      'outRoom',
      'deleteRoom',
      'createBoard'
    ]),
    statusplayer (player) {
      var str = 'Ready'
      if (player === 'A') {
        if (this.status.A === 'Wait') this.status.A = str
        else this.status.A = 'Wait'
      } else {
        if (this.status.B === 'Wait') this.status.B = str
        else this.status.B = 'Wait'
      }
      if (this.status.A === 'Ready' && this.status.B === 'Ready') {
        this.startgame()
      }
    },
    startgame () {
      this.createBoard(this.party)
      this.deleteRoom(this.roomId)
      window.location.replace('#/placeship')
    }
  },
  computed: {
    ...mapGetters([
      'party',
      'user',
      'Players',
      'me'
    ]),
    undateroom () {
      this.updateparty(this.roomId)
      this.loadPlayer(this.roomId)
    }
  },
  created () {
    this.roomId = this.$route.params.roomId
    this.init()
    this.updateparty(this.roomId)
    this.loadPlayer(this.roomId)
  },
  beforeDestroy () {
    /* if (this.me === this.party.own) {
      this.outRoom(this.roomId, 'A')
    } else {
      this.outRoom(this.roomId, 'B')
    } */
  }
}
</script>

<style scoped>
  .photo-url {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  }
  .roomplayer {
    padding: 100px;
  }

</style>
