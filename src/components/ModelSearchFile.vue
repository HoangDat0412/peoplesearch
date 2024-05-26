<script setup>
import { useShowStore } from '@/stores/show.js'
import { ref } from 'vue'
const show = useShowStore()
const message = ref('')
const fileUrl = ref(null)
const fileType = ref('')

const searchFile = () => {
  // Implement the file search logic here
  alert(`Search initiated with message: ${message.value}`)
}

const previewFile = (event) => {
  const file = event.target.files[0]
  if (file) {
    const fileTypes = ['image', 'video', 'audio']
    const type = file.type.split('/')[0]

    if (fileTypes.includes(type)) {
      fileUrl.value = URL.createObjectURL(file)
      fileType.value = type
    } else {
      fileUrl.value = null
      fileType.value = ''
      alert('Please select a valid image, video, or audio file.')
    }
  } else {
    fileUrl.value = null
    fileType.value = ''
  }
}
</script>
<template>
  <main>
    <div
      v-if="show.searchfile"
      class="modal fade show"
      tabindex="-1"
      style="display: block"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered text-dark">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-lg">File Search</h5>
            <button
              type="button"
              class="btn-close"
              @click="show.searchfile = false"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <input
                  type="text"
                  id="message"
                  name="name"
                  v-model="message"
                  class="form-control"
                />
                <!-- <p style="color: red">{{ nameErr }}</p> -->
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">File</label>
                <input class="form-control" type="file" id="formFile" @change="previewFile" />
              </div>
              <div v-if="fileUrl" class="mb-3 text-center">
                <img
                  v-if="fileType === 'image'"
                  :src="fileUrl"
                  alt="Selected Image"
                  class="img-thumbnail"
                  style="max-width: 100%; height: auto"
                />
                <video
                  v-if="fileType === 'video'"
                  :src="fileUrl"
                  controls
                  class="img-thumbnail"
                  style="max-width: 100%; height: auto"
                ></video>
                <audio
                  v-if="fileType === 'audio'"
                  :src="fileUrl"
                  controls
                  class="img-thumbnail"
                  style="width: 100%"
                ></audio>
              </div>
              <button type="button" class="btn btn-primary w-100 mt-2" @click="searchFile">
                Search Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.modal-content {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
.modal-header {
  border-bottom: none;
}
/* .btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
} */
.form-control {
  border-radius: 5px;
  transition: border-color 0.3s;
}
.form-control:focus {
  border-color: #007bff;
  box-shadow: none;
}
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
.img-thumbnail {
  border-radius: 5px;
  margin-top: 10px;
}
</style>
