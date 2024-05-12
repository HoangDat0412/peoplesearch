<script setup>
import './chat.scss'
import ModelSearchFile from '@/components/ModelSearchFile.vue'
import ModelSearchPeople from '@/components/ModelSearchPeople.vue'
import ResultPeopleSearch from '@/components/ResultPeopleSearch/ResultPeopleSearch.vue'
import SearchPeopleItem from '@/components/SearchPeopleItem/SearchPeopleItem.vue'
import { useShowStore } from '@/stores/show.js'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
const show = useShowStore()
</script>

<template>
  <main>
    <div style="position: relative; height: 100vh">
      <PerfectScrollbar class="container chat pt-[4rem]">
        <div class="d-flex flex-col gap-3">
          <SearchPeopleItem />

          <ResultPeopleSearch />

          <!-- <div class="d-flex gap-3">
            <div>
              <img
                width="27"
                height="27"
                src="https://lh3.googleusercontent.com/a/ACg8ocJhuoCuqMj7V7yEKHvvvvfhiWknjfJSqdche341rkbV-g=s96-c"
                alt=""
                style="border-radius: 50%"
              />
            </div>

            <div style="border: solid 1px; padding: 15px">
              <h2 class="mb-3">Search by my request</h2>
              <iframe
                src="https://open.spotify.com/embed/track/4qYfRfSxsmhJ1WMaywtLyI?utm_source=generator"
                height="100"
                frameborder="0"
                allowfullscreen
                allow="autoplay"
              ></iframe>
            </div>
          </div>

          <div class="d-flex gap-3">
            <div>
              <img
                width="27"
                height="27"
                src="https://lh3.googleusercontent.com/a/ACg8ocJhuoCuqMj7V7yEKHvvvvfhiWknjfJSqdche341rkbV-g=s96-c"
                alt=""
                style="border-radius: 50%"
              />
            </div>

            <div style="border: solid 1px; padding: 15px">
              <h2 class="mb-3">This sound look like a</h2>
              <div class="row mt-3 mx-2">
                <div class="col-4">
                  <div style="border: solid 1px; padding: 15px">
                    <p class="text-center">Songs</p>
                  </div>
                </div>
                <div class="col-4">
                  <div style="border: solid 1px; padding: 15px">
                    <p class="text-center">Video</p>
                  </div>
                </div>

                <div class="col-4">
                  <div style="border: solid 1px; padding: 15px">
                    <p class="text-center">Void of people</p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </PerfectScrollbar>
      <div class="input-group search_group">
        <input
          type="text"
          class="form-control"
          style="height: 50px; border-right: none"
          placeholder="Looking for something ..."
        />
        <span class="input-group-text" style="border-left: none">
          <div class="dropdown">
            <font-awesome-icon
              style="font-size: 20px"
              icon="fa-solid fa-file"
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a class="dropdown-item" style="cursor: pointer" @click="show.searchpeople = true">
                  <font-awesome-icon class="pe-2" style="font-size: 20px" icon="fa-solid fa-user" />
                  Personal Searching
                </a>
              </li>
              <li>
                <a class="dropdown-item" style="cursor: pointer" @click="show.searchfile = true">
                  <font-awesome-icon
                    class="pe-2"
                    style="font-size: 20px"
                    icon="fa-solid fa-photo-film"
                  />Upload Photo/Video
                </a>
              </li>
              <li>
                <a class="dropdown-item" style="cursor: pointer" @click="show.searchaudio = true">
                  <font-awesome-icon
                    class="pe-2"
                    style="font-size: 20px"
                    icon="fa-solid fa-file-audio"
                  />Audio
                </a>
              </li>
            </ul>
          </div>
        </span>
        <span class="input-group-text" style="border-left: none">
          <font-awesome-icon style="font-size: 20px" icon="fa-solid fa-search" />
        </span>
      </div>
    </div>

    <ModelSearchPeople />

    <ModelSearchFile />
  </main>
</template>
