<template>
  <div id="app">
    <ProductPage></ProductPage>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Product from './components/Product.vue'
import ProductPage from './components/ProductPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Product
    ProductPage,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* scss 쓰는 이유  프로젝트 테마를 하기위해서 */
@import './assets/css/styles.css'
</style>
