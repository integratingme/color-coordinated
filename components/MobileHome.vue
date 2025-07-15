<template>
  <div class="mobile-home-container">
    <!-- Top video section -->
    <NuxtLink to="/private" class="video-link">
      <div class="video-section top">
        <div class="bg-video video-placeholder">
          <span class="placeholder-text">random yt video</span>
        </div>
        <div class="overlay-text">
          <span class="main-title">{{ $t('home.private_title') }}</span>
          <span class="subtitle">{{ $t('home.auto_transport') }}</span>
        </div>
      </div>
    </NuxtLink>
    <!-- Bottom video section -->
    <NuxtLink to="/corporate" class="video-link">
      <div class="video-section bottom">
        <div class="bg-video video-placeholder">
          <span class="placeholder-text">random yt video</span>
        </div>
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

// No longer need video logic since we're using placeholders
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

.video-placeholder {
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-text {
  color: #666;
  font-size: 1.5rem;
  font-family: var(--font-family-cera);
  text-transform: lowercase;
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
  
  .placeholder-text {
    font-size: 1.2rem;
  }
}

.video-link {
  display: flex;
  flex: 1;
  height: 100%;
}
</style> 