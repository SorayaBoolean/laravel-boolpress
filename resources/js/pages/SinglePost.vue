<template>
  <h1>
    Pagina del single post
  </h1>
</template>

<script>
export default {
name: 'SinglePost',
methods:{
    getPost () {
        const slug = this.$route.params.slug;
        console.log(slug)
    }
},
mounted () {
    this.getPost()
}
}
</script>

<style>

</style>