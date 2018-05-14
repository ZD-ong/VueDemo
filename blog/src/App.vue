<template>
  <div>
    <show-blog></show-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'

export default {
  components: {
    'addBlog': addBlog,
    'showBlog': showBlog
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Nunito SemiBold';
}
</style>
