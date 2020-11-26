<template>
  <div class="detail">
    <dl>
      <dt>회원번호</dt>
      <dd>010-8525-4561</dd>
    </dl>
    <!-- <dl class="eqName">
      <dt>선택한 장비</dt>
      <dd>A유닛 세탁기</dd>
    </dl>
    <dl>
      <dt>선택한 상품</dt>
      <dd>쾌속냉수 / 10분</dd>
    </dl>
    <div class="divider" /> -->
    <!-- <dl>
      <dt>결제 금액</dt>
      <dd>{{ data.price | numeral('0,0') }}원</dd>
    </dl> -->
    <dl>
      <dt>결제방법</dt>
      <dd>현금</dd>
    </dl>
    <div class="divider" />
    <dl>
      <dt>결제 금액</dt>
      <dd>5,500 원</dd>
    </dl>
    <dl class="bonus">
      <dt>적립된 포인트(5%)</dt>
      <dd>
        275 원
      </dd>
    </dl>
    <dl class="total">
      <dt>보유 포인트</dt>
      <dd>27,500 원</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'FinishCharge',
  props: {
    data: Object,
    user: Object,
  },
};
</script>

<style lang="scss" scoped>
.detail {
  background: #fff;
  border-radius: 15px;
  padding: 50px;
  overflow-y: scroll;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);

  dl {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    dt {
      font-size: 30px;
      color: #888;
    }
    dd {
      font-weight: 500;
    }
  }
  dl.eqName {
    dd {
      background: #a22123;
      color: #fff;
      padding: 0 15px;
    }
  }
  dl.bonus {
    dd {
      color: #a22123;
    }
  }
  dl.total {
    dd {
      color: #d32078;
    }
  }
  dl:last-child {
    margin-bottom: 0px;
  }
  .divider {
    height: 3px;
    background: #e2e2e2;
    margin: 30px 0;
  }
}
</style>
