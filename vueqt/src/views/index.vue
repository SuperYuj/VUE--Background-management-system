<template>
  <div>
    <head-nav></head-nav>
    <div class="container">
      <Asidenav></Asidenav>
      <div class="rightbox">
        <div class="admin">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .admin {
    background: #fff;
    position: fixed;
    border-left: solid 1px #b5cfd9;
    right: 0;
    bottom: 0;
    top: 80px;
    left: 179px;
    padding: 15px;
    padding-right: 0px;
    padding-bottom: 0px;
    overflow: auto;
    padding-right: 15px;
  }

  .container {
    width: 100%;
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
  }

  .rightbox {
    height: 100%;
    margin-left: 180px;
    overflow: hidden;
  }
</style>
<script>
  export default {
    methods: {
      loginout() {
        // sessionStorage.removeItem('user');
        this.$store.dispatch('clearUser')
        this.$router.push({ name: 'Login' })
      }
    }
  }
</script>