<script setup>
import './login.scss'
import { ref } from 'vue'
import { checkNull } from '@/validation/validation'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const passWord = ref('')
const errorPassword = ref('')
const username = ref('')
const errUserName = ref('')

const handleLogin = async () => {
  if (!checkNull(passWord.value)) {
    errorPassword.value = 'password không được bỏ trống'
  } else {
    errorPassword.value = ''
  }
  if (!checkNull(username.value)) {
    errUserName.value = 'password không được bỏ trống'
  } else {
    errUserName.value = ''
  }

  const flag = checkNull(passWord.value) && checkNull(username.value)

  if (flag) {
    await user.login({
      username: username.value,
      password: passWord.value
    })
  }
}
</script>

<template>
  <main>
    <form class="formlogin">
      <div class="form_content pt-3">
        <div>
          <p class="text-lg font-bold text-center">Sigin to start</p>
        </div>
        <div class="mt-3">
          <input v-model="username" class="inputlogin mt-3" placeholder="User Name " type="text" />
          <p style="color: red; font-size: 14px">{{ errUserName }}</p>

          <input
            v-model="passWord"
            class="inputlogin mt-3"
            placeholder="Password"
            type="password"
          />
          <p style="color: red; font-size: 14px">{{ errorPassword }}</p>

          <p class="mt-2" style="text-align: right; color: black; font-size: 15px">
            Forgot password?
          </p>
          <button class="btn_login mt-2" @click.prevent="() => handleLogin()">Login</button>
          <p style="font-size: 14px" class="mt-2">
            If you don't have account
            <RouterLink to="/register" style="color: cadetblue">register now !</RouterLink>
          </p>
        </div>
      </div>
    </form>
  </main>
</template>
