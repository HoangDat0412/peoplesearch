<script setup>
import './homelayout.scss'
import SidebarLeftView from '@/components/SidebarLeft/SidebarLeftView.vue'
import SidebarRightView from '@/components/SidebarRight/SidebarRightView.vue'
import ModelSidebarLeftView from '@/components/ModelSidebarLeft/ModelSidebarLeftView.vue'
import ModelSidebarRightView from '@/components/ModelSidebarRight/ModelSidebarRightView.vue'
import { onBeforeMount } from 'vue'
import { useUserStore } from '@/stores/user'
import { useShowStore } from '@/stores/show'
import router from '@/router'
const show = useShowStore()
const user = useUserStore()

onBeforeMount(async () => {
  await user.getUserInformation()
  if (!user?.userInformation?.current_user_name) {
    router.push('/login')
  }
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
          <div
            v-if="show.sideright === false"
            class="d-none d-md-block"
            style="position: fixed; top: 5px; right: 25px; z-index: 1"
          >
            <font-awesome-icon
              @click="show.sideright = true"
              class="btn_3"
              style="font-size: 20px; color: white; cursor: pointer"
              icon="fa-solid fa-list"
            />
          </div>

          <nav
            class="navbar navbar-expand-lg d-xl-none"
            style="
              position: fixed;
              top: 0;
              width: 100%;
              z-index: 10;
              background-color: #2f2f2f;
              box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            "
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

              <RouterLink
                to="/"
                class="navbar-brand d-flex align-items-center gap-2 justify-center"
              >
                <img
                  style="width: 30px; border-radius: 50%"
                  src="https://i.pinimg.com/564x/d7/f8/2b/d7f82b61067ff83e8050a42ffea96d60.jpg"
                  alt=""
                />
                <h1 class="text-xl">People Search</h1></RouterLink
              >
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
