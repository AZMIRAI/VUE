module.exports = {
  devServer:{
    // /api로 시작되는 요청 주소 정의

    proxy:{
      '/api' : {
        target: 'http://localhost:3000/api',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  };
  
  
  
  transpileDependencies: [
    'vuetify'
  ]
}
