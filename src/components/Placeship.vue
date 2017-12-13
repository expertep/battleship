<template>
  <div class="hello">
    <div class="container">
    <div v-if="user">
      <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
      <br>
      <h2 class="subtitle">{{user.displayName}}</h2>
    </div>
    <h1 class="title has-text-light">Battleship</h1>
    <h2 class="subtitle has-text-primary">Let fun with me</h2>
    <div class="columns ">
      <div class="column">
        <div class="columns is-mobile is-centered">
          <div class="column is-narrow">
            <table>
              <tr v-for="i in 10">
                  <td v-for="j in 10" @click="show(j-1,i-1)">
                    <img v-if="showship(j-1,i-1)" src="../assets/ship.png" class="img">
                  </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="menu">
          <div class="title">
            <h1 class="title has-text-white">Select Ship</h1>
          </div>
          <div class="columns">
            <div class="column shipmenu" >
              <h3 class="subtitle has-text-white">เรือเล็ก X {{countship[0]}}</h3>
              <div class="ship h2":class="{'ship-selected': x===2 && y ===1, 'ship-disabled': !hidemenu[0]}" @click="select(2,1)"></div>
              <div class="ship v2" :class="{'ship-selected': x===1 && y ===2, 'ship-disabled': !hidemenu[0]}" @click="select(1,2)"></div>
            </div>
            <div class="column shipmenu" >
              <h3 class="subtitle has-text-white">เรือกลาง X {{countship[1]}}</h3>
              <div class="ship h3" :class="{'ship-selected': x===3 && y ===1, 'ship-disabled': !hidemenu[1]}" @click="select(3,1)"></div>
              <div class="ship v3" :class="{'ship-selected': x===1 && y ===3, 'ship-disabled': !hidemenu[1]}" @click="select(1,3)"></div>
            </div>
            <div class="column shipmenu" >
              <h3 class="subtitle has-text-white">เรือใหญ่ X {{countship[2]}}</h3>
              <div class="ship h4" :class="{'ship-selected': x===4 && y ===1, 'ship-disabled': !hidemenu[2]}" @click="select(4,1)"></div>
              <div class="ship v4" :class="{'ship-selected': x===1 && y ===4, 'ship-disabled': !hidemenu[2]}" @click="select(1,4)"></div>
            </div>
          </div>
          <div class="columns is-mobile is-centered">
            <div class="field is-grouped">
              <div class="control">
                <button @click="setship()" :class="setClassdisable()">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <br>
</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Placeship',
  data () {
    return {
      x: 0,
      y: 0,
      countship: [3, 2, 1],
      hidemenu: [true, true, true],
      position: [],
      id: ''
    }
  },
  methods: {
    ...mapActions([
      'setShipFirebase',
      'getBoard',
      'init'
    ]),
    createMap () {
      let map = new Array(10).fill(0).map(row => new Array(10).fill({shipstatus: false, bombstatus: false}))
      return JSON.parse(JSON.stringify(map))
    },
    show (j, i) {
      for (let x = 0; x < this.x; x++) {
        if (j + x >= 10 || this.position[j + x][i].shipstatus) {
          return 0
        }
      }
      for (let y = 0; y < this.y; y++) {
        if (i + y >= 10 || this.position[j][i + y].shipstatus) {
          return 0
        }
      }
      for (let x = 0; x < this.x; x++) {
        this.position[j + x][i].shipstatus = true
        this.position[j][i].startX = true
        this.position[j][i].sizeX = this.x
      }
      for (let y = 0; y < this.y; y++) {
        this.position[j][i + y].shipstatus = true
        this.position[j][i].startY = true
        this.position[j][i].sizeY = this.y
      }
      if (this.countship[this.x + this.y - 3] >= 1) {
        --this.countship[this.x + this.y - 3]
        if (this.countship[this.x + this.y - 3] === 0) {
          this.hide(this.x + this.y - 3)
        }
      }
      this.x = 0
      this.y = 0
    },
    convert () {
      var jsonString = JSON.stringify(this.position)
      console.log(jsonString)
    },
    setship () {
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          if (this.position[x][y].shipstatus) {
            var xy = {
              x: x,
              y: y
            }
            this.setShipFirebase(xy)
          }
        }
      }
      this.$router.push('Playgame')
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
    },
    setClassdisable () {
      if (this.hidemenu[0] || this.hidemenu[1] || this.hidemenu[2]) {
        return 'button is-primary is-large is-static'
      } else return 'button is-primary is-large'
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'me',
      'statusplayer',
      'Players'
    ])
  },
  created () {
    this.init()
    this.position = this.createMap()
    // this.getBoard()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td{
    border:2px solid rgba(0, 204, 255, 0.5);
    width:50px;
    height:50px;
  }
  td:hover{
    background-color: rgba(0, 204, 255, 0.5);
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
    opacity: 0.6;
    border: 2px solid  rgba(0, 120, 179, 0.48);
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
  }
  .ship:hover {
    opacity: 1;
    border:2px solid rgba(0, 120, 179, 1);
  }
  .ship-selected {
    opacity: 1;
    border:2px solid rgba(0, 120, 179, 1);
  }
  .ship-disabled {
    /* background-color: #fff; */
    opacity: 0.4;
    border:2px solid rgba(200, 0, 0, 1);
    pointer-events: none;
  }
  .h2{
    background-image: url("../assets/ship2.png");
    background-repeat: no-repeat;
    width: 102px;
    height: 52px;
  }
  .v2{
    background-image: url("../assets/ship2d.png");
    background-repeat: no-repeat;
    width: 52px;
    height: 102px;
  }
  .h3{
    background-image: url("../assets/ship3.png");
    background-repeat: no-repeat;
    width: 152px;
    height: 52px;
  }
  .v3{
    background-image: url("../assets/ship3d.png");
    background-repeat: no-repeat;
    width: 52px;
    height: 152px;
  }
  .h4{
    background-image: url("../assets/ship4.png");
    background-repeat: no-repeat;
    width: 202px;
    height: 52px;
  }
  .v4{
    background-image: url("../assets/ship4d.png");
    background-repeat: no-repeat;
    width: 52px;
    height: 202px;
  }
  .menu {
    background-color: rgba(1, 21, 61, 0.50);
    padding: 20px;
  }
  .shipmenu {
    /* border:2px solid rgba(0, 120, 179, 0.48); */
    border-radius: 10px;
    margin: 10px;
  }
  /* .shipmenu:hover {
    border:2px solid rgba(0, 120, 179, 1);
  } */
  .control {
    margin: 3px;
  }
</style>
