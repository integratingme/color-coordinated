<template>
  <div class="corporate-index-page">
    <!-- Main Content -->
    <div class="main-content">
      <!-- Main Content Section -->
      <div class="content-section">
        <!-- Left Column -->
        <div class="left-column">
          <!-- Upgrade Floorplan Text -->
          <div class="text-content">
            <div class="section-header">
              <span class="section-label">{{ $t('corporate.index.upgradeFloorplan.label') }}</span>
              <h2 class="section-main-title">{{ $t('corporate.index.upgradeFloorplan.title') }}</h2>
              <span class="section-subtitle">{{ $t('corporate.index.upgradeFloorplan.subtitle') }}</span>
            </div>
            
            <p class="intro">{{ $t('corporate.index.upgradeFloorplan.intro') }}</p>
            
            <p class="service-intro">{{ $t('corporate.index.upgradeFloorplan.serviceIntro') }}<strong>{{ $t('corporate.index.upgradeFloorplan.serviceIntroBold') }}</strong>{{ $t('corporate.index.upgradeFloorplan.serviceIntroEnd') }}</p>
            
            <ul class="benefits">
              <li>{{ $t('corporate.index.upgradeFloorplan.benefits.0') }}</li>
              <li>{{ $t('corporate.index.upgradeFloorplan.benefits.1') }}</li>
              <li>{{ $t('corporate.index.upgradeFloorplan.benefits.2') }}<strong>{{ $t('corporate.index.upgradeFloorplan.benefits.3') }}</strong>{{ $t('corporate.index.upgradeFloorplan.benefits.4') }}</li>
              <li>{{ $t('corporate.index.upgradeFloorplan.benefits.5') }}</li>
            </ul>
            
            <p class="conclusion">{{ $t('corporate.index.upgradeFloorplan.conclusion') }}</p>
          </div>
          
          <!-- Image -->
          <div class="image-container" style="margin-top: 2rem;">
            <img src="~/assets/images/co-index-2.webp" alt="Design concept" />
          </div>
          
          <!-- Marketing Strategy Text -->
          <div class="text-content" style="margin-top: 2rem;">
            <div class="section-header">
              <span class="section-label">{{ $t('corporate.index.marketingStrategy.label') }}</span>
              <h2 class="section-main-title">{{ $t('corporate.index.marketingStrategy.title') }}</h2>
              <span class="section-subtitle">{{ $t('corporate.index.marketingStrategy.subtitle') }}</span>
            </div>
            
            <p class="intro">{{ $t('corporate.index.marketingStrategy.intro') }}<strong>{{ $t('corporate.index.marketingStrategy.introBold') }}</strong>{{ $t('corporate.index.marketingStrategy.introEnd') }}<strong>{{ $t('corporate.index.marketingStrategy.introBold2') }}</strong>{{ $t('corporate.index.marketingStrategy.introEnd2') }}</p>
            
            <p class="description">{{ $t('corporate.index.marketingStrategy.description') }}<strong>{{ $t('corporate.index.marketingStrategy.descriptionBold') }}</strong>{{ $t('corporate.index.marketingStrategy.descriptionEnd') }}<strong>{{ $t('corporate.index.marketingStrategy.descriptionBold2') }}</strong>{{ $t('corporate.index.marketingStrategy.descriptionEnd2') }}<strong>{{ $t('corporate.index.marketingStrategy.descriptionBold3') }}</strong>{{ $t('corporate.index.marketingStrategy.descriptionEnd3') }}</p>
            
            <p class="conclusion">{{ $t('corporate.index.marketingStrategy.conclusion') }}</p>
          </div>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <!-- First Image -->
          <div class="image-container">
            <img src="~/assets/images/co-index-1.webp" alt="Concept Design" />
          </div>
          
          <!-- Concept Design Text -->
          <div class="text-content" style="margin-top: -1rem;">
            <div class="section-header">
              <span class="section-label">{{ $t('corporate.index.conceptDesign.label') }}</span>
              <h2 class="section-main-title">{{ $t('corporate.index.conceptDesign.title') }}</h2>
              <span class="section-subtitle">{{ $t('corporate.index.conceptDesign.subtitle') }}</span>
            </div>
            
            <p class="intro">{{ $t('corporate.index.conceptDesign.intro') }}<strong>{{ $t('corporate.index.conceptDesign.introBold') }}</strong>{{ $t('corporate.index.conceptDesign.introEnd') }}<strong>{{ $t('corporate.index.conceptDesign.introBold2') }}</strong>{{ $t('corporate.index.conceptDesign.introEnd2') }}<strong>{{ $t('corporate.index.conceptDesign.introBold3') }}</strong>{{ $t('corporate.index.conceptDesign.introEnd3') }}</p>
            
            <p class="philosophy">{{ $t('corporate.index.conceptDesign.philosophy') }}<strong>{{ $t('corporate.index.conceptDesign.philosophyBold') }}</strong></p>
            
            <p class="service-intro">{{ $t('corporate.index.conceptDesign.serviceIntro') }}<strong>{{ $t('corporate.index.conceptDesign.serviceIntroBold') }}</strong>{{ $t('corporate.index.conceptDesign.serviceIntroEnd') }}</p>
          </div>
          
          <!-- Design Services Grid -->
          <div class="services-grid" style="margin-top: 2rem;">
            <div class="service-item">
              <div class="service-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="5" y="5" width="12" height="12" stroke="currentColor" stroke-width="1" fill="none"/>
                  <rect x="18" y="5" width="12" height="12" stroke="currentColor" stroke-width="1" fill="none"/>
                  <rect x="5" y="18" width="12" height="12" stroke="currentColor" stroke-width="1" fill="none"/>
                  <rect x="18" y="18" width="12" height="12" stroke="currentColor" stroke-width="1" fill="none"/>
                  <line x1="18" y1="30" x2="30" y2="18" stroke="currentColor" stroke-width="1"/>
                </svg>
              </div>
              <p class="service-text">{{ $t('corporate.index.services.service1.text') }}</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="8" width="24" height="6" stroke="currentColor" stroke-width="1" fill="none"/>
                  <rect x="8" y="16" width="24" height="6" stroke="currentColor" stroke-width="1" fill="none"/>
                  <rect x="8" y="24" width="24" height="6" stroke="currentColor" stroke-width="1" fill="none"/>
                </svg>
              </div>
              <p class="service-text">{{ $t('corporate.index.services.service2.text') }}</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <polygon points="20,6 24,16 34,16 26,22 30,32 20,26 10,32 14,22 6,16 16,16" stroke="currentColor" stroke-width="1" fill="none"/>
                  <line x1="5" y1="34" x2="35" y2="34" stroke="currentColor" stroke-width="1"/>
                  <line x1="5" y1="38" x2="35" y2="38" stroke="currentColor" stroke-width="1"/>
                </svg>
              </div>
              <p class="service-text">{{ $t('corporate.index.services.service3.text') }}</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <!-- Tabla sa zaobljenim uglovima -->
                  <rect x="8" y="8" width="24" height="16" rx="2" stroke="currentColor" stroke-width="1" fill="none"/>
                  <!-- Stalak sa tri noge -->
                  <line x1="12" y1="24" x2="12" y2="32" stroke="currentColor" stroke-width="1"/>
                  <line x1="20" y1="24" x2="20" y2="32" stroke="currentColor" stroke-width="1"/>
                  <line x1="28" y1="24" x2="28" y2="32" stroke="currentColor" stroke-width="1"/>
                  <!-- Kružni grafikon (leva strana) -->
                  <circle cx="16" cy="16" r="4" stroke="currentColor" stroke-width="1" fill="none"/>
                  <path d="M16 12 A4 4 0 0 1 20 16" stroke="currentColor" stroke-width="1" fill="none"/>
                  <!-- Horizontalne linije (desna strana) -->
                  <line x1="24" y1="12" x2="32" y2="12" stroke="currentColor" stroke-width="1"/>
                  <line x1="24" y1="15" x2="30" y2="15" stroke="currentColor" stroke-width="1"/>
                  <line x1="24" y1="18" x2="28" y2="18" stroke="currentColor" stroke-width="1"/>
                  <!-- Cik-cak linija -->
                  <path d="M24 20 L26 22 L28 20 L30 22 L32 20" stroke="currentColor" stroke-width="1" fill="none"/>
                </svg>
              </div>
              <p class="service-text">{{ $t('corporate.index.services.service4.text') }}</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <!-- Dokument sa zaobljenim uglovima - povećan -->
                  <rect x="6" y="6" width="28" height="32" rx="2" stroke="currentColor" stroke-width="1" fill="none"/>
                  <!-- Tri horizontalne linije teksta - razmaknute -->
                  <line x1="16" y1="14" x2="28" y2="14" stroke="currentColor" stroke-width="1"/>
                  <line x1="16" y1="20" x2="28" y2="20" stroke="currentColor" stroke-width="1"/>
                  <line x1="16" y1="26" x2="28" y2="26" stroke="currentColor" stroke-width="1"/>
                  <!-- Tri checkmark-a (kvačice) - razmaknuti -->
                  <path d="M8 12 L10 14 L12 12" stroke="currentColor" stroke-width="1" fill="none"/>
                  <path d="M8 18 L10 20 L12 18" stroke="currentColor" stroke-width="1" fill="none"/>
                  <path d="M8 24 L10 26 L12 24" stroke="currentColor" stroke-width="1" fill="none"/>
                </svg>
              </div>
              <p class="service-text">{{ $t('corporate.index.services.service5.text') }}</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="8" width="24" height="28" rx="2" stroke="currentColor" stroke-width="1" fill="none"/>
                </svg>
              </div>
              <p class="service-text">{{ $t('corporate.index.services.service6.text') }}</p>
            </div>
          </div>
          
          <!-- Conclusion Text -->
          <div class="text-content" style="margin-top: 2rem;">
            <p class="conclusion">{{ $t('corporate.index.conceptDesign.conclusion') }}</p>
          </div>
          
          <!-- Third Image -->
          <div class="image-container" style="margin-top: 2rem;">
            <img src="~/assets/images/co-index-3.webp" alt="Marketing strategy" />
          </div>
        </div>
      </div>
    </div>

    <!-- References Section -->
    <div class="references-section">
      <div class="references-content">
        <h2 class="references-title">
          <span class="references-label">{{ $t('corporate.index.references.label') }}</span>
          <span class="references-main">{{ $t('corporate.index.references.title') }}</span>
        </h2>
        <p class="references-subtitle">{{ $t('corporate.index.references.subtitle') }}</p>
      </div>
    </div>

    <!-- Brochure Section -->
    <div class="brochure-section">
      <div class="brochure-grid">
        <div class="brochure-item">
          <img src="~/assets/images/Broschure-lucette.webp" alt="Lucette Brochure" />
        </div>
        <div class="brochure-item">
          <img src="~/assets/images/FIVE_Broschure.webp" alt="FIVE Brochure" />
        </div>
        <div class="brochure-item">
          <img src="~/assets/images/Max&moritz_broschure.webp" alt="Max&Moritz Brochure" />
        </div>
        <div class="brochure-item">
          <img src="~/assets/images/ColorCoordinated-broschure.webp" alt="Color Coordinated Brochure" />
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
.corporate-index-page {
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

.section-title {
  padding-left: calc(4rem + 100px);
  margin-bottom: 2rem;
}

.section-title h2 {
  font-family: var(--font-family-denver);
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.1;
  transform: skew(-5deg);
}

.title-second-line {
  display: inline-block;
  margin-left: 2rem;
}

.subtitle {
  font-family: var(--font-family-cera);
  font-size: 1rem;
  font-weight: 300;
  color: #000000;
  margin: 0.5rem 0 0 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Unified Section Header Design */
.section-header,
.references-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.section-label,
.references-label {
  font-family: var(--font-family-cera);
  font-size: 3.7rem;
  font-weight: 300;
  color: #000000 !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.section-label, 
.section-main-title {
  line-height: 2.5rem;
}

.section-main-title,
.references-main {
  font-family: var(--font-family-denver);
  font-size: 8rem;
  font-weight: 700;
  color: #000000 !important;
  margin: 0;
  line-height: 10rem;
}

.section-subtitle,
.references-subtitle {
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  font-weight: 300;
  color: #000000 !important;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.section-title-text {
  font-family: var(--font-family-denver);
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.image-container {
  width: 100%;
  height: 600px;
  overflow: hidden;
}

/* Left column images - move more to the left */
.left-column .image-container {
  margin-left: -4rem;
  margin-right: 4rem;
}

/* Right column images - move more to the right */
.right-column .image-container {
  margin-left: 4rem;
  margin-right: -4rem;
}

/* Exception for co-index-22.webp - keep it centered and adjust dimensions */
.right-column .image-container img[src*="co-index-22.webp"] {
  margin-left: 0;
  margin-right: 0;
  padding: 0%;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  background: transparent;
  border-radius: 8px;
  margin-left: 2rem;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.service-icon {
  color: #333;
  margin-bottom: 0.5rem;
  transform: scale(1.5);
}

.service-text {
  font-family: var(--font-family-cera);
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #333;
  margin: 0;
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  hyphens: auto;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Special height for co-index-1.webp container to match left column content */
.right-column .image-container:has(img[src*="co-index-1.webp"]) {
  height: 650px;
}

/* Special height for co-index-2.webp container to match right column content */
.left-column .image-container:has(img[src*="co-index-2.webp"]) {
  height: 900px;
}

/* Special height for co-index-3.webp container */
.right-column .image-container:has(img[src*="co-index-3.webp"]) {
  height: 650px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.description,
.conclusion {
  text-transform: none;
  letter-spacing: 0.01em;
}

.philosophy {
  font-weight: 500;
  text-transform: none;
}

.service-intro {
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.benefits {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.benefits li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.benefits li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  background-color: #000000;
}

/* Right Column */
.right-column {
  gap: 2rem;
  padding-left: 0;
  padding-right: 0;
}

/* References Section */
.references-section {
  padding: 4rem;
  text-align: center;
}

.references-content {
  max-width: 1200px;
  margin: 0 auto;
}



/* Brochure Section */
.brochure-section {
  padding: 4rem;
}

.brochure-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  
  .section-title h2 {
    font-size: 2.5rem;
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