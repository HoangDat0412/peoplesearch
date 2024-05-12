<script setup>
import './personalnotemodel.scss'
</script>

<template>
  <main class="personalnotemodel">
    <div
      class="modal fade"
      id="modeladdnote"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label">Note</label>
                    <textarea
                      class="form-control mt-1 scrollbar"
                      value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic rem quod cum, similique aperiam dolorum sunt laborum commodi cupiditate."
                      style="height: 100px; font-size: 14px"
                    ></textarea>

                    <!-- <p style="color: red">{{ nameErr }}</p> -->
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label">Relate Topic</label>
                    <input type="text" name="" class="form-control" />

                    <!-- <p style="color: red">{{ nameErr }}</p> -->
                  </div>
                </div>
              </div>

              <button data-mdb-ripple-init type="button" class="btn_search mt-2">Add Note</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
