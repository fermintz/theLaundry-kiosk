<template>
  <div class="basket">
    <dl class="selected">
      <dt>선택한 장비</dt>
      <dd>01 A유닛 세탁기 19Kg</dd>
    </dl>
    <dl class="price">
      <dt>선택한 금액</dt>
      <dd>
        <span>4,500</span> 원
      </dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
.basket{
  background:#fff;
  border-radius:15px;
  box-shadow: 0 0 30px rgba(0,0,0,0.15);
  overflow: hidden;

  dl{
    height:108px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 30px;

    dt{
      font-size:30px;
      font-weight:500
    }
  }

  .selected{
    background:#f2f2f2;
    border-bottom:3px solid #e2e2e2;
  }
  .price{
    dd{
      span{
        color:#d22828
      }
    }
  }

}
</style>