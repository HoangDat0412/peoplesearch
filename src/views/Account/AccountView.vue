<script setup>
// import router from '@/router';
import { useUserStore } from '@/stores/user'
import { notify } from '@kyvg/vue3-notification'
import { onBeforeMount, ref } from 'vue'
const user = useUserStore()
const username = ref('')
onBeforeMount(async () => {
  await user.getUserInformation()
  username.value = user.userInformation?.current_user_name
})

const handleUpdateUserName = async () => {
  if (username.value.trim() === '') {
    notify({
      title: "Update false user name can't null",
      type: 'error'
    })
  } else {
    await user.userUpdateInformation({
      username: username.value
    })
  }
}
</script>

<template>
  <main>
    <div className="container text-dark account">
      <h1 className="text-2xl mb-2">Account</h1>

      <hr />
      <form className="pt-3 mb-4">
        <div className=" mb-3">
          <label class="form-label">Your name</label>
          <input type="text" class="form-control" v-model="username" />
        </div>
        <button type="button" className="button-8" @click="() => handleUpdateUserName()">
          Update
        </button>
      </form>

      <br />
      <h1 className="text-2xl mb-2">Change Password</h1>
      <hr />

      <form className="pt-3 mb-4">
        <div className=" mb-3">
          <label class="form-label">Old password</label>
          <input type="password" class="form-control" />
        </div>
        <div className=" mb-3">
          <label class="form-label">New password</label>
          <input type="password" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Repeat new password</label>
          <input type="password" class="form-control" />
        </div>
        <button type="button" className="button-8">Change Password</button>
      </form>

      <h1 className="text-2xl mb-2 pt-3">Multi-factor authentication</h1>
      <hr />

      <form className="pt-3 mb-4">
        <div className=" mb-3">
          <select class="form-select" aria-label="Default select example">
            <option :value="true">Enable</option>
            <option :value="false">Not Enable</option>
          </select>
        </div>

        <button type="button" className="button-8">Save</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.account .form-control:focus {
  background-color: white !important;
  color: black;
}
</style>
