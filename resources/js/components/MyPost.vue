<template>
  <div class="card col-12 mb-5" v-for="(post, index) in posts" :key="index">
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{truncateText(post.content, 10)}}</p>
            <p class="card-text">{{post.category?post.category.name:'-'}}</p>
            <a href="#" class="btn btn-primary">Read post...</a>
        </div>
  </div>
</template>

<script>
export default {
name: 'MyPost'
}
</script>

<style>

</style>