<script setup>
import { ref } from 'vue'
import './personalnote.scss'
import moment from 'moment'
import { useNoteStore } from '@/stores/note'
// import { notify } from '@kyvg/vue3-notification'
const props = defineProps(['item'])
import ModelEditNote from '@/components/ModelEditNote/ModelEditNote.vue'
let item = props.item
const isEdit = ref(false)
const note = ref(item?.title || 'Note')
const content = ref(item?.content)
// const relatedtopic = ref(item?.relatedtopic || 1)
const usenote = useNoteStore()

const handleDelete = () => {
  usenote.DeleteNote(item?.id)
}
</script>
<template>
  <main>
    <div class="mb-4" v-if="!isEdit">
      <div class="card note-card">
        <div class="card note-card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <p class="">{{ note }} - {{ moment(item?.created_at).format('MMM Do YY') }}</p>
          </div>
          <div class="card-body">
            <h6>{{ content }}</h6>
          </div>
          <div class="card-footer text-right">
            <button
              class="btn btn-outline-secondary btn-sm"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#ModelUpdateNote"
            >
              <i class="far fa-edit"></i> Edit
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="() => handleDelete()">
              <i class="far fa-trash-alt"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <ModelEditNote :note="item" />
  </main>
</template>
