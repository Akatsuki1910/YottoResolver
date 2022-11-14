<script setup lang="ts">
import { dCount, r } from '@/assets/ts/index'

interface Props {
  dice: number[]
}

const props = withDefaults(defineProps<Props>(), { dice: () => [] })

const diceArr = ref<[number, number[]][]>([])

watch(
  () => props.dice,
  () => {
    for (let i = 1; i <= 6; i++) {
      const vArr: number[] = []
      const c = props.dice.filter((v) => v === i).length
      for (let l = 1; l <= 5; l++) {
        let v = r(
          Math.pow(1 / 6, Math.max(l - c, 0)) *
            Math.pow(5 / 6, Math.max(5 - props.dice.length - l, 0)),
          5,
        )
        if (c !== 0 && c === l) v = 1
        if (c !== 0 && c > l) v = 0
        if (c === 0 && props.dice.length > 5 - l) v = 0

        vArr.push(v)
      }
      diceArr.value[i - 1] = [i, vArr]
    }
  },
  { immediate: true },
)
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='6') only
  tbody
    tr
      td 目 / 個数
      td(v-for='i in 5', :key='`only_td_${i}`') {{ i }}
    tr(v-for='(d, i) in diceArr', :key='`only_tr_${i}`')
      td {{ d[0] }}
      TableTd(v-for='(dd, l) in d[1]', :key='`only_td_${i}_${l}`', :num='dd')
</template>
