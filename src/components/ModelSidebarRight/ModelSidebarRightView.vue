<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import HighlightView from '../Highlight/HighlightView.vue'
import PersonalNoteView from '../PersonalNote/PersonalNoteView.vue'
import PersonalNoteModel from '../PersonalNoteModel/PersonalNoteModel.vue'
</script>

<template>
  <main>
    <div
      class="offcanvas offcanvas-end modelsidebar"
      tabindex="-1"
      id="offcanvasRight"
      style="width: 330px"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header mb-0">
        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
          <font-awesome-icon
            class="pe-2"
            style="font-size: 25px; color: white; cursor: pointer"
            icon="fa-solid fa-xmark"
          />
        </button>
      </div>
      <div class="offcanvas-body p-0">
        <div class="sidebar d-flex flex-col p-2 align-items-center">
          <div class="tab-content" style="color: aliceblue; width: 300px" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home1"
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
            <div class="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile-tab">
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

          <ul class="mt-auto nav nav-tabs text-center" id="myTab" role="tablist">
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home1"
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
                data-bs-target="#profile1"
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
        </div>

        <PersonalNoteModel />
      </div>
    </div>
  </main>
</template>
