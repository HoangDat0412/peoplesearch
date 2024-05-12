<script setup>
import { useShowStore } from '@/stores/show.js'
const show = useShowStore()
import HighlightView from '@/components/Highlight/HighlightView.vue'
import PersonalNoteView from '../PersonalNote/PersonalNoteView.vue'
import PersonalNoteModel from '../PersonalNoteModel/PersonalNoteModel.vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
</script>

<template>
  <main>
    <div
      class="sidebar d-none d-xl-flex flex-col p-2 align-items-center"
      style="position: relative; height: 100vh"
    >
      <div style="text-align: right; position: absolute; left: 13px">
        <font-awesome-icon
          v-if="show.sideright"
          @click="show.sideright = false"
          style="font-size: 20px; color: white; cursor: pointer"
          icon="fa-solid fa-xmark"
        />
        <font-awesome-icon
          v-else
          @click="show.sideright = true"
          class="ps-2"
          style="font-size: 20px; color: white; cursor: pointer"
          icon="fa-solid fa-bars"
        />
      </div>

      <div
        v-if="show.sideright"
        class="tab-content mt-4"
        style="color: aliceblue; width: 300px"
        id="myTabContent"
      >
        <div
          class="tab-pane fade show active mt-3"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="d-flex justify-between">
            <h2 class="text-lg font-medium">Personal Note</h2>
            <button class="btn_2" data-bs-toggle="modal" data-bs-target="#modeladdnote">
              Add Note
            </button>
          </div>

          <PerfectScrollbar class="mt-3 p-1" style="height: 70vh">
            <PersonalNoteView />
            <PersonalNoteView />
            <PersonalNoteView />
            <PersonalNoteView />
          </PerfectScrollbar>
        </div>

        <div class="tab-pane fade mt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <h2 class="text-center text-lg font-medium">Highlight Topics</h2>
          <PerfectScrollbar class="mt-3 p-1" style="height: 70vh">
            <HighlightView />
            <HighlightView />
            <HighlightView />
            <HighlightView />
            <HighlightView />
            <HighlightView />
            <HighlightView />
            <HighlightView />
          </PerfectScrollbar>
        </div>
      </div>

      <ul v-if="show.sideright" class="mt-auto nav nav-tabs text-center" id="myTab" role="tablist">
        <li class="nav-item me-1" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Note
            <font-awesome-icon
              class="pe-2"
              style="color: white; cursor: pointer"
              icon="fa-solid fa-note-sticky"
            />
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Highlight
            <font-awesome-icon
              class="pe-2"
              style="color: white; cursor: pointer"
              icon="fa-solid fa-highlighter"
            />
          </button>
        </li>
      </ul>

      <ul
        v-if="!show.sideright"
        class="mt-auto nav nav-tabs d-flex flex-col"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="btn btn-default"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            <font-awesome-icon
              @click="show.sideright = true"
              style="font-size: 20px; color: white; cursor: pointer"
              icon="fa-solid fa-note-sticky"
            />
          </button>
        </li>
        <li class="nav-item mt-2" role="presentation">
          <button
            class="btn btn-default"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <font-awesome-icon
              @click="show.sideright = true"
              style="color: white; font-size: 20px; cursor: pointer"
              icon="fa-solid fa-highlighter"
            />
          </button>
        </li>
      </ul>
    </div>

    <PersonalNoteModel />
  </main>
</template>
