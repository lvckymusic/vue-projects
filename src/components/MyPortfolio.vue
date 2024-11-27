<template>
  <div class="portfolio-page">
    <h2>My Portfolio</h2>
    <div class="portfolio-cards">
      <div class="portfolio-card" v-for="project in projects" :key="project.id">
        <img :src="project.image" :alt="project.title" class="portfolio-image" />
        <div class="portfolio-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" class="view-button">View Project</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPortfolio",  // Updated from 'Portfolio'
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'A brief description of the project.',
          image: 'path/to/project1.jpg',
          link: '#'
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'A brief description of the project.',
          image: 'path/to/project2.jpg',
          link: '#'
        },
        // Add more projects as needed
      ]
    };
  }
};
</script>

<style scoped>
.portfolio-page {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.portfolio-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.portfolio-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.portfolio-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.portfolio-info {
  padding: 15px;
}

/* Apply black color to all text elements */
.portfolio-page, .portfolio-card, .portfolio-info h3, .portfolio-info p, .view-button {
  color: black;
}

.view-button {
  color: #4a90e2;
  text-decoration: none;
}

.view-button:hover {
  text-decoration: underline;
}
</style>
