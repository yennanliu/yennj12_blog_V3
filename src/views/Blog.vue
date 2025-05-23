<template>
  <div class="blog">
    <div class="container">
      <header class="page-header">
        <h1>Articles</h1>
        <p class="subtitle">Explore our latest engineering insights and technical deep-dives</p>
      </header>

      <div class="actions-bar">
        <button @click="downloadPosts" class="download-button">Download All Posts (JSON)</button>
      </div>

      <div class="filters">
        <div class="search">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search articles..."
            @input="filterPosts"
          >
        </div>
        <div class="categories">
          <button 
            v-for="category in categories" 
            :key="category"
            :class="{ active: selectedCategory === category }"
            @click="filterByCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="posts-grid" v-if="!loading">
        <article v-for="post in filteredPosts" :key="post.id" class="post-card">
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BlogPage',
  data() {
    return {
      searchQuery: '',
      selectedCategory: null,
      categories: ['All', 'Engineering', 'Infrastructure', 'Security', 'Data Science']
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts,
      loading: state => state.loading
    }),
    filteredPosts() {
      let filtered = this.posts

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
        )
      }

      if (this.selectedCategory && this.selectedCategory !== 'All') {
        filtered = filtered.filter(post => post.category === this.selectedCategory)
      }

      return filtered
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    filterPosts() {
      // Debounce search if needed
    },
    filterByCategory(category) {
      this.selectedCategory = category
    },
    downloadPosts() {
      const postsToDownload = this.posts; // Get posts from Vuex state
      if (!postsToDownload || postsToDownload.length === 0) {
        alert('No posts to download.');
        return;
      }

      const jsonData = JSON.stringify(postsToDownload, null, 2); // Pretty print JSON
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'blog-posts.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      alert('Posts downloaded as blog-posts.json');
    }
  },
  created() {
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.blog {
  padding: $spacing-xxl 0;

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
      color: $text-secondary;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .actions-bar {
    margin-bottom: $spacing-xl;
    display: flex;
    justify-content: flex-end;

    .download-button {
      padding: $spacing-sm $spacing-md;
      background-color: $primary-color; // Or another suitable color
      color: white;
      border: none;
      border-radius: 4px;
      font-size: $font-size-base;
      cursor: pointer;
      transition: $transition-base;

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }

  .filters {
    margin-bottom: $spacing-xl;

    .search {
      margin-bottom: $spacing-lg;

      input {
        width: 100%;
        max-width: 500px;
        padding: $spacing-sm $spacing-md;
        border: $border-width solid $border-color;
        font-size: $font-size-base;
        transition: $transition-base;

        &:focus {
          outline: none;
          border-color: $text-color;
        }
      }
    }

    .categories {
      display: flex;
      gap: $spacing-sm;
      flex-wrap: wrap;

      button {
        padding: $spacing-xs $spacing-md;
        border: $border-width solid $border-color;
        background: none;
        font-size: $font-size-base;
        color: $text-color;
        cursor: pointer;
        transition: $transition-base;

        &:hover {
          border-color: $text-color;
        }

        &.active {
          background-color: $text-color;
          color: $background-color;
          border-color: $text-color;
        }
      }
    }
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

  .loading {
    text-align: center;
    padding: $spacing-xl;
    color: $text-secondary;
  }
}
</style> 