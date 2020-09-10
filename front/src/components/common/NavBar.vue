<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <router-link to="/">Main</router-link>
      <router-link to="/Home">Home</router-link>
      <router-link to="/MyPage">MyPage</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  height: 50px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 1.3rem;
}
</style>