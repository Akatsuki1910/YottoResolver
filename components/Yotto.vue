<script setup lang="ts">
import { dCount, r } from '@/assets/ts/index'

interface Props {
  dice: number[]
}

const props = withDefaults(defineProps<Props>(), { dice: () => [] })

const diceArr = ref<[number, number][]>([])

watch(
  () => props.dice,
  () => {
    for (let i = 1; i <= 6; i++) {
      let v = 0
      const c = props.dice.filter((v) => v === i).length
      if (props.dice.length === 0 || c === props.dice.length) {
        v = r(Math.pow(1 / 6, 5 - c), 5)
      }
      if (c !== props.dice.length) v = 0
      diceArr.value[i - 1] = [i, v]
    }
  },
  { immediate: true },
)
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='2') yotto
  tbody
    tr(v-for='(d, i) in diceArr', :key='`y_tr_${i}`')
      td {{ d[0] }}
      TableTd(:num='d[1]')
</template>
