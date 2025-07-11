<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-corporate-primary bg-white border border-private-medium rounded-xl shadow-sm hover:bg-private-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-primary transition-colors duration-200"
        id="language-menu"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <span class="mr-2">{{ currentLocale.flag }}</span>
        {{ currentLocale.name }}
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <div class="mt-2 text-center">
        <p class="text-xs text-corporate-primary font-cera">
          Trenutni jezik: <span class="font-medium">{{ locale.toUpperCase() }}</span>
        </p>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="language-menu"
      ref="dropdownMenu" >
      <div class="py-1" role="none">
        <button
          v-for="localeItem in availableLocales"
          :key="localeItem.code"
          @click="switchLanguage(localeItem.code)"
          class="flex items-center w-full px-4 py-2 text-sm text-corporate-primary hover:bg-private-light transition-colors duration-200"
          role="menuitem"
        >
          <span class="mr-3">{{ localeItem.flag }}</span>
          {{ localeItem.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
// Import necessary composables from #imports (Nuxt's auto-imports)
import { useI18n, useSwitchLocalePath } from "#imports";

// Initialize i18n composables
const { locale, locales, t } = useI18n(); // `locale` is the current active language code, `locales` are all defined locales, `t` is the translation function
const switchLocalePath = useSwitchLocalePath(); // Function to generate locale-aware paths

// State for dropdown visibility
const isOpen = ref(false);

// Ref for the dropdown menu element to detect clicks outside
const dropdownMenu = ref(null);

// Function to switch language
const switchLanguage = (languageCode) => {
  console.log('Switching to language:', languageCode);
  console.log('Available locales before switch:', locales.value);
  console.log('Current locale before switch:', locale.value);
  locale.value = languageCode;
  console.log('Current locale after switch:', locale.value);
  isOpen.value = false;
};

// Computed property to prepare the list of available locales for rendering
const availableLocales = computed(() => {
  return (locales.value || []).map(i => ({
    code: i.code,
    name: i.name, // Use the name directly from config
    flag: i.flag
  }));
});

// Computed property to determine the currently active locale for display
const currentLocale = computed(() => {
  // Find the locale in availableLocales that matches the current active `locale.value`
  // Fallback to the first available locale if not found (shouldn't happen if setup is correct)
  return availableLocales.value.find(l => l.code === locale.value) || availableLocales.value[0];
});

// Watch for locale changes and log available locales
watch(locale, (newLocale) => {
  console.log('Nuxt i18n locale changed to:', newLocale);
});

// Log available locales on mount
onMounted(() => {
  console.log('Available locales:', locales.value);
  console.log('Current locale:', locale.value);
  console.log('Available locales codes:', locales.value?.map(l => l.code));
  console.log('Available locales files:', locales.value?.map(l => l.file));
});

// Close dropdown when clicking outside of the component or its dropdown panel
onMounted(() => {
  const handler = (e) => {
    // Check if the click target is outside the main button AND outside the dropdown panel
    const buttonElement = document.getElementById('language-menu');
    const dropdownElement = dropdownMenu.value;

    if (
      isOpen.value && // Only if dropdown is open
      buttonElement && !buttonElement.contains(e.target) && // Click is not on the button
      dropdownElement && !dropdownElement.contains(e.target) // Click is not inside the dropdown
    ) {
      isOpen.value = false;
    }
  };

  document.addEventListener('click', handler);

  // Clean up the event listener when the component is unmounted
  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });
});
</script>

<style scoped>
/* Add any specific scoped styles here if needed */
</style>