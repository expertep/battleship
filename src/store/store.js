import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { firebaseMutations } from 'vuexfire'
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
let provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})
var db = firebaseApp.database()
var shipsetRef = db.ref('boards')
var roomsRef = db.ref('rooms')
var playersRef = db.ref('players')
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    count: 0,
    boardOnplay: '',
    me: '',
    Players: {},
    score: {
      A: 0,
      B: 0
    },
    roomId: '',
    displayName: '',
    photoURL: '',
    rooms: [],
    positionOwn: [
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
    ],
    positionEnemy: [],
    user: {},
    userProfile: {},
    party: {},
    statusplayer: '',
    statuscoplayer: '',
    statusinRoom: '',
    scoreplayer: '',
    scorecoplayer: '',
    turn: 'positionA'
  },
  getters: {
    user: state => state.user,
    route: state => state.route,
    userProfile: state => state.userProfile,
    Ownsea: state => state.positionOwn,
    Enemysea: state => state.positionEnemy,
    score: state => state.score,
    rooms: state => state.rooms,
    me: state => state.me,
    Players: state => state.Players,
    party: state => state.party,
    roomId: state => state.roomId,
    statusplayer: state => state.statusplayer,
    statuscoplayer: state => state.statuscoplayer,
    turn: state => state.turn
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
    setRooms (state, obj) {
      state.rooms = obj
    },
    setKeyplayer (state, id) {
      state.me = id
    },
    setroomId (state, id) {
      state.roomId = id
    },
    setParty (state, obj) {
      state.party = obj
    },
    setPlayer (state, obj) {
      state.Players = obj
    },
    setboard (state, id) {
      state.boardOnplay = id
    },
    setstatusplayer (state, obj) {
      state.statusplayer = obj.status
      state.scoreplayer = obj.score
      state.statuscoplayer = obj.statusco
      state.scorecoplayer = obj.scoreco
    },
    setturn (state, str) {
      state.turn = str
    },
    ...firebaseMutations
  },
  actions: {
    createBoard: function (context, obj) {
      let arr = new Array(10).fill(0).map(row => new Array(10).fill({shipstatus: false, bombstatus: false}))
      console.log(obj.own)
      var tmp = {
        own: obj.own,
        playerB: obj.playerB,
        positionA: arr,
        positionB: arr,
        scoreA: 0,
        scoreB: 0,
        turn: 'positionA'
      }
      var key = shipsetRef.push(tmp).getKey()
      playersRef.child(obj.own + '/boardOnplay').set(key)
      playersRef.child(obj.playerB + '/boardOnplay').set(key)
      var tmp1 = {
        status: 'positionA',
        score: 'scoreA',
        statusco: 'positionB',
        scoreco: 'scoreB'
      }
      if (context.state.me !== obj.own) {
        tmp1 = {
          status: 'positionB',
          score: 'scoreB',
          statusco: 'positionA',
          scoreco: 'scoreA'
        }
      }
      context.commit('setstatusplayer', tmp1)
      window.location.replace('#/placeship')
    },
    deleteRoom: function (context, id) {
      roomsRef.child(id).set(null)
      window.location.replace('#/placeship')
    },
    getstatusplayerfirebase: function (context, obj) {
      var tmp = 'statusA'
      var tmp1
      if (context.state.me !== context.state.party.own) tmp = 'statusB'
      if (obj.str === 'Wait') tmp1 = 'Ready'
      else tmp1 = 'Wait'
      roomsRef.child(obj.id + '/' + tmp).set(tmp1)
    },
    outRoom: function (context, id, me) {
      roomsRef.child(id + '/playerB').once('value', function (snapshot) {
        if (!snapshot.val()) {
          roomsRef.child(id).set(null)
        } else if (snapshot.val() === context.state.me) {
          roomsRef.child(id + '/playerB').set('')
          roomsRef.child(id + '/statusB').set('Wait')
        } else {
          roomsRef.child(id + '/own').set(snapshot.val())
          roomsRef.child(id + '/playerB').set('')
          roomsRef.child(id + '/statusB').set('Wait')
        }
        window.location.replace('#/lobby')
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
    },
    loadPlayer: function (context, id) {
      var tmp = {
        playerA: {},
        playerB: {}
      }
      roomsRef.child(id).on('value', function (snapshot) {
        var room = snapshot.val()
        if (room.own) {
          playersRef.child(room.own).on('value', function (snapshot) {
            tmp.playerA = snapshot.val()
          })
        }
        if (room.playerB) {
          playersRef.child(room.playerB).on('value', function (snapshot) {
            tmp.playerB = snapshot.val()
          })
        }
        context.commit('setPlayer', tmp)
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
    },
    joinroomfirebase: function (context, id) {
      roomsRef.child(id + '/playerB').set(context.state.me)
      context.commit('setroomId', id)
    },
    updateparty: function (context, roomId) {
      roomsRef.child(roomId).on('value', function (snapshot) {
        var obj = snapshot.val()
        context.commit('setParty', obj)
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
    },
    setRoom: function (context, name) {
      var tmp = {
        name: name,
        own: context.state.me,
        playerB: '',
        statusA: 'Wait',
        statusB: 'Wait'
      }
      var key = roomsRef.push(tmp).getKey()
      context.commit('setroomId', key)
    },
    getBoard: function (context, dispatch) {
      // var idMe = id
      var idMe = context.state.me
      playersRef.child(idMe + '/boardOnplay').on('value', function (snapshot) {
        context.commit('setboard', snapshot.val())
        shipsetRef.child(snapshot.val() + '/turn').on('value', function (snapshot2) {
          context.commit('setturn', snapshot2.val())
        },
        function (error) {
          console.log('Error: ' + error.code)
        })
        shipsetRef.child(snapshot.val() + '/own').on('value', function (snapshot1) {
          var tmp1 = {
            status: 'positionA',
            score: 'scoreA',
            statusco: 'positionB',
            scoreco: 'scoreB'
          }
          if (idMe !== snapshot1.val()) {
            tmp1 = {
              status: 'positionB',
              score: 'scoreB',
              statusco: 'positionA',
              scoreco: 'scoreA'
            }
          }
          context.commit('setstatusplayer', tmp1)
          context.dispatch('getScore')
        })
      })
    },
    getScore: function (context) {
      var tmp = {
        A: 0,
        B: 0
      }
      shipsetRef.child(context.state.boardOnplay + '/' + context.state.scoreplayer).on('value', function (snapshot) {
        tmp.A = snapshot.val()
      })
      shipsetRef.child(context.state.boardOnplay + '/' + context.state.scorecoplayer).on('value', function (snapshot) {
        tmp.B = snapshot.val()
      })
      context.commit('setScore', tmp)
    },
    addScore: function (context) {
      var tmp
      shipsetRef.child(context.state.boardOnplay + '/' + context.state.scoreplayer).on('value', function (snapshot) {
        tmp = snapshot.val()
      })
      shipsetRef.child(context.state.boardOnplay + '/' + context.state.scoreplayer).set(tmp + 1)
    },
    getEnemy: function (context) {
      shipsetRef.child(context.state.boardOnplay + '/' + context.state.statuscoplayer).on('value', function (snapshot) {
        context.commit('setpositionEnemy', snapshot.val())
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
    },
    getOwn: function (context) {
      shipsetRef.child(context.state.boardOnplay + '/' + context.state.statusplayer).on('value', function (snapshot) {
        context.commit('setpositionOwn', snapshot.val())
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
    },
    setShipFirebase: function (context, xy) {
      shipsetRef.child(context.state.boardOnplay + '/' + context.state.statusplayer + '/' + xy.y + '/' + xy.x).update({shipstatus: true})
    },
    setbombFirebase: function (context, xy) {
      shipsetRef.child(context.state.boardOnplay + '/' + context.state.statuscoplayer + '/' + xy.y + '/' + xy.x + '/bombstatus').set(true)
    },
    getroom: function (context) {
      roomsRef.on('value', function (snapshot) {
        context.commit('setRooms', snapshot.val())
      },
      function (error) {
        console.log('Error: ' + error.code)
      })
    },
    changeturn: function (context, turn) {
      if (context.state.statusplayer === 'positionA') {
        shipsetRef.child(context.state.boardOnplay + '/turn').set('positionB')
        context.commit('setturn', 'positionB')
      } else {
        shipsetRef.child(context.state.boardOnplay + '/turn').set('positionA')
        context.commit('setturn', 'positionA')
      }
    },
    init ({ commit, dispatch, bindFirebaseRef }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.uid) {
          var tmp = {
            name: user.displayName,
            picture: user.photoURL,
            fb: user.providerData[0],
            boardOnplay: ''
          }
          commit('setKeyplayer', user.uid)
          dispatch('getBoard')
          commit('setUser', tmp)
        } else {
          commit('setUser', null)
        }
      })
    },
    login (context) {
      var vm = this
      firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user
        vm.displayName = user.displayName
        vm.photoURL = user.photoURL
        var tmp = {
          name: user.displayName,
          picture: user.photoURL,
          fb: user.providerData[0],
          boardOnplay: ''
        }
        playersRef.child(user.uid).set(tmp)
        context.commit('setKeyplayer', user.uid)
        context.commit('setUser', tmp)
        router.push('/lobby')
      }).catch(function (error) {
        console.log(error)
      })
    },
    logout (context) {
      firebase.auth().signOut()
      context.user = null
      context.me = ''
    }
  }
})
