<template>
  <div>
      <h2>Form inputs</h2>
      <select v-model="Social">
        <option v-for="s in socialList"
        >{{ s }}</option>
      </select>

    <hr>
    <p>{{ social }}</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      defaultSocial: 'vk',
      social: 'instagram',
      socialList: ['instagram','vk','facebook']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
