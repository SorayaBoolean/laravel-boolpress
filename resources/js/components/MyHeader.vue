<template>
   <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Boolpress</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
                    <router-link class="nav-link active" aria-current="page" :to="{name:item.routeName}">{{item.label}}</router-link>
                    </li>  
                </ul> 
            </div>
            </div>
        </nav>
   </header>
</template>

<script>

    export default {
        name: 'MyHeader',
        data (){
            return {
                menuItems: [
                    {
                        label:'Home',
                        routeName:'home'
                    },
                    {
                        label:'Blog',
                        routeName:'blog'
                    },
                    {
                        label:'About Us',
                        routeName:'about-us'
                    },
                    {
                        label:'Contacts',
                        routeName:'contact'
                    }
                ]
                
            }
        

        }
       

        } 
            
</script>

<style scoped lang="scss">

</style>
