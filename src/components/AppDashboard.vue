<template>
  <div class="app-dashboard">
    <h1 class="dashboard-header">Dashboard 👾 </h1>

    <!-- Navigation Links (Tabs) -->
    <div class="dashboard-tabs">
      <button @click="currentPage = 'profile'" :class="{ active: currentPage === 'profile' }">Profile</button>
      <button @click="currentPage = 'portfolio'" :class="{ active: currentPage === 'portfolio' }">Portfolio</button>
      <button @click="currentPage = 'contact'" :class="{ active: currentPage === 'contact' }">Contact</button>
      <button @click="currentPage = 'creative'" :class="{ active: currentPage === 'creative' }">Creative</button>
    </div>

    <!-- Profile Page -->
    <div v-if="currentPage === 'profile'" class="page-content">
      <h2>Profile</h2>
      <div class="profile-section">
        <div class="profile-picture">
          <img :src="require('@/assets/lucky.jpg')" alt="Profile Picture" class="profile-img" />
        </div>
        <div class="profile-info">
          <p><strong>Name:</strong> Jan Luis Eduardo</p>
          <p><strong>Bio:</strong> A passionate software developer and creative thinker.</p>
          <!-- Social Links -->
          <div class="social-links">
            <div class="social-row">
              <a href="https://github.com/lvckymusic" target="_blank" class="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/luis-eduardo-042721306/" target="_blank" class="social-link">LinkedIn</a>
            </div>
            <div class="social-row">
              <a href="https://www.facebook.com/its.janluiseduardo3/" target="_blank" class="social-link">Facebook</a>
              <a href="https://www.instagram.com/lvckymusic/" target="_blank" class="social-link">Instagram</a>
              <a href="https://ph.pinterest.com/lvckymusic/" target="_blank" class="social-link">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Page -->
    <div v-if="currentPage === 'portfolio'" class="page-content">
      <h2>Portfolio Showcase</h2>

      <!-- IoT Projects Section -->
      <div class="portfolio-category">
        <h3>IoT Projects</h3>
        <div class="portfolio-gallery">
          <div class="portfolio-item" v-for="(item, index) in iotProjects" :key="index">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <ul>
              <li><strong>Technologies Used:</strong> {{ item.technologies }}</li>
              <li><strong>Tools/Platforms:</strong> {{ item.tools }}</li>
            </ul>
            <a :href="item.link" class="view-button" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Page -->
    <div v-if="currentPage === 'contact'" class="page-content">
      <h2>Contact</h2>
      <form @submit.prevent="submitContactForm">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="contact.name" required placeholder="Enter your name" />
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" v-model="contact.email" required placeholder="Enter your email" />
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" v-model="contact.message" required placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>

    <!-- Creative Page -->
    <div v-if="currentPage === 'creative'" class="page-content">
      <h2>Creative</h2>
      <!-- Spotify Icon and Link -->
      <div class="spotify-container">
        <a href="https://open.spotify.com/user/rifx7solvty2sa5spd4twet7p?si=0438d9f50db14ec0&nd=1&dlsi=7af41bccd14c4871" target="_blank" class="spotify-link">
          <img src="@/assets/spotify.png" alt="Spotify" class="spotify-icon" />
          <span class="spotify-text">Listen on Spotify</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDashboard",
  data() {
    return {
      currentPage: 'profile', // Default to 'profile' page
      contact: { name: '', email: '', message: '' },
      iotProjects: [
        {
          title: 'Smart Home Automation',
          description: 'A smart home system to control lights and appliances via mobile app.',
          technologies: 'Arduino, NodeMCU, MQTT, Firebase',
          tools: 'Arduino IDE, Blynk, MQTT Broker',
          link: 'https://github.com/home-assistant/core'
        },
        {
          title: 'Weather Monitoring System',
          description: 'IoT-based weather monitoring system with real-time data updates.',
          technologies: 'ESP8266, DHT11, Node.js, Firebase',
          tools: 'Arduino IDE, Firebase, Node.js',
          link: 'https://github.com/NeetuShaw/Weather-monitoring-system'
        }
      ],
    };
  },
  methods: {
    submitContactForm() {
      console.log('Form submitted:', this.contact);
      alert('Thank you for reaching out!');
    }
  }
};
</script>

<style scoped>
.app-dashboard {
  padding: 30px;
  font-family: 'Roboto', sans-serif;
  background: rgba(255, 255, 255, 0.25); /* 75% transparent background */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  color: black; /* Make text black */
}

@keyframes gradient {
  0% { background-position: 100% 50%; }
  50% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.dashboard-header {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: black; /* Changed to black */
}

.dashboard-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

button {
  padding: 12px 25px;
  background-color: #f1c6e2;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  margin: 0 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #f8a7c2;
  transform: scale(1.05);
}

button.active {
  background-color: #ff80ab;
  border-bottom: 4px solid #ff4081;
}

.page-content {
  margin: 30px 0;
  padding: 20px; /* Added padding for better spacing */
  background-color: #fff; /* Ensure the background is distinct */
  border-radius: 10px; /* Soft rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for emphasis */
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px; /* Limit the width of the form */
  margin: 0 auto; /* Center the form horizontally */
}

.form-group label {
  font-size: 1rem;
  font-weight: bold;
}

input, textarea {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

input:focus, textarea:focus {
  border-color: #ff4081;
  outline: none;
}

.profile-section {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.profile-picture {
  position: relative;
  text-align: center;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-info {
  flex: 1;
  text-align: left;
}

.social-links {
  margin-top: 20px;
  text-align: center;
}

.social-row {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.social-links a {
  color: pink; /* Pink color */
  font-weight: 500;
  text-decoration: underline; /* Underlined the links */
  margin: 0 15px;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

.social-links a:hover {
  color: blue; /* Change to blue on hover */
}

.portfolio-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.portfolio-item {
  flex: 1 1 250px;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.view-button {
  display: inline-block;
  background-color: #ff4081;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
}

.view-button:hover {
  background-color: #f8a7c2;
}

.submit-button {
  background-color: #ff4081;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: #f8a7c2;
}

.spotify-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.spotify-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.spotify-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.spotify-text {
  font-size: 1.2rem;
  color: #1DB954;
  font-weight: bold;
}
</style>
