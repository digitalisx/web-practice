<template>
  <img alt="Ajou logo" src="@/assets/logo.png">
  <nav>
    <router-link to="/">아주대학교</router-link> |
    <router-link to="/college">대학</router-link> |
    <router-link to="/cat">고양이</router-link> |
    <router-link to="/news">뉴스</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import "@/components/main.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(53, 127, 236);
}
</style>
