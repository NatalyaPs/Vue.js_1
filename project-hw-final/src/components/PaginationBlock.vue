<template>
    <div>
        <div id="pages" class="pagination" >
            <router-link  
            v-for="page in 3" 
            :to="`/BlogPage/${page}`" 
            :key="page" 
            class="container">
                <a href="#"
                class="pagination__pages">
                    <svg  width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                </svg>
                <h2 class="pagination__number">{{'0' + page}}</h2>
                </a>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PaginationBlock',
    props: ['trail'],

    data: function() {
        return {
        };
    },
    // watch: {
    //     $route(to, from) {
    //         const page = this.$route.params.page;
    //         if (page) this.currentPage = +page;
    //         console.log(to, from);
    //     }
    // },
    
    // mounted() {
    //     console.log(this.$route);
    // },

};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 78px;
    margin-top: 51px;

    &__pages:hover circle{
        stroke: none;
        fill: #F4F0EC;
    }
    
    &__pages {
        position: absolute;
    }
    
    &__number {
        position: absolute;
        top: 14px;
        right: 18px;
        color: #292F36;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-transform: capitalize;
    }
}

</style>