import Vue from 'vue'
import Vuex from 'vuex'
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

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    count: 0,
    boardOnplay: '0011'
  },
  getters: {
    getcount (state) {
      return state.count
    }
  },
  mutations: {},
  actions: {
    getFirebase: function (context, xy) {
      shipsetRef.child(this.state.boardOnplay + '/position/' + xy.y + '/' + xy.x + '/shipstatus').set(true)
    }
  }
})
