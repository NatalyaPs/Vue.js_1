<template>
    <div class="article-item">
        <img :src="articleItem.img" alt="image article" class="article-item__img">
        <div class="article-item__content">
            <h3 class="article-item__title">{{ articleItem.title }}</h3>
            <p class="article-item__date">{{ articleItem.date }}</p>
        </div>
        <img class="article-item__svg" :src="articleItem.svg" alt="svg">
        <div class="article-item__tag">{{ articleItem.tag }}</div>
    </div>
</template>

<script>
export default {
    name: 'ArticleNewsItem',
    props: ['articleItem'],

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.article-item {
    width: 382px;
    height: 521px;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    position: relative;
    &__img {
        border-top-right-radius: 45px;
        border-top-left-radius: 45px;
        margin-bottom: 20px;
    }
    &__title {
        color: $colorTitle;
        font-family: $fontTitle;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
        margin-bottom: 40px;
    }
    &__date{
        color: $colorText;
        font-family: $fontText;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
    &__tag {
        color: $colorText;
        font-family: $fontText;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
        width: 124px;
        height: 41px;
        border-radius: 8px 8px 8px 0px;
        background: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 41px;
        bottom: 231px;
        z-index: 10;
    }
    &__svg {
        position: absolute;
        right: 21px;
        bottom: 30px;
        width: 52px;
        height: 52px;
    }
}
</style>