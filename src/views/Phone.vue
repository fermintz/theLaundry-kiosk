<template>
  <DefaultLayout
    @done="nextStep"
  >
    <div class="userLogin">
      <PhoneNumberPanel @phone="phone = $event"/>   
      <Password ref="password"/>
      <Agree ref="agree"/>
    </div>
  </DefaultLayout>
</template>

<script>
import Password from '@/components/userLogin/password.vue';
import Agree from '@/components/userLogin/agree.vue';
import DefaultLayout from '../components/layout/default.vue';
import PhoneNumberPanel from '@/components/userLogin/numberPanel.vue';

export default {
  components: {
    Password,
    Agree,
    DefaultLayout,
    PhoneNumberPanel
  },
  data() {
    return {
      phone:'', // 입력받은 전화번호
      user:{
        userPhone:'010-8525-4561',
        password:'3456'
      }
    }
  },
  
  methods: {
    nextStep(){
      this.$router.push('orderGuide');
    }
  },
};
</script>

<style lang="scss" scoped>

.userLogin{
  position: relative;
  height:100%;
  z-index:99;
}

</style>