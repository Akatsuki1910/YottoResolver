<script setup lang="ts">
import { r } from '@/assets/ts/index'

const diceRef = ref<HTMLInputElement[]>([])
const diceSRef = ref<HTMLOptionElement[]>([])
const diceArr = ref<number[]>(Array(5).fill(1))
const dice = () => {
  for (const i in diceArr.value) {
    if (!diceRef.value[i].checked) {
      diceArr.value[i] = Math.floor(Math.random() * 6) + 1
    }
  }
}
const select = () => {
  for (const i in diceArr.value) {
    diceArr.value[i] = +diceSRef.value[i].value
  }
}

const sDiceRef = ref<number[]>([])
const change = (i: number) => {
  sDiceRef.value = []
  for (const i in diceArr.value) {
    if (diceRef.value[i].checked) {
      sDiceRef.value.push(diceArr.value[i])
    }
  }
}
</script>

<template lang="pug">
.dices
  .dice(v-for='(d, i) in diceArr', :key='`dice_${i}`')
    input(type='checkbox', :id='`d${i}`', ref='diceRef', @change='change(i)')
    label(:for='`d${i}`') {{ d }}
  button(@click='dice') dices
.selects
  .select(v-for='i in 5', :key='`dice_s_${i}`')
    select(ref='diceSRef')
      option(v-for='l in 6', :key='`dice_s_${i}_${l}`') {{ l }}
  button(@click='select') select
div
  Only(:dice='sDiceRef')
  FullHouse(:dice='sDiceRef')
  FourNumbers(:dice='sDiceRef')
  SS(:dice='sDiceRef')
  BS(:dice='sDiceRef')
  Yotto(:dice='sDiceRef')
  Choice
</template>

<style lang="scss" scoped>
.dices,
.selects {
  border: 1px solid black;
  display: flex;
}
.dice,
.select {
  display: flex;
}
</style>
