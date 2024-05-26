<script setup>
import { Notifications } from '@kyvg/vue3-notification'
import '@/assets/button.scss'
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <Notifications />
</template>

<style scoped></style>
