<script setup lang="ts">
interface Props {
  num?: number
}

const props = withDefaults(defineProps<Props>(), { num: 0 })

const color = ref<string>('')

watch(
  () => props.num,
  () => (color.value = `hsl(0,${props.num * 100}%,50%)`),
  { immediate: true, deep: true },
)

const change = (e: any) => {
  console.log(e)
}
</script>

<template lang="pug">
td(:style='{ backgroundColor: color }')
  p.num {{ props.num }}
</template>

<style lang="scss" scoped>
.num {
  margin: 0;
}
</style>
