<template>
  <div>
    <nav class="navbar navbar-default navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <router-link to="/">Main</router-link>
      <router-link to="/home">Home</router-link>
      <div>
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Signup</router-link> |
        <router-link to="/mypage">MyPage</router-link>
      </div>
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
  z-index: 4;
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