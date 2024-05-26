<script setup>
import { ref, watchEffect } from 'vue'
import { useSearchStore } from '@/stores/search'
import { notify } from '@kyvg/vue3-notification'
import { useNoteStore } from '@/stores/note'
const props = defineProps(['note'])
const note = props?.note
const useSearch = useSearchStore()
const useNote = useNoteStore()
useNote.notify = notify
watchEffect(async () => {
  await useSearch.GetAllChat()
})

const notetitle = ref(note?.title)
const newnote = ref(note?.content)
const newRelateTopic = ref(useSearch.listChat[0]?.id || 0)

const handleUpdateNote = async () => {
  if (newnote.value.trim() === '' && notetitle.value.trim() === '') {
    notify({
      title: 'Note Note Error',
      text: 'Note must be not null',
      type: 'error'
    })
  } else {
    await useNote.UpdateNote(note?.id, {
      title: notetitle.value,
      content: newnote.value
    })
  }
}
</script>

<template>
  <main>
    <div class="modal fade show" id="ModelUpdateNote">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-6 text-dark">Update Personal Note</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label text-dark">Note Title</label>
                    <input class="form-control mt-1" v-model="notetitle" />
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label text-dark">Note</label>
                    <textarea
                      class="form-control mt-1 scrollbar"
                      style="height: 100px; font-size: 14px"
                      v-model="newnote"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label text-dark">Relate Topic</label>
                    <select class="form-select form-select-sm" v-model="newRelateTopic">
                      <option v-for="chat in useSearch?.listChat" :key="chat?.id" :value="chat?.id">
                        {{ chat?.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn_search"
              @click="() => handleUpdateNote()"
              data-bs-dismiss="modal"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
