<template>
    <div class="banner-background center">
        <section class="banner center">
            <div class="banner__info">
                <h1 class="banner__info_title">Let Your Home 
                    Be Unique</h1>
                <p class="banner__info_text">There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.</p>
                <button class="button">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                </button>
            </div>
    </section>
    </div>
    
</template>

<script>
export default {
    name: 'BannerComp',

    data() {
        return {
            
        }
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .banner-background {
        background-image: url('../assets/banner.png');
        // background-image: './img/banner.png';
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        max-width: 1200px;
        height: 758px;
        border-radius: 30px;
        // position: relative;
        // margin: auto;
    }
    .banner {
        &__info {
            position: absolute;
            top: 27%;  // 208px при h=758px
            left: 7%;  // 52px 
            max-width: 434px;
            max-height: 342px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            // word-wrap: break-word;
            &_title {
                color: $colorTitle;
                font-family: $fontTitle;
                font-size: 65px;
                font-style: normal;
                font-weight: 400;
                line-height: 81.25px;
                padding-bottom: 18px;
            }
            &_text {
                color: $colorText;
                font-family: $fontText;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 33px;
                letter-spacing: 0.22px;
                padding-bottom: 21px;
            }
        }
    }

    .button {
        width: 220px;
        height: 75px;

        display: flex;
        padding: 26px 48px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        gap: 10px;

        border-radius: 18px;
        background: $colorTitle;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);

        color: #FFF;
        text-align: center;
        font-family: $fontText;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 22.5px;
        letter-spacing: 0.36px;
    }

</style>