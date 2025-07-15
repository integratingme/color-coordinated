<template>
  <div>
    <AppHeader background="corporate" section="corporate" />
    <main>
      <NuxtPage />
    </main>
    <AppFooter background="corporate" />
  </div>
</template>

<script setup>
// Corporate layout logic here
</script>

<style scoped>
/* Corporate layout specific styles */
main {
  background: var(--color-corporate-overlay); /* 50% for pages */
  min-height: calc(100vh - 180px); /* 100vh minus header (90px) and footer (90px) */
}
</style> 