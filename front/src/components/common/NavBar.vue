<template>
  <div>
    <nav class="navbar navbar-default navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <router-link class='nav-title' to="/">AI:NTERVIEW</router-link>
      <router-link class='nav-title' to="/home">Home</router-link>
      <div>
        <router-link class='nav-title' to="/login">Login</router-link> |
        <router-link class='nav-title' to="/signup">Signup</router-link> |
        <router-link class='nav-title' to="/mypage">MyPage</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-title {
  font-size: 2rem;
}

.navbar {
  height: 60px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 1.3rem;
  z-index: 100;
}
.navbar-default{
	border: none;
	border-bottom: 1px solid #eee;
	background: #fff;
	opacity: 0.95;
	display: none;
}
.navbar.fixed-to-top{
	top: 0px;
}
</style>