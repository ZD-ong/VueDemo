<template>
  <footer>
      <p>Copyright 2017 {{ title }}</p>
  </footer>
</template>

<script>

export default {
  props:['title'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }
  p {
    text-align: center;
    color: lightcoral;
  }
</style>
