<template>
  <div class="mobile-home-container">
    <!-- Top video section -->
    <NuxtLink to="/private" class="video-link">
      <div class="video-section top">
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
          src="/assets/images/Home_image.webp"
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
    <!-- Bottom video section -->
    <NuxtLink to="/corporate" class="video-link">
      <div class="video-section bottom">
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
    <!-- Logo container -->
    <div class="logo-container">
      <img src="@/assets/images/LogoWhite.png" alt="Logo" class="logo" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const lampVideo = '/videos/Home_lamp_video.mp4'
const video1 = '/videos/Zolagasse_Video1.mp4'
const video2 = '/videos/Zolagasse_Video2.mp4'

const rightVideos = [video1, video2]
const randomVideo = ref(rightVideos[0])
const lampVideoError = ref(false)

onMounted(() => {
  const idx = Math.floor(Math.random() * rightVideos.length)
  randomVideo.value = rightVideos[idx]
})
</script>

<style scoped>
.mobile-home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  font-family: var(--font-family-cera);
}

.video-section {
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
  padding: 0 1rem;
}

.main-title {
  font-family: var(--font-family-denver);
  font-weight: 700;
  font-size: 8vw;
  line-height: 1;
}

.subtitle {
  font-family: var(--font-family-cera);
  font-weight: 300;
  font-size: 3.5vw;
  margin-top: 0.7em;
  letter-spacing: 0.05em;
}

.logo-container {
  position: absolute;
  left: 50%;
  top: 2vh;
  transform: translateX(-50%);
  z-index: 10;
  width: 120px;
  max-width: 40vw;
  display: flex;
  justify-content: center;
}

.logo {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
}

/* Landscape orientation adjustments */
@media (orientation: landscape) {
  .main-title {
    font-size: 6vw;
  }
  
  .subtitle {
    font-size: 2.5vw;
  }
  
  .logo-container {
    width: 100px;
    top: 1vh;
  }
}

.video-link {
  display: flex;
  flex: 1;
  height: 100%;
}
</style> 