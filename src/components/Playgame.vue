<template>
  <div class="hello">
    <div v-if="user">
      <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
      <br>
      <h2 class="subtitle">{{user.displayName}}</h2>
    </div>
    <h1 class="title has-text-light">Battleship</h1>
    <h2 class="subtitle has-text-primary">Let fun with me</h2>
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="tags has-addons">
          <span :class="setClassturn(statusplayer)">
            <h2 class="subtitle has-text-light has-text-weight-light">
              me {{score.A}}
            </h2>
            </span>
          <span :class="setClassturn(statuscoplayer)">
            <h2 class="subtitle has-text-light has-text-weight-light">
              enemy {{score.B}}
            </h2>
          </span>
        </div>
      </div>
    </div>
    <div class="columns is-mobile is-centered">
      <div class="column is-6">
        <h2 class="subtitle has-text-light">me</h2>
        <table>
          <tr v-for="(y, indexY) in Ownsea" :key="y['.key']">
            <td v-for="(x, indexX) in y" :key="x['.key']" :class="setClass(x)">
              <img v-if="x.shipstatus" src="../assets/ship.png" class="img">
            </td>
          </tr>
        </table>
      </div>
      <div class="column is-6">
        <h2 class="subtitle has-text-light">enemy</h2>
        <table>
          <tr v-for="(y, indexY) in Enemysea" :key="y['.key']">
            <td v-for="(x, indexX) in y" :key="x['.key']" @click="setbomb(indexX,indexY,x)" :class="setClass(x)">
              <img v-if="x.bombstatus && x.shipstatus" src="../assets/ship.png" class="img">
            </td>
          </tr>
        </table>
      </div>
    </div>
    <br><br>
  <br>
  <div v-if="score.A == 16 || score.B==16" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <h1 v-if="score.A == 16" class="title has-text-light">You win</h1>
      <h1 v-if="score.B == 16" class="title has-text-light">You lose</h1>
      <button class="button is-primary is-large" @click="finish()">Finish</button>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Placeship',
  data () {
    return {
      x: 0,
      y: 0,
      boardOnplay: '',
      ShipEnemy: '',
      hidemenu: [true, true, true]
    }
  },
  methods: {
    ...mapActions([
      'setbombFirebase',
      'addScore',
      'getEnemy',
      'getOwn',
      'getScore',
      'getBoard',
      'init',
      'changeturn'
    ]),
    setbomb (x, y, obj) {
      if (this.statusplayer === this.turn) {
        if (obj.shipstatus && !obj.bombstatus) {
          this.addScore()
        } else {
          this.changeturn()
        }
        var xy = {
          x: x,
          y: y
        }
        this.setbombFirebase(xy)
      }
    },
    finish () {
      this.$router.push('/lobby')
    },
    showconsole (x, y) {
      console.log(x + ',' + y)
    },
    select (x, y) {
      this.x = x
      this.y = y
    },
    setClass (obj) {
      if (obj.shipstatus && obj.bombstatus) {
        return 'boom'
      } else if (obj.bombstatus) {
        return 'empty'
      } else {
        return ''
      }
    },
    setClassturn (name) {
      if (name === this.turn) {
        return 'tag is-success'
      } else {
        return 'tag is-dark'
      }
    }
  },
  computed: {
    ...mapGetters([
      'Ownsea',
      'Enemysea',
      'score',
      'statusplayer',
      'statuscoplayer',
      'turn',
      'me',
      'user'
    ])
  },
  created () {
    this.init()
    // this.getBoard()
    this.getOwn()
    this.getEnemy()
    this.getScore()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td{
    border:2px solid rgba(0, 204, 255, 0.1);
    width:50px;
    height:50px;
  }
  table{
    width:auto;
    height:auto;
  }
  .img {
    width:40px;
    height:40px;
  }
  .ship{
    background-color: rgb(194, 70, 174);
    margin: 10px;
  }
  .boom {
    background-color: rgba(203, 74, 10, 0.74);
  }
  .empty {
    background-color: rgba(70, 142, 194,0.3);
  }
</style>
