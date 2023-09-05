<template>
    <section class="project center">
        <div class="project__heading">
            <h2 class="project__heading_title">Follow Our Projects</h2>
            <p class="project__heading_text">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        </div>
        <div class="projects">
            <ProjectItem 
            v-for="projectItem in listProjectItem"
            :key="projectItem.id"
            :projectItem="projectItem"
        />
        </div>
        
        <!-- <div
            v-for="item in listItem"
            :key="item.id"
        > -->
        <!-- </div> -->
        <!-- <ProjectItem /> -->
        <!-- <div class="projects">
            <div class="project-card">
                <img src="img/project_1.png" alt="img_project">
                <div class="project-card__content">
                    <h4 class="project-card__content_title">Modern Kitchan</h4>
                    <p class="project-card__content_text">Decor / Artchitecture</p>
                </div>
                <svg class="project-card__svg" 
                    xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="project-card">
                <img src="img/project_2.png" alt="img_project">
                <div class="project-card__content">
                    <h4 class="project-card__content_title">Modern Kitchan</h4>
                    <p class="project-card__content_text">Decor / Artchitecture</p>
                </div>
                <svg class="project-card__svg" 
                    xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>

            <div class="project-card">
                <img src="img/project_3.png" alt="img_project">
                <div class="project-card__content">   
                    <h4 class="project-card__content_title">Modern Kitchan</h4>
                    <p class="project-card__content_text">Decor / Artchitecture</p>
                </div>
                <svg class="project-card__svg" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
                
            <div class="project-card">
                <img src="img/project_4.png" alt="img_project">
                <div class="project-card__content">
                    <h4 class="project-card__content_title">Modern Kitchan</h4>
                    <p class="project-card__content_text">Decor / Artchitecture</p>
                </div>
                <svg class="project-card__svg" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div> -->
    </section>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue';

export default {
    name: 'ProjectList',
    components: {
        ProjectItem,
    },

    data() {
        return {
            listProjectItem: [
                {
                    id: 1,
                    img: './img/project_1.png',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                    svg: './img/svg_project.svg',
                },
                {
                    id: 2,
                    img: './img/project_2.png',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                    svg: './img/svg_project.svg',
                },
                {
                    id: 3,
                    img: './img/project_3.png',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                    svg: './img/svg_project.svg',
                },
                {
                    id: 4,
                    img: './img/project_4.png',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                    svg: './img/svg_project.svg',
                },
            ],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .project {
        // margin-top: 96px;
        text-align: center;
        &__heading {
            width: 737px;
            height: 137px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 93px;
            margin-top: 96px;
            &_title {
                color: $colorTitle;
                font-family: $fontTitle;
                font-size: 50px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%; /* 62.5px */
                letter-spacing: 1px;
            }
            &_text {
                color: $colorText;
                font-family: $fontText;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 33px */
                letter-spacing: 0.22px;
            }
        }
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
        margin-bottom: 100px;
    }


</style>