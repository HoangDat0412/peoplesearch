<script setup>
import { useSearchStore } from '@/stores/search'
import ChatTitle from '../ChatTitle/ChatTitle.vue'
import { watchEffect } from 'vue'
const search = useSearchStore()
watchEffect(async () => {
  await search.GetAllChat()
})
</script>
<template>
  <main>
    <div>
      <ul class="mt-2">
        <div v-for="(chat, index) in search?.listHighlight" :key="index">
          <ChatTitle :chat="chat" />
        </div>
      </ul>
    </div>
  </main>
</template>
