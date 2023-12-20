<template>
    <div>
        <HeaderBlock/>
        <main>
            <section class="banner center">
                <img class="banner__img" src="../../public/images/Banner.png" alt="banner">
                <div class="intro">
                <h2 class="intro__title">Let Your Home 
                    Be Unique</h2>
                <h2 class="intro__subtitle">There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.</h2>
                <a class="intro__button"
                    @click="$router.push({ path: '/ProjectPage'})">
                    <a class="intro__button-text" href="#">Get Started</a>
                    <img src="../../public/images/Vector.png" alt="">
                </a>
                </div>
            </section>
            <section class="project center">
                <div class="heading ">
                    <div class="heading__title">
                        Follow Our Projects
                    </div>
                    <div class="heading__subtitle">
                        It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.
                    </div>
                </div>
                <div class="project__block">
                    <div class="kitchen">
                        <img class="project__top-left" src="../../public/images/Photo_1.png" alt="">
                        <div class="project__text">
                            <div class="project__subcontent">
                                <h3 class="project__title">Modern Kitchen</h3>
                                <h3 class="project__subtitle">Decor / Artchitecture</h3>
                            </div>
                            <a href="#"
                                @click="$router.push({ path: '/ProjectPage'})">
                                <svg class="button" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="kitchen">
                        <img class="project__top-right" src="../../public/images/Photo_2.png" alt="">
                        <div class="project__text">
                            <div class="project__subcontent">
                                <h3 class="project__title">Modern Kitchen</h3>
                                <h3 class="project__subtitle">Decor / Artchitecture</h3>
                            </div>
                            <a href="#"
                                @click="$router.push({ path: '/ProjectPage'})">
                                <svg class="button" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project__block">
                    <div class="kitchen">
                        <img class="project__bottom-left" src="../../public/images/Photo_3.png" alt="">
                        <div class="project__text">
                            <div class="project__subcontent">
                                <h3 class="project__title">Modern Kitchen</h3>
                                <h3 class="project__subtitle">Decor / Artchitecture</h3>
                            </div>
                            <a href="#"
                                @click="$router.push({ path: '/ProjectPage'})">
                                <svg class="button" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>                        </div>
                    </div>
                    <div class="kitchen">
                        <img class="project__bottom-right" src="../../public/images/Photo_4.png" alt="">
                        <div class="project__text">
                            <div class="project__subcontent">
                                <h3 class="project__title">Modern Kitchen</h3>
                                <h3 class="project__subtitle">Decor / Artchitecture</h3>
                            </div>
                            <a href="#"
                                @click="$router.push({ path: '/ProjectPage'})">
                                <svg class="button" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="counter">
                <div class="counter__block center">
                    <div class="counter__item">
                        <h2 class="counter__number">12</h2>
                        <h2 class="counter__text">Years Of Experiance</h2>
                    </div>
                    <div class="counter__line"></div>
                    <div class="counter__item">
                        <h2 class="counter__number">85</h2>
                        <h2 class="counter__text">Success Project</h2>
                    </div>
                    <div class="counter__line"></div>
                    <div class="counter__item">
                        <h2 class="counter__number">15</h2>
                        <h2 class="counter__text">Active Project</h2>
                    </div>
                    <div class="counter__line"></div>
                    <div class="counter__item">
                        <h2 class="counter__number">95</h2>
                        <h2 class="counter__text">Happy CUstomers</h2>
                    </div>
                </div>
            </section>
            <section class="blog center">
                <div class="heading ">
                    <a class="heading__title"
                    @click="$router.push({ path: '/BlogDetails'})">Articles & News</a>
                    <div class="heading__subtitle">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</div>
                </div>
                <div class="blog__items center">
                    <div class="blog__item">
                        <div class="blog__content">
                            <div class="tag">
                                <h3 class="tag__text">Kitchan Design</h3>
                            </div>
                            <img class="blog__img" src="../../public/images/Photo_5.png" alt="">
                            <div class="blog__subcontent">
                                <div class="blog__text">Let’s Get Solution For Building Construction Work</div>
                                <div class="blog__date">
                                        <h3 class="blog__date-title">26 December,2022 </h3>
                                    <a href="#"
                                        @click="$router.push({ path: '/BlogDetails'})">
                                        <svg class="blog__button" width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC"/>
                                            <path d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog__item">
                        <div class="blog__content">
                            <div class="tag">
                                <h3 class="tag__text">Living Design</h3>
                            </div>
                            <img class="blog__img" src="../../public/images/Photo_6.png" alt="">
                            <div class="blog__subcontent">
                                <div class="blog__text">Low Cost Latest Invented Interior Designing
                                    Ideas.</div>
                                <div class="blog__date">
                                        <h3 class="blog__date-title">22 December,2022  </h3>
                                    <a href="#"
                                        @click="$router.push({ path: '/BlogDetails'})">
                                        <svg class="blog__button" width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC"/>
                                            <path d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog__item">
                        <div class="blog__content">
                            <div class="tag">
                                <h3 class="tag__text">Interior Design</h3>
                            </div>
                            <img class="blog__img" src="../../public/images/Photo_7.png" alt="">
                            <div class="blog__subcontent">
                                <div class="blog__text">Best For Any Office & Business Interior 
                                    Solution</div>
                                <div class="blog__date">
                                        <h3 class="blog__date-title">25 December,2022 </h3>
                                    <a href="#"
                                        @click="$router.push({ path: '/BlogDetails'})">
                                        <svg class="blog__button" width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC"/>
                                            <path d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <FooterBlock/>
    </div>
