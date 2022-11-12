<script setup lang="ts">
import { r } from '@/assets/ts/index'
</script>

<template lang="pug">
table
  thead
    tr
      th(colspan='2') choice
  tbody
    tr(v-for='i in Math.pow(6, 5)', :key='`c_tr_${i}`')
      td {{ (Math.floor((i - 1) / Math.pow(6, 4)) % 6) + 1 + '-' + ((Math.floor((i - 1) / Math.pow(6, 3)) % 6) + 1) + '-' + ((Math.floor((i - 1) / Math.pow(6, 2)) % 6) + 1) + '-' + ((Math.floor((i - 1) / Math.pow(6, 1)) % 6) + 1) + '-' + (((i - 1) % 6) + 1) }}
      td {{ r(Math.pow(1 / 6, 5), 5) }}
</template>
