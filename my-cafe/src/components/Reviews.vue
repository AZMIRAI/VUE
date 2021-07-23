<template>
    <div id="app">
        <h1>Reviews</h1>
        <h1>{{ review_title }}</h1>
    </div>
</template>

<script>
export default {
    name:'Reviews',
    props:['review_id'],
    computed:{
        review_title(){
            if(this.review_id=='1'){
                return 'review 1'
            }else if (this.review_id=='2'){
                return 'review 2'
            }else 
                return ''
        }
    }
};
</script>