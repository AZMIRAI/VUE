<template>
    <!-- <div id="app">
    <h1>Welcome {{$store.state.user.userId}} </h1>
    <input v-model="newId" type="text"><button @click="saveUserId">Save</button>
    <br>
    <button @click="updateReviews">Update</button>
    <h1> {{$store.getters['reviews/reviewCount']}} </h1>
    <ul>
        <li v-for="r in $store.state.reviews.reviews" :key="r.id">
            <p> {{r.body}}</p>
        </li>
    </ul>
    </div>  -->

 <div id="app">
    <h1>Welcome {{ userId }} </h1>
    <v-text-field label="new user id" v-model="newId"></v-text-field>
    <v-btn @click="saveUserId" elevation="2">Save</v-btn><br>
    <v-btn @click="updateReviews" color="primary">Update</v-btn>
    <h1>{{reviewCount}}</h1>
    <!-- <ul>
        <li v-for="r in reviews" :key="r.id">
            <p> {{r.body}} </p>
        </li>
    </ul> -->

<v-simple-table>
    <template v-slot:default>
    <thead>
        <tr> 
                <th>Email</th>
                <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in reviews" :key="item.id">
            <td> {{item.email}}</td>
            <td> {{item.body}}</td>
        </tr>
    </tbody>
    </template>
</v-simple-table>


</div> 

</template> 




<script>

// import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

// export default {
//     // name:'Home'
//     data(){
//         return { newId:''}
//     },
//     methods:{
//         saveUserId(){
//             this.$store.commit('updateUserId', this.newId)
//         },
//         updateReviews(){
//             this.$store.dispatch('reviews/getReviews')
//         }
//     }
// } 

import {mapState, mapGetters,mapMutations, mapActions} from 'vuex'

export default {
    data(){
        return {newId:''}
    },
    computed:{
        // namespaced 가 설정되지 않은경우.
        ...mapState({
            userId:state=>state.user.userId
        }),
        // namespaced 가 설정 된 경우 모둘명을 적는다.
        ...mapState('reviews',{
            reviews:state=>state.reviews
        }),
        ...mapGetters('reviews',['reviewCount'])
    },
    methods:{
        ...mapMutations(['updateUserId']),
        ...mapActions('reviews',['getReviews']),
        saveUserId(){
            this.updateUserId(this.newId)
        },
        updateReviews(){
            this.getReviews()
        }
    }
}
</script>