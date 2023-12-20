<template>
    <div>
        <footer class="footer center">
        <div class="footer__logo">
            <a href="#">
                <div class="logo-container"
                @click="$router.push({ path: '/'})">
                <img class="footer__logo-img" src="../assets/images/Logo.png" alt="logo">
                <h2 class="footer__logo-text">Interno</h2>
            </div>
            </a>
            <h2 class="footer__text">It is a long established fact that a reader will be distracted lookings.</h2>
            <div class="icons">
                <a href="#">
                    <img class="icons__item" src="../assets/images/tw.png" alt="">
                </a>
                <a href="#">
                    <img class="icons__item" src="../assets/images/in.png" alt="">
                </a>
            </div>
        </div>
        <div class="footer__pages">
            <h2 class="footer__title">Pages</h2>
            <router-link 
                to="/IndexPage">
                    <a class="footer__text"
                        >Home
                    </a>
            </router-link>
            <router-link 
                to="/ProjectPage">
                    <a class="footer__text"
                        >Project
                    </a>
            </router-link>
            <router-link 
                to="/BlogPage">
                    <a class="footer__text"
                        >Blog
                    </a>
            </router-link>
        </div>
        <div class="footer__none"></div>
        <div class="footer__contacts">
            <h2 class="footer__title">Contacts</h2>
            <h2 class="footer__text">55 East Birchwood Ave. Brooklyn, New York 11201 
                </h2>
            <h2 class="footer__text">contact@interno.com</h2>
            <h2 class="footer__text">(123) 456 - 7890</h2>
        </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'FooterBlock',
};
</script>

<style lang="scss" scoped>

.footer {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 135px;
    margin-top: 250px;

    &__logo {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        flex-direction: column;
        justify-content: flex-start;
    }
    &__logo-img {
        width: 34px;
        height: 34px;
    }
    &__logo-text {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;   
    }
    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 300%; 
        letter-spacing: 0.22px;
    }
    &__pages, &__contacts, &__logo {
        display: flex;
        justify-content: start;
        gap: 10px;
        flex-direction: column;
    }
}
.icons {
    display: flex;
    justify-content: start;
    gap: 54px;
    margin-top: 30px;
    
    &__item {
        width: 30px;
    }
}
.logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>