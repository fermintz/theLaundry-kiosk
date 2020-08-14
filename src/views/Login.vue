<template>
    <div class="default">
        <Message/>
        <div class="contents">
            <dl class="loginTitle">
                <dt>관리자로그인</dt>
                <dd>ADMINISTRATOR LOGIN</dd>
            </dl>

            <div class="loginForm">
                <dl class="item">
                    <dt>아이디</dt>
                    <dd>
                        <input type="text"/>
                    </dd>
                </dl>
                <dl class="item">
                    <dt>비밀번호</dt>
                    <dd>
                        <input type="password"/>
                    </dd>
                </dl>
                <dl class="item leftText">
                    <dt>현금적립률</dt>
                    <dd>
                        <input type="text"/>
                    </dd>
                    <dd class="text">
                        <span>%</span>
                    </dd>
                </dl>
                <dl class="item leftText">
                    <dt>카드적립률</dt>
                    <dd>
                        <input type="text"/>
                        
                    </dd>
                    <dd class="text">
                        <span>%</span>
                    </dd>
                </dl>
                
                <div class="option">
                    <h4>옵션여부</h4>
                    <ul>
                        <li>
                            <input type="checkbox"><span>카드결제 사용</span>
                        </li>
                        <li>
                            <input type="checkbox"><span>현금결제 사용</span>
                        </li>
                        <li>
                            <input type="checkbox"><span>결제 및 사용 안내페이지 숨기기</span>
                        </li>
                    </ul>
                </div>

                <v-btn text @click="$router.push('/')">
                    로그인
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import Message from '@/components/message.vue';

export default {
    components:{
        Message,
    }
}
</script>

<style lang="scss" scoped>

.loginTitle{
    text-align:center;
    padding:100px 0;
    dt{
        font-size:100px;
        line-height:100px;
        color:#fff;
        font-weight:500;
    }
    dd{
        margin-top:30px;
        font-size:40px;
        line-height:40px;
        color:rgba(255,255,255,0.7);
    }
}

.loginForm{
    flex:1;
    background:rgba(255,255,255,0.3);
    border-radius:15px;
    padding:50px;
    border:3px solid rgba(255,255,255,0.3);

    dl.item{
        flex:1;
        background:#fff;
        box-shadow: 0 0 30px rgba(0,0,0,0.15);
        border-radius:15px;
        display:flex;
        align-items: center;
        height:120px;
        position: relative;
        overflow: hidden;
        margin-bottom:30px;

        dt{
            position:absolute;
            left:30px;
            font-size:30px;
            color:#888;
        }
        dd{
            flex:1;
            input{
                width:100%;
                height:120px;
                padding-left:220px;
                padding-right:120px;
            }
        }
        dd.text{
            flex:none;
            position:absolute;
            right:0px;
            width:120px;
            text-align:center;
        }
    }

    dl.item.leftText{
        input{text-align: right;;}
    }

    .v-btn{
        height:120px;
        background:#292929;
        color:#fff;
        font-size:36px;
        width:100%;
        border-radius:15px;
    }

    .option{
        margin:30px 0;
        background:#fff;
        border-radius:15px;
        box-shadow: 0 0 30px rgba(0,0,0,0.15);
        overflow: hidden;

        h4{
            display:flex;
            padding:0 30px;
            height:90px;
            background:#f2f2f2;
            align-items: center;;
            font-size:33px;
        }

        ul{
            list-style: none;
            padding:30px;;
            margin:0;

            li{
                display:flex;
                align-items: center;
                margin-bottom:30px;
                input{
                    width:36px;height:36px;
                    vertical-align: middle;
                }
                span{
                    margin-left:20px;
                    font-size:33px;
                    font-weight:500;
                    font-family:'NotoSansKR';
                }
            }
            li:last-child{margin-bottom:0px;}
        }
    }
}



</style>