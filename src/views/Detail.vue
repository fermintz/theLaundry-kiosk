<template>
  <DefaultLayout
    @done="nextStep"
  >

    <div class="detailView">
      <dl>
        <dt>회원정보</dt>
        <dd>
          <div class="item">
            <label>회원번호</label>
            <span>010-8525-4561</span>
          </div>
          <div class="item">
            <label>현재 포인트</label>
            <span>0</span>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>결제정보</dt>
				<dd>
					<div class="item">
            <label>선택한 장비</label>
            <span>A유닛 세탁기 19KG</span>
          </div>
					<div class="item">
            <label>선택한 상품</label>
            <span>스피드코스(대량)</span>
          </div>
          <div class="item">
            <label>결제예정금액</label>
            <span>10,000원</span>
          </div>
					<div class="item">
            <label>결제예정금액</label>
            <span>10,000원</span>
          </div>
          <div class="item">
            <label>총 지급 포인트</label>
            <span>11,000원</span>
          </div>
					<div class="divider" />
					<div class="item last">
            <label>결제 예정금액</label>
            <span>11,000원</span>
          </div>
        </dd>
      </dl>

      <div class="guideText">
        <div class="text1">
          <v-icon size="70">mdi-exclamation-thick</v-icon>
          <span>키오스크에서 선택하신 <b>포인트</b>를 각 기기에서 이용하실 <b>금액</b>과 <b>일치</b>시켜야 합니다.</span>
        </div>
        <div class="text2">※ 초과 결제된 금액은 반환해드리지 않습니다.</div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/components/layout/default.vue';

export default {
  components: {
    DefaultLayout
  },
  methods:{
    nextStep(){
      this.$router.push('Finish')
    }
  },
};
</script>

<style lang="scss" scoped>
.detailView{
	dl{
		margin-bottom:30px;
		border-radius:15px;
		overflow: hidden;

		dt{
			text-align:center;
			background:#f2f2f2;
			padding:15px 0;
			border-bottom:3px solid #e2e2e2;
		}
		dd{
			padding:30px;
			background:#fff;

			div.item{
				display:flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom:15px;
				label{font-size:30px;color:#888}
				span{}
			}

			div.item:last-child{
				margin-bottom:0px;
			}

			div.item.last{
				span{color:#d22828}
			}
		}
  }
  
  .guideText{
    text-align:center;
    background:rgba(0,0,0,0.65);
    border-radius:30px;
    padding:30px;

    .text1{
      display:flex;
      align-items: center;
      margin-bottom:30px;

      .v-icon{
        width:100px;
        color:yellow;
        margin-right:10px;
      }
      span{
        flex:1;
        color:#fff;
        text-align:left;
        display:block;
        word-break: keep-all;

        b{
          color:yellow;
          font-weight:normal
        }
      }
    }
    
    .text2{
      display: inline-block;
      height:80px;
      line-height:80px;
      padding:0 45px;
      border-radius:45px;
      text-align:center;
      background:#d22828;
      color:#fff;
      font-size:32px;
    }
  }
}

.divider{
	height:3px;
	background:#e2e2e2;
	margin:30px 0;
}


</style>
