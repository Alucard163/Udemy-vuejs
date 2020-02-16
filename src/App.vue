<template>
  <div>
      <h2>Form inputs</h2>
      <textarea v-model="textarea"> {{ textarea}}</textarea>
    <p>{{textarea}}</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      textarea: 'I am initial text!',
      name: ''
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
