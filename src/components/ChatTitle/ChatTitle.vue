<script setup>
import { useSearchStore } from '@/stores/search'
import { useNotification } from '@kyvg/vue3-notification'
import './chattitle.scss'
import { ref } from 'vue'
const props = defineProps(['chat'])
let chat = props.chat
const isEdit = ref(false)
const isHighlight = ref(chat?.higlighted)
const title = ref(chat?.name || '')
const useSearch = useSearchStore()
const { notify } = useNotification()
const handleUpdateTitle = () => {
  if (title.value.trim() === '') {
    notify({
      title: 'Update Chat Title Error',
      text: 'Your chat title must be not null',
      type: 'error'
    })
  } else {
    useSearch.UpdateChat(chat?.id, {
      name: title.value,
      higlighted: chat?.higlighted
    })
    isEdit.value = false
  }
}

const handleUpdateHighLight = (status) => {
  useSearch.UpdateChat(chat?.id, {
    name: chat?.name,
    higlighted: status
  })

  isHighlight.value = status
}

const handleDeleteChat = () => {
  useSearch.DeleteChat(chat?.id)
}

const handleEdit = () => {
  isEdit.value = true
}
</script>
<template>
  <main class="chattitle">
    <li>
      <div class="group_topic rounded-lg active:opacity-90">
        <RouterLink
          :to="`/chat/${chat?.id}`"
          v-if="!isEdit"
          class="flex items-center justify-between p-2 min-w-[200px]"
        >
          <font-awesome-icon
            v-if="isHighlight === 0"
            class="me-2"
            style="color: white"
            icon="fa-solid fa-star"
            @click="() => handleUpdateHighLight(1)"
          />
          <font-awesome-icon
            v-else
            class="me-2"
            style="color: rgb(246, 192, 80)"
            icon="fa-solid fa-star"
            @click="() => handleUpdateHighLight(0)"
          />
          <div class="me-auto">
            <p>{{ title?.length > 20 ? title.slice(0, 20) : title }}</p>
          </div>

          <font-awesome-icon
            class="mx-1"
            @click="() => handleEdit()"
            icon="fa-solid fa-pen-to-square"
          />
          <font-awesome-icon
            class="mx-1"
            icon="fa-solid fa-trash"
            @click="() => handleDeleteChat()"
          />
        </RouterLink>
        <a v-else class="flex items-center justify-between p-2 min-w-[200px]">
          <font-awesome-icon
            v-if="isHighlight === 0"
            class="me-2"
            style="color: white"
            icon="fa-solid fa-star"
            @click="() => handleUpdateHighLight(1)"
          />
          <font-awesome-icon
            v-else
            class="me-2"
            style="color: rgb(246, 192, 80)"
            icon="fa-solid fa-star"
            @click="() => handleUpdateHighLight(0)"
          />
          <div class="me-auto">
            <input
              type="text"
              class="form-control form_input_title"
              @keyup.enter="() => handleUpdateTitle()"
              v-model="title"
            />
          </div>

          <font-awesome-icon
            class="mx-1"
            @click="() => handleUpdateTitle()"
            icon="fa-solid fa-check"
          />

          <font-awesome-icon
            class="mx-1"
            icon="fa-solid fa-trash"
            @click="() => handleDeleteChat()"
          />
        </a>
      </div>
    </li>
  </main>
</template>
