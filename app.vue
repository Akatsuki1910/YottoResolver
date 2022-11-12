<script setup lang="ts">
import { r } from '@/assets/ts/index'

const diceArr = ref<number[]>(Array(5).fill(0))
const dice = () => {
  for (const i in diceArr.value) {
    diceArr.value[+i] = Math.floor(Math.random() * 6) + 1
  }
}
</script>

<template lang="pug">
div
  p(v-for='(d, i) in diceArr', :key='`dice_${i}`') {{ d }}
  button(@click='dice') dices
div
  Only
  FullHouse
  FourNumbers
  SS
  BS
  Yotto
  Choice
</template>
