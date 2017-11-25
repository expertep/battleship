<template>
  <div>
    <h1 class="title">{{userProfile.name}}</h1>
    <hr>
    <div v-for="post in userProfile.posts" :key="post['.key']">
      <h2 class="subtitle">
        {{post.msg}}
      </h2>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'userProfile'
    ])
  },
  methods: {
    ...mapActions([
      'setUserProfileRef',
      'unSetUserProfileRef'
    ])
  },
  created () {
    this.setUserProfileRef(this.$route.params.uid)
  },
  destroyed () {
    this.unSetUserProfileRef()
  }
}
</script>

<style scoped>

</style>
