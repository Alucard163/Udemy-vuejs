<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email"
               id="email"
               class="form-control"
                v-model="email"
        >
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      email: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
