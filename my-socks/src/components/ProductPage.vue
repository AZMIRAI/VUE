<template>
    <div id="app">

        <div class="nav-bar"></div>
        <div class="cart">
        <p>Cart ({{ cart.length }})</p>
        </div>
    <Product @add-to-cart="addToCart"></Product>
    <Comments></Comments>
    </div>
</template>

<script>
import Product from './Product.vue';

import Comments from './Comments.vue';
export default{
    name : 'ProductPage',
    components:{
        Product,
        Comments
    },
    data(){
        return {cart:[]}
    },
    methods : {
        addToCart(variantId){
            this.cart.push(variantId)
        }
    }

}
</script>