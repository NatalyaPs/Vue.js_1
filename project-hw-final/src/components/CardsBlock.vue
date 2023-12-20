<template>
    <div >
        <div class="card">
        <img :src="card.cardImg" alt="picture">
        <div class="card-block_text">
            <div class="subcontent">
                <h3 class="title">{{ card.cardTitle }}</h3>
                <h3 class="subtitle">{{ card.cardSubtitle }}</h3>
            </div>
            <a class="button" href="#"
                @click="$router.push({ name: 'ProjectDetails'})">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
name: 'CardsBlock',
props: ['card'],
};
</script>

<style lang="scss" scoped>
.project {
margin-top: 90px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
gap: 56px;
}

.card {
margin-bottom: 40px;
display: inline-block;
}
.button:hover circle{
fill: #e6dad0;
}
.card-block_text {
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 24px;
width: 585px;
}

.title {
color: #292F36;
font-family: DM Serif Display;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 125%; 
letter-spacing: 0.5px;
}

.subtitle {
color: #4D5053;
font-family: Jost;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
letter-spacing: 0.22px;
}
</style>