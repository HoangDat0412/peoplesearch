<script setup>
import { useNoteStore } from '@/stores/note'
import { watchEffect } from 'vue'
import PersonalNoteView from '../PersonalNote/PersonalNoteView.vue'
const useNote = useNoteStore()

watchEffect(async () => {
  await useNote.GetAllNote()
})
</script>

<template>
  <main>
    <div v-for="item in useNote?.listNote" :key="item?.id">
      <PersonalNoteView :item="item" />
    </div>
  </main>
</template>
