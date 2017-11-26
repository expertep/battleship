<template>
  <div class="hello">
    <h1 class="title has-text-light">Battle Ship Game </h1>
    <div class="columns">
      <div class="column">
        <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
        <h2 class="subtitle has-text-light">{{user.name}}</h2>
        <h2 class="subtitle has-text-primary">{{roomId}}</h2>
        <div class="control" >
          <input type="button " value="Ready" class="button is-link">
        </div>
      </div>
      <div class="column">
        <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
        <h2 class="subtitle has-text-light">{{user.name}}</h2>
        <h2 class="subtitle has-text-primary">{{roomId}}</h2>
        <div class="control">
          <input type="button " value="Ready" class="button is-link">
        </div>
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
      boardOnplay: '0011',
      roomId: ''
    }
  },
  methods: {
    ...mapActions([
      'getroom',
      'init'
    ])
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
    this.roomId = this.$route.params.roomId
    this.init()
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
  .photo-url {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}
</style>
