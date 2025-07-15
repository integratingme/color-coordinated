<template>
  <footer class="footer" :class="footerClass">
    <div class="footer-content">
      <div class="address-section">
        <p>ZIVILTECHNIKERBÜRO</p>
        <p>ZIEGELOFENGASSE 20</p>
        <p>1060 WIEN</p>
      </div>

      <div class="links-section">
        <div class="footer-links-container">
          <a v-if="props.background === 'private'" href="#" class="footer-link">{{$t('footer.nav.press')}}</a>
          <a href="#" class="footer-link">{{$t('footer.nav.impressum')}}</a>
          <div class="mode-toggle">
            <span class="mode-text private">{{$t('footer.nav.private')}}</span>
            <span class="mode-text corporate">{{$t('footer.nav.corporate')}}</span>
          </div>
          <a href="#" class="footer-link">{{$t('footer.nav.datenschutz')}}</a>
          <a href="#" class="footer-link">{{$t('footer.nav.faq')}}</a>
        </div>
      </div>

      <div class="social-icons">
        <!-- Instagram -->
        <a href="#" aria-label="Instagram" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75h-9A2.25 2.25 0 0 0 5.25 6v12A2.25 2.25 0 0 0 7.5 20.25h9a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 16.5 3.75ZM12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Zm4.125-7.875h.008v.008h-.008v-.008Z"/>
          </svg>
        </a>
        <!-- Skype -->
        <a href="#" aria-label="Skype" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
            <circle cx="12" cy="12" r="9" stroke-width="1.5"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 13.5c0 1.1-.9 2-2 2h-1c-1.1 0-2-.9-2-2 0-.6.4-1.1 1-1.3l2.1-.7c.6-.2.9-.7.9-1.3 0-1.1-.9-2-2-2h-.5c-1.1 0-2 .9-2 2"/>
</svg>
        </a>
        <!-- Pinterest -->
        <a href="#" aria-label="Pinterest" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Zm0-4.5v-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  background: {
    type: String,
    default: 'private', // 'private' or 'corporate'
    validator: (v) => ['private', 'corporate'].includes(v)
  }
})

// Computed class for footer styling
const footerClass = computed(() => `footer-${props.background}`)
</script>

<style scoped>
.footer {
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  border-top: none;
  position: relative;
  z-index: 100;
  font-family: var(--font-family-cera);
  font-weight: 300; /* Cera Pro Light za sve */
}

/* Corporate footer styling */
.footer-corporate {
  background-color: var(--color-corporate-footer); /* for footer */
  color: var(--color-corporate-text); /* schrift footer */
}

/* Private footer styling */
.footer-private {
  background-color: var(--color-private-medium); /* for footer */
  color: var(--color-private-dark); /* schrift footer */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2vw;
  flex-wrap: wrap;
  gap: 1rem;
}

.address-section p {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.4;
}

.links-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 10px;
}

.footer-links-container {
  display: flex;
  align-items: center;
  gap: 6rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* Corporate footer links positioning */
.footer-corporate .footer-links-container {
  margin-left: 200px; /* Pomjeri udesno */
}

/* Private footer links positioning */
.footer-private .footer-links-container {
  margin-left: 80px;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0.95;
  transition: opacity 0.2s;
  font-family: var(--font-family-cera);
  font-weight: 300;
  text-transform: uppercase;
}

.footer-link:hover {
  opacity: 1;
}

.mode-toggle {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.4rem;
}

.mode-text {
  font-family: var(--font-family-cera);
  font-size: 1.4rem;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 300;
}

.mode-text.private {
  font-weight: 300; /* Cera Pro Light - PRIVATE */
}

.mode-text.corporate {
  font-weight: 700; /* Cera Pro Bold - CORPORATE */
}

.social-icons {
  display: flex;
  gap: 1.2em;
  align-items: center;
}

.social-icon {
  display: flex;
  align-items: center;
  opacity: 0.9;
  transition: opacity 0.2s;
  text-decoration: none;
  color: inherit;
}

.social-icon:hover {
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .links-section {
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-links-container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .mode-toggle {
    margin: 0.5rem 0;
  }

  .address-section p {
    font-size: 0.7rem;
  }

  .footer-link {
    font-size: 0.8rem;
  }

  .mode-text {
    font-size: 0.9rem;
  }
}
</style> 