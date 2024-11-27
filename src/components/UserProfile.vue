<template>
  <div class="profile-page">
    <div class="profile-header">
      <img :src="profilePicture" alt="Profile Picture" class="profile-img" />
      <div class="profile-details">
        <h2>{{ fullName }}</h2>
        <p>{{ bio }}</p>
        <div class="social-links">
          <a :href="socialLinks.github" target="_blank">GitHub</a>
          <a :href="socialLinks.linkedin" target="_blank">LinkedIn</a>
          <a :href="socialLinks.twitter" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",  // Updated from 'Profile'
  data() {
    return {
      profilePicture: 'path/to/profile-photo.jpg',
      fullName: 'Lucky Name',
      bio: 'I am a passionate developer with a love for music, tech, and creativity.',
      socialLinks: {
        github: 'https://github.com/lucky',
        linkedin: 'https://linkedin.com/in/lucky',
        twitter: 'https://twitter.com/lucky'
      }
    };
  }
};
</script>

<style scoped>
.profile-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
}

.profile-img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-right: 20px;
}

.profile-details {
  flex: 1;
}

.profile-details h2 {
  margin: 0;
  font-size: 1.8rem;
  color: #333;
}

.profile-details p {
  font-size: 1rem;
  color: #666;
}

.social-links a {
  text-decoration: none;
  color: #4a90e2;
  margin-right: 10px;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>
