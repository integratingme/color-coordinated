<template>
  <div class="faq-component">
    <!-- Main Content -->
    <div class="main-content">
      <!-- FAQ Image -->
      <div class="image-container">
        <img src="~/assets/images/FAQ_image.webp" alt="FAQ" />
      </div>
      
      <!-- FAQ Content -->
      <div class="faq-content">
        <!-- Header -->
        <div class="section-header">
          <h2 class="section-main-title">{{ $t(`${faqType}.title`) }}</h2>
          <span class="section-subtitle">{{ $t(`${faqType}.subtitle`) }}</span>
        </div>
        
        <!-- FAQ Items -->
        <div class="faq-items">
          <div class="faq-item" v-for="(question, key) in questions" :key="key">
            <p class="question"><strong>{{ $t(`${faqType}.questions.${key}.question`) }}</strong></p>
            <p class="answer">{{ $t(`${faqType}.questions.${key}.answer`) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section">
      <div class="contact-icon">
        <div class="icon-circle" :class="iconClass">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" stroke-width="2" fill="none"/>
            <polyline points="22,6 12,13 2,6" stroke="white" stroke-width="2" fill="none"/>
          </svg>
        </div>
      </div>
      <h3>{{ $t(`${faqType}.contactUs`) }}</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  section: {
    type: String,
    default: 'corporate' // 'corporate' or 'private'
  },
  faqType: {
    type: String,
    default: 'faq' // 'faq' or 'faqPrivate'
  }
})

const iconClass = computed(() => {
  return `icon-circle--${props.section}`
})

const questions = computed(() => {
  if (props.faqType === 'faqPrivate') {
    return {
      projectProcess: {},
      projectSize: {},
      costs: {},
      modularServices: {},
      existingPlans: {},
      materialSelection: {},
      difference: {},
      projectDuration: {},
      location: {},
      onSitePresence: {}
    }
  } else {
    return {
      timing: {},
      partialServices: {},
      upgradeFloorplan: {},
      designConcept: {},
      duration: {},
      externalTeams: {},
      marketingStrategy: {},
      constructionSupport: {},
      collaboration: {},
      investment: {}
    }
  }
})
</script>

<style scoped>
.faq-component {
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle--corporate {
  background-color: var(--color-corporate-footer);
}

.icon-circle--private {
  background-color: var(--color-private-footer);
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