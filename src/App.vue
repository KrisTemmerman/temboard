<template>
  <div id="app">
    <div class="overlay"></div>
    <Welcome />
  </div>
</template>

<script>
import Welcome from './components/Welcome'
export default {
  name: 'app',
    data: {
    results: []
  },

  components: {
    Welcome
  }

}
</script>

<style>
*{
  margin:0;
  padding:0;
  font-size:100%;
}

#app {
  width:100vw;
  height:100vh;
  background:
   linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url('https://source.unsplash.com/collection/661813/2560x1600');
   background-size:cover;
}

</style>
