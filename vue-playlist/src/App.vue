<template>
  <div>
    <app-header :title='title' @changeTitle='updateTitle($event)'></app-header>
    <app-ninjas v-bind:ninjas='ninjas'></app-ninjas>
    <app-footer :title='title'></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninja from './components/Ninja.vue'

export default {
  components: {
    'app-header': Header,
    'app-ninjas': Ninja,
    'app-footer': Footer
  },
  data () {
    return {
      title: 'App',
      copyright: 'Copyright 2018 Vue Ninjas',
      ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
    }
  },
  methods:{
    updateTitle(updatedTitle){
      this.title = updatedTitle
    }
  }
}
</script>

<style>

</style>
