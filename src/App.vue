<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">
          <span class="logo-text">Engineering Blog</span>
        </router-link>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/blog">Articles</router-link>
          <router-link to="/create-post">Create Post</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <main>
      <router-view/>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Engineering Blog</h4>
            <p>Sharing our engineering journey and insights</p>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
              <a href="#" target="_blank">Twitter</a>
              <a href="#" target="_blank">GitHub</a>
              <a href="#" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Engineering Blog. All rights reserved.</p>
        </div>
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
  font-family: $font-family-base;
  color: $text-color;
  background-color: $background-color;
}

.navbar {
  background-color: $background-color;
  border-bottom: $border-width solid $border-color;
  padding: $spacing-md 0;
  position: sticky;
  top: 0;
  z-index: 1000;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    text-decoration: none;
    
    .logo-text {
      font-family: $font-family-heading;
      font-size: $font-size-h3;
      font-weight: 700;
      color: $text-color;
    }
  }

  .nav-links {
    display: flex;
    gap: $spacing-lg;

    a {
      text-decoration: none;
      color: $text-color;
      font-size: $font-size-base;
      font-weight: 500;
      padding: $spacing-xs $spacing-sm;
      transition: $transition-base;
      
      &:hover {
        color: $text-secondary;
      }

      &.router-link-active {
        color: $text-color;
        font-weight: 600;
      }
    }
  }
}

.container {
  max-width: $container-max-width;
  margin: 0 auto;
  padding: 0 $container-padding;
}

main {
  flex: 1;
}

.footer {
  background-color: $background-color;
  border-top: $border-width solid $border-color;
  padding: $spacing-xl 0;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-xl;
    margin-bottom: $spacing-xl;
  }

  .footer-section {
    h4 {
      font-size: $font-size-h4;
      font-weight: 600;
      margin-bottom: $spacing-md;
    }

    p {
      color: $text-secondary;
      line-height: $line-height-base;
    }
  }

  .social-links {
    display: flex;
    gap: $spacing-md;

    a {
      color: $text-color;
      text-decoration: none;
      transition: $transition-base;

      &:hover {
        color: $text-secondary;
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: $spacing-lg;
    border-top: $border-width solid $border-color;
    color: $text-secondary;
  }
}
</style> 