<template>
  <div class="hello">
    <p>Drag the W3Schools image into the rectangle:</p>
  <table>
  	<tr v-for="i in 10">
      	<td v-for="j in 10" :style="" @click="show(j-1,i-1)">
          <img v-if="showship(j-1,i-1)" src="../assets/ship.png" class="img">
        </td>
    </tr>

  </table>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" @click="setship()">Next</button>
    </div>
    <div class="control">
      <button class="button is-text" @click="convert">Cancel</button>
    </div>
  </div>

  <div class="columns">
    <div class="column" v-if="hidemenu[0]">
      <div class="ship h2" @click="select(2,1)"></div>
      <div class="ship v2" @click="select(1,2)"></div>
    </div>
    <div class="column" v-if="hidemenu[1]">
      <div class="ship h3" @click="select(3,1)"></div>
      <div class="ship v3" @click="select(1,3)"></div>
    </div>
    <div class="column" v-if="hidemenu[2]">
      <div class="ship h4" @click="select(4,1)"></div>
      <div class="ship v4" @click="select(1,4)"></div>
    </div>
    </a>
  </div>


  <br>

  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBc4GvjjmZMezOuv2fc8FOUiPcyttLPmuw',
  authDomain: 'battleship-d7f88.firebaseapp.com',
  databaseURL: 'https://battleship-d7f88.firebaseio.com',
  projectId: 'battleship-d7f88',
  storageBucket: '',
  messagingSenderId: '211714676183'
}
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()
var shipsetRef = db.ref('boards')
export default {
  name: 'HelloWorld',
  data () {
    return {
      x: 0,
      y: 0,
      boardOnplay: '0011',
      hidemenu: [true, true, true],
      position: [
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ],
        [
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false},
          {shipstatus: false}
        ]
      ]
    }
  },
  methods: {
    show (j, i) {
      for (let x = 0; x < this.x; x++) {
        if (this.position[j + x][i].shipstatus || j + x >= 10) {
          return 0
        }
      }
      for (let y = 0; y < this.y; y++) {
        if (this.position[j][i + y].shipstatus || i + y >= 10) {
          return 0
        }
      }
      for (let x = 0; x < this.x; x++) {
        this.position[j + x][i].shipstatus = true
      }
      for (let y = 0; y < this.y; y++) {
        this.position[j][i + y].shipstatus = true
      }
      this.hide(this.x + this.y - 3)
    },
    convert () {
      var jsonString = JSON.stringify(this.position)
      console.log(jsonString)
    },
    setship () {
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          if (this.position[x][y].shipstatus) {
            shipsetRef.child(this.boardOnplay + '/position/' + y + '/' + x + '/shipstatus').set(true)
            // this.showconsole(x, y)
          }
        }
      }
    },
    showconsole (y, x) {
      console.log(y + ',' + x)
    },
    showship (x, y) {
      return this.position[x][y].shipstatus
    },
    select (x, y) {
      this.x = x
      this.y = y
    },
    hide (i) {
      this.hidemenu[i] = false
    }
  },
  firebase: {

  },
  created () {
    /* for (var i = 0; i < 10; i++) {
      this.position.push([])
      this.position[i].push(new Array(10))
      for (var j = 0; j < 10; j++) {
        this.position[i][j] = {
          shipstatus: false
        }
        console.log(this.position[i][j].shipstatus)
      }
    } */
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
    width:50px;
    height:50px;
  }
  .ship{
    background-color: rgb(194, 70, 174);
    margin: 10px;
  }
  .h2{
    width: 100px;
    height: 50px;
  }
  .v2{
    width: 50px;
    height: 100px;
  }
  .h3{
    width: 150px;
    height: 50px;
  }
  .v3{
    width: 50px;
    height: 150px;
  }
  .h4{
    width: 200px;
    height: 50px;
  }
  .v4{
    width: 50px;
    height: 200px;
  }
</style>
