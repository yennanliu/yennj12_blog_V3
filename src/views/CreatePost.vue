<template>
  <div class="create-post">
    <h1>Create New Post</h1>
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="post.title" required>
      </div>
      <div class="form-group">
        <label for="content">Content (Markdown)</label>
        <textarea id="content" v-model="post.content" rows="10" required></textarea>
      </div>
      <button type="submit">Publish Post</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreatePost',
  data() {
    return {
      post: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    ...mapActions(['addPost']),
    async submitPost() {
      if (!this.post.title || !this.post.content) {
        alert('Title and content are required.');
        return;
      }

      const postData = {
        title: this.post.title,
        content: this.post.content,
        slug: this.post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
        category: 'General',
        excerpt: this.post.content.substring(0, 100) + '...'
      };

      try {
        await this.addPost(postData);
        alert('Post published!');
        this.post.title = '';
        this.post.content = '';
        this.$router.push('/blog');
      } catch (error) {
        console.error('Error publishing post:', error);
        alert('Failed to publish post. See console for details.');
      }
    }
  }
};
</script>

<style scoped lang="scss">
.create-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box; /* Ensures padding doesn't affect overall width */
  }

  textarea {
    resize: vertical; /* Allow vertical resizing */
  }
}

button[type="submit"] {
  background-color: $primary-color; // Using a variable from variables.scss
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
</style> 