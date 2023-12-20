<template>
    <div>
        <HeaderBlock/>
        <main>
            <TitleBlock
                :title="title"
                :subtitle="subtitle"
                :img="img"/>
            <div class="button__container">
                <div class="button__block center">
                    <button 
                        :key="button.id"
                        v-for="(button) in allTags" 
                        @click="filterByTag(button)"
                        class="button">
                        {{ button.title }}
                    </button>
                </div>
            </div>
            <div class="card-block center">
                <CardsBlock
                    v-for="(card) in currentProductList" 
                    :key="card.id"
                    :cardTitle="cardTitle"
                    :cardSubtitle="cardSubtitle"
                    :cardImg="cardImg"
                    :tag="tag"
                    :card="card"
                />
            </div>
            <div id="pages" class="pagination" >
                <router-link  
                v-for="page in 3" 
                :to="`/ProjectPage/${page}`" 
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
        </main>
        <FooterBlock/>
    </div>
</template>

<script>
import CardsBlock from '@/components/CardsBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
// import PaginationBlock from '@/components/PaginationBlock.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'ProjectPage',
    data() {
        return {
            title: 'Our Project',
            subtitle: 'Home / Project',
            img: '../images/Photo_16.png',
            filteredCards: [], 
            currentPage: 1,
            itemsPerPage: 4,
        }
    },
    methods: {
        filterByTag(button) {
            this.filteredCards = [];
            let vm = this;
            this.allCards.map(function(item) {
                if(item.tag === button.tag) {
                    vm.filteredCards.push(item)
                }
            })
        }
    },
    computed: {
        ...mapGetters([
            'allCards', 
            'allTags'
        ]),
        sortedCards() {
            if (this.filteredCards.length) {
                return this.filteredCards
            } else {
                return this.allCards
            }
        },
        currentProductList() {
            const {currentPage, itemsPerPage} = this;
            const startIndex = (currentPage - 1) * this.sortedCards.length / 3;
            const endIndex = startIndex + itemsPerPage;
            return this.sortedCards.slice(startIndex, endIndex)
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
    components: {
    HeaderBlock,
    FooterBlock,
    TitleBlock,
    CardsBlock,
    // CardBlock,

    // PaginationBlock
    }
};
</script>

<style lang="scss" scoped>

.card-block {
    gap: 100px;
    column-count: 2;
}

.button {
    height: 75px;
    width: 220px;
    border-radius: 18px;
    background: #FFF;
    border-color: #CDA274;
    font-size: 18px;
    
    &__container {
        display: flex;
        justify-content: center;
    }
    &__block {
        display: flex;
        width: 880px;
        justify-content: center;
        align-items: center;
        margin-bottom: 61px;
    }
}
button:hover {
    background: #CDA274;
    color: white
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