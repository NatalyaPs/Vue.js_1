<template>
    <section class="counter center">
        <div class="counters ">
            <div class="count">
                <div class="count__value">12</div>
                <div class="count__name">Years Of Experiance</div>
            </div>
            <div class="count">
                <div class="count__value">85</div>
                <div class="count__name">Success Project</div>
            </div>
            <div class="count">
                <div class="count__value">15</div>
                <div class="count__name">Active Project</div>
            </div>
            <div class="count">
                <div class="count__value">95</div>
                <div class="count__name">Happy CUstomers</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CounterComp',

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
.counter {
    height: 457px;
    background-color: $colorSite;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom: 96px;
}

.counters {
    height: 155px;
    display: flex;
    gap: 76px;
    :not(:last-child) {
        border-right: 1px solid $colorCount;
    }
}

.count {
    width: 246px; // 192 +54 до полоски справа
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 16px;
    &__value {
        color: $colorCount;
        font-family: $fontTitle;
        font-size: 85px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 106.25px */
        letter-spacing: 1.7px;
    }
    &__name {
        color: $colorText;
        font-family: $fontText;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
}
</style>