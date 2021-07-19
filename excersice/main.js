let app = new Vue ({

    el:'#app',
    data:{
        brand:'Vue',
        product:'Socks' ,
        image:'./assets/images/socks_blue.jpg',
        inStock:false,
        // inventory:100,
        details:['80% cotton','20% polyester','Gender-neutral'],
    
        variants:[
            {
                variantId:2334,
                variantColor:'green',
                variantImage:'./assets/images/socks_green.jpg',
            },
            {
                variantId:2335,
                variantColor:'blue',
                variantImage:'./assets/images/socks_blue.jpg',
            }
        ],
        cart:0,
    },

    methods:{
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        },
    },

    computed:{
        title(){
            return this.brand + ' ' + this.product
        }
    }
});

