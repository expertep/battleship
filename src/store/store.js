import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import router from '../router/index'

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
    isReady: false,
    user: {},
    userProfile: {}
  },
  getters: {
    user: state => state.user,
    route: state => state.route,
    isReady: state => state.isReady,
    userProfile: state => state.userProfile,
    Ownsea: state => state.positionOwn,
    Enemysea: state => state.positionEnemy,
    score: state => state.score,
    getEnemy (state) {
      shipsetRef.child(state.boardOnplay + '/positionA').on('value', function (snapshot) {
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
    },
    ...firebaseMutations
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
    init ({ commit, dispatch, bindFirebaseRef }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.uid) {
          let { displayName, uid } = user
          let profile = {
            displayName,
            uid,
            fb: user.providerData[0]
          }
          commit('setUser', profile)
          router.push('/')
        } else {
          commit('setUser', null)
          router.push('/login')
          commit('setReady')
        }
      })
    },
    login () {
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logout () {
      firebase.auth().signOut()
    },
    setUserProfileRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }, id) => {
        // this will unbind any previously bound ref to 'todos'
      let userProfile = db.ref('twitter/users/' + id)
      bindFirebaseRef('userProfile', userProfile)
    }),
    unSetUserProfileRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
        // you can unbind it easily too
      unbindFirebaseRef('userProfile')
    })
  }
})
