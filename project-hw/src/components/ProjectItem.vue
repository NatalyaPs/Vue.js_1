<template>
    <div class="project-card">
        <!--   СМ  СТИЛИ      <img :src="projectItem.img" :class="$style.project-card__img" alt="img_project" > -->
        <img :src="projectItem.img" alt="img_project" class="project-card__img">
        <div class="project-card__content">
            <h4 class="project-card__content_title">{{ projectItem.title }}</h4>
            <p class="project-card__content_text">{{ projectItem.text }}</p>
        </div>
        <img :src="projectItem.svg" alt="svg" class="project-card__svg">
        <!-- <img src="img/svg_project.svg" alt="svg"> -->
        <!-- <svg class="project-card__svg" 
            xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> -->
    </div>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: ['projectItem'],

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
    .project-card {
        position: relative;
        &__content {
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-top: 24px;
            margin-bottom: 6px;
            &_title {
                color: $colorTitle;
                font-family: $fontTitle;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%; /* 31.25px */
                letter-spacing: 0.5px;
                margin-top: 24px;
            }
            &_text {
                color: $colorText;
                font-family: $fontText;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 33px */
                letter-spacing: 0.22px;
            }
        }
        &__svg {
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
</style>