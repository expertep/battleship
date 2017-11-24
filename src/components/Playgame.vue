<template>
  <div class="hello">
    <p>Drag the W3Schools image into the rectangle:</p>
    <div class="columns">
      <div class="column">
        <table>
          <tr v-for="(y, indexY) in getOwn" :key="y['.key']">
            <td v-for="(x, indexX) in y" :key="x['.key']" @click="setbomb(indexX,indexY)" :class="setClass(x)">
              <img v-if="x.shipstatus" src="../assets/ship.png" class="img">
            </td>
          </tr>
        </table>
      </div>
      <div class="column">
        <table>
          <tr v-for="(y, indexY) in getEnemy" :key="y['.key']">
            <td v-for="(x, indexX) in y" :key="x['.key']" @click="setbomb(indexX,indexY)" :class="setClass(x)">
              <img v-if="x.shipstatus" src="../assets/ship.png" class="img">
            </td>
          </tr>
        </table>
      </div>
    </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" @click="setship()">Next</button>
    </div>
    <div class="control">
      <button class="button is-text" @click="convert">Cancel</button>
    </div>
  </div>




  <br>

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
      boardOnplay: '0011',
      ShipEnemy: '',
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
      'setbombFirebase'
    ]),
    convert () {
      var jsonString = JSON.stringify(this.position)
      console.log(jsonString)
    },
    setbomb (x, y) {
      var xy = {
        x: x,
        y: y
      }
      this.setbombFirebase(xy)
    },
    showconsole (x, y) {
      console.log(x + ',' + y)
    },
    showship (x, y) {
      return this.position[x][y].shipstatus
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
    }
  },
  firebase: {
  },
  created () {
    // this.enemysea = this.getShipEnemy()
    /* for (var i = 0; i < 10; i++) {
      this.position.push([])
      this.position[i].push(new Array(10))
      for (var j = 0; j < 10; j++) {
        this.position[i][j] = {
          shipstatus: false, bombstatus: false
        }
        console.log(this.position[i][j].shipstatus)
      }
    } */
  },
  computed: {
    ...mapGetters([
      'getEnemy',
      'getOwn'
    ])
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
  .boom {
    background-color: rgba(203, 74, 10, 0.74);
  }
  .empty {
    background-color: rgba(70, 142, 194,0.3);
  }
</style>
