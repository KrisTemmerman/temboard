<template>
  <div class="weather">

    {{Math.ceil(weatherData.main.temp)}} &#x2103;
    {{weatherData.name}}
  </div>
</template>

<script>
  import Weather from '../assets/weather.svg'

  export default {
    name: 'Weather',
    data: () => ({
      msg: 'Hello Kris',
      location: 'blanden',
      weatherData: {}
    }),
    components: {
      Weather
    },
    methods: {
      loadWeather () {
        const vm = this
        let weather = require('openweather-apis')
        weather.setLang('en')
        weather.setCityId(2801998)
        weather.setUnits('metric')
        weather.setAPPID('2c6ca2f35c54db6181b4e01ddb383229')
        weather.getAllWeather(
          function (err, JSONObj) {
            vm.weatherData = JSONObj
            console.log(vm.weatherData)
            if (err) {
              console.log(err)
            }
          }
        )
      }
    },
    mounted: function () {
      this.loadWeather()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weather {
    position: fixed;
    right: 0;
    top: 0;
  }

  .icons {
    background-color: white;
    width: 200px;
  }

  .icons svg {
    width: 100px;
  }
</style>
