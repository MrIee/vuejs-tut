<template>
    <div>
        <app-stock :key="stock.id" v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters('portfolio', {
                stocks: 'stockPortfolio',
            }),
        },
        components: {
            appStock: Stock,
        },
    };
</script>
