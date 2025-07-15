<template>
  <div>
    <AppHeader background="private-index" section="private" />
    <main>
      <NuxtPage />
    </main>
    <AppFooter background="private" />
  </div>
</template>

<script setup>
// Private index layout logic here
</script>

<style scoped>
/* Private index layout specific styles */
main {
  background: var(--color-private-overlay); /* 50% for pages */
  min-height: calc(100vh - 180px); /* 100vh minus header (90px) and footer (90px) */
}
</style> 