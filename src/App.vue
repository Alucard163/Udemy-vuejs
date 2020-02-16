<template>
  <div>
      <h2>Form inputs</h2>
      <label for="">
        <input type="radio" value="vk" v-model="social">VK
      </label>
      <label for="">
        <input type="radio" value="facebook" v-model="social">Facebook
      </label>
      <label for="">
        <input type="radio" value="instagram" v-model="social">Instagram
      </label>

    <hr>
    <ul>
      <p>{{social}}</p>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      social: ''
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
