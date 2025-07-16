<template>
  <div class="our-mission-page">
    <!-- Main Content -->
    <div class="main-content">
      <!-- Left Column -->
      <div class="left-column">
        <div class="mission-title">
          <h2>
            <span>{{ $t('ourMission.title') }}</span>
            <br>
            <span class="title-second-line">{{ $t('ourMission.title2') }}</span>
          </h2>
        </div>
        
        <div class="image-container">
          <img src="/assets/images/our-mission-pic1.webp" alt="Our mission image" />
        </div>
        
        <div class="text-content">
          
          <p class="intro">{{ $t('ourMission.leftSection.intro') }}</p>
          
          <p class="belief-title">{{ $t('ourMission.leftSection.beliefTitle') }}</p>
          <ul class="beliefs">
            <li>{{ $t('ourMission.leftSection.beliefs.0') }}</li>
            <li>{{ $t('ourMission.leftSection.beliefs.1') }}</li>
            <li>{{ $t('ourMission.leftSection.beliefs.2') }}</li>
          </ul>
          
          <p class="contribution">{{ $t('ourMission.leftSection.contribution') }}</p>
          <p class="goal">{{ $t('ourMission.leftSection.goal') }}</p>
        </div>
      </div>

      <!-- Right Column -->
      <div class="right-column">
        <div class="right-header">
          <h2>{{ $t('ourMission.subtitle') }}</h2>
          <p>{{ $t('ourMission.subtitleDescription') }}</p>
        </div>
        
        <div class="text-content" style="margin-top: 1rem;">
          <p class="mission">
          
            {{ $t('ourMission.rightSection.mission') }}
            <span class="mission-description">{{ $t('ourMission.rightSection.missionDescription') }}</span>
          </p>
          <p class="conviction">
            {{ $t('ourMission.rightSection.conviction') }}
            <span class="conviction-bold">{{ $t('ourMission.rightSection.convictionBold') }}</span>
            {{ $t('ourMission.rightSection.convictionDescription') }}
            <span class="conviction-bold">{{ $t('ourMission.rightSection.convictionBold2') }}</span>
            {{ $t('ourMission.rightSection.convictionDescription2') }}
          </p>
          
          <p class="knowhow-title">
            {{ $t('ourMission.rightSection.knowhowTitle') }}
            <br>
            {{ $t('ourMission.rightSection.knowhowIntro') }}
          </p>
          <ul class="knowhow-points">
            <li>{{ $t('ourMission.rightSection.knowhowPoints.0') }}</li>
            <li>{{ $t('ourMission.rightSection.knowhowPoints.1') }}</li>
            <li>{{ $t('ourMission.rightSection.knowhowPoints.2') }}</li>
          </ul>
        </div>
        
        <div class="image-container" style="margin-top: 2.7rem;">
          <img src="/assets/images/our-mission-pic2.webp" alt="Our mission image 2" />
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
.our-mission-page {
  min-height: 100vh;
  font-family: 'Cera Pro', sans-serif;
}

/* Main Content */
.main-content {
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

.mission-title {
  padding-left: calc(4rem + 100px);
}

.mission-title h2 {
  font-family: 'Denver Serial', serif;
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

.image-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
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
}

.belief-title,
.knowhow-title {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.knowhow-title br {
  margin: 0;
  line-height: 1.2;
}

.beliefs,
.knowhow-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.beliefs li,
.knowhow-points li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.beliefs li::before,
.knowhow-points li::before {
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

.right-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  margin-top: 3rem;
}

.right-header {
  text-align: center;
  margin-bottom: 2rem;
}

.right-header h2 {
  font-family: 'Cera Pro', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.1;
  letter-spacing: 0.1em;
}

.right-header p {
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0.1rem 0 0 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.mission-description {
  font-weight: bold !important;
  display: inline;
}

.conviction-bold {
  font-weight: bold !important;
  display: inline;
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
  font-family: 'Denver Serial', serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .left-column,
  .right-column {
    padding: 2rem;
  }
  
  .mission-title h2,
  .right-header h2 {
    font-size: 2.5rem;
  }
  
  .contact-section {
    margin: 0 2rem;
    padding: 2rem 0;
  }
}
</style> 