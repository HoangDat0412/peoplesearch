<script setup>
import { useSearchStore } from '@/stores/search'
import { useShowStore } from '@/stores/show.js'
import { checkNull } from '@/validation/validation'
import { notify } from '@kyvg/vue3-notification'
import { ref } from 'vue'
const show = useShowStore()
const props = defineProps(['chatid'])
const chatid = props.chatid

const usesearch = useSearchStore()

const name = ref(null)
const gender = ref(null)
const phone = ref(null)
const age = ref(null)
const email = ref(null)
const cccd = ref(null)
const address = ref(null)
const linkfacebook = ref(null)
const national = ref(null)

const handleSearch = async () => {
  const flag =
    checkNull(name.value) ||
    checkNull(gender.value) ||
    checkNull(phone.value) ||
    checkNull(age.value) ||
    checkNull(email.value) ||
    checkNull(address.value) ||
    checkNull(linkfacebook.value)

  if (flag) {
    show.searchpeople = false
    show.SetShowSpinner(true)
    await usesearch.MultipleSearch(
      {
        name: name.value,
        email: email.value,
        address: address.value,
        national: national.value,
        phone: phone.value,
        cccd: cccd.value,
        gender: gender.value,
        linkfacebook: linkfacebook.value
        // birth:
      },
      chatid
    )
    show.SetShowSpinner(false)
  } else {
    notify({
      text: 'Please input information for search',
      type: 'error'
    })
  }
}
</script>
<template>
  <main>
    <div
      v-if="show.searchpeople"
      class="modal fade show"
      style="display: block; color: rgba(0, 0, 0, 1)"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content p-3 pt-1 pb-1">
          <div class="modal-header">
            <h5 class="modal-title text-dark">Search People</h5>
            <button type="button" class="btn-close" @click="show.searchpeople = false"></button>
          </div>

          <div class="modal-body">
            <form>
              <div class="row mb-2 gap-1">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">Name</label>
                    <input type="text" name="name" class="form-control" v-model="name" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">Age</label>
                    <input type="text" name="age" class="form-control" v-model="age" />
                  </div>
                </div>
              </div>
              <div class="row mb-2 gap-1">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">Gender</label>
                    <select name="gender" class="form-select" v-model="gender">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">IP</label>
                    <input type="text" name="ip" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row mb-2 gap-1">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">Phone</label>
                    <input type="text" name="sdt" class="form-control" v-model="phone" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" v-model="email" />
                  </div>
                </div>
              </div>
              <div class="row mb-2 gap-1">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">CCCD/Passport</label>
                    <input type="text" name="cccd" class="form-control" v-model="cccd" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">MST</label>
                    <input type="text" name="mst" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row mb-2 gap-1">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">Address</label>
                    <input type="text" name="address" class="form-control" v-model="address" />
                  </div>
                </div>
              </div>
              <div class="row mb-2 gap-1">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label">Link Facebook</label>
                    <input type="text" class="form-control" v-model="linkfacebook" />
                  </div>
                </div>
              </div>
              <!-- <div class="mb-2">
                <label for="formFile" class="form-label">Picture</label>
                <input class="form-control" type="file" id="formFile" />
              </div> -->
              <button type="button" class="btn_search mt-2" @click="handleSearch">
                Search Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.modal-content {
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-header {
  border-bottom: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
}

/* .btn-close {
  background: none;
  border: none;
} */

.form-outline .form-label {
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.form-outline .form-control {
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
}

.form-outline .form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
