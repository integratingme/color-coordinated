<template>
  <div class="contact-layout contact-corporate">
    <AppHeader background="corporate" section="corporate" />
    <slot />
    <AppFooter section="corporate" />
  </div>
</template>

<script setup>
// Simplified layout without route detection
</script>

<style scoped>
.contact-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-cera);
  color: #000000;
  overflow: hidden;
}

.contact-corporate {
  background: var(--color-corporate-primary);
}

.contact-private {
  background: var(--color-private-light);
}

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
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
  background-color: var(--color-corporate-footer);
  border: none;
  padding: 1rem 3rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: center;
  margin-top: 2rem;
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