<template>
    <div>
        <h4>Название: {{ product.name }}</h4>
        <p>Цена: {{ formattedPrice }}</p>
        <p>Наличие в магазине:         
            <span v-if="product.available">Товар в наличии</span>
            <span v-else>Товар закончился</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            product: {
                name: 'Товар 1',
                price: 99.99,
                available: true,
            },
        };
    },

    computed: {
        formattedPrice: 
            function() {
                return `${this.product.price} руб.`;
            }
    },
};
</script>

<style lang="scss" scoped>

</style>