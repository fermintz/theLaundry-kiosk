<template>
  <div class="finish">
    <div class="article">
      <div class="title">
        <v-icon>mdi-check-circle</v-icon>
        <h2>결제가 완료되었습니다</h2>
        <p><b>A유닛세탁기</b>로 돌아가 세탁코스를 다시 한번 확인 후 <b>시작버튼</b>을 눌러주세요</p>
      </div>

			<div class="section">
				<UseFinish />
				<ChargeFinish v-if="false" />
			</div>

			<div class="guide">
				<span><b>5</b>초 후 메인화면으로 이동합니다</span>
				<v-btn text>메인으로</v-btn>
			</div>

			<div class="bottomBtns">
        <div class="boldBtn" style="margin-right:10px;" v-ripple @click="$router.push('/')">
          <v-icon>mdi-chevron-left</v-icon>
          <span>로그아웃</span>
        </div>
        <div class="boldBtn" style="margin-left:10px;" v-ripple @click="$emit('done')">
          <span>추가상품 선택하기</span>
          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </div>
    </div>
		<Waves />
  </div>
</template>

<script>
import Waves from '@/components/waves.vue';
import UseFinish from '@/components/finish/use.vue';
import ChargeFinish from '@/components/finish/charge.vue';

export default {
	components:{
		Waves,
		UseFinish,
		ChargeFinish
	}
}
</script>

<style lang="scss" scoped>
.finish{
	height:100%;

	.article{
		display:flex;
		flex-direction: column;
		height:100%;
		position: relative;
		z-index:99;
		padding:0 60px;

		.title {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 60px 50px;

			.v-icon {
				font-size: 150px;
				color: #fff;
			}
			h2 {
				font-size: 72px;
				line-height: 72px;
				color: #fff;
				font-weight: 500;
				letter-spacing: -0.7px;
				font-family: 'NotoSansKR';
				margin-top: 30px;
			}
			p {
				text-align: center;
				font-size: 36px;
				line-height: 46px;
				margin-top: 30px;
				color: #fff;
				font-weight: 400;
				font-family: 'NotoSansKR';
				word-break: keep-all;

				b {
					color: #d0fd00;
					font-weight: 500;
				}
			}
		}

		.section{
			flex:1;
		}


		.guide {
			text-align: center;
			z-index: 3;
			padding: 60px 50px;

			span {
				display: block;
				font-size: 36px;
				font-weight: 500;

				b {
					color: #d32078;
				}
			}
			.v-btn {
				background: rgba(0, 0, 0, 0.4);
				border-radius: 30px;
				height: 60px;
				padding: 0 60px;
				color: #fff;
				margin-top: 15px;
				font-size: 30px;
				font-weight: 400;
			}
		}



		.footerBtns {
			padding-top: 0px;
		}

	}
}

.bottomBtns{
  position: relative;
  z-index:99;
  display:Flex;
  padding:60px 0;

  .boldBtn{
    display:flex;
    align-items: center;
    flex:1;
    font-size:36px;
    height:100px;
    padding:0 20px;
    border:3px solid #e2e2e2;
    border-bottom:0px;
    border-right:0px;
	  background: rgb(194,194,194);
    background: linear-gradient(0deg, rgba(194,194,194,1) 0%, rgba(255,255,255,1) 100%);
    border-radius:15px;
    box-shadow: 10px 10px 20px rgba(0,158,230,0.35);

    span{flex:1;text-align: center;}
    .v-icon{font-size:42px;}
  }
}


</style>
