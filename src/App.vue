<template>
  <div>
    <app-car>
      <h2 v-colored:background.font="'green'" >{{title}}</h2>
      <h2 v-colored:color.delay.font="'green'" >{{title}}</h2>
      <h2 v-font>Local font directive</h2>
    </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'
export default {
  data () {
    return {
      title: 'Hello I am Vue!'
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '40px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
