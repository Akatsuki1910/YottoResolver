<script setup lang="ts">
import { r } from '@/assets/ts/index'
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='2') yotto
  tbody
    tr(v-for='i in 6', :key='`y_tr_${i}`')
      td {{ i }}
      td {{ r(Math.pow(1 / 6, 5), 5) }}
</template>
