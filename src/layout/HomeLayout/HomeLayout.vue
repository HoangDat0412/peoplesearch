<script setup>
import './homelayout.scss'
import SidebarLeftView from '@/components/SidebarLeft/SidebarLeftView.vue'
import SidebarRightView from '@/components/SidebarRight/SidebarRightView.vue'
import ModelSetting from '@/components/ModelSetting/ModelSetting.vue'
import ModelSidebarLeftView from '@/components/ModelSidebarLeft/ModelSidebarLeftView.vue'
import ModelSidebarRightView from '@/components/ModelSidebarRight/ModelSidebarRightView.vue'
import { watchEffect } from 'vue'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
watchEffect(async () => {
  await user.getUserInformation()
  // await user.getApi()
})
</script>

<template>
  <main>
    <div class="container-fluid homelayout" style="height: 100vh">
      <div class="row">
        <div class="col-auto">
          <SidebarLeftView />
        </div>
        <div class="col homelayout_content">
          <nav
            class="navbar navbar-expand-lg navbar-dark bg-dark d-xl-none"
            style="position: fixed; top: 0; width: 100%; z-index: 2"
          >
            <div class="container-fluid">
              <a
                class=""
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <font-awesome-icon style="font-size: 20px" icon="fa-solid fa-bars" />
              </a>

              <a class="navbar-brand" href="#">People Search</a>

              <a
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                role="button"
                aria-controls="offcanvasRight"
              >
                <font-awesome-icon style="font-size: 20px" icon="fa-solid fa-bars" />
              </a>
            </div>
          </nav>
          <RouterView />
        </div>
        <div class="col-auto">
          <SidebarRightView />
        </div>
      </div>
    </div>

    <ModelSetting />
    <ModelSidebarLeftView />
    <ModelSidebarRightView />
  </main>
</template>

<style scoped></style>
