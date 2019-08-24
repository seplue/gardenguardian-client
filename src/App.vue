<template>
  <div id="app">
    <TestLatest></TestLatest>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestLatest from "@/components/TestLatest";

export default {
  name: 'app',
  components: {
    TestLatest,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
