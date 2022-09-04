<template>
  <div id="app">
    <echartsTable></echartsTable>
    <movieTable></movieTable>
  </div>
</template>

<script>
import movieTable from './components/movieTable.vue'
import echartsTable from './components/echartsTable'
import { onBeforeMount } from 'vue'
// this.option = require('./options');
export default {
  name: 'App',
  components: {
    movieTable,
    echartsTable,
  },
  setup(){
    onBeforeMount(() => {
        
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  width:100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
