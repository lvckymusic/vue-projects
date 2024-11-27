<template>
  <div id="app">
    <main>
      <!-- Router View renders the active route's component -->
      <router-view />
    </main>
    <footer>
      <p>© 2024 VueJs Portfolio. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Full-screen layout */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* App container with space background */
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url('assets/earth.jpg') no-repeat center center fixed;
  background-size: cover;
  color: white; /* To ensure text stands out against the background */
}

footer {
  background-color: transparent; /* Fully transparent background */
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  color: white; /* Ensure text remains visible on the background */
}

footer p {
  margin: 0;
}

/* Main content area */
main {
  flex-grow: 1;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
