<template>
  <div>
    <nav>
      <router-link to="/college/engineering">공과대학</router-link> |
      <router-link to="/college/informationCommunication">정보통신대학</router-link> |
      <router-link to="/college/naturalScience">자연과학대학</router-link> |
      <router-link to="/college/business">경영대학</router-link> |
      <router-link to="/college/humanities">인문대학</router-link> |
      <router-link to="/college/socialScience">사회과학대학</router-link> |
      <router-link to="/college/softwareFusion">소프트웨어융합대학</router-link> |
      <router-link to="/college/medicine">의과대학</router-link> |
      <router-link to="/college/nursing">간호대학</router-link> |
      <router-link to="/college/pharmacy">약햑대학</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
  nav {
    font-size: 130%
  }
</style>
