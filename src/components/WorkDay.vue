<template>
  <div id="workday">
    <button  v-on:click="startDay()">{{msg}}</button>
    <button  v-on:click="countHours(startTime)">{{msg}}</button>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'workday',
  components: {

  },
  data () {
    return {
      msg: 'Start your day',
      startTime: ''
    }
  },
  methods: {
    startDay () {
      this.startTime = moment()
      console.log(`the time is ${this.startTime.format('DD-MM-YYYY HH:mm')}`)
    },
    countHours (startTime) {
      // startTime + 8:45 = clockout
      let endTime = moment(startTime).add(8, 'h').add(45, 'm')
      let timeToEnd = endTime.subtract(moment(startTime))
      console.log('end is ' + timeToEnd.format('hh:mm'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#workday{
    position:fixed;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    bottom:0;
    color: #fff;

}
.small{
      font-size:2rem;
}

</style>
