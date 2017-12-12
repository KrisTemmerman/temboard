<template>
    <div class="clock">
        {{timenow}}
    </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Clock',
  data () {
    return {
      msg: 'Hello Kris',
      timenow: moment().format('HH:mm')
    }
  },
  mounted: function () {
    setInterval(() => {
      this.timenow = moment().format('HH:mm')
    }, 1000)
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
