<template>
  <div class="room">
    <h1 class="title has-text-light">Battle Ship Game </h1>
    <h1 class="title has-text-light">{{party.name}}</h1>
    <div class="columns is-centered roomplayer">
      <div class="column">
         <h1>head</h1>
        <img v-if="Players.playerA.picture" :src="Players.playerA.picture" class="photo-url" alt="">
        <h2 class="subtitle has-text-light">{{Players.playerA.name}}</h2>
        <h2 class="subtitle has-text-primary"></h2>
        <input type="button" :value="party.statusA" :class="setClass(party.own)" @click="statusplayer(party.statusA)">
      </div>
      <div class="column">
        <div v-if="party.playerB">
          <img v-if="Players.playerB.picture" :src="Players.playerB.picture" class="photo-url" alt="">
          <h2 class="subtitle has-text-light">{{Players.playerB.name}}</h2>
          <h2 class="subtitle has-text-primary"></h2>
          <input type="button" :value="party.statusB" :class="setClass(party.playerB)" @click="statusplayer(party.statusB)">
        </div>

      </div>
    </div>
    <div class="columns">
      <div class="column">
        <input type="button " value="Play" class="button is-danger" @click="startgame()">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      boardOnplay: '',
      roomId: ''
    }
  },
  methods: {
    ...mapActions([
      'init',
      'updateparty',
      'loadPlayer',
      'outRoom',
      'deleteRoom',
      'createBoard',
      'getstatusplayerfirebase'
    ]),
    statusplayer (str) {
      var tmp = {
        id: this.roomId,
        str: str
      }
      this.getstatusplayerfirebase(tmp)
      this.updateparty(this.roomId)
    },
    startgame () {
      if (this.Players.playerB.boardOnplay || this.Players.playerA.boardOnplay) {
        window.location.replace('#/placeship')
      } else {
        this.createBoard(this.party)
        this.deleteRoom(this.roomId)
        window.location.replace('#/placeship')
      }
    },
    setClass (id) {
      if (this.me === id) {
        return 'button is-link is-center'
      } else return 'button is-link is-center is-static'
    }
  },
  computed: {
    ...mapGetters([
      'party',
      'user',
      'Players',
      'me'
    ]),
    updateroom () {
      this.updateparty(this.roomId)
    },
    updateplayer () {
      // this.loadPlayer(this.roomId)
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
