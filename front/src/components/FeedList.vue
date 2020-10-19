<template>
    <section class="feed-list">
        <comment-prev v-for="comment in comments" :key="comment._id" :comment="comment"/>
    </section>
</template>hey

<script>
import CommentPrev from './commentPrev.vue'
    export default {
    components: { CommentPrev },
        data() {
            return {
                
            }
        },
        created() {
            
        },
        props: ["comments"]
        
    }
</script>