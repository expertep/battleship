<template>
  <div class="hello">
  <div class="columns">
    <div class="column">
    </div>
    <div class="column">
    <div class="field">
        <label class="label">ตั้งชื่อห้อง</label>
        <div class="control">
          <input class="input" type="text" placeholder="ใส่ชื่อห้อง" v-model="name">
        </div>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success" @click="CreateRoom()">
            ตกลง
          </button>
          <router-link to="lobby">
          <button class="button is-danger" >
          ยกเลิก
        </button>
        </router-link>
        </p>
      </div>

    </div>
    <div class="column">
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
      boardOnplay: '0011',
      name: ''
    }
  },
  methods: {
    ...mapActions([
      'getroom',
      'init',
      'setRoom'
    ]),
    setroomId (key) {
      console.log(key)
      // this.$router.push('room/')
    },
    CreateRoom () {
      var tmp = this.setRoom(this.name)
      this.$router.push({name: 'room', params: {roomId: tmp}})
    }
  },
  computed: {
    ...mapGetters([
      'rooms',
      'user'
    ]),
    undaterooms () {
      this.getroom()
    }
  },
  created () {
    this.getroom()
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
