<template>
  <span class="roc-icon fa4" :class="classOptions" :style="styleOptions"></span>
</template>

<script lang="ts">
export default {
  name: 'RocIcon',
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    size?: number | string
    color?: string
    rotate?: 0 | 90 | 180 | 270 | '0' | '90' | '180' | '270'
    animationType?: '' | 'spin' | 'pulse'
  }>(),
  {
    size: 16,
    color: '#606266',
    rotate: 0,
    animationType: '',
  },
)

const classOptions = {
  [`fa4-${props.name}`]: true,
  [`fa4-rotate-${props.rotate}`]: !!props.rotate,
  [`fa4-${props.animationType}`]: !!props.animationType,
}
const styleOptions = {
  fontSize: String(props.size).includes('px') ? props.size : `${props.size}px`,
  color: props.color,
}
</script>

<style lang="scss" scoped>
$fa-font-path: 'styles/fonts';
@import 'styles/scss/font-awesome.scss';
</style>
