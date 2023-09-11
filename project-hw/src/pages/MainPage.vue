<template>
    <div>
        <HeaderComp/>
        <BannerComp/>
        <OurProjectList/>
        <CounterComp/>
        <FooterComp/>
    </div>
</template>

<script>
import BannerComp from '@/components/BannerComp.vue';
import HeaderComp from '@/components/HeaderComp.vue'
import OurProjectList from '@/components/OurProjectList.vue';
import CounterComp from '@/components/CounterComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
    name: 'MainPage',
    components: {
        HeaderComp,
        BannerComp,
        OurProjectList,
        CounterComp,
        FooterComp
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>