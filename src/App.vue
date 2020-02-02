<template>
  <div>
    <h1>Parent: {{carName}}</h1>
    <app-car 
    :carName="carName"
    :carYear="carYear"
    > </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'
export default {
  name: 'app',
  data () {
    return {
      carName: 'Ford from parent',
      carYear: 2020
    }
  },
  components: {
    appCar: Car
  }
}
</script>

<style lang="scss">

</style>
