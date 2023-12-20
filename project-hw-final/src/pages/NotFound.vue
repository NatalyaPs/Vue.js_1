<template>
    <div>
        <HeaderBlock/>
        <main>
            <div class="container center">
                <div class="info">
                    <h class="info__title">404</h>
                    <p class="info__text">
                        We are sorry, but the page you requested was not found
                    </p>
                    <a class="info__button"
                        @click="$router.push({ path: '/'})">
                        <a class="info__button-text" href="#">Back To Home</a>
                        <img src="../../public/images/Vector.png" alt="">
                    </a>
                </div>
                <img class="img" src="../../public/images/Not_found_foto.png" alt="not_found-photo">
            </div>
        </main>
    </div>
</template>
<script>
import HeaderBlock from '@/components/HeaderBlock.vue';

export default {
    name: 'IndexPage',
    components: { HeaderBlock }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    gap: 140px;
    align-items: center;
}

.img {
    border-radius: 0 0 0 380px;
}
.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
    min-width: 490px;

    &__title {
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; 
    }

    &__text {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 52.5px */
        letter-spacing: 0.35px;
        margin-bottom: 45px;
        margin-top: -35px
    }

    &__button {
        width: 220px;
        height: 75px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 7px;
        border-radius: 18px;
        background: #292F36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    }

    &__button-text {
        color: #FFF;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%; 
        letter-spacing: 0.36px;
    }
}
</style>