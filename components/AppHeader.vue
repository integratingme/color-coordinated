<template>
  <header class="main-header" :class="backgroundClass">
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
    <NuxtLink :to="`/${section}/`" class="header-title">
      <div>
        <span class="color-bold">COLOR</span>
        <span class="coordinated">COORDINATED</span>
      </div>
      <div class="byline">BY ANIA KOROTARZ</div>
    </NuxtLink>
    <!-- Right: Hamburger menu -->
    <div class="menu-container">
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Open menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <div v-if="menuOpen" class="dropdown-menu" :class="dropdownClass">
        <button class="close-button" @click="menuOpen = false" aria-label="Close menu">×</button>
        <NuxtLink :to="`/${section}/our-mission/`" class="dropdown-item" @click="menuOpen = false">{{ $t('menu.mission') }}</NuxtLink>
        <NuxtLink :to="`/${section}/team/`" class="dropdown-item" @click="menuOpen = false">{{ $t('menu.team') }}</NuxtLink>
        <NuxtLink :to="`/${section}/how-we-work/`" class="dropdown-item" @click="menuOpen = false">{{ $t('menu.howWeWork') }}</NuxtLink>
        <NuxtLink :to="`/${section}/contact-us/`" class="dropdown-item" @click="menuOpen = false">{{ $t('menu.contact') }}</NuxtLink>
        <NuxtLink :to="`/${section}/faq/`" class="dropdown-item" @click="menuOpen = false">{{ $t('menu.faq') }}</NuxtLink>
        <NuxtLink v-if="section === 'private'" to="/private/press/" class="dropdown-item" @click="menuOpen = false">{{ $t('menu.press') }}</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Props
const props = defineProps({
  background: {
    type: String,
    default: 'default', // 'default', 'corporate', 'private', 'private-index'
    validator: (value) => ['default', 'corporate', 'private', 'private-index'].includes(value)
  },
  section: {
    type: String,
    default: 'corporate', // 'corporate', 'private'
    validator: (value) => ['corporate', 'private'].includes(value)
  }
})

const { locales, locale, setLocale } = useI18n()
const currentLocale = locale
const menuOpen = ref(false)

// Computed property for background class
const backgroundClass = computed(() => {
  return `header-${props.background}`
})

// Computed property for dropdown class
const dropdownClass = computed(() => {
  return `dropdown-${props.section}`
})

// Close dropdown when clicking outside
const closeDropdown = (event) => {
  if (menuOpen.value && !event.target.closest('.menu-container')) {
    menuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  height: 150px;
  position: relative;
  z-index: 100;
  border: none !important;
  border-bottom: none !important;
}

/* Default background */
.header-default {
  background: #f0eded;
}

/* Corporate background */
.header-corporate {
  background: var(--color-corporate-overlay); /* 50% for pages */
  color: #000;
}

.header-corporate .lang-short {
  color: #000;
}

.header-corporate .bar {
  background: #000;
}

/* Private background */
.header-private {
  background: rgba(240, 237, 237, 0.5);
  color: #000;
}

.header-private .lang-short {
  color: #000;
}

.header-private .bar {
  background: #000;
}

/* Private index background - transparent with white text */
.header-private-index {
  background: transparent;
  color: white;
}

.header-private-index .lang-short {
  color: white;
}

.header-private-index .bar {
  background: white;
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
  font-size: 1.5rem;
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
  font-family: var(--font-family-cera);
  font-size: 6rem;
  letter-spacing: 0.04em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s;
}

.header-title:hover {
  opacity: 0.8;
}
.header-title > div:first-child {
  position: relative;
  top: 2px;
}
.color-bold {
  font-weight: 700; /* Cera Pro Bold */
  letter-spacing: 0.04em;
}
.coordinated {
  font-weight: 300; /* Cera Pro Light */
  margin-left: 0.2em;
}
.byline {
  font-family: var(--font-family-cera);
  font-size: 1rem;
  font-weight: 300;
  margin-top: -0.8em;
  letter-spacing: 0.12em;
  position: relative;
  top: -0.9em;
  left: -1em;
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
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
}
.bar {
  width: 100%;
  height: 5px;
  background: #222;
  margin: 5px 0;
  border-radius: 2px;
  transition: all 0.2s;
}
.dropdown-menu {
  position: absolute;
  top: 110%;
  right: 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  min-width: 180px;
  display: flex;
  flex-direction: column;
  z-index: 120;
  
}

.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: inherit;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 125;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.close-button:hover {
  opacity: 1;
}

/* Corporate dropdown styling */
.dropdown-corporate {
  background: var(--color-corporate-footer); /* for footer */

}

/* Private dropdown styling */
.dropdown-private {
  background: var(--color-private-medium); /* for footer */
}
.dropdown-item {
  padding: 0.6em 1.2em;
  color: #222;
  text-decoration: none;
  font-family: var(--font-family-denver);
  font-size: 1rem;
  font-weight: 700;
  transition: background 0.15s;
  text-align: center;
}

/* Corporate dropdown item border */
.dropdown-corporate .dropdown-item {
  border-bottom: none; /* Remove borders */
}

/* Private dropdown item border */
.dropdown-private .dropdown-item {
  border-bottom: none; /* Remove borders */
  color: var(--color-private-dark); /* Match footer text color */
}
.dropdown-item:last-child {
  border-bottom: none;
}
/* Corporate dropdown item hover */
.dropdown-corporate .dropdown-item:hover {
  background: var(--color-corporate-primary); /* primary corporate */
}

/* Private dropdown item hover */
.dropdown-private .dropdown-item:hover {
  background: var(--color-private-light); /* primary private */
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
  
  /* Responsive styles for different backgrounds */
  .header-corporate {
    background: var(--color-corporate-overlay); /* 50% for pages */
    color: #000;
  }
  
  .header-corporate .lang-short {
    color: #000;
  }
  
  .header-corporate .bar {
    background: #000;
  }
  
  .header-private {
    color: #000;
  }
  
  .header-private .lang-short {
    color: #000;
  }
  
  .header-private .bar {
    background: #000;
  }
  
  .header-private-index {
    color: white;
  }
  
  .header-private-index .lang-short {
    color: white;
  }
  
  .header-private-index .bar {
    background: white;
  }
}
</style> 