<template>
    <div class="default">
        <div class="contents">
            <div class="title">
                <v-icon>mdi-check-circle</v-icon>
                <h2>결제가 완료되었습니다</h2>
                <p><b>A유닛세탁기</b>로 돌아가 세탁코스를 다시 한번 확인 후 <b>시작버튼</b>을 눌러주세요</p>
            </div>
            <div class="detail">
                <dl>
                    <dt>회원번호</dt>
                    <dd>010-8525-4561</dd>
                </dl>
                <dl class="eqName">
                    <dt>선택한 장비</dt>
                    <dd>A유닛 세탁기</dd>
                </dl>
                <dl>
                    <dt>선택한 상품</dt>
                    <dd>쾌속냉수 / 10분</dd>
                </dl>
                <div class="divider" />
                <dl>
                    <dt>상품가격</dt>
                    <dd>5,000원</dd>
                </dl>
                <dl>
                    <dt>결제방법</dt>
                    <dd>현금</dd>
                </dl>
                <div class="divider" />
                <dl>
                    <dt>사용된 포인트</dt>
                    <dd>2,300원</dd>
                </dl>
                <dl class="bonus">
                    <dt>적립된 포인트(10%)</dt>
                    <dd>5,000원</dd>
                </dl>
                <dl class="total">
                    <dt>남은 포인트</dt>
                    <dd>23,000원</dd>
                </dl>              
            </div>
        </div>

        <div class="guide">
            <span><b>5</b>초 후 메인화면으로 이동합니다</span>
            <v-btn text>메인으로</v-btn>
        </div>

        <div class="footerBtns">
            <v-btn text class="point" @click="$router.push('Point')">포인트 충전하기</v-btn>
            <v-btn text class="product" @click="$router.push('Product')">상품 선택하기</v-btn>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.title{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:60px 50px;

    .v-icon{
        font-size:150px;
        color:#fff;
    }
    h2{
        font-size:72px;
        line-height:72px;
        color:#fff;
        font-weight:500;
        letter-spacing:-0.7px;
        font-family:'NotoSansKR';
        margin-top:30px;
    }
    p{
        text-align: center;
        font-size:36px;
        line-height:46px;
        margin-top:30px;
        color:#fff;
        font-weight:400;
        font-family:'NotoSansKR';
        word-break:keep-all;

        b{
            color:#d0fd00;
            font-weight:500;
        }
    }
}

.detail{
    flex:1;
    background:#fff;
    border-radius: 15px;
    padding:50px;

    overflow-y:scroll;
    box-shadow: 0 0 30px rgba(0,0,0,0.15);
    
    dl{
        display:flex;
        justify-content: space-between;
        margin-bottom:20px;
        
        dt{font-size:30px;color:#888}
        dd{
            font-weight:500;
        }
    }

    dl.eqName{
        dd{
            background:#00a0e9;
            color:#fff;
            padding:0 15px;
        }
    }
    dl.bonus{
        dd{
            color:#00a0e9;
        }
    }
    dl.total{
        dd{
            color:#d32078
        }
    }

    dl:last-child{margin-bottom:0px;}

    .divider{
        height:3px;
        background:#e2e2e2;
        margin:30px 0;
    }
}

.guide{
    text-align: center;;
    z-index:3;
    padding:60px 50px;
    
    span{
        display:block;
        font-size:36px;
        font-weight:500;

        b{
            color:#d32078
        }
    }
    .v-btn{
        background:rgba(0,0,0,0.4);
        border-radius:30px;
        height:60px;
        padding:0 60px;
        color:#fff;
        margin-top:15px;
        font-size:30px;
        font-weight:400;
    }
}

.default{
    .footerBtns{
        padding-top:0px;

        .v-btn.point{
            background:#d32078;
            color:#fff;
            border-radius:15px 0 0 15px;
        }
        .v-btn.product{
            background:#292929;
            color:#fff;
            border-radius:0 15px 15px 0;
        }
    }
}

</style>