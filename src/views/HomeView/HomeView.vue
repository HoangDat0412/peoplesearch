<script setup>
import { useShowStore } from '@/stores/show.js'
const show = useShowStore()
import './home.scss'
import { useSearchStore } from '@/stores/search'
import { ref } from 'vue'
import { notify } from '@kyvg/vue3-notification'
import MultipleSearchHome from '@/components/MultipleSearchHome/MultipleSearchHome.vue'
import SearchFileHome from '@/components/SearchFileHome/SearchFileHome.vue'
const usesearch = useSearchStore()
const search = ref('')
const handleSearch = async () => {
  if (search.value.trim() !== '') {
    show.SetShowSpinner(true)
    await usesearch.CreateChat({
      name: search.value,
      higlighted: 0
    })
    show.SetShowSpinner(false)
  } else {
    notify({
      title: 'Search Error',
      text: 'Please give the name you want to search',
      type: 'error'
    })
  }
}
</script>

<template>
  <main style="height: 100%">
    <div style="height: 100%" class="d-flex justify-content-center align-items-center container">
      <div>
        <div class="d-none d-md-flex align-items-center gap-2 justify-center mb-4">
          <img
            style="width: 50px; border-radius: 50%"
            src="https://i.pinimg.com/564x/d7/f8/2b/d7f82b61067ff83e8050a42ffea96d60.jpg"
            alt=""
          />
          <h1 class="text-2xl">People Search</h1>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 p-2">
            <div class="chathome_item" @click="show.searchpeople = true">
              <!-- <font-awesome-icon style="color: white; font-size: 50px" icon="fa-solid fa-message" /> -->
              <p class="">
                Give me name, email, phone, cccd/passport, age, etc ... to find someone
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 p-2">
            <div class="chathome_item" @click="show.searchfile = true">
              <!-- <font-awesome-icon style="color: white; font-size: 50px" icon="fa-solid fa-user" /> -->
              <p class="">
                Give me a photo of a person. I can tell you his/her all bio insformation i have.
              </p>
            </div>
          </div>
          <div class="col-12 d-none d-sm-block col-sm-6 col-md-4 p-2">
            <div class="chathome_item" @click="show.searchfile = true">
              <!-- <font-awesome-icon style="color: white; font-size: 50px" icon="fa-solid fa-music" /> -->
              <p class="">
                Give me a file of voice/melody/song/sound.I can tell you something I realize from
                them.
              </p>
            </div>
          </div>
          <div class="col-12 d-none d-sm-block col-sm-6 col-md-4 p-2">
            <div class="chathome_item" @click="show.searchfile = true">
              <p class="">
                Give me a file of video/picture/draw,ect.I can tell you something I realize from
                them.
              </p>
            </div>
          </div>
          <div class="col-12 d-none d-md-block col-sm-6 col-md-4 p-2">
            <div class="chathome_item" @click="show.searchpeople = true">
              <!-- <font-awesome-icon style="color: white; font-size: 50px" icon="fa-solid fa-car" /> -->
              <p class="">
                Give me a number plate of car/motorbike, ect. I can tell you something such as: last
                location found, kind of vehicle, ower, etc.
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="mb-4 text-2xl font-medium text-center">How can I help you today?</div> -->

        <div class="input-group mt-5 mb-3 search_home">
          <input
            type="text"
            class="form-control"
            style="height: 50px; border-right: none"
            placeholder="Search people by name"
            v-model="search"
            @keyup.enter="() => handleSearch()"
          />
          <span class="input-group-text" style="border-left: none" @click="() => handleSearch()">
            <div v-if="show.showSpiner" class="spinner-border spinner-border-lg" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <font-awesome-icon
              v-else
              style="color: white; font-size: 20px"
              icon="fa-solid fa-search"
            />
          </span>
        </div>
        <p style="text-align: center; font-size: 13px" class="search_warning">
          Search People can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>

    <MultipleSearchHome />
    <SearchFileHome />
  </main>
</template>

<style scoped></style>
