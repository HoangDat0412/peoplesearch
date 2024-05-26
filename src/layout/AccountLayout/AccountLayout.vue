<script setup>
import './accounttemplate.scss'
import router from '@/router'
import { onBeforeMount } from 'vue'
import { useUserStore } from '@/stores/user'
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
    <div className="settingtemplate">
      <div className="container-fluid hometemplate">
        <div className="row flex-nowrap vh-100">
          <div className="col-auto sidebaraccount">
            <div className="sidebar-inner">
              <RouterLink to="/account" className="sidebar__user w-100">
                <div className="avatar">
                  <img
                    src="https://i.pinimg.com/564x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
                    alt="avatar"
                  />
                </div>
                <div className="d-none d-sm-block sidebar__user-info">
                  <div className="sidebar__user-info-top ">
                    <div className="sidebar__user-name">
                      {{ user?.userInformation?.current_user_name }}
                    </div>
                    <font-awesome-icon
                      icon="fa-solid fa-angle-down sidebar__user-icon"
                      style="color: #515258; font-size: 13px"
                    />
                  </div>
                  <div className="sidebar__user-email">
                    {{ user?.userInformation?.current_user_email }}
                  </div>
                </div>
              </RouterLink>

              <div class="sidebar__nav">
                <ul class="tree">
                  <li class="tree__item">
                    <RouterLink to="/account" className="tree__action sidebar__action">
                      <span
                        aria-current="page"
                        className="tree__link nuxt-link-exact-active nuxt-link-active"
                      >
                        <font-awesome-icon class="tree__icon" icon="fa-solid fa-user" />
                        <span className="tree__link-text d-none d-sm-block"
                          ><span className="sidebar__item-name">Account</span></span
                        >
                      </span>
                    </RouterLink>
                  </li>
                  <li class="tree__item">
                    <div className="tree__action sidebar__action">
                      <span
                        aria-current="page"
                        className="tree__link nuxt-link-exact-active nuxt-link-active"
                      >
                        <!-- <i className="tree__icon fa-solid fa-x"></i> -->
                        <font-awesome-icon class="tree__icon" icon="fa-solid fa-x" />
                        <span className="tree__link-text d-none d-sm-block"
                          ><span className="sidebar__item-name">Delete Account</span></span
                        >
                      </span>
                    </div>
                  </li>
                  <li class="tree__item">
                    <RouterLink to="/" className="tree__action sidebar__action">
                      <span
                        aria-current="page"
                        className="tree__link nuxt-link-exact-active nuxt-link-active"
                      >
                        <font-awesome-icon class="tree__icon" icon="fa-solid fa-home" />
                        <span className="tree__link-text d-none d-sm-block"
                          ><span className="sidebar__item-name">Daskboard</span></span
                        >
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3 content bg-light" style="overflow-y: scroll">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media screen and (max-width: '576px') {
  .settingtemplate .sidebar .sidebar-inner {
    width: 70px;
  }
  .settingtemplate .sidebar .sidebar-inner .tree__link {
    justify-content: center;
  }
}
</style>
