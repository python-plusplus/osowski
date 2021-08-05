<template>
<div>
    <BlogCard v-for="(post, index) in SampleBlogCards" :key="index" />
    <h1>Blog</h1>   
</div>    
</template>

<script>
import BlogCard from '../components/BlogCard.vue'; 

export default{
    name: 'Blog',
    components: { BlogCard },
    data() {
        return{
            sampleBlogCards: []
        } 
    }
}
</script>
