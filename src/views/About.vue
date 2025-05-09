<template>
  <div class="about">
    <h1>About</h1>
    <div class="content">
      <p>Welcome to my blog! This is a place where I share my thoughts, experiences, and knowledge about various topics.</p>
      <p>Feel free to explore the blog posts and reach out if you have any questions or suggestions.</p>
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .content {
    line-height: 1.8;
    color: #333;

    p {
      margin-bottom: 1.5rem;
    }
  }
}
</style> 