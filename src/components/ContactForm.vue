<template>
  <div class="contact-page">
    <h2>Contact Me</h2>
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required placeholder="Your Name" />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required placeholder="Your Email" />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required placeholder="Your Message"></textarea>
      </div>

      <div class="form-group">
        <button type="submit" class="submit-button">Send Message</button>
      </div>

      <p v-if="messageSent" class="success-message">Message Sent! Thank you.</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      messageSent: false
    };
  },
  methods: {
    handleSubmit() {
      this.messageSent = true;
      // You can add further logic here to send the message (e.g., using email service)
    }
  }
};
</script>

<style scoped>
/* Centering the container and form */
.contact-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensures the form spans the full screen vertically */
  padding: 20px;
  background-color: #f5f7fa;
}

form {
  max-width: 600px;
  width: 100%; /* Ensures the form is responsive */
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Form inputs */
.form-group {
  margin-bottom: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 120px;
}

/* Submit button */
.submit-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #a3c9c9;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #8fbfbb;
}

/* Success message */
.success-message {
  color: #4caf50;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  form {
    padding: 15px;
  }

  .submit-button {
    font-size: 0.9rem;
  }
}
</style>
