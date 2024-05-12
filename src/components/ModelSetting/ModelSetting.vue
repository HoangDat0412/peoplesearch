<script setup>
import { useShowStore } from '@/stores/show.js'
const show = useShowStore()
</script>

<template>
  <main>
    <div
      class="modal fade show"
      v-if="show.setting"
      style="display: block; color: rgba(0, 0, 0, 1)"
    >
      <div class="modal-dialog">
        <div class="modal-content" style="font-size: 14px">
          <div class="modal-header">
            <h5 class="modal-title text-lg">Setting</h5>
            <button type="button" class="btn-close" @click="show.setting = false"></button>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="name" class="form-control" />
                    <label class="form-label">Acount</label>
                    <!-- <p style="color: red">{{ nameErr }}</p> -->
                  </div>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="password" name="src" class="form-control" />
                    <label class="form-label">Password</label>
                    <!-- <p style="color: red">{{ errSrcurl }}</p> -->
                  </div>
                </div>
              </div>

              <!-- <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label">Interface Color</label>
                    <select name="hot" class="form-select">
                      <option :value="true">Black</option>
                      <option :value="false">While</option>
                    </select>
                  </div>
                </div>
              </div> -->

              <button data-mdb-ripple-init type="button" class="btn_search mt-2">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
