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
      for (let l = 1; l <= 6; l++) {
        const b = i === l ? 0 : props.dice.includes(l) ? 1 : 0

        let v = r(
          Math.pow(1 / 6, Math.max(4 - c, 0)) *
            Math.pow(1 / 6, Math.max(1 - b, 0)),
          5,
        )

        if (props.dice.length - c > 2) v = 0
        if (props.dice.length !== c + b) v = 0

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
      th(colspan='7') four numbers
  tbody
    tr
      td 4個 / 1個
      td(v-for='i in 6', :key='`fn_td_${i}`') {{ i }}
    tr(v-for='(d, i) in diceArr', :key='`fn_tr_${i}`')
      td {{ d[0] }}
      td(v-for='(dd, l) in d[1]', :key='`fn_td_${i}_${l}`') {{ dd }}
</template>
