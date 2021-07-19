let app = new Vue ({

    el:'#app',
    data:{
        brand:'「近藤」',
        product:'靴下' ,
        selectedVariant:0,
        // image:'./assets/images/socks_blue.jpg',
        // inStock:false,
        // inventory:100,
        details:['80% cotton','20% polyester','Gender-neutral'],
    
        variants:[
            {
                variantId:2334,
                variantColor:'green',
                variantImage:'./assets/images/socks_green.jpg',
                variantQuantity:10,
            },
            {
                variantId:2335,
                variantColor:'blue',
                variantImage:'./assets/images/socks_blue.jpg',
                variantQuantity:0
            }
        ],
        cart:0,
    },

    methods:{
        addToCart(){
            this.cart += 1
        },
        // updateProduct(variantImage){
        //     this.image = variantImage
        // },
        updateProduct(index){
            this.selectedVariant = index
        },
    },

    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});

