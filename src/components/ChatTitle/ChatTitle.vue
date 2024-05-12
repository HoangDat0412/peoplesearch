<script setup>
import './chattitle.scss'
import { ref } from 'vue'
const isEdit = ref(false)
const isHighlight = ref(true)
const title = ref('Title 1')
const handleUpdateTitle = () => {
  console.log(title.value)
  isEdit.value = false
}

const handleEdit = () => {
  isEdit.value = true
}
</script>
<template>
  <main class="chattitle">
    <li>
      <div class="group_topic rounded-lg active:opacity-90">
        <a v-if="!isEdit" class="flex items-center justify-between p-2 min-w-[200px]">
          <font-awesome-icon
            v-if="!isHighlight"
            class="me-2"
            style="color: white; font-size: 15px"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            v-else
            class="me-2"
            style="color: rgb(246, 192, 80); font-size: 15px"
            icon="fa-solid fa-star"
          />
          <div class="me-auto">
            <p>{{ title.length > 20 ? title.slice(0, 20) : title }}</p>
          </div>

          <font-awesome-icon
            class="mx-1"
            @click="() => handleEdit()"
            icon="fa-solid fa-pen-to-square"
          />

          <font-awesome-icon class="mx-1" icon="fa-solid fa-trash" />
        </a>
        <a v-else class="flex items-center justify-between p-2 min-w-[200px]">
          <font-awesome-icon
            v-if="!isHighlight"
            class="me-2"
            style="color: white; font-size: 15px"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            v-else
            class="me-2"
            style="color: rgb(246, 192, 80); font-size: 15px"
            icon="fa-solid fa-star"
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

          <font-awesome-icon class="mx-1" icon="fa-solid fa-trash" />
        </a>
      </div>
    </li>
  </main>
</template>
