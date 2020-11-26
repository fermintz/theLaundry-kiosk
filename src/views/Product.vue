<template>
  <DefaultLayout
    @done="nextStep"
  >
    <UserState />
    <ProductList />   
    <SelectedBox />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/components/layout/default.vue';
import ProductList from '@/components/productSelect/productList.vue';
import SelectedBox from '@/components/productSelect/selectedBox.vue';
import UserState from '@/components/userState.vue';

export default {
  components:{
    DefaultLayout,
    ProductList,
    UserState,
    SelectedBox,
  },
  methods:{
    nextStep(){
      this.$router.push({
        name:'Detail'
      })
    }
  }
  
};
</script>

