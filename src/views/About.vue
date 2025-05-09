<template>
  <div class="about">
    <div class="container">
      <header class="page-header">
        <h1>About Our Engineering Blog</h1>
        <p class="subtitle">Sharing our journey of building technology at scale</p>
      </header>

      <div class="content">
        <section class="mission">
          <h2>Our Mission</h2>
          <p>
            We believe in the power of sharing knowledge and experiences. Our engineering blog serves as a platform
            to document our technical journey, share insights, and contribute to the broader engineering community.
          </p>
          <p>
            Through this blog, we aim to provide valuable perspectives on building and scaling technology,
            solving complex problems, and fostering innovation in the engineering space.
          </p>
        </section>

        <section class="topics">
          <h2>What We Write About</h2>
          <div class="topic-grid">
            <div class="topic-card">
              <h3>Engineering</h3>
              <p>Deep dives into our technical architecture, system design, and engineering practices.</p>
            </div>
            <div class="topic-card">
              <h3>Infrastructure</h3>
              <p>Insights into our infrastructure decisions, scaling strategies, and operational excellence.</p>
            </div>
            <div class="topic-card">
              <h3>Security</h3>
              <p>Best practices, security measures, and our approach to building secure systems.</p>
            </div>
            <div class="topic-card">
              <h3>Data Science</h3>
              <p>Our work in machine learning, data analysis, and building intelligent systems.</p>
            </div>
          </div>
        </section>

        <section class="contribute">
          <h2>Contribute to Our Blog</h2>
          <p>
            We welcome contributions from engineers, researchers, and technical writers who share our passion
            for technology and knowledge sharing. If you're interested in writing for our blog, please reach out
            to us through the contact form below.
          </p>
          <button class="contact-button">
            Contact Us
            <span class="arrow">→</span>
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="scss" scoped>
.about {
  padding: $spacing-xxl 0;

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .page-header {
    text-align: center;
    margin-bottom: $spacing-xxl;

    h1 {
      font-family: $font-family-heading;
      font-size: $font-size-h1;
      font-weight: 700;
      line-height: $line-height-heading;
      margin-bottom: $spacing-md;
      color: $text-color;
    }

    .subtitle {
      font-size: $font-size-h4;
      line-height: $line-height-base;
      color: $text-secondary;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .content {
    section {
      margin-bottom: $spacing-xxl;

      h2 {
        font-family: $font-family-heading;
        font-size: $font-size-h2;
        font-weight: 600;
        line-height: $line-height-heading;
        margin-bottom: $spacing-lg;
        color: $text-color;
      }

      p {
        font-size: $font-size-base;
        line-height: $line-height-base;
        color: $text-color;
        margin-bottom: $spacing-lg;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .topic-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-lg;
      margin-top: $spacing-xl;

      .topic-card {
        padding: $spacing-lg;
        background: $background-color;
        border: $border-width solid $border-color;
        border-radius: $border-radius;
        transition: $transition-base;

        &:hover {
          border-color: $text-color;
        }

        h3 {
          font-family: $font-family-heading;
          font-size: $font-size-h3;
          font-weight: 600;
          margin-bottom: $spacing-sm;
          color: $text-color;
        }

        p {
          color: $text-secondary;
          margin-bottom: 0;
        }
      }
    }

    .contribute {
      text-align: center;

      .contact-button {
        display: inline-flex;
        align-items: center;
        gap: $spacing-xs;
        padding: $spacing-sm $spacing-lg;
        background: $text-color;
        color: $background-color;
        border: none;
        border-radius: $border-radius;
        font-weight: 600;
        cursor: pointer;
        transition: $transition-base;
        margin-top: $spacing-lg;

        &:hover {
          background: $text-secondary;

          .arrow {
            transform: translateX(4px);
          }
        }

        .arrow {
          transition: transform 0.2s ease;
        }
      }
    }
  }
}
</style> 