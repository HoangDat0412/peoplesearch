<script setup>
import { onMounted, ref } from 'vue'
import lightGallery from 'lightgallery'
import lgVideo from 'lightgallery/plugins/video'

// Import LightGallery CSS
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
const gallery = ref(null)

onMounted(() => {
  lightGallery(gallery.value, {
    plugins: [lgVideo],
    speed: 500
  })
})

// import video from '@/assets/video/giadinhlaso1.mp4'
</script>

<template>
  <main>
    <div ref="gallery" class="gallery d-flex justify-center">
      <a href="https://www.youtube.com/embed/zLwpcLJibw0?si=VYTF-4xwYz1YHc7I">
        <button class="button-62">Album Video</button>
      </a>
      <a class="d-none" href="https://www.youtube.com/embed/xB2qsCnqAXA?si=aI59Vqst4JNULClC">
        <video src="https://www.youtube.com/embed/zLwpcLJibw0?si=VYTF-4xwYz1YHc7I"></video>
      </a>
    </div>
  </main>
</template>
<style scoped>
/* s */
</style>
