<template>
	<div class="default">
		<div class="top">
			<v-btn icon @click="$router.push('/')">
					<v-icon>mdi-home</v-icon>
			</v-btn>
			<dl class="headTitle">
				<dt>이용안내</dt>
                <dd>세탁기 사용방법</dd>
			</dl>
		</div>
		<div class="contents">
            <div class="guide-img">
                <img src="@/assets/img/guide01.png">
            </div>
 		</div> <!--contents -->

        <div class="backBtn">
			<v-btn text @click="$router.push('GuideList')">
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

.guide-img{
    flex:1;
    background:#fff;
    border-radius:15px;
    box-shadow: 0 0 30px rgba(0,0,0,0.15);
    padding:30px;
    overflow-y:scroll;

    img{width:100%;}
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
	}
}


</style>
