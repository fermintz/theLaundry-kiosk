<template>
    <v-dialog
        v-model="visible"
        width="800"
        overlay-opacity="0.9"
    >
        <div class="credit-modal">
            <div class="guide-image">
                <img src="@/assets/img/cash-animation.gif"> <!-- card-animation.gif -->
            </div>
            <div class="info-detail">
                <p>현금결제기에 현금을 투입해주세요</p>
                <dl class="price">
                    <dt>결제예정금액</dt>
                    <dd>
                        <strong class="num">5,000</strong>
                        <span>원</span>
                    </dd>
                </dl>
                <dl class="push_price">
                    <dt>삽입된 금액</dt>
                    <dd>
                        <strong class="num">0</strong>
                        <span>원</span>
                    </dd>
                </dl>
            </div>
            <div class="divider"/>
            <ul class="guide-text">
                <li>※ 보안을 위해 60초 후 자동으로 종료됩니다</li>
                <li>※ 초과 투입된 지폐는 반환되지 않습니다 주의해주세요</li>
            </ul>
            <div class="counter" >
                <span>60</span>
            </div>
        </div> <!-- credit-modal -->
    </v-dialog>
</template>


<script>
export default {
    data(){
        return{
            visible:true,
        }
    },
    methods:{
        open(value){
            this.visible = value 
        }
    }
}
</script>

<style lang="scss" scoped>

.credit-modal{
    position:relative;
    background:#fff;
    font-size:36px;
    font-family:'NotoSansKR';
    padding:45px;
    letter-spacing:-0.7px;

    .guide-image{
        background:#fff;
        border:3px solid #e2e2e2;
        min-height:560px;
        margin-bottom:45px;
        border-radius:15px;
        overflow: hidden;
        display:flex;
        align-items: center;
        justify-content: center;

        image{height:100%;}
    }

    .info-detail{
        p{
            margin:0px;
            padding:0px;
            background:rgba(225,19,126,0.1);
            text-align:center;
            padding:10px;
            margin-bottom:30px;
            font-size:33px;
            border-radius:15px;
        }

        dl{
            display:flex;
            justify-content: space-between;
            align-items: center;;
            margin-bottom:15px;
            dt{font-size:30px;color:#888;}
            dd{
                strong{margin-right:15px}
            }
        }
        dl:last-child{margin-bottom:0px;}

        dl.push_price{
            dd{
                strong{
                    color:#e1137e
                }
            }
        }
    }

    .divider{
        height:3px;
        background:#e2e2e2;
        margin:45px 0;
    }

    .guide-text{
        margin-top:30px;
        list-style: none;
        padding:0px;

        li{
            font-size:27px;
            color:#888;
            margin-bottom:10px;
        }
        li:last-child{margin-bottom:0px;}
    }

    .counter{
        position:absolute;
        right:75px;
        top:75px;

        span{
            display:flex;
            justify-content: center;
            align-items: center;
            width:90px;
            height:90px;
            border-radius:50%;
            background:#e2e2e2;
            font-size:30px;
            font-weight:500
        }
    }
}

</style>