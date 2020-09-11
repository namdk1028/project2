<template>
  <v-app>
    <div id="app">
      <NavBar />
      <div id="body">
        <router-view/>
      </div>
    </div>
  </v-app>
</template>

<script>
import NavBar from './components/common/NavBar.vue'

export default {
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
