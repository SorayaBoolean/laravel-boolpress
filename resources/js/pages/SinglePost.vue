<template>
  <div class="article_card" v-if="post">
    <h1>{{post.title}}</h1>
    <p>{{post.content}}</p>
    <p>{{post.category?post.category.name:'No category'}}</p>
  </div>
</template>


<script>
export default {
name: 'SinglePost',
data(){
  return{
    post: null
  }
},
methods:{
    getPost () {
        const slug = this.$route.params.slug;
        
        axios.get('/api/posts/'+ slug)
        .then((response) => {
          
           this.post =response.data.result;
           
        })
        .catch(function(error){  
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