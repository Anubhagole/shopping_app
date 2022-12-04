<template>
<div>
    <h3>My Cart</h3>
    <div class="container">
        <div v-for="( product, index ) in cartProducts" :key="index">
            <b-card :title="product.title" :img-src="product.thumbnail" img-alt="Image" img-top tag="article" style="max-width: 18rem;" class="mb-2">
                <b-card-text>
                    {{product.description}}
                    <div>
                        <b-button size="sm" class="mb-2" align-h="end">
                            <b-icon icon="currency-dollar" aria-hidden="true"></b-icon> {{product.price}}
                        </b-button>
                        <b-button size="sm" variant="outline-danger" class="mb-2 mx-2">{{product.discountPercentage}}% off</b-button>
                        <span class="h6 mb-2">
                            <b-icon icon="star-fill" variant="warning"></b-icon>{{product.rating}}
                        </span>
                    </div>
                </b-card-text>
                <b-button href="#" variant="primary" @click="handleRemoveProductFromCart(index)">Remove</b-button>
            </b-card>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CartPage',
    components: {},
    data() {
        return {}
    },
    methods: {
        handleRemoveProductFromCart(index) {
            this.$store.dispatch('handleRemoveProductFromCart', index)
        }
    },
    computed: {
        cartProducts() {
            return this.$store.state.cartProducts
        }
    }
}
</script>

<style>

</style>
