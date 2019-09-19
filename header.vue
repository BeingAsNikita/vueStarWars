<template>
  <header class="header">
    <div class="logo">
      <img src="logo.png" alt="logo">
    </div>
  </header>
    
</template>

<script>
export default {
  name: 'appHeader'

}
</script>

<style lang="scss">

.header {
  position: static;
  height: 33.33vh;
  background-image: url('../header.png');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .logo {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 0 auto;
    width: 20vw;
  }
}

</style>
