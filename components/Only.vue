<script setup lang="ts">
import { r } from '@/assets/ts/index'
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
    tr(v-for='i in 6', :key='`only_tr_${i}`')
      td {{ i }}
      td(v-for='l in 5', :key='`only_td_${i}_${l}`') {{ r(Math.pow(1 / 6, l) * Math.pow(5 / 6, 5 - l), 5) }}
</template>
