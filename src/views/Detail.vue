<template>
  <SubLayout
    title="서비스확인 및 포인트사용"
    title2="선택하신 서비스와 결제금액을 확인해주세요"
    next="complete"
  >
    <CreditModal />
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
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from '@/components/SubLayout.vue';
import CreditModal from '@/components/credit-modal.vue';

export default {
  components: {
    SubLayout, CreditModal
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
}

.divider{
	height:3px;
	background:#e2e2e2;
	margin:30px 0;
}

</style>
