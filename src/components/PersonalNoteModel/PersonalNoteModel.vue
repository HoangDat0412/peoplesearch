<script setup>
import { ref, watchEffect } from 'vue'
import './personalnotemodel.scss'
import { useSearchStore } from '@/stores/search'
import { notify } from '@kyvg/vue3-notification'
import { useNoteStore } from '@/stores/note'

const useSearch = useSearchStore()
const useNote = useNoteStore()
useNote.notify = notify
watchEffect(async () => {
  await useSearch.GetAllChat()
})
const notetitle = ref('')
const newnote = ref('')
const newRelateTopic = ref(useSearch.listChat[0]?.id || 0)

const handleCreateNote = async () => {
  if (newnote.value.trim() === '' && notetitle.value.trim() === '') {
    notify({
      title: 'Create Note Error',
      text: 'Note must be not null',
      type: 'error'
    })
  } else {
    await useNote.CreateNote(newRelateTopic.value, {
      title: notetitle.value,
      content: newnote.value
    })
  }
}
</script>

<template>
  <main class="personalnotemodel">
    <div
      class="modal fade"
      id="modeladdnote"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-6 text-dark">Create Personal Note</h1>
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
                    <label class="form-label">Note Title</label>
                    <input class="form-control mt-1" v-model="notetitle" />

                    <!-- <p style="color: red">{{ nameErr }}</p> -->
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label">Note</label>
                    <textarea
                      class="form-control mt-1 scrollbar"
                      value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic rem quod cum, similique aperiam dolorum sunt laborum commodi cupiditate."
                      style="height: 100px; font-size: 14px"
                      v-model="newnote"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label">Relate Topic</label>
                    <select class="form-select form-select-sm" v-model="newRelateTopic">
                      <option v-for="chat in useSearch?.listChat" :key="chat?.id" :value="chat?.id">
                        {{ chat?.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                data-mdb-ripple-init
                type="button"
                @click="() => handleCreateNote()"
                class="btn_search mt-2"
                data-bs-dismiss="modal"
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
