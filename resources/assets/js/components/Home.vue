<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div v-for="post in posts" :key="post.id" class="bs-callout bs-callout-danger">
                        <h4>{{ post.title }}</h4>
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    axios.get('/api/posts').then(response => {
      this.posts = response.data.data
    })
  },
  data() {
    return {
      posts: []
    }
  }
}
</script>
