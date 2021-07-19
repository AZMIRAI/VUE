let app = new Vue ({

    el:'#app',
    data:{
        product:'Socks' ,
        image:'./assets/images/socks_blue.jpg',
        inStock:true,
        // inventory:100,
        details:['80% cotton','20% polyester','Gender-neutral'],
    
        variants:[
            {
                variantId:2334,
                variantColor:'green'
            },
            {
                variantId:2335,
                variantColor:'blue'
            }
        ],
        cart:0,
    },

    methods:{
        addToCart(){
            this.cart += 1
        }
    }
});

