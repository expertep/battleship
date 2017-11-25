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
    score: {
      A: 0,
      B: 0
    },
    positionOwn: [],
    positionEnemy: [],
    user: {},
    userProfile: {}
  },
  getters: {
    user: state => state.user,
    userProfile: state => state.userProfile,
    Ownsea: state => state.positionOwn,
    Enemysea: state => state.positionEnemy,
    score: state => state.score
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setpositionOwn (state, obj) {
      state.positionOwn = obj
    },
    setpositionEnemy (state, obj) {
      state.positionEnemy = obj
    },
    setScore (state, obj) {
      state.score = obj
    }
  },
  actions: {
    getScore: function (context, obj) {
      var tmp = {
        A: 0,
        B: 0
      }
      shipsetRef.child(this.state.boardOnplay + '/scoreA').on('value', function (snapshot) {
        tmp.A = snapshot.val()
      })
      shipsetRef.child(this.state.boardOnplay + '/scoreB').on('value', function (snapshot) {
        tmp.B = snapshot.val()
      })
      context.commit('setScore', tmp)
    },
    addScore: function () {
      var tmp
      shipsetRef.child(this.state.boardOnplay + '/scoreA').on('value', function (snapshot) {
        tmp = snapshot.val()
      })
      shipsetRef.child(this.state.boardOnplay + '/scoreA').set(tmp + 1)
    },
    getEnemy: function (context) {
      shipsetRef.child(this.state.boardOnplay + '/positionB').on('value', function (snapshot) {
        context.commit('setpositionEnemy', snapshot.val())
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
    },
    getOwn: function (context) {
      shipsetRef.child(this.state.boardOnplay + '/positionA').on('value', function (snapshot) {
        context.commit('setpositionOwn', snapshot.val())
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
    },
    setShipFirebase: function (context, xy) {
      shipsetRef.child(this.state.boardOnplay + '/positionA/' + xy.y + '/' + xy.x + '/shipstatus').set(true)
    },
    setbombFirebase: function (context, xy) {
      shipsetRef.child(this.state.boardOnplay + '/positionB/' + xy.y + '/' + xy.x + '/bombstatus').set(true)
    },
    login () {
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  }
})
