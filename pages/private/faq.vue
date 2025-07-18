<template>
  <FAQ section="private" faqType="faqPrivate" />
</template>

<script setup>
import FAQ from '~/components/FAQ.vue'

definePageMeta({
  layout: 'private'
})
</script> 

<style scoped>
.private-faq-page {
  min-height: 100vh;
  font-family: var(--font-family-cera);
  color: #000000;
  overflow: hidden;
}

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
}

/* Image Container */
.image-container {
  width: 100%;
  height: 600px;
  overflow: hidden;
  margin: 0;
  margin-top: 4rem;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* FAQ Content */
.faq-content {
  max-width: 800px;
  margin: auto;
  padding: 2rem 2rem;
}

/* Unified Section Header Design */
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  text-align: center;
}

.section-label {
  font-family: var(--font-family-cera);
  font-size: 3.7rem;
  font-weight: 300;
  color: #000000 !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2.5rem;
}

.section-main-title {
  font-family: var(--font-family-denver);
  font-size: 8rem;
  font-weight: 700;
  color: #000000 !important;
  margin-top: -7rem;
  line-height: 10rem;
}

.section-subtitle {
  font-family: var(--font-family-cera);
  font-size: 1.5rem !important;
  font-weight: 300 !important;
  color: #000000 !important;
  text-transform: uppercase !important;
  line-height: 2rem !important;
  margin: 0 !important;
  text-align: justify !important;
}

/* FAQ Items */
.faq-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.faq-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.question {
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: #000000 !important;
  text-align: center;
}

.answer {
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: 300;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: #000000 !important;
  text-align: center;
}

/* Contact Section */
.contact-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 0 5rem 0;
  margin: 0 4rem;
  margin-left: calc(4rem + 20px);
}

.contact-icon {
  color: #000000;
}

.icon-circle {
  width: 48px;
  height: 48px;
  background-color: var(--color-private-footer);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-section h3 {
  font-family: var(--font-family-denver);
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #000000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .faq-content {
    padding: 2rem 1rem;
  }
  
  .section-main-title {
    font-size: 4rem;
    line-height: 5rem;
  }
  
  .contact-section {
    margin: 0 2rem;
    margin-left: calc(2rem + 20px);
  }
  
  .contact-section h3 {
    font-size: 1.5rem;
  }
}
</style> 