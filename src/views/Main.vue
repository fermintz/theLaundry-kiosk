<template>
  <div class="default">
		<div class="top">
			<v-btn icon @click="$router.push('/')">
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<dl>
				<dt><img src="@/assets/img/logo.png"></dt>	
			</dl>
		</div> <!-- top -->

		<div class="contents">
			<div class="mainTitle">
				<span>터치로 간편하게!</span>
				<strong>서비스를 이용해보세요</strong>
			</div>
			<div class="menu">
				<p>필요한 서비스를 터치해주세요</p>
				<div class="button button01" v-ripple @click="$router.push('/Phone')">
					<div class="icon">
						<img src="@/assets/img/main-icon01.png">
					</div>
					<dl>
						<dt>세탁/건조 장비 사용하기</dt>
						<dd>휴대폰 번호에 충전된 포인트로 장비를 사용합니다</dd>
					</dl>
				</div>
				<div class="button button02" v-ripple @click="$router.push('/Point')">
					<div class="icon">
						<img src="@/assets/img/main-icon02.png">
					</div>
					<dl>
						<dt>신규회원/포인트충전</dt>
						<dd>신규 및 가입된 휴대폰 번호에 포인트를 충전합니다</dd>
					</dl>
				</div>
				<div class="button button03" v-ripple @click="$router.push('/GuideList')">
					<div class="icon">
						<img src="@/assets/img/main-icon03.png">
					</div>
					<dl>
						<dt>장비 사용방법 안내</dt>
						<dd>처음 이용하시는 분들이라면 사용방법을 확인 후 이용해보세요
						</dd>
					</dl>
				</div>
			</div>
		</div>

		
	</div>
</template>

<style lang="scss" scoped>
.top{
	display:flex;
	flex-direction: row;
	align-items: center;
	height:270px;
	padding:0 50px;

	.v-btn{
		width:120px;
		height:120px;
		border-radius: 60px;
		background: #fff;
		margin-right:30px;

		.v-icon{
			font-size:64px;
			color:#00a0e9;
		}
	}

	dl{
		dt{
			font-size:48px;
			color:#fff;
			font-weight:500;
			margin-top:20px;
		}
	}
}

.default{
	.contents{
		padding-bottom:50px;
	}
}

.mainTitle{
	flex:1;
	display:flex;
	flex-direction: column;
	justify-content: flex-start;	
	color:#fff;
	font-size:90px;
	line-height:110px;
	margin-top:30px;
	span{
		display:block;
		font-weight:300;
	}
	strong{
		display:block;
		font-weight:600;
	}
}

.contents{
	padding-bottom:50px;
}

.menu{
	
	background:rgba(255,255,255,0.6,);
	border-radius:15px;
	padding:50px;
	

	p{
		margin-bottom:50px;
		text-align: center;
		font-weight:500;
	}

	.button{
		border:3px solid #292929;
		margin-bottom:30px;
		padding:30px;
		border-radius:15px;
		min-height:300px;
		display:flex;
		flex:1;
		align-items: center;
		background:#fff;
		box-shadow: 0 0 30px rgba(0,0,0,0.15);

		.icon{
			min-width:240px;
			height:240px;
			display:flex;
			align-items: center;
			justify-content: center;
			margin-right:50px;
		}

		dl{
			flex:1;
			dt{font-size:42px;font-weight:500}
			dd{
				margin:0px;
				line-height:46px;
				margin-top:15px;
				word-break: keep-all;
				color:#888;
			}
		}
		
	}
	.button:last-child{
		margin-bottom:0px;
	}
	.button01{
		border-color: #00a0e9;
		dt{color:#00a0e9;}
	}
	.button02{
		border-color: #d00f6e;
		dt{color:#d00f6e;}
	}
	.button03 {
		border-color: #0ea3ac;
		dt{color:#0ea3ac;}
	}
}

</style>
