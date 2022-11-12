<script setup lang="ts">
import { r } from '@/assets/ts/index'
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='2') SS
  tbody
    tr(v-for='i in 3', :key='`ss_tr_${i}`')
      td {{ i + '-' + (i + 3) }}
      td {{ r(Math.pow(1 / 6, 4) * Math.pow(6 / 6, 1), 5) }}
</template>
