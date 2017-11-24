<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
let config = {
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
  name: 'app',
  firebase: {
    shipset: shipsetRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
