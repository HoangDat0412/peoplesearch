<script setup>
import { useUserStore } from '@/stores/user'

const props = defineProps(['search'])
let search = props.search
const user = useUserStore()
</script>
<template>
  <main class="container">
    <div class="row gap-3">
      <div class="col-auto">
        <img
          width="27"
          height="27"
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
          alt=""
          style="border-radius: 50%"
        />
      </div>

      <div class="col-auto d-flex flex-col">
        <p class="mb-2">{{ user.userInformation?.current_user_name }}</p>
        <div style="border: solid 1px; padding: 15px">
          <h2 class="">Search by my request:</h2>
          <div class="mt-2">
            <p v-if="search?.name">Name: {{ search?.name }}</p>
            <p class="mt-1" v-if="search?.search">Search: {{ search?.search }}</p>
            <p class="mt-1" v-if="search?.gender">Gender: {{ search?.gender }}</p>
            <p class="mt-1" v-if="search?.phone">Phone: {{ search?.phone }}</p>
            <p class="mt-1" v-if="search?.email">Email: {{ search?.email }}</p>
            <p class="mt-1" v-if="search?.address">Address: {{ search?.address }}</p>
            <p class="mt-1" v-if="search?.national">National: {{ search?.national }}</p>
            <p class="mt-1" v-if="search?.cccd">CCCD/Passport: {{ search?.cccd }}</p>
            <p class="mt-1" v-if="search?.linkfacebook">
              Link Facebook: {{ search?.linkfacebook }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
