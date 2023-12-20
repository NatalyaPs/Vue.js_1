<template>
    <header class="header center">
        <a href="#">
            <div class="logo"
            @click="$router.push({ path: '/'})">
            <img class="logo__img" src="../assets/images/Logo.png" alt="logo">
            <h2 class="logo__text">Interno</h2>
        </div>
        </a>
        <div class="menubar">
            <div class="menu">
                <router-link 
                    to="/IndexPage">
                        <a class="menu__text"
                            >Home
                        </a>
                </router-link>
                <router-link 
                    to="/ProjectPage">
                        <a class="menu__text"
                            >Project
                        </a>
                </router-link>
                <router-link 
                    to="/BlogPage">
                        <a class="menu__text"
                            >Blog
                        </a>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'HeaderBlock',
}
</script>

<style lang="scss"  scoped>

.header {
    min-height: 50px;
    display: flex;
    flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
gap: 399px;
margin-top: 50px;
margin-bottom: 70px;}.logo {
display: flex;
align-items: center;
gap: 10px;

&__img {
    width: 34px;
    height: 34px;
}
&__text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;   
    }
}


.menubar {
    display: flex;
    justify-content: flex-end;
}
.menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 20px;
    color: #292F36;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; 

    &__text {
        color: #292F36;
        font-family: Jost;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; 
    }
}
</style>