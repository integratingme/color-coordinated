<template>
  <div class="main-content">
    <!-- Contact Form -->
    <div class="contact-form-container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-main-title">
          <span>{{ $t('contact.title.first') }} </span>
          <br>
          <span class="section-main-title-second">{{ $t('contact.title.second') }}</span>
        </h2>
        <span class="section-subtitle">{{ $t('contact.subtitle') }}</span>
      </div>
      
      <!-- Contact Form -->
      <form class="contact-form">
        <!-- Personal Information Section -->
        <div class="form-section">
          <div class="form-row">
            <div class="form-group">
              <input type="text" id="name" name="name" :placeholder="$t('contact.fields.name')" required>
            </div>
            <div class="form-group">
              <input type="text" id="company" name="company" :placeholder="$t('contact.fields.company')">
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <input type="url" id="website" name="website" :placeholder="$t('contact.fields.website')">
            </div>
          </div>
          
          <div class="form-row two-columns">
            <div class="form-group">
              <input type="email" id="email" name="email" :placeholder="$t('contact.fields.email')" required>
            </div>
            <div class="form-group">
              <input type="tel" id="phone" name="phone" :placeholder="$t('contact.fields.phone')" required>
            </div>
          </div>
        </div>
        
        <!-- Project Information Section -->
        <div class="form-section">
          <h3 class="section-title">{{ $t('contact.sections.project.title') }}</h3>
          
          <div class="form-row two-columns">
            <div class="form-group">
              <input type="text" id="project-title" name="project-title" :placeholder="$t('contact.fields.projectTitle')">
            </div>
            <div class="form-group">
              <input type="text" id="location" name="location" :placeholder="$t('contact.fields.location')" required>
            </div>
          </div>
        </div>
        
        <!-- Help Section -->
        <div class="form-section">
          <h3 class="section-title lowercase-parentheses">{{ $t('contact.sections.help.title') }}</h3>
          <div class="form-row">
            <div class="form-group">
              <textarea id="language-note" name="language-note" rows="3" :placeholder="$t('contact.fields.languageNote')"></textarea>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <select id="budget" name="budget">
                <option value="">{{ $t('contact.fields.budget') }}</option>
                <option value="under-50k">{{ $t('contact.options.budget.under50k') }}</option>
                <option value="50k-100k">{{ $t('contact.options.budget.50k100k') }}</option>
                <option value="100k-250k">{{ $t('contact.options.budget.100k250k') }}</option>
                <option value="250k-500k">{{ $t('contact.options.budget.250k500k') }}</option>
                <option value="500k-1m">{{ $t('contact.options.budget.500k1m') }}</option>
                <option value="over-1m">{{ $t('contact.options.budget.over1m') }}</option>
              </select>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <div class="date-inputs">
                <input type="text" id="timeline-start" name="timeline-start" :placeholder="$t('contact.fields.timelineStart')">
                <span class="date-separator">-</span>
                <input type="text" id="timeline-end" name="timeline-end" :placeholder="$t('contact.fields.timelineEnd')">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Services Section -->
        <div class="form-section">
          <h3 class="section-title lowercase-parentheses">{{ $t('contact.sections.services.title') }}</h3>
          
          <div class="checkbox-grid">
            <div class="checkbox-item">
              <input type="checkbox" id="architecture" name="services" value="architecture">
              <label for="architecture">{{ $t('contact.services.architecture') }}</label>
            </div>
            <div class="checkbox-item">
              <input type="checkbox" id="interior-design" name="services" value="interior-design">
              <label for="interior-design">{{ $t('contact.services.interiorDesign') }}</label>
            </div>
            <div class="checkbox-item">
              <input type="checkbox" id="one-room" name="services" value="one-room">
              <label for="one-room">{{ $t('contact.services.oneRoom') }}</label>
            </div>
            <div class="checkbox-item">
              <input type="checkbox" id="staging" name="services" value="staging">
              <label for="staging">{{ $t('contact.services.staging') }}</label>
            </div>
            <div class="checkbox-item">
              <input type="checkbox" id="outdoor" name="services" value="outdoor">
              <label for="outdoor">{{ $t('contact.services.outdoor') }}</label>
            </div>
            <div class="checkbox-item">
              <input type="checkbox" id="consultation" name="services" value="consultation">
              <label for="consultation">{{ $t('contact.services.consultation') }}</label>
            </div>
          </div>
        </div>
        
        <!-- How Did You Find Us Section -->
        <div class="form-section">
          <h3 class="section-title">{{ $t('contact.sections.source.title') }}</h3>
          
          <div class="form-row">
            <div class="form-group">
              <select id="source" name="source">
                <option value="">{{ $t('contact.fields.source') }}</option>
                <option value="google">{{ $t('contact.options.source.google') }}</option>
                <option value="social-media">{{ $t('contact.options.source.socialMedia') }}</option>
                <option value="referral">{{ $t('contact.options.source.referral') }}</option>
                <option value="advertisement">{{ $t('contact.options.source.advertisement') }}</option>
                <option value="other">{{ $t('contact.options.source.other') }}</option>
              </select>
            </div>
          </div>
        </div>
        
        <!-- Submit Button -->
        <div class="form-section">
          <button type="submit" class="submit-button" :class="buttonClass">{{ $t('contact.submit') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  section: {
    type: String,
    default: 'corporate', // 'corporate' or 'private'
    validator: (value) => ['corporate', 'private'].includes(value)
  }
})

