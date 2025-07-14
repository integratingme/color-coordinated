<template>
  <div>
    <header class="main-header">
      <!-- Left: Language switcher -->
      <div class="lang-vertical">
        <button
          v-for="locale in locales"
          :key="locale.code"
          @click="setLocale(locale.code)"
          :class="['lang-short', { active: locale.code === currentLocale }]"
        >
          {{ locale.code.toUpperCase() }}
        </button>
      </div>
      <!-- Center: Logo/Title -->
      <div class="header-title">
        <div>
          <span class="color-bold">COLOR</span>
          <span class="coordinated">COORDINATED</span>
        </div>
        <div class="byline">BY ANIA KOROTARZ</div>
      </div>
      <!-- Right: Hamburger menu -->
      <div class="menu-container">
        <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Open menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <div v-if="menuOpen" class="dropdown-menu">
          <NuxtLink to="/corporate/our-mission/" class="dropdown-item">{{ $t('menu.mission') }}</NuxtLink>
          <NuxtLink to="/corporate/team/" class="dropdown-item">{{ $t('menu.team') }}</NuxtLink>
          <NuxtLink to="/corporate/how-we-work/" class="dropdown-item">{{ $t('menu.howWeWork') }}</NuxtLink>
          <NuxtLink to="/corporate/contact-us/" class="dropdown-item">{{ $t('menu.contact') }}</NuxtLink>
          <NuxtLink to="/corporate/faq/" class="dropdown-item">{{ $t('menu.faq') }}</NuxtLink>
        </div>
      </div>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locales, locale, setLocale } = useI18n()
const currentLocale = locale
const menuOpen = ref(false)
</script>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
  height: 90px;
  background: #f0eded;
  border-bottom: 1px solid #dedede;
  position: relative;
  z-index: 100;
}
.lang-vertical {
  display: flex;
  flex-direction: column;
  gap: 0.15em;
  align-items: flex-start;
  min-width: 2.2em;
  padding-top: 8px;
  padding-left: 10px;
}
.lang-short {
  background: none;
  border: none;
  color: #222;
  font-family: var(--font-family-cera);
  font-size: 0.95rem;
  font-weight: 400;
  cursor: pointer;
  opacity: 0.7;
  padding: 0;
  margin: 0;
  transition: opacity 0.2s;
  line-height: 1.2;
}
.lang-short.active {
  opacity: 1;
  font-weight: 700;
}
.header-title {
  flex: 1;
  text-align: center;
  font-family: var(--font-family-denver);
  font-size: 2.1rem;
  letter-spacing: 0.04em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.header-title > div:first-child {
  position: relative;
  top: 2px;
}
.color-bold {
  font-weight: 700;
  letter-spacing: 0.04em;
}
.coordinated {
  font-weight: 400;
  margin-left: 0.2em;
}
.byline {
  font-family: var(--font-family-cera);
  font-size: 0.6rem;
  font-weight: 300;
  margin-top: -0.2em;
  letter-spacing: 0.12em;
  position: relative;
  top: -0.3em;
}
.menu-container {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
}
.bar {
  width: 100%;
  height: 3px;
  background: #222;
  margin: 3px 0;
  border-radius: 2px;
  transition: all 0.2s;
}
.dropdown-menu {
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border: 1px solid #dedede;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  min-width: 180px;
  display: flex;
  flex-direction: column;
  z-index: 120;
}
.dropdown-item {
  padding: 0.9em 1.2em;
  color: #222;
  text-decoration: none;
  font-family: var(--font-family-cera);
  font-size: 1rem;
  border-bottom: 1px solid #f0eded;
  transition: background 0.15s;
}
.dropdown-item:last-child {
  border-bottom: none;
}
.dropdown-item:hover {
  background: #f0eded;
}
@media (max-width: 900px) {
  .main-header {
    flex-direction: column;
    height: auto;
    padding: 0.5em 1vw;
  }
  .header-title {
    font-size: 1.3rem;
  }
  .dropdown-menu {
    min-width: 120px;
  }
}
</style>