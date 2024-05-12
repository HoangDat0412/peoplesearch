<script setup>
import { ref } from 'vue'
import './personalnote.scss'
const isEdit = ref(false)

const note = ref('Xin chào tất cả mọi người, chúc mọi người có một tuần lễ vui vẻ bên gia đình')
const relatedtopic = ref('Topic 1')
const handleUpdateNote = () => {
  console.log(note.value)
  isEdit.value = false
}

const handleEdit = () => {
  isEdit.value = true
}
</script>
<template>
  <main>
    <div class="mb-3" v-if="!isEdit">
      <div class="d-flex justify-between">
        <p style="font-size: 13px; font-style: italic">20:20 - 20/11/2023</p>
        <div>
          <font-awesome-icon
            class="me-2"
            style="color: white; font-size: 15px"
            icon="fa-solid fa-pen-to-square"
            @click="() => handleEdit()"
          />
          <font-awesome-icon
            class=""
            style="color: white; font-size: 15px"
            icon="fa-solid fa-trash"
          />
        </div>
      </div>
      <p class="mt-1">
        {{ note }}
      </p>
      <p class="mt-1">Reated topic: {{ relatedtopic }}</p>
    </div>
    <div class="mb-3" v-else>
      <div class="d-flex justify-between">
        <p style="font-size: 13px; font-style: italic">Note at 20:20 - 20/11/2023</p>
        <div>
          <font-awesome-icon
            class="me-2"
            style="color: white; font-size: 15px"
            icon="fa-solid fa-check"
            @click="() => handleUpdateNote()"
          />
          <font-awesome-icon
            class=""
            style="color: white; font-size: 15px"
            icon="fa-solid fa-trash"
          />
        </div>
      </div>
      <textarea
        class="form-control bg-dark text-light mt-1 scrollbar"
        v-model="note"
        style="height: 80px; font-size: 14px"
      ></textarea>
      <span class="mt-2 d-flex"
        >Reated topic:
        <input type="text" v-model="relatedtopic" class="ms-2 form-control form_input_title"
      /></span>
    </div>
  </main>
</template>
