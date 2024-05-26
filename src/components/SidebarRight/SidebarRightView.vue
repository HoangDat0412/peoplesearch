<script setup>
import { useShowStore } from '@/stores/show.js'
const show = useShowStore()
import HighlightView from '@/components/Highlight/HighlightView.vue'
import PersonalNoteModel from '../PersonalNoteModel/PersonalNoteModel.vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import ListPersonalNoteView from '../ListPresonalNote/ListPersonalNoteView.vue'
</script>

<template>
  <main v-if="show.sideright">
    <div
      class="sidebar d-none d-xl-flex flex-col p-2 align-items-center"
      style="position: relative; height: 100vh"
    >
      <div style="text-align: right; position: absolute; left: 13px">
        <font-awesome-icon
          @click="show.sideright = false"
          style="font-size: 20px; color: white; cursor: pointer"
          icon="fa-solid fa-xmark"
        />
      </div>

      <div
        v-if="show.sideright"
        class="tab-content mt-4"
        style="color: aliceblue; width: 270px"
        id="myTabContent"
      >
        <div
          class="tab-pane fade show active mt-3"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="d-flex justify-between">
            <button class="button-60 ms-2" data-bs-toggle="modal" data-bs-target="#modeladdnote">
              New Note
            </button>
          </div>

          <PerfectScrollbar class="mt-3 p-1" style="height: 73vh">
            <ListPersonalNoteView />
          </PerfectScrollbar>
        </div>

        <div class="tab-pane fade mt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <h2 class="text-center text-lg font-medium">Highlight Topics</h2>
          <PerfectScrollbar class="mt-3 p-1" style="height: 73vh">
            <HighlightView />
          </PerfectScrollbar>
        </div>
      </div>

      <ul class="mt-auto nav nav-tabs text-center" id="myTab" role="tablist">
        <li class="nav-item me-1" role="presentation">
          <button
            class="btn_search"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Note
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="btn_search"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Highlight
          </button>
        </li>
      </ul>
    </div>

    <PersonalNoteModel />
  </main>
</template>
