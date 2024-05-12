<script setup>
import { useShowStore } from '@/stores/show.js'
const show = useShowStore()
</script>
<template>
  <main>
    <div
      v-if="show.searchfile"
      class="modal fade show"
      style="display: block; color: rgba(0, 0, 0, 1)"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" @click="show.searchfile = false"></button>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label">Message</label>
                    <input type="text" name="name" class="form-control" />

                    <!-- <p style="color: red">{{ nameErr }}</p> -->
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label for="formFile" class="form-label">File</label>
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
