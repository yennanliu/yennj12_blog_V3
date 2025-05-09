<template>
  <div class="blog">
    <h1>Blog Posts</h1>
    <div class="posts-grid" v-if="!loading">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <router-link :to="'/blog/' + post.id" class="read-more">
          Read More
        </router-link>
      </div>
    </div>
    <div v-else class="loading">
      Loading posts...
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BlogPage',
  computed: {
    ...mapState({
      posts: state => state.posts,
      loading: state => state.loading
    })
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  created() {
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.blog {
  h1 {
    margin-bottom: 2rem;
    text-align: center;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .post-card {
    background: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      margin-bottom: 1rem;
      color: #333;
    }

    p {
      color: #666;
      margin-bottom: 1rem;
    }

    .read-more {
      color: #007bff;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .loading {
    text-align: center;
    padding: 2rem;
    color: #666;
  }
}
</style> 