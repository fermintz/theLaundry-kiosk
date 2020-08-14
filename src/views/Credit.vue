<template>
	<div class="default">
		<div class="top">
			<v-btn icon @click="$router.push('/')">
					<v-icon>mdi-home</v-icon>
			</v-btn>
			<dl class="headTitle">
					<dt>결제방법 선택</dt>
					<dd>희망하시는 결제방법을 선택해주세요</dd>
			</dl>
		</div>
		<div class="contents">
			<v-row>
				<v-col cols="6">
					<div class="item cash" v-ripple @click="$router.push('Detail')">
						<div class="img">
							<img src="@/assets/img/cash.png">
						</div>
						<dl>
							<dt>현금으로 충전</dt>
							<dd>적립률(10%)</dd>
						</dl>
					</div>
				</v-col>
				<v-col cols="6">
					<div class="item card" v-ripple @click="$router.push('Detail')">
						<div class="img">
							<img src="@/assets/img/card.png">
						</div>
						<dl>
							<dt>신용카드로 충전</dt>
							<dd>적립률(5%)</dd>
						</dl>
					</div>
				</v-col>
			</v-row>
		</div> <!--contents -->
		<div class="backBtn">
			<v-btn text @click="$router.push('Point')">
				<v-icon>mdi-arrow-left</v-icon>
				<span>뒤로가기</span>
			</v-btn>
		</div>
	</div>
</template>



<style lang="scss" scoped>

.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 270px;
  padding: 0 50px;

  .v-btn {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: #fff;
    margin-right: 30px;

    .v-icon {
      font-size: 64px;
      color: #00a0e9;
    }
  }

  dl {
    dt {
      font-size: 48px;
      color: #fff;
      font-weight: 500;
    }
    dd {
      color: #fff;
    }
  }
}

.contents{
	.item{
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		background:#fff;
		border-radius:15px;
		overflow:hidden;
		text-align:center;
		min-height:720px;
		box-shadow: 0 0 30px rgba(0,0,0,0.15);

		.img{
			img{width:100%;}
		}

		dl{
			padding:30px;
	
			dt{
				font-size:42px;
				font-weight:500;
			}
			dd{
				font-size:36px;
				color:#00a0e9;
			}
		}
	}
	.item.cash{margin-top:100px;}
	.item.card{margin-top:250px;}
}

.backBtn{
	display:flex;
	flex-direction: row;
	padding:50px;
	border-radius:15px;
	overflow:hidden;
	z-index:3;

	.v-btn{
		flex:1;
		height:120px;
		background:#292929;
		border-radius:15px;
		color:#fff;

		.v-icon{font-size:42px;margin-right:15px;}
		span{}
	}
}

</style>
