<template>
    <div id="app">
        <h1>Reviews</h1>

        <ul>
            <li v-for="c in comments" :key="c.id">
                <p> {{ c.body }} </p>
            </li>
        </ul>

        <!-- <h1>{{ review_title }}</h1> -->
    </div>
</template>

<script>
// export default {
//     name:'Reviews',
//     props:['review_id'],
//     computed:{
//         review_title(){
//             if(this.review_id=='1'){
//                 return 'review 1'
//             }else if (this.review_id=='2'){
//                 return 'review 2'
//             }else 
//                 return ''
//         }
//     }
// };

import axios from 'axios'

export default{
    name: 'Reviews',
    data(){
        return { comments : [] }
    },
    mounted(){
        axios.get('/api/comments')
        .then(response=>{
            console.log(response)
            this.comments=response.data
        })
        .catch(err=>{
            console.log(err)
        })
    }
};
</script>