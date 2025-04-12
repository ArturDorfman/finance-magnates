<template>
  <div class="rounded-2xl border border-[#7b7c85] bg-gradient-to-b from-[#191b21] to-[#1b1b1b] p-8">
    <h2 class="text-2xl font-semibold text-white mb-8">
      Get your free compliance guide
    </h2>

    <form @submit.prevent="handleSubmit">
      <div class="form-item">
        <label for="firstName" class="form-label">First name</label>
        <input
          id="firstName"
          v-model="form.firstName"
          type="text"
          class="form-input"
          :class="{ 'has-error': errors.firstName }"
          placeholder="John"
          @focus="clearError('firstName')"
        >
        <p v-if="errors.firstName" class="error-message">{{ errors.firstName }}</p>
      </div>

      <div class="form-item">
        <label for="lastName" class="form-label">Last name</label>
        <input
          id="lastName"
          v-model="form.lastName"
          type="text"
          class="form-input"
          :class="{ 'has-error': errors.lastName }"
          placeholder="Doe"
          @focus="clearError('lastName')"
        >
        <p v-if="errors.lastName" class="error-message">{{ errors.lastName }}</p>
      </div>

      <div class="form-item">
        <label for="email" class="form-label">Email Address</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="form-input"
          :class="{ 'has-error': errors.email }"
          placeholder="john.doe@example.com"
          @focus="clearError('email')"
        >
        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
      </div>

      <div class="form-item">
        <label for="company" class="form-label">Company</label>
        <input
          id="company"
          v-model="form.company"
          type="text"
          class="form-input"
          :class="{ 'has-error': errors.company }"
          placeholder="Acme Inc."
          @focus="clearError('company')"
        >
        <p v-if="errors.company" class="error-message">{{ errors.company }}</p>
      </div>

      <AppButton
        type="submit"
        :disabled="isSubmitting"
        class="mt-8"
      >
        {{ isSubmitting ? 'Submitting...' : 'Get Free Report' }}
      </AppButton>

      <div class="mt-4 text-gray-400">
        <p>
          By submitting this form, you agree to our
          <NuxtLink to="/legal/privacy-policy" class="text-white underline">
            Privacy Policy
          </NuxtLink>.
        </p>

        <p class="mt-3">
          This site is protected by reCAPTCHA and the Google
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener"
            class="underline">
            Privacy Policy
          </a>
          and
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener"
            class="underline">
            Terms of Service
          </a> apply.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
// Form state
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: ''
})

// Error state
const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: ''
})

const isSubmitting = ref(false)

// Form validation
function validateForm () {
  let isValid = true

  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')

  // First name validation
  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required'
    isValid = false
  }

  // Last name validation
  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required'
    isValid = false
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Company validation
  if (!form.company.trim()) {
    errors.company = 'Company name is required'
    isValid = false
  }

  return isValid
}

// Form submission
async function handleSubmit () {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // TODO: Implement actual form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    console.log('Form submitted:', form)

    // Reset form after successful submission
    Object.keys(form).forEach(key => form[key] = '')
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}

function clearError (field) {
  errors[field] = ''
}
</script>

<style scoped>
.form-item {
  @apply mt-6 first:mt-0 relative;
}

.form-label {
  @apply block mb-1.5 leading-normal;
}

.form-input {
  @apply w-full bg-[#292b31] border border-[#7b7c85] rounded px-3.5 py-2.5 text-white
  focus:outline-none focus:ring-2 focus:ring-blue-500;

  &.has-error {
    @apply border-red-500;
  }
}

.form-input::placeholder {
  @apply text-[#888888];
}

.error-message {
  @apply absolute left-0 -bottom-5 text-red-500 text-sm;
}
</style>
