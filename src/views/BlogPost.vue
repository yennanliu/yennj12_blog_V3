<template>
  <div class="blog-post">
    <div v-if="loading" class="loading">
      Loading post...
    </div>
    <div v-else-if="post" class="post-content">
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <span class="date">{{ formatDate(post.date) }}</span>
      </div>
      <div class="post-body" v-html="post.content"></div>
    </div>
    <div v-else class="error">
      Post not found
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BlogPost',
  computed: {
    ...mapState({
      post: state => state.currentPost,
      loading: state => state.loading
    })
  },
  methods: {
    ...mapActions(['fetchPost']),
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  created() {
    this.fetchPost(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  .post-content {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .post-meta {
      color: #666;
      margin-bottom: 2rem;
    }

    .post-body {
      line-height: 1.8;
      color: #333;

      p {
        margin-bottom: 1.5rem;
      }
    }
  }

  .loading, .error {
    text-align: center;
    padding: 2rem;
    color: #666;
  }
}
</style> 