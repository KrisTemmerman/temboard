<template>
  <div id="welcome">
      <Clock />
      <span class="small">{{msg}}</span>
  </div>
</template>

<script>
import Clock from './Clock'
export default {
  name: 'Greeting',
  components: {
    Clock
  },
  data () {
    return {
      msg: 'Hello Kris',
      images: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align:center;
    color:white;
    text-align: center;
    color: #fff;
    padding-top:30vh;
}
.small{
      font-size:2rem;
}

</style>
