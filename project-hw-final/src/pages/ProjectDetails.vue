<template>
    <div>
        <HeaderBlock/>
        <div class="title">
            <div class="title__img">
            </div>
        </div>
        <main class="center">
            <section class="text-container">
                <div class="text-block">
                    <h2 class="text-block__title">Minimal Look Bedrooms</h2>
                    <p class="text-block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.


                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
                </div>
            </section>
            <section class="slider">
                <ProjectSlider
                    :slider_data="allSliderItems"/>
            </section>
        </main>
        <FooterBlock/>
    </div>
</template>

<script>
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import ProjectSlider from '@/components/ProjectSlider.vue';
import { mapGetters } from 'vuex';


export default {
    name: 'ProjectDetails',
    computed: {
        ...mapGetters(['allSliderItems']),
    },
    components: { 
        HeaderBlock, 
        FooterBlock, 
        ProjectSlider }
};
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    justify-content: center;
    
    &__img{
        background-image: url("../../public/images/ProjectDetails.jpg");
        background-size: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100vw;
        max-width: 100vw;
        height: 30vh;
    }
}
.text-container {
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 120px;
}
.text-block {
    width: 660px;
    height: 360px;

    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 20px;
    }

    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
}

.slider {
text-align: center;
}
</style>