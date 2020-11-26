<template>
  <div class="modalTest">
    <v-btn text @click="$refs.errorModal.open(true)">경고</v-btn>
    <v-btn text @click="$refs.confirm.open(true)">메세지</v-btn>
    <v-btn text @click="$refs.progress.open(true)">로딩</v-btn>
    <v-btn text @click="$refs.password.open(true)">패스워드 입력</v-btn>
    <v-btn text @click="$refs.cashModal.open(true)">현금결제</v-btn>
    <v-btn text @click="$refs.cardModal.open(true)">신용카드결제</v-btn>
    <v-btn text @click="$refs.agree.open(true)" >개인정보취급방침</v-btn>

    <Error ref="errorModal" :title="error.title" :message="error.message" />

    <Progress ref="progress" />
    <Confirm ref="confirm" />
    <Password ref="password" />
    <CashModal ref="cashModal" />
    <CardModal ref="cardModal" />
    <Agree ref="agree" title="개인정보취급방침"/>
  </div>
</template>

<script>
import Error from '@/components/modal/error.vue';
import Confirm from '@/components/modal/confirm.vue';
import Progress from '@/components/modal/progress.vue';
import Password from '@/components/userLogin/password.vue';
import CashModal from '@/components/modal/cashModal.vue';
import CardModal from '@/components/modal/cardModal.vue';
import Agree from '@/components/userLogin/agree.vue';

export default {
  components: {
    Error,
    Progress,
    Confirm,
    Password,
    CashModal,
    CardModal,
    Agree
  },
  data() {
    return {
      error: {
        message: '비밀번호가 올바르지 않습니다',
      },
    };
  },
  methods: {
    errorModalShow() {
      this.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.modalTest {
  padding: 60px;

  .v-btn {
    min-height: 90px;
    font-size: 36px;
    margin: 0 10px;
    margin-bottom: 20px;
    border-radius: 15px;
    background: #fff;
  }
}
</style>
