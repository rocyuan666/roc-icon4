<template>
  <div class="roc-cpn">
    <span>{{ message }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('roc-icon')
</script>

<style lang="scss">
.roc-cpn {
  span {
    color: #f00;
  }
}
</style>
