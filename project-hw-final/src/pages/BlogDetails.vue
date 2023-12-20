<template>
    <div>
        <HeaderBlock/>
        <main>
            <div class="title">
                <div class="title__img">
                </div>
            </div>
            <div id="app" class="main_container center">
                <article_block>
                    <div class="details-block">
                    <section class="article_block">
                        <div class="heading-block">
                            <h2 class="article-heading">Lets Get Solution for Building Construction Work</h2>
                            <img class="img" src="../../public/images/Photo_14.png" alt="picture">
                                <p class="date">22 December,2022  </p>
                                <p class="project-subtitle">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                                <img class="quote" src="../../public/images/Quotes.png" alt="">
                        </div>
                    <div v-for="(item) in sortedArticles" :key="item.id" class="">
                        <span class="article-heading">{{ item.title }}</span>
                        <img class="img" :src="item.img" alt="picture">
                        <p class="project-subtitle">{{ item.text }}</p>
                    </div>
                </section>
                <div>
                    <h2>Tags</h2>
                    <div class="tags-block">
                        <button 
                            :key="button.id"
                            v-for="(button) in allArticlesTags" 
                            @click="filterByTag(button)" 
                            class="tag-button"> 
                            {{ button.title }}
                        </button>   
                    </div> 
                </div>
            </div>
                </article_block>
            </div>
        </main>
        <FooterBlock/>
    </div>
</template>

<script>
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import { mapGetters } from 'vuex';


export default {
    name: 'BlogDetails',
    computed: {
        ...mapGetters([
            'allArticles', 
            'allArticlesTags'
        ]),
        sortedArticles() {
            if (this.current.length) {
                return this.current
            } else {
                return this.allArticles
            }
        }
    },
    data() {
        return {
            current: [
                ],
        }
    },
    methods: {
        getArticle(button) {
            this.current = this.articles.filter((elem) => elem.tag == button.tag);
        },
        filterByTag(button) {
            this.current = [];
            let vm = this;
            this.allArticles.map(function(item) {
                if(item.tag === button.tag) {
                    vm.current.push(item)
                }
            })
        }
    },

    components: { HeaderBlock, FooterBlock }
};
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
    
    &__img{
        background-image: url("../../public/images/Photo_13.png");
        background-size: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100vw;
        max-width: 100vw;
        height: 30vh;
    }
}

.img {
    border-radius: 8%;
    margin-bottom: 25px;
    margin-top: 35px;
}

.quote {
    margin-top: 35px;
    margin-bottom: 35px;
}
.article-heading {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; 
    letter-spacing: 1px; 
    margin-bottom: 25px; 
}

.article_block {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.date {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
    margin-top: 48px;
    margin-bottom: 48px;
}
.details-block {
    display: flex;
    gap: 52px;
    margin-bottom: 96px;
}

.project-subtitle {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    letter-spacing: 0.22px;
}
.tags-block {
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
    margin-top: 24px;
}

.tag-button {
    display: flex;
    padding: 9px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #F4F0EC;
}

.tag-button:hover {
    background: black;
    color:white
}

</style>