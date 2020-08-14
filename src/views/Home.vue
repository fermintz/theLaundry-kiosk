<template>
  <div class="default">
    <div class="banner">
      <img src="@/assets/img/home-bg.png">
    </div>
    <div class="btns">
      <v-btn text @click="$router.push('/Main')">
        <v-icon>mdi-gesture-tap</v-icon>
        <span>터치해주세요</span>
      </v-btn>
    </div>
    <div class="logo">
      <img src="@/assets/img/logo_b.png">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: { 

  },
};
</script>


<style lang="scss" scoped>

.banner{
  img{width:100%;height:1848px}
  overflow:hidden
}


.btns{
  position:absolute;
  width:100%;
  bottom:200px;
  text-align: center;
  z-index:3;

  .v-btn{
    width:70%;
    min-height:120px;
    background:rgba(0,160,233,0.8);
    border-radius:60px;

    .v-icon{
      color:#fff;
      font-size:64px;
      margin-right:15px;
    }
    span{
      font-size:36px;
      letter-spacing: 0;
      color:#fff;
    }
  }
}

.logo{
  width:100%;
  text-align:center;
  z-index: 3;
  position:absolute;
  bottom:50px;
  img{
    height:50px;
  }
}
  


</style>