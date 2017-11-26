<template>
  <div>
      <div class="challenge">CHALLENGE </div>
      
      <div class="display">
        <div class="player1">
          <img :src="player1Img" alt="" width="200" height="200">
        </div>

        <div class="vs">vs</div>

        <div class="player2">
          <img :src="player2Img" alt="" width="200" height="200">
        </div>
      </div>

      <div class="ready">
        <button class="button is-primary is-large" @click="Playgame()">READY</button>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      player1Img: 'https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/18425062_1404765559591464_6092264720532385167_n.jpg?oh=b6f50bff1886675e4fbc44154adc19c4&oe=5AA46F0F',
      player2Img: 'https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/23167635_10208738615657641_1577952619552424141_n.jpg?oh=fac91354d9b7c517f2a2aad0a15cc52e&oe=5A96E5CA'
    }
  },
  methods:{
    Playgame() {
      this.$router.push('/Playgame')
    }
  }
}
</script>

<style scoped>
.challenge{
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 20pt;
   font-weight: 1000;
} 
.player1{
   display: inline-block;
  
 }
 .vs{
  display: inline-block;
  margin-top: 80px;
  margin-left: 50px;
  margin-right: 50px;
  font-size: 20pt;
  font-weight: 1000;
  vertical-align: top;
 }
 .player2{
   display: inline-block;
 }
 .ready{
  margin-top: 90px; 
  margin-left: 50px;
  margin-right: 50px;
  font-size: 20pt;
  font-weight: 1000;
 }

</style>
