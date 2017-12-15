<template>
  <div class="room">
    <h1 class="title has-text-light">BattleShip Game </h1>
    <h3 class="title has-text-light">{{party.name}}</h3>
    <div class="columns is-centered roomplayer">
      <div class="column" v-if="Players.playerA">
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
        <button class="play" @click="startgame()" v-if="setClassplay(party.statusA,party.statusB)"></button>
        <button class="play1" v-else></button>
        <button class="back" @click="getout()"></button>
      </div>
    </div>
  </div>
</template>

<script>
// setClassplay(party.statusA,party.statusB)
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
      'getstatusplayerfirebase',
      'loadPlayerswap'
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
        this.deleteRoom(this.roomId)
      } else {
        this.createBoard()
      }
      this.loadPlayerswap()
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
      console.log(5345)
      if (A === 'Ready' && B === 'Ready') {
        return true
      } else return false
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
  width: 70px;
  height: 70px;
  border-radius: 20px;
  }
  .roomplayer {
    padding: 100px;
  }
h1{
  font-size: 70px;
  text-shadow: 3px 3px 3px #aaa;
}
h2{
  font-size: 20px;
  font-weight: bold;
}
h3{
  font-size: 40px;
}
button{
  background-color: Transparent;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  transition: .5s ease;
}
.play1{
  background-image: url("../assets/play3.png");
  width:122px;
  height:42px;
}
.play{
  background-image: url("../assets/play1.png");
  width:122px;
  height:42px;
}
.play:hover{
  background-image: url("../assets/play2.png");
  width:122px;
  height:42px;
}
.back{
  background-image: url("../assets/back1.png");
  width:116px;
  height:42px;
}
.back:hover{
  background-image: url("../assets/back2.png");
  width:116px;
  height:42px;
}
</style>
