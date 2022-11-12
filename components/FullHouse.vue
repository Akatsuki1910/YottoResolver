<script setup lang="ts">
import { r } from '@/assets/ts/index'
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='7') full house
  tbody
    tr
      td 2個 / 3個
      td(v-for='i in 6', :key='`fh_td_${i}`') {{ i }}
    tr(v-for='i in 6', :key='`fh_tr_${i}`')
      td {{ i }}
      td(v-for='l in 6', :key='`fh_td_${i}_${l}`') {{ r(Math.pow(1 / 6, 2) * Math.pow(1 / 6, 3), 5) }}
</template>
