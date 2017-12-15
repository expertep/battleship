<template>
  <div class="hello">
    <h1 class="title has-text-light">Battleship</h1>
    <h2 class="subtitle has-text-primary">Let fun with me</h2>
    <div class="columns is-mobile is-centered">
      <div class="column is-6  is-centered">
        <center>
          <div class="box user">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img v-if="Players.playerA.picture" :src="Players.playerA.picture" class="photo-url">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong class="has-text-white">{{Players.playerA.name}}</strong>
                  <br>Me
                  </p>
                </div>
              </div>
            </article>
          </div>

        <table>
          <tr v-for="(y, indexY) in Ownsea" :key="y['.key']">
            <td v-for="(x, indexX) in y" :key="x['.key']" :class="setClass(x)">
              <div class="contain" v-if="x.shipstatus">
                <img v-if="x.bombstatus" src="../assets/explosion.gif" class="img overlay">
                <img src="../assets/ship.png" class="img">
              </div>
            </td>
          </tr>
        </table>
        </center>
      </div>
      <div class="column is-6  is-centered">
        <center>
          <div class="box user ene">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img v-if="Players.playerB.picture" :src="Players.playerB.picture" class="photo-url" alt="">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong class="has-text-white">{{Players.playerB.name}}</strong>
                  <br>Enemy
                  </p>
                </div>
              </div>
            </article>
          </div>

        <table :class="setClassturn()">
          <tr v-for="(y, indexY) in Enemysea" :key="y['.key']">
            <td v-for="(x, indexX) in y" :key="x['.key']" @click="setbomb(indexX,indexY,x)" :class="setClass(x)">
                <div class="contain" v-if="x.shipstatus && x.bombstatus">
                  <img src="../assets/explosion.gif" class="img overlay">
                  <img src="../assets/ship.png" class="img">
                </div>
            </td>
          </tr>
        </table>
        </center>
      </div>
    </div>
    <span class="alert">
      <h1 class="title has-text-light" v-if="statuscoplayer == turn">
        Not your turn
      </h1>
    </span>
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
    setClassturn () {
      if (this.statusplayer === this.turn) {
        return 'enemy'
      } else {
        return ''
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
      'user',
      'Players'
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
  #hello {
    font-family: 'Pangolin', cursive;
  }
  .alert {
    position: absolute;
    top: 500px;
    right: 10%;
  }
    .user {
      max-width: 350px;
      margin: 50px;
      border-radius: 30px;
      border: 2px solid #125598;
      background: rgba(37,45,56,0.7);
    }
    .ene {
      border: 2px solid #f1144b;
    }
    .content {
      color: white;
    }
  .photo-url {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }
  .enemy td:hover{
    background-color: rgba(0, 204, 255, 0.5);
  }
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
  .overlay {
    position: absolute
  }
  .next{
    background-image: url("../assets/next1.png");
    width:150px;
    height:52px;
  }
  .next:hover{
    background-image: url("../assets/next2.png");
    width:200px;
    height:69px;
  }
  button{
    background-color: Transparent;
    border: none;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s ease;
  }
  .contain {
    margin: 0 auto;
    position: relative;
  }
</style>