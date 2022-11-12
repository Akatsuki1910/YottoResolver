<script setup lang="ts">
import { r } from '@/assets/ts/index'
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='7') four numbers
  tbody
    tr
      td 1個 / 4個
      td(v-for='i in 6', :key='`fn_td_${i}`') {{ i }}
    tr(v-for='i in 6', :key='`fn_tr_${i}`')
      td {{ i }}
      td(v-for='l in 6', :key='`fn_td_${i}_${l}`') {{ r(Math.pow(1 / 6, 4) * Math.pow(1 / 6, 1), 5) }}
</template>
