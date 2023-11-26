<script setup>
import App from './App.vue'
import { setupLoader } from './vue-amap.js'
setupLoader()
</script>

<template>
  <App />
</template>
<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html, body{
  height: 100%;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.map-page-container{
  flex: 1;
}
.toolbar{
  padding: 6px 12px;
  background: #dcdcdc;
}
.toolbar>button{
  margin-right: 8px;
}

</style>
