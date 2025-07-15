<template>
  <div class="home-container">
    <NuxtLink to="/private" class="video-link">
      <div class="video-side left">
        <video
          v-if="!lampVideoError"
          class="bg-video"
          autoplay
          loop
          muted
          playsinline
          @error="lampVideoError = true"
        >
          <source :src="lampVideo" type="video/mp4" />
          <source :src="lampVideo" type="video/quicktime" />
          <source :src="lampVideo" type="video/x-msvideo" />
          Your browser does not support the video tag.
        </video>
        <img
          v-else
          src="/assets/images/Home_image.png"
          alt="Fallback image"
          class="bg-video"
          style="object-fit: cover;"
        />
        <div class="overlay-text">
          <span class="main-title">{{ $t('home.private_title') }}</span>
          <span class="subtitle">{{ $t('home.auto_transport') }}</span>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/corporate" class="video-link">
      <div class="video-side right">
        <video class="bg-video" autoplay loop muted playsinline :key="randomVideo">
          <source :src="randomVideo" type="video/mp4" />
          <source :src="randomVideo" type="video/quicktime" />
          <source :src="randomVideo" type="video/x-msvideo" />
          Your browser does not support the video tag.
        </video>
        <div class="overlay-text">
          <span class="main-title">{{ $t('home.corporate_title') }}</span>
          <span class="subtitle">{{ $t('home.corporate_subtitle') }}</span>
        </div>
      </div>
    </NuxtLink>
    <div class="logo-container">
      <img src="@/assets/images/LogoWhite.png" alt="Logo" class="logo" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const lampVideo = '/videos/Home_lamp_video.m4v'
const video1 = '/videos/Zolagasse_Video1.mov'
const video2 = '/videos/Zolagasse_Video2.mov'

const rightVideos = [video1, video2]
const randomVideo = ref(rightVideos[0])
const lampVideoError = ref(false)

onMounted(() => {
  const idx = Math.floor(Math.random() * rightVideos.length)
  randomVideo.value = rightVideos[idx]
})
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  font-family: var(--font-family-cera);
}
.video-side {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.overlay-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 2;
  pointer-events: none;
}
.main-title {
  font-family: var(--font-family-denver);
  font-weight: 700;
  font-size: 5vw;
  line-height: 1;
}
.subtitle {
  font-family: var(--font-family-cera);
  font-weight: 300;
  font-size: 1.3vw;
  margin-top: 0.7em;
  letter-spacing: 0.05em;
}
.logo-container {
  position: absolute;
  left: 50%;
  bottom: 1.5vh;
  transform: translateX(-50%);
  z-index: 10;
  width: 320px;
  max-width: 60vw;
  display: flex;
  justify-content: center;
}
.logo {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
}
.video-link {
  display: flex;
  flex: 1;
  height: 100%;
}
@media (max-width: 900px) {
  .main-title {
    font-size: 9vw;
  }
  .subtitle {
    font-size: 3vw;
  }
  .logo-container {
    width: 180px;
  }
}
</style> 