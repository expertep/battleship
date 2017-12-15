<template>
  <div>
    <div class="columns">
      <div class="column is-hidden-mobile">
      </div>
      <div class="column is-8">
        <div class="logo">
          <img src="../assets/battleship.png">
        </div>
        <div v-if="user" class="">
          <center>
          <div class="box user">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{user.name}}</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
          </center>

            <span @click="play()">
              <img src="../assets/letplay1.png" class="img">
              <div class="overlay">
                <div class ="text">
                  <img src="../assets/letplay2.png" class="img">
                </div>
              </div>
            </span>
            <br><br>
            <span @click="logout()">
              <img src="../assets/logout1.png" class="img">
              <div class="overlay">
                <div class ="text">
                    <img src="../assets/logout1.png" class="img">
                </div>
              </div>
            </span>
        </div>

        <span class="" v-else @click="login()">
          <img src="../assets/login1.png" class="img">
            <div class="overlay">
              <div class ="text">
                  <img src="../assets/login2.png" class="img" >
              </div>
            </div>
        </span>
      </div>
      <div class="column is-hidden-mobile">
      </div>
    </div>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      newPostInput: ''
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'me'
    ])
  },
  methods: {
    ...mapActions([
      'logout',
      'login',
      'init'
    ]),
    play () {
      router.push('/lobby')
    }
  },
  created () {
    this.init()
  }
}
</script>

<style scoped>
.logo {
  margin-bottom: 40px;
  display: block;
}
.user {
  max-width: 300px;
  margin: 50px;
  background: rgba(147,206,222,1);
  background: -moz-linear-gradient(left, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(147,206,222,1)), color-stop(41%, rgba(117,189,209,1)), color-stop(100%, rgba(73,165,191,1)));
  background: -webkit-linear-gradient(left, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
  background: -o-linear-gradient(left, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
  background: -ms-linear-gradient(left, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
  background: linear-gradient(to right, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#93cede', endColorstr='#49a5bf', GradientType=1 );
}
.photo-url {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}
h1 {
    color: white;
    font-size: 80px;
    text-shadow: 5px 5px 5px #aaa;
}
h2 {
    color: white;
    text-shadow: 3px 3px 3px #aaa;
}
h3 {
    color: white;
    text-shadow: 2px 2px 2px #aaa;
}
.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
