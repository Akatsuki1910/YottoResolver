<script setup lang="ts">
import { dCount, r } from '@/assets/ts/index'

interface Props {
  dice: number[]
}

const props = withDefaults(defineProps<Props>(), { dice: () => [] })

const diceArr = ref<[string, number][]>(Array(2).fill(0))

watch(
  () => props.dice,
  () => {
    console.log(props.dice)
    for (let i = 1; i <= 3; i++) {
      let v = 0
      const c = dCount(props.dice, [i, i + 1, i + 2, i + 3])
      if (props.dice.length === 0 || c !== 0) {
        v = r(Math.pow(1 / 6, 4 - c), 5)
      }
      if (c !== props.dice.length) v = 0
      diceArr.value[i - 1] = [i + '-' + (i + 3), v]
    }
  },
  { immediate: true },
)
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='2') SS
  tbody
    tr(v-for='(d, i) in diceArr', :key='`ss_tr_${i}`')
      td {{ d[0] }}
      td {{ d[1] }}
</template>
