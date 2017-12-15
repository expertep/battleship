<template>
  <div class="hello">
  <div class="columns">
    <div class="column">
    </div>
    <div class="column">
    <div class="field">
        <h1><label class="label"><font face="Algerian">Create</font><font face="Algerian" color="blue" class="room">Room</font>
          <img src="http://download.seaicons.com/icons/unclebob/spanish-travel/1024/ship-icon.png" alt="" >
        </label>
        </h1>
        <div class="control">
          <input class="input is-rounded" type="text" placeholder="NameRoom" v-model="name">
        </div>
      </div>
      <div class="field sub">
        <p class="control">
          <center>
          <button class="ok" @click="CreateRoom()" >
          </button>
          <router-link to="lobby">
          <button class="can">
        </button>
        </router-link>
         </center>
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
      boardOnplay: '',
      name: ''
    }
  },
  methods: {
    ...mapActions([
      'getroom',
      'init',
      'setRoom'
    ]),
    CreateRoom () {
      this.setRoom(this.name)
      this.$router.push({name: 'room', params: {roomId: this.roomId}})
    }
  },
  computed: {
    ...mapGetters([
      'roomId'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  background-color: Transparent;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  transition: .5s ease;
}
.label{
  color:white;
  font-size: 50px;
  font-family: 'Designil Font', 'Helvetica', sans-serif;	
}
.columns{
  margin-top:15%;
}
.ok{
  background-image: url("../assets/confirm1.png");
  width:127px;
  height:45px;
  
}
.ok:hover{
  background-image: url("../assets/confirm2.png");
  width:127px;
  height:45px;
}
.can{
  background-image: url("../assets/cancel1.png");
  width:127px;
  height:45px;
}
.can:hover{
  background-image: url("../assets/cancel2.png");
  width:127px;
  height:45px;
}
img{
  width:20%;
  height:20%;
}
.input{
   border-radius: 50px;
}
.input:hover{
   border-radius: 60px;
}
.room{
  text-shadow: 3px 3px 5px #777
}
</style>
