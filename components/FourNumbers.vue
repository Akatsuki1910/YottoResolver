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
        v = r(Math.pow(1 / 6, Math.max(4 - c, 0)), 5)
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
      th(colspan='2') four numbers
  tbody
    tr(v-for='(d, i) in diceArr', :key='`fn_tr_${i}`')
      td {{ d[0] }}
      td {{ d[1] }}
</template>
