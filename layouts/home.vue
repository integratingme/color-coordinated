<template>
  <div>
    <div class="lang-switcher">
      <button
        v-for="locale in locales"
        :key="locale.code"
        @click="setLocale(locale.code)"
        :class="['lang-btn', { active: locale.code === currentLocale }]"
      >
        {{ locale.code.toUpperCase() }}
      </button>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locales, locale, setLocale } = useI18n()
const currentLocale = locale
</script>

<style scoped>
.lang-switcher {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  gap: 0.3rem;
}
.lang-btn {
  background: none;
  border: none;
  color: #fff;
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  font-weight: 300;
  cursor: pointer;
  padding: 0 0.15em 0.15em 0.15em;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s, color 0.2s, opacity 0.2s;
  opacity: 0.5;
}
.lang-btn.active {
  border-bottom: 2px solid #fff;
  font-weight: 400;
  opacity: 1;
}
.lang-btn:hover {
  color: var(--color-private-medium); /* for footer */
}
</style> 