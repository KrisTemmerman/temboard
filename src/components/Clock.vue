<template>
    <div class="clock">
        {{time}}
    </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Clock',

  data () {
    return {
      msg: 'Hello Kris',
      time: moment().format('HH:mm')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.clock{
    font-size: 9rem;
    font-weight: 500;
}

</style>
