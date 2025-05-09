<template>
  <div class="blog-post">
    <div class="container">
      <article v-if="post" class="post-content">
        <header class="post-header">
          <div class="post-meta">
            <span class="category">{{ post.category }}</span>
            <span class="date">{{ formatDate(post.date) }}</span>
          </div>
          <h1>{{ post.title }}</h1>
          <p class="excerpt">{{ post.excerpt }}</p>
          <div class="author" v-if="post.author">
            <img :src="post.author.avatar" :alt="post.author.name" class="avatar">
            <div class="author-info">
              <span class="name">{{ post.author.name }}</span>
              <span class="role">{{ post.author.role }}</span>
            </div>
          </div>
        </header>

        <div class="post-image" v-if="post.image">
          <img :src="post.image" :alt="post.title">
        </div>

        <div class="post-body" v-html="post.content"></div>

        <footer class="post-footer">
          <div class="tags" v-if="post.tags && post.tags.length">
            <span v-for="tag in post.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
          <div class="share">
            <button class="share-button">
              Share Article
              <span class="icon">↗</span>
            </button>
          </div>
        </footer>
      </article>
      <div v-else-if="loading" class="loading">
        Loading article...
      </div>
      <div v-else class="error">
        Article not found
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BlogPostPage',
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
  padding: $spacing-xxl 0;

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .post-content {
    .post-header {
      text-align: center;
      margin-bottom: $spacing-xxl;

      .post-meta {
        display: flex;
        justify-content: center;
        gap: $spacing-md;
        margin-bottom: $spacing-lg;
        font-size: 14px;
        color: $text-secondary;

        .category {
          font-weight: 600;
        }
      }

      h1 {
        font-family: $font-family-heading;
        font-size: $font-size-h1;
        font-weight: 700;
        line-height: $line-height-heading;
        margin-bottom: $spacing-lg;
        color: $text-color;
      }

      .excerpt {
        font-size: $font-size-h4;
        line-height: $line-height-base;
        color: $text-secondary;
        max-width: 600px;
        margin: 0 auto $spacing-xl;
      }

      .author {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: $spacing-md;

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-info {
          text-align: left;

          .name {
            display: block;
            font-weight: 600;
            color: $text-color;
          }

          .role {
            font-size: 14px;
            color: $text-secondary;
          }
        }
      }
    }

    .post-image {
      margin: 0 -#{$spacing-xl} $spacing-xxl;
      
      img {
        width: 100%;
        height: auto;
        max-height: 500px;
        object-fit: cover;
      }
    }

    .post-body {
      font-size: $font-size-base;
      line-height: $line-height-base;
      color: $text-color;

      :deep(h2) {
        font-family: $font-family-heading;
        font-size: $font-size-h2;
        font-weight: 600;
        margin: $spacing-xxl 0 $spacing-lg;
      }

      :deep(h3) {
        font-family: $font-family-heading;
        font-size: $font-size-h3;
        font-weight: 600;
        margin: $spacing-xl 0 $spacing-md;
      }

      :deep(p) {
        margin-bottom: $spacing-lg;
      }

      :deep(ul), :deep(ol) {
        margin-bottom: $spacing-lg;
        padding-left: $spacing-xl;

        li {
          margin-bottom: $spacing-sm;
        }
      }

      :deep(code) {
        background: $background-color;
        padding: $spacing-xs $spacing-sm;
        border-radius: $border-radius;
        font-family: $font-family-mono;
      }

      :deep(pre) {
        background: $background-color;
        padding: $spacing-lg;
        border-radius: $border-radius;
        margin: $spacing-lg 0;
        overflow-x: auto;

        code {
          background: none;
          padding: 0;
        }
      }
    }

    .post-footer {
      margin-top: $spacing-xxl;
      padding-top: $spacing-xl;
      border-top: $border-width solid $border-color;

      .tags {
        display: flex;
        gap: $spacing-sm;
        flex-wrap: wrap;
        margin-bottom: $spacing-lg;

        .tag {
          padding: $spacing-xs $spacing-md;
          background: $background-color;
          border: $border-width solid $border-color;
          border-radius: $border-radius;
          font-size: 14px;
          color: $text-secondary;
        }
      }

      .share {
        text-align: center;

        .share-button {
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

          &:hover {
            background: $text-secondary;
          }

          .icon {
            font-size: 18px;
          }
        }
      }
    }
  }

  .loading, .error {
    text-align: center;
    padding: $spacing-xxl;
    color: $text-secondary;
  }
}
</style> 