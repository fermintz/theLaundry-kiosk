<template> 
	<div class="stateBar">
		<div class="shop">
			<div class="shopName" @click="$router.push('modalTest')">
				페이오티 금정구점
			</div>
			<div class="shopNumber" @click="$router.push('/')">
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
	min-height:70px;
	font-size:24px;
	font-family:'NotoSansKR';
	letter-spacing:-0.7px;
	justify-content:space-between;
	align-items: center;
	padding:0 30px;
	color:#fff;
	background:#292929;

	.shop{
		display:flex;
		.shopName{margin-right:30px;}
	}
}
</style>