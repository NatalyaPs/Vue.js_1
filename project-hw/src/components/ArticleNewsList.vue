<template> 
    <div class="articles center">
        <ArticleNewsItem
            v-for="articleItem in listArticleNewsItems"
            :key="articleItem.id"
            :articleItem="articleItem"
        />
    </div>
</template>

<script>
import ArticleNewsItem from '@/components/ArticleNewsItem.vue';

export default {
    name: 'ArticleNewsList',
    components: {
        ArticleNewsItem,
    },

    data() {
        return {
            listArticleNewsItems: [
                {
                    id: 1,
                    img: './img/article_1.png',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    tag: 'Kitchan Design',
                    svg: './img/svg_project.svg',
                },
                {
                    id: 2,
                    img: './img/article_2.png',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '26 December,2022',
                    tag: 'Living Design',
                    svg: './img/svg_project.svg',
                },
                {
                    id: 3,
                    img: './img/article_3.png',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    tag: 'Interior Design',
                    svg: './img/svg_project.svg',
                },
                {
                    id: 4,
                    img: './img/article_4.png',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    tag: 'Kitchan Design',
                    svg: './img/svg_project.svg',
                },
                {
                    id: 5,
                    img: './img/article_5.png',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                    tag: 'Living Design',
                    svg: './img/svg_project.svg',
                },
                {
                    id: 6,
                    img: './img/article_6.png',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    tag: 'Interior Design',
                    svg: './img/svg_project.svg',
                },
            ],
        };
    },

    computed: {
        showThreeArticles: function(){
                return this.ArticleNewsList.slice(1, 3);
            }
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.articles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 27px;
    margin-bottom: 50px;
}
</style>