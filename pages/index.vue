<template>
  <div>
    <DesktopHome v-if="!isMobile" />
    <MobileHome v-if="isMobile" />
  </div>
</template>

<script setup>
definePageMeta({ layout: 'home' })
import { ref, onMounted, onUnmounted } from 'vue'
import DesktopHome from '~/components/DesktopHome.vue'
import MobileHome from '~/components/MobileHome.vue'

const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
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
@media (max-width: 900px) {
  .overlay-text {
    font-size: 6vw;
  }
  .logo-container {
    width: 180px;
  }
}
</style>
