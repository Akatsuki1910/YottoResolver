<script setup lang="ts">
import { r } from '@/assets/ts/index'
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='2') BS
  tbody
    tr(v-for='i in 2', :key='`bs_tr_${i}`')
      td {{ i + '-' + (i + 4) }}
      td {{ r(Math.pow(1 / 6, 5), 5) }}
</template>
