<script setup>
import { onMounted, ref } from 'vue'
import lightGallery from 'lightgallery'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'

// Import LightGallery CSS
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

const gallery = ref(null)

onMounted(() => {
  lightGallery(gallery.value, {
    plugins: [lgZoom, lgThumbnail],
    speed: 500
  })
})
</script>

<template>
  <main>
    <div ref="gallery" class="gallery d-flex justify-center">
      <a
        href="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg"
      >
        <img
          src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg"
        />
      </a>
      <a
        href="https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g"
        class="d-none"
      >
        <img
          src="https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g"
        />
      </a>
    </div>
  </main>
</template>
<style scoped>
.gallery {
  width: 100%;
  height: auto;
  margin: 5px;
  cursor: pointer;
  overflow: hidden;
}
.gallery img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.gallery img:hover {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
</style>
