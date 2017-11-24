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
    boardOnplay: '0011',
    me: '',
    enemy: '',
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
  },
  getters: {
    getEnemy (state) {
      shipsetRef.child(state.boardOnplay + '/positionB').on('value', function (snapshot) {
        state.position = snapshot.val()
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
      return state.position
    },
    getOwn (state) {
      shipsetRef.child(state.boardOnplay + '/positionA').on('value', function (snapshot) {
        state.position = snapshot.val()
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
      return state.position
    }
  },
  mutations: {},
  actions: {
    setShipFirebase: function (context, xy) {
      shipsetRef.child(this.state.boardOnplay + '/positionA/' + xy.y + '/' + xy.x + '/shipstatus').set(true)
    },
    setbombFirebase: function (context, xy) {
      shipsetRef.child(this.state.boardOnplay + '/positionB/' + xy.y + '/' + xy.x + '/bombstatus').set(true)
    }
  }
})
