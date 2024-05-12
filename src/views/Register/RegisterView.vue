<script setup>
import { ref } from 'vue'
import { checkNull, ValidateEmail } from '@/validation/validation'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const email = ref('')
const errorEmail = ref('')
const passWord = ref('')
const errorPassword = ref('')
const username = ref('')
const errUserName = ref('')

const handleLogin = async () => {
  if (!checkNull(email.value)) {
    errorEmail.value = 'email không được bỏ trống'
  } else {
    errorEmail.value = ''
  }
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
  !ValidateEmail(email.value) ? (errorEmail.value = 'email không tồn tại') : (errorEmail.value = '')

  // const data = {
  //   email: email.value,
  //   password: passWord.value
  // }
  const flag =
    checkNull(email.value) &&
    checkNull(passWord.value) &&
    ValidateEmail(email.value) &&
    checkNull(username.value)
  if (flag) {
    await user.register({
      email: email.value,
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
          <p class="text-lg font-bold text-center">Register Now</p>
        </div>
        <div class="mt-3">
          <input v-model="email" class="inputlogin" placeholder="Email " type="text" />
          <p style="color: red; font-size: 14px">{{ errorEmail }}</p>

          <input v-model="username" class="inputlogin mt-3" placeholder="User Name " type="text" />
          <p style="color: red; font-size: 14px">{{ errUserName }}</p>

          <input
            v-model="passWord"
            class="inputlogin mt-3"
            placeholder="Password"
            type="password"
          />
          <p style="color: red; font-size: 14px">{{ errorPassword }}</p>

          <button class="btn_login mt-2" @click.prevent="() => handleLogin()">Register</button>
          <p style="font-size: 14px" class="mt-2">
            If you have account
            <RouterLink to="/login" style="color: cadetblue">login now !</RouterLink>
          </p>
        </div>
      </div>
    </form>
  </main>
</template>