</template>

<script>
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';

export default {
    name: 'IndexPage',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { HeaderBlock, FooterBlock }
};
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    
    &__img {
    border-radius: 70px;
    }
}

.intro {
    position: absolute;
    max-width: 434px;
    max-height: 342px;
    margin-left: 50px;
    display: flex;
    justify-content: start;
    gap: 18px;
    flex-direction: column;

    &__title {
        color: #292F36;
        font-family: DM Serif Display; 
        font-size: 65px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }
    
    &__subtitle {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
        letter-spacing: 0.22px;
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

.heading {
    margin-bottom: 93px;
    max-width: 747px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 200px;
    gap: 8px;

    &__title {
        color: #292F36;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
    }
    
    &__subtitle {
        color: #4D5053;
        text-align: center;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
}

.project {
    margin-top: 90px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 56px;

    &__block {
        display: grid;
        grid-template-columns: repeat(auto-fit, 550px);
        gap: 100px;
    }

    &__top-left {
    border-radius: 0 90px 0 0;
    }

    &__top-right {
        border-radius: 90px 0 0 0;
    }

    &__bottom-left {
        border-radius:  0 0 90px 0;
    }

    &__bottom-right {
        border-radius: 0 0 0 90px;
    }
    
    &__text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
    }
    
    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
    }
    
    &__subtitle {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
}

.counter {
    height: 457px;
    background-color: #F4F0EC;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 96px;

    &__block {
        display: flex;
        gap: 76px;
        justify-content: center;
    }
    &__line {
        width: 1px;
        height: 130px;
        background: #CDA274;
    }
    
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
    
    &__number {
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 85px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 106.25px */
        letter-spacing: 1.7px;
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

.button:hover circle{
    fill: #e6dad0;
}

.blog {
&__items {
    display: flex;
    justify-content: center;
    gap: 27px;
    flex-wrap: wrap;
    margin-top: 30px;
}
&__item {
    display: inline-flex;
    padding: 21px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    position: relative;
    width: 337px;
}

&__item:hover {
    background-color: #F4F0EC;
}

&__item:hover circle {
    fill: white;
}

&__img {
    border-radius: 43px 43px 0 0;
}

&__text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
    margin-top: 21px;
    margin-bottom: 30px;
}

&__date-title {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

&__date {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
}

.tag {
    width: 124px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 8px 8px 8px 0px;
    background: #FFF;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 249px;
    left: 51px;
    align-items: center;
    
    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
}


</style>