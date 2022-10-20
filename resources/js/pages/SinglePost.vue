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
        
        axios.get('/api/posts'+ slug)
        .then((response) => {
            console.log(response)
        });
    }
},
mounted () {
    this.getPost()
}
}
</script>

<style>

</style>