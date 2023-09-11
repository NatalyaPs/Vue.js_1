<template>
    <div>
        <div class="blog-banner-contain">
            <div class="blog-banner-background">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogBanner',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .blog-banner-background {
        background-image: url('../assets/blog_page_banner.png') ;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        // background-size: contain;
        // max-height: 356px;
    }
</style>