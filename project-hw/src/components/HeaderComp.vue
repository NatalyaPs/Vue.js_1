<template>
        <header class="header center">
            <nav class="header__left">
                <a class="header__left_main-svg" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
                    </svg></a>
                <a class="header__left_main-text" href="#">Interno</a>
            </nav>
            <nav class="header__rigth">
                <a href="#">Home</a>
                <a href="#">Project</a>
                <a href="#">Blog</a>
            </nav>
        </header>
</template>

<script>
export default {
    name: 'HeaderComp',

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
.header  {
    // margin-top: 53px !important;
    margin-top: 53px !important;
    margin-bottom: 57px;
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    &__left {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        align-items: center;
        &_main-text {
            color: $colorTitle;
            font-family: $fontTitle;
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: 50px;
            width: 200px;
        }
    }
    &__rigth {
        color: $colorTitle;
        text-align: center;
        font-family: $fontText;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        width: 243px;
        display: flex;
        gap: 50px;

    }
}
</style>