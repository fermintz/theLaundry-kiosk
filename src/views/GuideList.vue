<template>
	<div class="default">
		<div class="top">
			<v-btn icon @click="$router.push('/')">
					<v-icon>mdi-home</v-icon>
			</v-btn>
			<dl class="headTitle">
					<dt>이용안내</dt>
					<dd>궁금하신 장비의 메뉴얼을 선택해주세요</dd>
			</dl>
		</div>
		<div class="contents">
            <div class="guideMenu">
                <div class="tip">
                    매장 내 냉난방기는 세탁기 또는 건조기 사용시 자동으로 작동하고 있습니다. 쾌적한 공간에서 여유있는 시간을 즐겨주세요
                </div>
                <div class="item" v-ripple @click="$router.push('GuideView')">
                    <div class="icon">
                        <img src="@/assets/img/guide-icon01.png">
                    </div>
                    <dl class="text">
                        <dt>회원가입 후 충전하기</dt>
                        <dd>핸드폰번호를 통하여 회원가입 및 포인트 적립이 이루어집니다</dd>
                    </dl>
                    <div class="arrow">
                        <v-icon>mdi-chevron-right</v-icon>
                    </div>
                </div>
                <div class="item" v-ripple @click="$router.push('GuideView')">
                    <div class="icon">
                        <img src="@/assets/img/guide-icon02.png">
                    </div>
                    <dl class="text">
                        <dt>세탁기 사용방법</dt>
                        <dd>키오스크를 이용한 세탁기 사용방법을 안내해드립니다</dd>
                    </dl>
                    <div class="arrow">
                        <v-icon>mdi-chevron-right</v-icon>
                    </div>
                </div>
                <div class="item" v-ripple @click="$router.push('GuideView')">
                    <div class="icon">
                        <img src="@/assets/img/guide-icon03.png">
                    </div>
                    <dl class="text">
                        <dt>건조기 사용방법</dt>
                        <dd>키오스크를 이용한 건조기 사용방법을 안내해드립니다</dd>
                    </dl>
                    <div class="arrow">
                        <v-icon>mdi-chevron-right</v-icon>
                    </div>
                </div>
            </div>
		</div> <!--contents -->

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

.default{
    .contents{
        padding-bottom:50px;

        .guideMenu{
            flex:1;
            background:rgba(255,255,255,0.5);
            padding:50px;
            border-radius:15px;
            overflow-y:scroll;
        }

        .tip{
            background:rgba(0,0,0,0.7);
            padding:30px;
            margin-bottom:30px;
            border-radius:15px;
            font-size:30px;
            color:#fff;
            word-break: keep-all;
        }
        .item{
            flex:1;
            display:flex;
            align-items: center;
            background:#fff;
            padding:30px;
            margin-bottom:30px;
            border-radius:15px;
            box-shadow: 0 0 30px rgba(0,0,0,0.15);
    
            dl{
                flex:1;
                margin:0 30px;
                dt{font-weight:500}
                dd{
                    font-size:30px;
                    color:#888;
                    margin-top:10px;
                    word-break: keep-all;
                }
            }
            .icon{
                display:flex;
                align-items: center;
                justify-content: center;
                width:210px;
                height:210px;
            }
            .arrow{
                display:flex;
                align-items: center;
                justify-content: center;
                height:210px;
                background:#f2f2f2;
                border-radius:6px;
                
                .v-icon{font-size:48px;}
            }
        }
    }
}
</style>
