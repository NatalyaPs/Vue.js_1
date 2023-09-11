<template>
    <section class="center">
        <div class="article-main-page">
            <h2 class="article-main-page__title">Articles & News</h2>
            <p class="article-main-page__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div >
            <!-- <div id="posts" v-for="post in posts.slice(0, 5)"></div> -->
            <ArticleNewsList v-if="showThreeArticles"/>
            <!-- <ArticleNewsList v-if="articleItem.id === 1 || articleItem.id === 2 || articleItem.id === 3">
                <ArticleNewsItem
                v-for="articleItem in listArticleNewsItems"
                :key="articleItem.id"
                :articleItem="articleItem"
                />
            </ArticleNewsList>
            
        /> -->
        </div>
    </section>
</template>

<script>
import ArticleNewsList from './ArticleNewsList.vue';
// import ArticleNewsItem from './ArticleNewsItem.vue';

export default {
    name: 'ArticlesNewsMainPage',
    props: ['ArticleNewsList', 'articleItem', 'listArticleNewsItems'],
    // props: {
    //     listArticleNewsItems: {
    //         type: Array,
    //         defailt: function(){
    //             return this.ArticleNewsList.slice(0, 3);
    //         }
    //     }
    // },
    components: { 
        ArticleNewsList,
        // ArticleNewsItem 
    },

    computed: {
        showThreeArticles: function(){
                return this.ArticleNewsList.slice(1, 3);
            }
    },

    // mounted:function() {
    //     this.showThreeArticles();
    //     // this.ArticleNewsList.slice(1, 3);
    // },

    //----------------------
    // beforeMount() {
    //     this.showThreeArticles;
    // },

    // computed: {
        // showThreeArticles() {
        //     // return this.ArticleNewsList = this.ArticleNewsList.slice(1,3);
        // }
    // },

    data() {
        return {
            
        };
    },


    methods: {},

};
</script>

<style lang="scss" scoped>
.article-main-page {
    width: 811px;
    height: 141px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 auto 52px;
    &__title {
        color: $colorTitle;
        text-align: center;
        font-family: $fontTitle;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
    }
    &__text {
        color: $colorText;
        text-align: center;
        font-family: $fontText;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
}
</style>