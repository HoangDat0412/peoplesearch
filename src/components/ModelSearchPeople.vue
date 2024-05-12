<script setup>
import { useShowStore } from '@/stores/show.js'
const show = useShowStore()
</script>
<template>
  <main>
    <div
      v-if="show.searchpeople"
      class="modal fade show"
      style="display: block; color: rgba(0, 0, 0, 1)"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-lg">Search input here</h5>
            <button type="button" class="btn-close" @click="show.searchpeople = false"></button>
          </div>

          <div class="modal-body" style="font-size: 14px">
            <form class="">
              <div class="row mb-2 gap-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="name" class="form-control" />
                    <label class="form-label">Name</label>
                    <!-- <p style="color: red">{{ nameErr }}</p> -->
                  </div>
                </div>
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="name" class="form-control" />
                    <label class="form-label">Age</label>
                    <!-- <p style="color: red">{{ nameErr }}</p> -->
                  </div>
                </div>
              </div>
              <div class="row mb-2 gap-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <select name="hot" class="form-select">
                      <option :value="true">Male</option>
                      <option :value="false">Female</option>
                    </select>
                    <label class="form-label">Gender</label>
                  </div>
                </div>
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="src" class="form-control" />
                    <label class="form-label">IP</label>
                    <!-- <p style="color: red">{{ errSrcurl }}</p> -->
                  </div>
                </div>
              </div>
              <div class="row mb-2 gap-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="src" class="form-control" />
                    <label class="form-label">Phone</label>
                    <!-- <p style="color: red">{{ errSrcurl }}</p> -->
                  </div>
                </div>

                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="trailer" class="form-control" />
                    <label class="form-label">email</label>
                    <!-- <p style="color: red">{{ errTrailerurl }}</p> -->
                  </div>
                </div>
              </div>

              <div class="row mb-2 gap-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="src" class="form-control" />
                    <label class="form-label">CCCD/Passport</label>
                    <!-- <p style="color: red">{{ errSrcurl }}</p> -->
                  </div>
                </div>

                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="trailer" class="form-control" />
                    <label class="form-label">MST</label>
                    <!-- <p style="color: red">{{ errTrailerurl }}</p> -->
                  </div>
                </div>
              </div>
              <div class="row mb-2 gap-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" name="src" class="form-control" />
                    <label class="form-label">Address</label>
                    <!-- <p style="color: red">{{ errSrcurl }}</p> -->
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label for="formFile" class="form-label">Picture</label>
                <input class="form-control" type="file" id="formFile" />
              </div>

              <button data-mdb-ripple-init type="button" class="btn_search mt-2">Search Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
