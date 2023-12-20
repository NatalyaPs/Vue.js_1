<template>
    <div>
        <HeaderBlock/>
        <main>
            <TitleBlock
                :title="title"
                :subtitle="subtitle"
                :img="img"/>
            <section class="latest_post center">
                <div class="article-heading">Latest Post</div>
                <div class="latest_post__content">
                    <img class="latest_post__img" src= "../../public/images/Photo_12.png" alt="picture">
                    <div class="blog__subcontent">
                        <p class="blog__text">Low Cost Latest Invented Interior Designing Ideas</p>
                        <div class="latest_post__info">
                            <p class="latest_post__text">
                                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                            </p>
                            <p class="latest_post__text">
                                Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                            </p>
                            <div class="blog__date">
                                    <h3 class="blog__date-title">26 December, 2022  </h3>
                                <a href="#"
                                    @click="$router.push({ path: '/BlogDetails'})">
                                    <svg class="blog__button" width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="blog center">
                <a class="article-heading"
                @click="$router.push({ path: '/BlogDetails'})">Articles & News</a>
                <div id="blog" class="blog__items center">
                        <div v-for="card in currentProductList" :key="card.id" class="blog__item">
                            <div class="blog__content">
                                <div class="tag">
                                    <h3 class="tag__text">{{ card.tag }}</h3>
                                </div>
                                <img class="blog__img" :src= "card.img" alt="picture">
                                <div class="blog__subcontent">
                                    <div class="blog__text">{{ card.text }}</div>
                                    <div class="blog__date">
                                            <h3 class="blog__date-title">{{ card.date }} </h3>
                                        <a href="#"
                                        @click="$router.push({ path: '/BlogDetails'})">
                                            <svg class="blog__button" width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC"/>
                                                <path d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
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
            </section>
        </main>
        <FooterBlock/>
    </div>
</template>

<script>
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
// import PaginationBlock from '@/components/PaginationBlock.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'BlogPage',
    data: function() {
        return {
            title: 'Articles & News',
            subtitle: 'Home / Blog',
            img: "../images/Photo_11.png",
            currentPage: 1,
            itemsPerPage: 3,
        };
    },
    computed: {
        ...mapGetters(['allBlogCards']),
        currentProductList() {
                const {currentPage, itemsPerPage} = this;
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                return this.allBlogCards.slice(startIndex, endIndex)
        },
    },
    watch: {
        $route(to, from) {
            const page = this.$route.params.page;
            if (page) this.currentPage = +page;
            console.log(to, from);
        }
    },
    mounted() {
        console.log(this.$route);
    },
    methods: {},
    components: { 
        HeaderBlock, 
        FooterBlock, 
        TitleBlock, 
        // PaginationBlock 
    }
};
</script>

<style lang="scss" scoped>

.latest_post {
&__text {
    margin-bottom: 25px;
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    letter-spacing: 0.22px;
    }

    &__img {
        border-radius: 50px;
    }
    &__info {
        display: contents;
    }

    &__content {
        margin-bottom: 156px;
        display: flex;
        gap: 65px;
        padding: 33px;
        margin-top: 33px;
    }
}
.article-heading {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; 
    letter-spacing: 1px;  
}
.blog {
    margin-bottom: 252px;

    &__items {
        display: flex;
        justify-content: center;
        gap: 27px;
        flex-wrap: wrap;
        margin-top: 30px;
    }
    
    &__item {
        display: inline-flex;
        padding: 21px;
        align-items: flex-start;
        gap: 10px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        position: relative;
        width: 337px;
    }
    
    &__item:hover {
        background-color: #F4F0EC;
    }
    
    &__item:hover circle {
        fill: white;
    }
    
    &__img {
        border-radius: 43px 43px 0 0;
    }
    
    &__text {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; 
        letter-spacing: 0.5px;
        margin-top: 21px;
        margin-bottom: 30px;
    }
    
    &__date-title {
        color: #4D5053;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
    
    &__date {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.tag {
    width: 124px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 8px 8px 8px 0px;
    background: #FFF;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 249px;
    left: 51px;
    align-items: center;

    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
}
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