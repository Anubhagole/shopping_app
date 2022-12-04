<template>
<div>
    <p>
        <slot name="product">
            <div>
                <b-card no-body style="max-width: 20rem;">
                    <b-card-img :src="product.thumbnail" alt="Image" style="width: auto; height: auto; max-height: 13em; max-width: 20rem;"></b-card-img>
                    <b-card-body>
                        <b-card-title>{{product.title}}</b-card-title>
                        <b-card-sub-title class="mb-2">{{product.brand}}</b-card-sub-title>
                        <b-button size="sm" class="mb-2" align-h="end">
                            <b-icon icon="currency-dollar" aria-hidden="true"></b-icon> {{product.price}}
                        </b-button>
                        <b-button size="sm" variant="outline-danger" class="mb-2 mx-2">{{product.discountPercentage}}% off</b-button>
                        <span class="h6 mb-2">
                            <b-icon icon="star-fill" variant="warning"></b-icon>{{product.rating}}
                        </span>
                        <b-card-text>
                            {{product.description}}
                        </b-card-text>
                    </b-card-body>
                    <b-list-group flush>
                        <p v-if="fewItems" class="text-primary">
                            <b-icon icon="bell-fill" variant="primary">
                            </b-icon>
                            Hurry! Only a few items are left
                        </p>
                        <b-button href="#" variant="primary" @click="handleAddCartProduct(product)">{{cartButton}}</b-button>
                    </b-list-group>
                </b-card>
            </div>
        </slot>
    </p>
</div>
</template>

<script>
export default {
    props: ['product'],
    data() {
        return {
            fewItems: false,
            quantity: 0,
            cartButton: "Add to Cart"
        }
    },
    methods: {
        handleAddCartProduct(product) {
            if (this.quantity == 0) {
                if (product.stock < 50) {
                    this.fewItems = true;
                }
                this.cartButton = "Added to Cart"
                this.$store.dispatch('handleAddCartProduct', product)
                this.quantity++;
            }
        }
    }
}
</script>

<style scoped>

</style>
