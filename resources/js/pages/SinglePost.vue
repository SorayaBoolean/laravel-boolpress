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
        })
        .catch(function(error){
          console.log('Si è verificato un errore');
          console.log(error);
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