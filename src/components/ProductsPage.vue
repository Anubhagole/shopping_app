<template>
<div>
    <div>
        <b-button squared @click="filterBySetCategory('all')">All Products</b-button>
        <b-button squared @click="filterBySetCategory('smartphones')">Smartphone</b-button>
        <b-button squared @click="filterBySetCategory('laptops')">Laptop</b-button>
        <b-button squared @click="filterBySetCategory('fragrances')">Fragrance</b-button>
        <b-button squared @click="filterBySetCategory('skincare')">Skincare</b-button>
        <b-button squared @click="filterBySetCategory('groceries')">Grocery</b-button>
        <b-button squared @click="filterBySetCategory('home-decoration')">Home-decoration</b-button>
        <b-dropdown id="dropdown-1" text="Brands" class="m-md-2">
            <b-dropdown-item v-for="( brand, index ) in productBrands" :key="index" @click="filterBySetBrand(brand)">{{brand}}
            </b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-1" :text="sort" class="m-md-2">
            <b-dropdown-item @click="sortClear">Clear</b-dropdown-item>
            <b-dropdown-item @click="sortByHighToLowPrice">Price - high to low</b-dropdown-item>
            <b-dropdown-item @click="sortByRatings">Ratings</b-dropdown-item>
            <b-dropdown-item @click="sortByDiscount">Discount</b-dropdown-item>
            <b-dropdown-item @click="sortByLowToHighPrice">Price - low to high</b-dropdown-item>
        </b-dropdown>
    </div>
    <div class="container">
        <div v-for="( product, index ) in filteredProducts" :key="index">
            <ProductCard :product="product">
                <template v-slot:product></template>
            </ProductCard>
        </div>
    </div>
    <TheLoader v-if="showLoader" />
</div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import TheLoader from './TheLoader.vue'
export default {
    name: 'ProductsPage',
    components: {
        ProductCard,
        TheLoader
    },
    data() {
        return {
            products: [],
            filterByCategory: '',
            filterByBrand: false,
            sort: 'Sort',
            productBrands: [],
            showLoader: false
        }
    },
    methods: {
        async getProducts() {
            this.showLoader = true;
            let response = await fetch('https://dummyjson.com/products?limit=100');
            let responseData = await response.json();
            this.showLoader = false;
            this.products = responseData.products;
        },
        filterBySetCategory(value) {
            this.filterByBrand = false;
            this.filterByCategory = value;
        },
        filterBySetBrand(value) {
            this.filterByBrand = value;
        },
        sortClear() {
            this.sort = 'Sort';
            this.getProducts();
        },
        sortByRatings() {
            this.sort = 'Ratings'
            this.products.sort(this.compareRatings)
        },
        compareRatings(a, b) {
            return b.rating - a.rating
        },
        sortByHighToLowPrice() {
            this.sort = 'Price - High to Low'
            this.products.sort(this.comparePriceDecendingly)
        },
        comparePriceDecendingly(a, b) {
            return b.price - a.price
        },
        sortByLowToHighPrice() {
            this.sort = 'Price - Low to High'
            this.products.sort(this.comparePriceAccendingly)
        },
        comparePriceAccendingly(a, b) {
            return a.price - b.price
        },
        sortByDiscount() {
            this.sort = 'Discount'
            this.products.sort(this.compareDiscount)
        },
        compareDiscount(a, b) {
            return b.discountPercentage - a.discountPercentage
        },
        getProductBrands() {
            let brands = [];
            this.products.forEach(product => {
                if (product.category == this.filterByCategory) {
                    brands.push(product.brand)
                }
            });
            this.productBrands = [...new Set(brands)];
        },
    },
    computed: {
        filteredProducts() {
            this.getProductBrands();
            if (this.filterByBrand) {
                return this.products.filter(product => product.brand === this.filterByBrand)
            }
            if (this.filterByCategory == 'all') {
                return this.products
            }
            if (this.filterByCategory == 'smartphones') {
                return this.products.filter(product => product.category === 'smartphones')
            }
            if (this.filterByCategory == 'laptops') {
                return this.products.filter(product => product.category === 'laptops')
            }
            if (this.filterByCategory == 'fragrances') {
                return this.products.filter(product => product.category === 'fragrances')
            }
            if (this.filterByCategory == 'skincare') {
                return this.products.filter(product => product.category === 'skincare')
            }
            if (this.filterByCategory == 'groceries') {
                return this.products.filter(product => product.category === 'groceries')
            }
            if (this.filterByCategory == 'home-decoration') {
                return this.products.filter(product => product.category === 'home-decoration')
            }
            return this.products
        }
    },
    created() {
        this.getProducts()
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin: 3em;
    padding: 1em;
}

</style>
