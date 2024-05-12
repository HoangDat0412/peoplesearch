<script setup>
import { useShowStore } from '@/stores/show.js'
const show = useShowStore()
import './home.scss'
import { useSearchStore } from '@/stores/search'
import { ref } from 'vue'
const usesearch = useSearchStore()
const search = ref('')
const handleSearch = () => {
  usesearch.SimpleSearchName(search.value)
}
</script>

<template>
  <main style="height: 100%">
    <div style="height: 100%" class="d-flex justify-content-center align-items-center container">
      <div>
        <div class="mb-4 text-2xl font-medium text-center">How can I help you today?</div>
        <div class="input-group mb-3 search_home">
          <input
            type="text"
            class="form-control"
            style="height: 50px; border-right: none"
            placeholder="Looking for something ..."
            v-model="search"
          />
          <span class="input-group-text" style="border-left: none" @click="() => handleSearch()">
            <font-awesome-icon style="color: white; font-size: 20px" icon="fa-solid fa-search" />
          </span>
        </div>
        <p style="text-align: center; font-size: 13px" class="search_warning">
          Search People can make mistakes. Consider checking important information.
        </p>

        <div class="row mt-4">
          <div class="col-12 col-sm-6 col-md-4 p-2">
            <div class="chathome_item">
              <!-- <font-awesome-icon style="color: white; font-size: 50px" icon="fa-solid fa-message" /> -->
              <p class="">Give me an any request to find someone, somewhere, something, ect.</p>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 p-2">
            <div class="chathome_item">
              <!-- <font-awesome-icon style="color: white; font-size: 50px" icon="fa-solid fa-user" /> -->
              <p class="">
                Give me a photo of a person. I can tell you his/her all bio insformation i have.
              </p>
            </div>
          </div>
          <div class="col-12 d-none d-sm-block col-sm-6 col-md-4 p-2">
            <div class="chathome_item">
              <!-- <font-awesome-icon style="color: white; font-size: 50px" icon="fa-solid fa-music" /> -->
              <p class="">
                Give me a file of voice/melody/song/sound.I can tell you something I realize from
                them.
              </p>
            </div>
          </div>
          <div class="col-12 d-none d-sm-block col-sm-6 col-md-4 p-2">
            <div class="chathome_item">
              <!-- <font-awesome-icon
              style="color: white; font-size: 50px"
              icon="fa-solid fa-photo-film"
            /> -->
              <p class="">
                Give me a file of video/picture/draw,ect.I can tell you something I realize from
                them.
              </p>
            </div>
          </div>
          <div class="col-12 d-none d-md-block col-sm-6 col-md-4 p-2">
            <div class="chathome_item">
              <!-- <font-awesome-icon style="color: white; font-size: 50px" icon="fa-solid fa-car" /> -->
              <p class="">
                Give me a number plate of car/motorbike, ect. I can tell you something such as: last
                location found, kind of vehicle, ower, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="show.searchaudio"
      class="modal fade show"
      style="display: block; color: rgba(0, 0, 0, 1)"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" @click="show.searchaudio = false"></button>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label">Message</label>
                    <input type="text" name="name" class="form-control" />

                    <!-- <p style="color: red">{{ nameErr }}</p> -->
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label for="formFile" class="form-label">File</label>
                <input class="form-control" type="file" id="formFile" />
              </div>

              <button data-mdb-ripple-init type="button" class="btn btn-default btn-block">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
