<template>
  <header>
      <h1 @click='changeTitle'>{{title}}</h1>
  </header>
</template>

<script>

export default {
  props: ['title'],
  data () {
    return {
    }
  },
  methods:{
    changeTitle(){
      this.$emit('changeTitle','Hello World!')
    }
  }
}
</script>

<style scoped>
header {
    background: lightcoral;
    padding: 10px;
}
h1 {
    color: #222;
    text-align: center;
}
</style>
