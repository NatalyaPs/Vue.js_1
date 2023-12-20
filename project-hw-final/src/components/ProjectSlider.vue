<template>
    <div>
        <div class="wrapper">
            <div class="slider"
            :style="{'margin-left': '-' + (100 * (currentSlideIndex)) + '%'}">
                <SliderItem
                    v-for="item in slider_data" 
                    :key="item.id"
                    :item_data="item"
                />
            </div>
            <div class="zoom">
                <img src="../../public/images/zoom_icon.png" alt="">
            </div>
        </div>
        <div class="button-block">
            <button @click="prevSlide"></button>
            <button @click="nextSlide"></button>
        </div>
    </div>
</template>

<script>
import SliderItem from './SliderItem.vue';

export default {
    name: 'ProjectSlider',
    props: {
        slider_data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentSlideIndex: 0
        };
    },
    methods: {
        prevSlide() {
            if(this.currentSlideIndex > 0) {
            this.currentSlideIndex--
            }
        },
        nextSlide() {
            if(this.currentSlideIndex >= this.slider_data.length - 1) {
                this.currentSlideIndex = 0
            } else
            this.currentSlideIndex++
        }
    },
    components: { 
        SliderItem }
};
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 1300px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}
.slider {
    display: flex;
    transition: all ease .3s;
}

.zoom {
    position: absolute;
    z-index: 5;
    top: 320px;
    left: 510px;
}
.zoom:hover {
    scale: 1.05;
}
.button-block {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: center;
}
button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
button:active {
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75) inset;
}
</style>