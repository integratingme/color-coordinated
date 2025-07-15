<template>
  <div>
    <AppHeader background="private" section="private" />
    <main>
      <NuxtPage />
    </main>
    <AppFooter background="private" />
  </div>
</template>

<script setup>
// Private layout logic here
</script>

<style scoped>
/* Private layout specific styles */
main {
  background: var(--color-private-overlay); /* 50% for pages */
  min-height: calc(100vh - 180px); /* 100vh minus header (90px) and footer (90px) */
}
</style> 