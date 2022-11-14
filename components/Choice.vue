<script setup lang="ts">
import { dCount, r } from '@/assets/ts/index'

interface Props {
  dice: number[]
}

const props = withDefaults(defineProps<Props>(), { dice: () => [] })

let diceArr = ref<[number, number][]>([])

watch(
  () => props.dice,
  () => {
    const scoreMap = new Map<number, number>()
    let sMapNum = 0

    for (let i = 5; i <= 30; i++) {
      scoreMap.set(i, 0)
    }

    const sArrSet = new Set()

    for (let a = 1; a <= 6; a++) {
      for (let b = 1; b <= 6; b++) {
        for (let c = 1; c <= 6; c++) {
          for (let d = 1; d <= 6; d++) {
            for (let e = 1; e <= 6; e++) {
              let addScore = 0
              const sArr = [a, b, c, d, e]

              sArr.sort()
              const sArrKey = sArr.reduce((j, k) => j + k, '')

              if (sArrSet.has(sArrKey)) continue

              sArrSet.add(sArrKey)

              addScore += sArr.reduce((j, k) => j + k, 0)

              for (const d of props.dice) {
                const idx = sArr.indexOf(d)
                if (idx >= 0) {
                  sArr.splice(idx, 1)
                }
              }
              if (5 - sArr.length === props.dice.length) {
                scoreMap.set(
                  addScore,
                  scoreMap.has(addScore) ? scoreMap.get(addScore)! + 1 : 1,
                )
                sMapNum++
              }
            }
          }
        }
      }
    }

    diceArr.value = [...scoreMap]
      .sort((a, b) => (a[0] > b[0] ? 1 : -1))
      .map((v) => [v[0], r(v[1] / sMapNum, 5)])
  },
  { immediate: true },
)
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='2') choice
  tbody
    tr(v-for='d in diceArr', :key='`c_tr_${s}`')
      td {{ d[0] }}
      TableTd(:num='d[1]')
</template>
