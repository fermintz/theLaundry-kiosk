<template> 
	<div class="stateBar">
		<div class="shop">
			<div class="shopName" @click="$router.push('Main')">
				페이오티 금정구점
			</div>
			<div class="shopNumber">
				010-8525-4561
			</div>
		</div>
		<div class="time"  @click="$router.push('Login')">
			15:32
		</div>
	</div>
</template>

<style lang="scss" scoped>
.stateBar{
	display:flex;
	background:#292929;
	height:72px;
	color:#fff;
	font-size:24px;
	font-family:'NotoSansKR';
	letter-spacing:-0.7px;
	justify-content:space-between;
	align-items: center;
	padding:0 30px;

	.shop{
		display:flex;
		.shopName{margin-right:30px;}
	}
}
</style>