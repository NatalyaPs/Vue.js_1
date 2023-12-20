<template>
    <div>
        <div class="title">
        <img class="title__img" :src="img" alt="picture">
        <div class="text-block">
            <span class="text-block__heading">{{ title }}</span>
            <span class="text-block__subheading">{{ subtitle }}</span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleBlock',
    props: ['img', 'title', 'subtitle'],
};

</script>

<style lang="scss" scoped>

.title {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 200px;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    &__img{
        background-size: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100vw;
        height: 30vh;
    }
}
.text-block {
    width: 500px;
    height: 180px;
    background-color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 43px 43px 0 0;
    
    &__heading {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;/* 62.5px */
        letter-spacing: 1px;  
    }
    
    &__subheading {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }
}

</style>