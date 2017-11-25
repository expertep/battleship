<template>
  <div class="hello">
    <div class="container">
    <h1 class="title has-text-light">Battleship</h1>
    <h2 class="subtitle has-text-primary">Let fun with me</h2>
    <div class="columns is-mobile is-centered">
      <div class="column is-half is-narrow">
        <table>
        	<tr v-for="i in 10">
            	<td v-for="j in 10" :style="" @click="show(j-1,i-1)">
                <img v-if="showship(j-1,i-1)" src="../assets/ship.png" class="img">
              </td>
          </tr>
        </table>
      </div>
    </div>
  <div class="columns menu">
    <h1 class="title has-text-white">Select Ship</h1>
  </div>
  <div class="columns menu">
    <div class="column shipmenu" v-if="hidemenu[0]">
      <h3 class="subtitle has-text-white">เรือเล็ก X {{countship[0]}}</h3>
      <div class="ship h2" @click="select(2,1)"></div>
      <div class="ship v2" @click="select(1,2)"></div>
    </div>
    <div class="column shipmenu" v-if="hidemenu[1]">
      <h3 class="subtitle has-text-white">เรือกลาง X {{countship[1]}}</h3>
      <div class="ship h3" @click="select(3,1)"></div>
      <div class="ship v3" @click="select(1,3)"></div>
    </div>
    <div class="column shipmenu" v-if="hidemenu[2]">
      <h3 class="subtitle has-text-white">เรือใหญ่ X {{countship[2]}}</h3>
      <div class="ship h4" @click="select(4,1)"></div>
      <div class="ship v4" @click="select(1,4)"></div>
    </div>
  </div>
  <div class="columns is-mobile is-centered menu">
    <div class="field is-grouped">
      <div class="control">
        <button @click="setship()" :class="setClassdisable()">Next</button>
      </div>
      <div class="control">
        <button class="button is-danger is-large" @click="convert">Cancel</button>
      </div>
    </div>
  </div>

  <br>
</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Placeship',
  data () {
    return {
      x: 0,
      y: 0,
      boardOnplay: '0011',
      countship: [3, 2, 1],
      hidemenu: [true, true, true],
      position: [
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ],
        [
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false},
          {shipstatus: false, bombstatus: false}
        ]
      ]
    }
  },
  methods: {
    ...mapActions([
      'setShipFirebase'
    ]),
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
      }
      for (let y = 0; y < this.y; y++) {
        this.position[j][i + y].shipstatus = true
      }
      if (this.countship[this.x + this.y - 3] > 1) {
        --this.countship[this.x + this.y - 3]
      } else {
        this.hide(this.x + this.y - 3)
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
    },
    setClassdisable () {
      if (this.countship[0] + this.countship[1] + this.countship[2] > 3) {
        return 'button is-primary is-large is-static'
      } else return 'button is-primary is-large'
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
    border:2px solid rgba(0, 204, 255, 0.5);
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
    margin: 10px;
  }
  .h2{
    background-image: url("../assets/ship2.png");
    background-repeat: no-repeat;
    width: 100px;
    height: 50px;
  }
  .v2{
    background-image: url("../assets/ship2d.png");
    background-repeat: no-repeat;
    width: 50px;
    height: 100px;
  }
  .h3{
    background-image: url("../assets/ship3.png");
    background-repeat: no-repeat;
    width: 150px;
    height: 50px;
  }
  .v3{
    background-image: url("../assets/ship3d.png");
    background-repeat: no-repeat;
    width: 50px;
    height: 150px;
  }
  .h4{
    background-image: url("../assets/ship4.png");
    background-repeat: no-repeat;
    width: 200px;
    height: 50px;
  }
  .v4{
    background-image: url("../assets/ship4d.png");
    background-repeat: no-repeat;
    width: 50px;
    height: 200px;
  }
  .menu {
    background-color: rgba(1, 21, 61, 0.50);
    padding: 20px;
  }
  .shipmenu {
    border:2px solid rgba(0, 120, 179, 0.48);
    border-radius: 10px;
    margin: 10px;
  }
  .shipmenu:hover {
    border:3px solid rgba(0, 120, 179, 1);
  }
</style>
