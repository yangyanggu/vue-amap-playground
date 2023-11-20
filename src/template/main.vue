<script setup>
import App from './App.vue'
import { setupElementPlus } from './element-plus.js'
setupElementPlus()
</script>

<template>
  <App />
</template>
<style>
.map-page-container{
  height: 600px;
}
.toolbar{
  padding: 6px 12px;
  background: #dcdcdc;
}
.toolbar>button{
  margin-right: 8px;
}

</style>
