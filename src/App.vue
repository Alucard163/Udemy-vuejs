<template>
  <div>
<!--    <app-counter></app-counter>-->
    <app-car>
      <h2 slot="title">{{carName}}</h2>
      <p slot="text">Lorem ipsum dolor.</p>
    </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'
import Counter from "./Counter";
export default {
  data () {
    return {
      carName: 'Ford'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style lang="scss" scoped>

</style>
