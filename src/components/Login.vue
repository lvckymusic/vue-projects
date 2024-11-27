<template>
  <div class="login-container">
    <h1 class="login-heading">Welcome Back, Engineer! 🚀 </h1>
    <form @submit.prevent="handleLogin" novalidate>
      <div class="form-group">
        <label for="username" class="form-label">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          :class="{ 'is-invalid': usernameError }"
          required
          placeholder="Enter your username"
        />
        <p v-if="usernameError" class="error-message">{{ usernameError }}</p>
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          :class="{ 'is-invalid': passwordError }"
          required
          placeholder="Enter your password"
        />
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>

      <div class="form-group">
        <button type="submit" :disabled="isLoading" class="submit-button">Login</button>
      </div>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { apiLogin } from "@/services/api";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      usernameError: "",
      passwordError: "",
      isLoading: false,
    };
  },
  methods: {
    validateForm() {
      this.usernameError = "";
      this.passwordError = "";
      let valid = true;

      if (!this.username) {
        this.usernameError = "Username is required.";
        valid = false;
      }

      if (!this.password) {
        this.passwordError = "Password is required.";
        valid = false;
      }

      return valid;
    },

    async handleLogin() {
      if (!this.validateForm()) return;

      this.isLoading = true;

      try {
        const response = await apiLogin({
          username: this.username,
          password: this.password,
        });

        if (response.success) {
          localStorage.setItem("auth_token", response.token);
          this.$router.push({ name: "Dashboard" });
        } else {
          this.errorMessage = "Invalid username or password!";
        }
      } catch (error) {
        console.error("Login error:", error);
        this.errorMessage = "An error occurred. Please try again later.";
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5e6e2, #f1c6a7, #d1e1d1, #e1d0f1); /* Gradient background */
  min-height: 100vh; /* Ensure full height */
}

.login-container {
  max-width: 600px; /* Wider container */
  padding: 40px;
  border-radius: 12px;
  background: none; /* No background color */
  box-shadow: none; /* Remove shadow if not needed */
  width: 100%;
  text-align: center;
  color: white; /* Ensure text remains legible */
}


/* Heading */
.login-heading {
  text-align: center;
  font-size: 2rem; /* Larger heading */
  margin-bottom: 2rem;
  color: White;
}

/* Form */
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  width: 100%;
  padding: 1rem; /* Larger input padding */
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

input.is-invalid {
  border-color: red;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background-color: #f1c6a7;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:disabled {
  background-color: #ccc;
}

.submit-button:hover:not(:disabled) {
  background-color: black;
}

/* Error messages */
.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
