<script setup lang="ts">
import { r } from '@/assets/ts/index'

const scoreMap = new Map<number, number>()

for (let i = 1; i <= Math.pow(6, 5); i++) {
  let addScore = 0
  for (let l = 0; l < 5; l++) {
    const s = (Math.floor((i - 1) / Math.pow(6, l)) % 6) + 1
    addScore += s
  }
  scoreMap.set(
    addScore,
    scoreMap.has(addScore) ? scoreMap.get(addScore)! + 1 : 1,
  )
}

const scoreArr = [...scoreMap]
  .sort((a, b) => (a[0] > b[0] ? 1 : -1))
  .map((v) => [v[0], r(v[1] / Math.pow(6, 5), 5)])
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='2') choice
  tbody
    tr(v-for='s in scoreArr', :key='`c_tr_${i}`')
      td {{ s[0] }}
      td {{ s[1] }}
</template>
