<script setup>
import { useShowStore } from '@/stores/show.js'
import ChatTitle from '../ChatTitle/ChatTitle.vue'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const show = useShowStore()
import { useSearchStore } from '@/stores/search'
import { watchEffect } from 'vue'
const usesearch = useSearchStore()

watchEffect(async () => {
  await usesearch.GetAllChat()
  // await user.getApi()
})
</script>
<template>
  <main>
    <div class="sidebar px-0 d-none d-xl-block vh-100">
      <div
        class="open_sidebar_icon"
        style="text-align: right; position: absolute; right: 35px; top: 10px"
      >
        <font-awesome-icon
          v-if="show.showSidebar"
          @click="show.showSidebar = false"
          style="font-size: 20px; color: white; cursor: pointer"
          icon="fa-solid fa-xmark"
        />
        <font-awesome-icon
          v-else
          @click="show.showSidebar = true"
          style="font-size: 20px; color: white; cursor: pointer"
          icon="fa-solid fa-bars"
        />
      </div>

      <div class="d-flex flex-column align-items-center px-2 px-sm-3 pt-4 min-vh-100">
        <ul class="nav nav-pills flex-column mb-0 align-items-center mt-4" id="menu">
          <RouterLink to="/" class="nav-item">
            <a
              class="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-medium hover:bg-token-sidebar-surface-secondary"
            >
              <div class="h-7 w-7 flex-shrink-0">
                <img
                  src="https://i.pinimg.com/564x/d7/f8/2b/d7f82b61067ff83e8050a42ffea96d60.jpg"
                  alt=""
                  style="border-radius: 50%"
                />
              </div>
              <div
                v-if="show.showSidebar"
                class="grow d-none d-sm-block overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary"
              >
                New Search
              </div>
            </a>
          </RouterLink>
        </ul>
        <PerfectScrollbar style="height: 71vh">
          <ul v-if="show.showSidebar && usesearch?.listChat.length > 0" class="mt-2">
            <div v-for="chat in usesearch?.listChat" :key="chat.id">
              <ChatTitle :chat="chat" />
            </div>
          </ul>
        </PerfectScrollbar>

        <div v-if="user?.userInformation?.current_user_name" class="dropdown">
          <span
            class="sidebar__user w-100 dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="avatar">
              <img
                v-if="show.showSidebar"
                style="width: 48px"
                src="https://i.pinimg.com/564x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
                alt="avatar"
              />
              <img
                v-else
                style="width: 32px"
                src="https://i.pinimg.com/564x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
                alt="avatar"
              />
            </div>
            <div v-if="show.showSidebar" class="sidebar__user-info">
              <div class="sidebar__user-info-top">
                <div class="sidebar__user-name">
                  {{ user?.userInformation?.current_user_name }}
                  <font-awesome-icon style="font-size: 13px" icon="fa-solid fa-angle-down" />
                </div>
                <!-- <i class="sidebar__user-icon fa-solid fa-angle-down"></i> -->
              </div>
              <div class="sidebar__user-email">
                {{ user?.userInformation?.current_user_email }}
              </div>
            </div>
          </span>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <RouterLink to="/account" class="setting_btn">
                <i class="fa-solid fa-gear"></i> Setting
              </RouterLink>
            </li>
            <hr />
            <li>
              <button class="setting_btn" @click="() => user.logout()">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
