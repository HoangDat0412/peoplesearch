<script setup>
const props = defineProps(['item', 'resultlength', 'id'])
const item = props?.item
const resultlength = props?.resultlength
const id = props?.id
import GalleryView from '@/components/Gallery/GalleryView.vue'
import GalleryVideo from '../GalleryVideo/GalleryVideo.vue'
import { ref } from 'vue'
import html2pdf from 'html2pdf.js'

const pdfContent = ref(null)

const generatePdf = async () => {
  const element = pdfContent.value
  const options = {
    margin: 1,
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    enableLinks: true
  }
  html2pdf().from(element).set(options).save()
}
</script>

<template>
  <main>
    <div class="d-flex flex-col md:flex-row gap-3">
      <div class="col-12 col-md-3">
        <h2 class="text-xs mb-2">CCCD/Passport</h2>
        <div class="people_result">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stylized_Vietnamese_Citizen_Identity_Card_sample.jpg/640px-Stylized_Vietnamese_Citizen_Identity_Card_sample.jpg"
            width="100%"
            alt=""
          />
          <button
            class="btn_prev"
            type="button"
            :data-bs-target="`#carouselExampleControls-${id}`"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="btn_next"
            type="button"
            :data-bs-target="`#carouselExampleControls-${id}`"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <p class="text-center mt-1">Search result : {{ resultlength }}</p>

        <h2 class="text-xs mt-4 mb-2">Album Images</h2>
        <GalleryView />

        <h2 class="text-xs mt-4 mb-2">Album Video</h2>
        <GalleryVideo />

        <!-- <h2 class="text-xs mt-4 mb-2">Album Void</h2>
        <GalleryVideo /> -->
      </div>

      <div class="col-12 col-md-9">
        <div class="me-md-3 card pdf-content" ref="pdfContent">
          <div class="card-body text-light">
            <p class="card-text mb-1">
              Full Name: <span>{{ item?.name }}</span>
            </p>
            <div class="d-flex justify-content-between mb-1">
              <p>
                Gender: <span>{{ item?.gender }}</span>
              </p>
              <p>
                Falther: <span>{{ item?.father }}</span>
              </p>
            </div>
            <div class="d-flex justify-content-between mb-1">
              <p>
                Birthday: <span>{{ item?.birth }}</span>
              </p>
              <p>
                Falther Birthday: <span>{{ item?.father_birth }}</span>
              </p>
            </div>
            <p>
              CCCD/Passport: <span>{{ item?.identity_id }}</span>
            </p>
            <p>
              Phone Number: <span>{{ item?.phone }}</span>
            </p>
            <p>
              Email: <span>{{ item?.email }}</span>
            </p>
            <p>
              Address: <span>{{ item?.address }}</span>
            </p>
            <p>
              Link Facebook: <span>{{ item?.tax_code }}</span>
            </p>
            <div class="d-flex justify-content-between mb-1">
              <p>
                IP: <span>{{ item?.ip }}</span>
              </p>
              <p>
                Relationship: <span>{{ item?.relationship }}</span>
              </p>
            </div>
            <div class="mt-1">
              <h3 class="mb-1">Bio</h3>
              <p class="mb-0">{{ item?.biography }}</p>
            </div>
            <div class="mt-1">
              <h3 class="mb-2">Lastest found location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8929062797033!2d105.82203937393297!3d20.996929588873623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac88b1bd20e7%3A0xd7065b87f7315542!2zUC4gSG_DoG5nIFbEg24gVGjDoWksIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1712117570338!5m2!1svi!2s"
                width="150"
                height="120"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <button class="button-4 mt-3" @click="generatePdf">Download File PDF</button>
      </div>
    </div>
  </main>
</template>
