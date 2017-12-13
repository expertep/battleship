<template>
  <div class="room">
    <h1 class="title has-text-light">BattleShip Game </h1>
    <h1 class="title has-text-light">{{party.name}}</h1>
    <div class="columns is-centered roomplayer">
      <div class="column" v-if="Players.playerA">
         <h1>head</h1>
        <img v-if="Players.playerA.picture" :src="Players.playerA.picture" class="photo-url" alt="">
        <h2 class="subtitle has-text-light">{{Players.playerA.name}}</h2>
        <h2 class="subtitle has-text-primary"></h2>
        <input type="button" :value="party.statusA" :class="setClass(party.own)" @click="statusplayer(party.statusA)">
      </div>
      <div class="column" v-if="party.playerB">
        <img v-if="Players.playerB.picture" :src="Players.playerB.picture" class="photo-url" alt="">
        <h2 class="subtitle has-text-light">{{Players.playerB.name}}</h2>
        <h2 class="subtitle has-text-primary"></h2>
        <input type="button" :value="party.statusB" :class="setClass(party.playerB)" @click="statusplayer(party.statusB)">
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <input type="button" value="Play" :class="setClassplay(party.statusA,party.statusB)" @click="startgame()">
        <input type="button" value="Back" :class="setClassback(party.statusA)" @click="getout()">
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
        this.createBoard(this.party)
      } else {
        this.deleteRoom(this.roomId)
      }
    },
    getout () {
      this.outRoom(this.roomId, this.me)
    },
    setClass (id) {
      if (this.me === id) {
        return 'button is-link is-center'
      } else return 'button is-link is-center is-static'
    },
    setClassplay (A, B) {
      if (A === 'Ready' && B === 'Ready') {
        return 'button is-link is-center is-danger'
      } else return 'button is-link is-center is-static'
    },
    setClassback (id, B) {
      /* if (this.me === id) {
        return 'button is-link is-center'
      } else return 'button is-link is-center is-static' */
    }
  },
  computed: {
    ...mapGetters([
      'party',
      'user',
      'Players',
      'me'
    ])
  },
  created () {
    this.init()
    this.roomId = this.$route.params.roomId
    this.updateparty(this.roomId)
    this.loadPlayer(this.roomId)
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
