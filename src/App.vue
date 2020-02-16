<template>
  <div>
      <h2>Form inputs</h2>
      <label for="">
        <input type="checkbox" value="vk" v-model="social">VK
      </label>
      <label for="">
        <input type="checkbox" value="facebook" v-model="social">Facebook
      </label>
      <label for="">
        <input type="checkbox" value="instagram" v-model="social">Instagram
      </label>

    <hr>
    <ul>
      <li v-for="s in social">
        {{s}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      social: []
    }
  }
}
</script>

<style lang="scss" scoped>
  textarea {
    height: 100px;
    width: 500px;
  }
  p {
    white-space: pre;
  }
</style>
