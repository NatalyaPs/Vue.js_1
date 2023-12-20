<template>
    <div class="slider-item">
        <img :src="require('../assets/images/' + item_data.img)" alt="">
    </div>
</template>

<script>
export default {
    name: 'SliderItem',
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    },
};
</script>

<style lang="scss" scoped>
img {
    border-radius: 10%;
    position: relative;
}
</style>