const buttonClass = computed(() => {
  return `submit-button--${props.section}`
})

defineOptions({
  name: 'ContactForm'
})
</script>

<style scoped>
/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: var(--font-family-cera);
  color: #000000;
}

/* Contact Form Container */
.contact-form-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* Unified Section Header Design */
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  text-align: center;
}

.section-main-title {
  font-family: var(--font-family-denver);
  font-size: 8rem;
  font-weight: 700;
  color: #000000 !important;
  margin: 0;
  line-height: 5rem;
  text-align: center;
}

.section-main-title-second {
  margin-left: 5rem;
}

.section-subtitle {
  font-family: var(--font-family-cera);
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #000000 !important;
  text-transform: uppercase !important;
  line-height: 2rem !important;
  margin: 4rem 0 0 0 !important;
  text-align: center !important;
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Form Sections */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem 0 0 0;
}

.section-title {
  font-family: var(--font-family-cera);
  font-size: 1.2rem;
  font-weight: 500;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 0;
  text-align: center;
}

.lowercase-parentheses {
  text-transform: none;
}

.language-note {
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  font-weight: 300;
  color: #000000;
  text-align: left;
  margin: 0;
  font-style: italic;
}

/* Form Rows */
.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.form-row.two-columns {
  grid-template-columns: 1fr 1fr;
}

.form-row:has(.date-inputs) {
  grid-template-columns: 1fr;
}

/* Form Groups */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  font-weight: 300;
  color: #000000;
  padding: 0.5rem 0;
  border: none;
  border-bottom: 1px solid #000000;
  background-color: transparent;
  transition: border-color 0.2s;
  width: 100%;
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-bottom-color: #000000;
}

/* Styled inputs for specific fields */
.form-group input[id="budget"],
.form-group input[id="timeline-start"],
.form-group input[id="timeline-end"],
.form-group select[id="budget"],
.form-group select[id="source"],
.form-group textarea[id="language-note"] {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
}

.form-group input[id="budget"]:focus,
.form-group input[id="timeline-start"]:focus,
.form-group input[id="timeline-end"]:focus,
.form-group select[id="budget"]:focus,
.form-group select[id="source"]:focus,
.form-group textarea[id="language-note"]:focus {
  border-color: #000000;
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

/* Date Inputs */
.date-inputs {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.date-separator {
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  color: #000000;
}

/* Checkbox Grid */
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  justify-items: center;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-self: center;
  text-align: center;
}

.checkbox-item input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #000000;
}

.checkbox-item label {
  font-family: var(--font-family-cera);
  font-size: 0.8rem;
  font-weight: 300;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  cursor: pointer;
  text-align: center;
}

/* Submit Button */
.submit-button {
  font-family: var(--font-family-cera);
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  border: none;
  padding: 1rem 3rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: center;
  margin-top: 2rem;
}

.submit-button--corporate {
  background-color: var(--color-corporate-footer);
}

.submit-button--private {
  background-color: var(--color-private-footer);
}

.submit-button:hover {
  background-color: #333333;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-form-container {
    padding: 2rem 1rem;
  }
  
  .section-main-title {
    font-size: 4rem;
    line-height: 5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .checkbox-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 400px;
    justify-items: center;
    text-align: center;
    margin: 0 auto;
  }
  
  .submit-button {
    width: 100%;
    max-width: 300px;
  }
  
  .checkbox-item {
    justify-self: center;
    text-align: center;
  }
  
  .checkbox-item label {
    text-align: center;
  }
}
</style> 