<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">My Blog</router-link>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <main class="container">
      <router-view/>
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} My Blog. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }

  .nav-links {
    a {
      margin-left: 1.5rem;
      text-decoration: none;
      color: #666;
      
      &:hover {
        color: #333;
      }
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

main {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background-color: #f8f9fa;
  padding: 2rem 0;
  text-align: center;
  color: #666;
}
</style> 