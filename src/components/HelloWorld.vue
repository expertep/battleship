<template>
  <div class="hello">
    <p>Drag the W3Schools image into the rectangle:</p>
  <table>
  	<tr v-for="i in 5">
      	<td v-for="j in 5" :style="" @click="show(j-1,i-1)">
          <img v-if="showship(j-1,i-1)" src="../assets/ship.png" class="img">
        </td>
    </tr>

  </table>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-text">Cancel</button>
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
export default {
  name: 'HelloWorld',
  data () {
    return {
      x: 0,
      y: 0,
      hidemenu: [true, true, true],
      position: [
        [
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
          {shipstatus: false}
        ],
        [
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
          {shipstatus: false}
        ],
        [
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
    show (i, j) {
      for (let x = 0; x < this.x; x++) {
        if (this.position[j][i + x].shipstatus === true || i + x > 5) {
          return 0
        }
      }
      for (let y = 0; y < this.y; y++) {
        if (this.position[j + y][i].shipstatus === true || j + y > 5) {
          return 0
        }
      }
      for (let x = 0; x < this.x; x++) {
        this.position[j][i + x].shipstatus = true
      }
      for (let y = 0; y < this.y; y++) {
        this.position[j + y][i].shipstatus = true
      }
      this.hide(this.x + this.y - 3)
    },
    showship (i, j) {
      return this.position[j][i].shipstatus
    },
    select (x, y) {
      this.x = x
      this.y = y
    },
    hide (i) {
      this.hidemenu[i] = false
    }
  },
  created () {

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
