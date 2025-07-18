<template>
  <div class="corporate-how-we-work-page">
    <!-- Main Content -->
    <div class="main-content">
      <!-- Main Content Section -->
      <div class="content-section">
        <!-- Left Column -->
        <div class="left-column">
          <!-- How We Work Header -->
          <div class="text-content">
            <div class="section-header">
              <h2 class="section-main-title">
                <span>{{ $t('corporate.howWeWork.title') }}</span>
                <span>{{ $t('corporate.howWeWork.title-second') }}</span>
                <span>{{ $t('corporate.howWeWork.title-third') }}</span>
              </h2>
              <span class="section-label">{{ $t('corporate.howWeWork.label') }}</span>
            </div>
            
            <p class="intro">{{ $t('corporate.howWeWork.intro') }}</p>
            
            <p class="service-intro"><strong>{{ $t('corporate.howWeWork.stepsIntro') }}</strong></p>
            
            <div class="step-item">
              <p class="step-title"><strong>{{ $t('corporate.howWeWork.steps.upgradeFloorplan.name') }}</strong></p>
              <p class="step-description">{{ $t('corporate.howWeWork.steps.upgradeFloorplan.description') }}</p>
            </div>
            
            <div class="step-item">
              <p class="step-title"><strong>{{ $t('corporate.howWeWork.steps.design.name') }}</strong></p>
              <p class="step-description">{{ $t('corporate.howWeWork.steps.design.description') }}</p>
            </div>
            
            <div class="step-item">
              <p class="step-title"><strong>{{ $t('corporate.howWeWork.steps.marketingStrategy.name') }}</strong></p>
              <p class="step-description">{{ $t('corporate.howWeWork.steps.marketingStrategy.description') }}</p>
            </div>
          </div>
          
          <!-- How We Work Map Image -->
          <div class="image-container map-container" style="margin-top: 2rem;">
            <img src="~/assets/images/how-we-work-map.png" alt="How We Work Map" />
          </div>
          
          <!-- Anspruch Text -->
          <div class="text-content" style="margin-top: 2rem;">
            <p class="conclusion">{{ $t('corporate.howWeWork.conclusion') }}</p>
          </div>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <!-- First Image -->
          <div class="image-container">
            <img src="~/assets/images/Zolagasse_-4.webp" alt="Zolagasse Project" />
          </div>
          
          <!-- Timing Text -->
          <div class="text-content" style="margin-top: 3rem;">
            <p class="service-intro"><strong>{{ $t('corporate.howWeWork.timing.title') }}</strong></p>
            
            <p class="intro">{{ $t('corporate.howWeWork.timing.intro') }}</p>
          </div>
          
          <!-- Accompaniment Text -->
          <div class="text-content" style="margin-top: 2rem;">
            <p class="service-intro"><strong>{{ $t('corporate.howWeWork.accompaniment.title') }}</strong></p>
            
            <p class="description">{{ $t('corporate.howWeWork.accompaniment.description') }}</p>
          </div>
          
          <!-- Process and Timeline -->
          <div class="text-content" style="margin-top: 2rem;">
            <p class="service-intro"><strong>{{ $t('corporate.howWeWork.process.title') }}</strong></p>
            
            <p class="description">{{ $t('corporate.howWeWork.process.description') }}</p>
          </div>
          
          <!-- Network and Collaboration -->
          <div class="text-content" style="margin-top: 2rem;">
            <p class="service-intro"><strong>{{ $t('corporate.howWeWork.network.title') }}</strong></p>
            
            <p class="description">{{ $t('corporate.howWeWork.network.description') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Brochure Section -->
    <div class="brochure-section">
      <div class="brochure-grid">
        <div class="brochure-item">
          <img src="~/assets/images/Zolagasse_-5.webp" alt="Zolagasse Project 5" />
        </div>
        <div class="brochure-item">
          <img src="~/assets/images/Zolagasse_-7.webp" alt="Zolagasse Project 7" />
        </div>
        <div class="brochure-item">
          <img src="~/assets/images/co-index-1.webp" alt="Concept Design" />
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section">
      <div class="contact-icon">
        <div class="icon-circle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" stroke-width="2" fill="none"/>
            <polyline points="22,6 12,13 2,6" stroke="white" stroke-width="2" fill="none"/>
          </svg>
        </div>
      </div>
      <h3>Contact us</h3>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'corporate'
})
</script> 

<style scoped>
.corporate-how-we-work-page {
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

.content-section {
  display: flex;
  min-height: 100vh;
}

.left-column,
.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
}

/* Left Column */
.left-column {
  gap: 2rem;
  padding-left: 0;
}

/* Unified Section Header Design */
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.section-label {
  font-family: var(--font-family-cera) ;
  font-size: 1.5rem !important;
  font-weight: 300 !important;
  color: #000000 !important;
  text-transform: uppercase !important;
  line-height: 2rem !important;
  margin: 0 !important;
  text-align: justify !important;
}

.section-main-title {
  font-family: var(--font-family-denver);
  font-size: 8rem;
  font-weight: 700;
  color: #000000 !important;
  margin: 0;
  line-height: 7rem;
  display: flex;
  flex-direction: column;
}



.image-container {
  width: 100%;
  height: 600px;
  overflow: hidden;
}

/* Left column images - move more to the left */
.left-column .image-container {
  margin-left: -4rem;
  margin-right: 8rem;
}

/* Map container */
.map-container {
  width: 100% !important;
  height:100% !important;
  margin-left: 2rem !important;
  margin-right: 2rem !important;
  margin-bottom: 0 !important;
  object-fit:cover;
}

/* Right column images - move more to the right */
.right-column .image-container {
  margin-left: 4rem;
  margin-right: 4rem;
  height: auto;
  min-height: 600px;
  width: 80%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-column .image-container img {
  object-fit: contain;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 4rem;
  padding-right: 4rem;
}

.text-content p {
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: 300;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #000000 !important;
}

.intro,
.description {
  text-transform: none;
  letter-spacing: 0.01em;
}

.conclusion {
  text-transform: none;
  letter-spacing: 0.01em;
  font-size: 1.2rem !important;
  font-weight: 700 !important;
  text-align: center !important;
}

.step-item {
  margin-bottom: 1rem;
}

.step-title {
  font-family: var(--font-family-cera);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 0.5rem 0;
  text-transform: none;
  letter-spacing: 0.01em;
  color: #000000 !important;
}

.step-description {
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: 300;
  margin: 0;
  text-transform: none;
  letter-spacing: 0.01em;
  color: #000000 !important;
}

/* Right Column */
.right-column {
  gap: 2rem;
  padding-left: 0;
  padding-right: 0;
}

/* Brochure Section */
.brochure-section {
  padding: 4rem;
}

.brochure-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.brochure-item {
  aspect-ratio: 3/4;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.brochure-item:hover {
  transform: translateY(-4px);
}

.brochure-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  background-color: var(--color-corporate-footer);
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
  .content-section {
    flex-direction: column;
  }
  
  .left-column,
  .right-column {
    padding: 2rem;
  }
  
  .section-main-title {
    font-size: 4rem;
    line-height: 5rem;
  }
  
  .brochure-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .contact-section {
    margin: 0 2rem;
    padding: 2rem 0;
  }
}
</style> 