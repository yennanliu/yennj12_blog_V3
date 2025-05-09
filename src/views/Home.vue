<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Engineering at Scale</h1>
        <p class="subtitle">Insights, stories, and technical deep-dives from our engineering teams</p>
      </div>
    </section>

    <section class="featured-posts">
      <div class="container">
        <h2>Latest Articles</h2>
        <div class="posts-grid" v-if="!loading">
          <article v-for="post in posts" :key="post.id" class="post-card">
            <div class="post-image" v-if="post.image">
              <img :src="post.image" :alt="post.title">
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="category">{{ post.category }}</span>
                <span class="date">{{ formatDate(post.date) }}</span>
              </div>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <router-link :to="'/blog/' + post.id" class="read-more">
                Read Article
                <span class="arrow">→</span>
              </router-link>
            </div>
          </article>
        </div>
        <div v-else class="loading">
          Loading articles...
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapState({
      posts: state => state.posts,
      loading: state => state.loading
    })
  },
  methods: {
    ...mapActions(['fetchPosts']),
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  created() {
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.home {
  .hero {
    background-color: $background-color;
    padding: $spacing-xxl 0;
    text-align: center;
    border-bottom: $border-width solid $border-color;

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
      color: $text-secondary;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .featured-posts {
    padding: $spacing-xxl 0;

    h2 {
      font-family: $font-family-heading;
      font-size: $font-size-h2;
      font-weight: 700;
      margin-bottom: $spacing-xl;
      color: $text-color;
    }

    .posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: $spacing-xl;
    }

    .post-card {
      background: $background-color;
      border: $border-width solid $border-color;
      transition: $transition-base;

      &:hover {
        border-color: $text-color;
      }

      .post-image {
        width: 100%;
        height: 200px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .post-content {
        padding: $spacing-lg;

        .post-meta {
          display: flex;
          gap: $spacing-md;
          margin-bottom: $spacing-sm;
          font-size: 14px;
          color: $text-secondary;

          .category {
            font-weight: 600;
          }
        }

        h3 {
          font-family: $font-family-heading;
          font-size: $font-size-h3;
          font-weight: 600;
          line-height: $line-height-heading;
          margin-bottom: $spacing-sm;
          color: $text-color;
        }

        p {
          color: $text-secondary;
          margin-bottom: $spacing-md;
          line-height: $line-height-base;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: $spacing-xs;
          color: $text-color;
          text-decoration: none;
          font-weight: 600;
          transition: $transition-base;

          .arrow {
            transition: transform 0.2s ease;
          }

          &:hover {
            color: $text-secondary;
            .arrow {
              transform: translateX(4px);
            }
          }
        }
      }
    }
  }

  .loading {
    text-align: center;
    padding: $spacing-xl;
    color: $text-secondary;
  }
}
</style> 