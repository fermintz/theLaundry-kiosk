<template>
  <SubLayout title="장비 및 상품선택" title2="사용하실 장비와 상품을 선택해주세요" next="Detail">
    <dl class="myState">
      <dt>나의 포인트</dt>
      <dd>
        <span>
          <strong>142,100</strong> 포인트
        </span>
        <v-btn text>충전하기</v-btn>
      </dd>
    </dl>

    <div class="list">
      <dl class="eqList">
        <dt><span>STEP01</span> 장비선택</dt>
        <dd>
          <div class="item active" v-ripple >
            <span>A유닛 세탁기</span>
            <strong>19Kg</strong>
          </div>
          <div class="item" v-ripple v-for="item in 10" :key="item" >
            <span>A유닛 세탁기</span>
            <strong>19Kg</strong>
          </div>
        </dd>
      </dl>
    
      <dl class="goodsList">
        <dt><span>STEP02</span> 코스선택</dt>
        <dd>
          <div class="item active" v-ripple>
            <div class="number">1</div>
            <div class="itemInfo">
              <div class="name">스피드코스(대량)</div>
              <div class="bottom">
                <span class="option">13분</span>
                <span class="price"><b>3,500</b>원</span>
              </div>
            </div>
          </div>
          <div class="item" v-ripple v-for="item in 10" :key="item">
            <div class="number">1</div>
            <div class="itemInfo">
              <div class="name">스피드코스(대량)</div>
              <div class="bottom">
                <span class="option">13분</span>
                <span class="price"><b>3,500</b>원</span>
              </div>
            </div>
          </div>
        </dd>
      </dl>
    </div>

    <div class="basket">
      <dl class="selected">
        <dt>선택한 상품</dt>
        <dd>01 A유닛 세탁기 19Kg <span>의류 PLUS 50분</span></dd>
      </dl>
      <dl class="price">
        <dt>결제예정금액</dt>
        <dd>
          <span>4,500</span> 원
        </dd>
      </dl>
    </div>
  </SubLayout>

</template>

<script>
import SubLayout from '@/components/SubLayout.vue';

export default {
  components: {
    SubLayout,
  },
  data() {
    return {
      phone: '',
      hashPhone: '',
      phoneNumberPad: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    };
  },
  methods: {
    inputButton(value) {
      this.phone += value.toString();
      this.hashPhone += value.toString();
      setTimeout(() => {
        this.hashPhone = this.hashPhone.replace(/\d/g, '*');
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>

.myState{
  display:flex;
  justify-content: space-between;
  align-items:center;
  background:#292929;
  height:120px;
  padding:0 30px;
  border-radius:15px;
  margin-bottom:30px;

  dt{color:#fff;}
  dd{
    display:flex;
    align-items: center;
    color:#fff;
    span{
      strong{color:#ffba00}
    }
    .v-btn{
      height:60px;
      margin-left:30px;
      font-size:30px;
      background:#fff;
      border-radius:9px;
    }
  }
}

.list{
  flex:1;
  display:flex;
  background:#fff;
  margin-bottom:30px;
  border-radius:15px;
  overflow:hidden;
  box-shadow: 0 0 30px rgba(0,0,0,0.15);
  
  dl{
    display:flex;
    flex:1;
    flex-direction: column;
    background:#f2f2f2;

    dt{
      text-align:center;
      font-size:30px;
      border-bottom:3px solid #e2e2e2;
      height:81px;
      line-height:81px;
      span{
        color:#d22828;
        font-weight:500;
        font-size:28px;
      }
    }
    dd{
      text-align:center;
      font-size:30px;
    }

  }
  .eqList{
    flex:2;
    background:#fff;
    border-right:3px solid #e2e2e2;

    dt{
      background:#fff;
    }

    dd{
      overflow-y:scroll;

      .item{
        border-bottom:3px solid #e2e2e2;
        background: #fff;
        padding:30px;

        span{
          display:block;
          background:#00a0e9;
          color:#fff;
          padding:6px;
          text-align:center;
          border-radius:9px;
          font-size:36px;
        }
        strong{display:block;margin-top:6px;font-weight:normal}
      }

      .item.active{
        background:#00a0e9;
        color:#fff;
        span{background:#fff;color:#00a0e9}
      }
    }
  }
  .goodsList{
    flex:3;
    background:#f2f2f2;

    dt{
      background:#fff;
    }

    dd{
      overflow-y:scroll;

      .item{
        padding:30px;
        border-bottom:3px solid #e2e2e2;
        text-align:left;
        display:flex;
        width:100%;
        background:#fff;

        .number{
          display:flex;
          justify-content: center;
          align-items: center;
          width:100px;
          height:100px;
          border-radius: 50px;
          background:#f2f2f2;
        }
        .itemInfo{
          flex:1;
          margin-left:30px;

          .name{
            font-size:36px;
          }
          
          .bottom{
            flex:1;
            display:flex;
            justify-content: space-between;
            font-size:30px;

            span.option{
              color:#888
            }
            span.price{
              b{color:#d22828}
            }
            
          }
        }
      }

      .item.active{
        border:3px solid #00a0e9;
        .number{background:#00a0e9;color:#fff;}
      }
    }
  }
}

.basket{
  background:#fff;
  border-radius:15px;
  box-shadow: 0 0 30px rgba(0,0,0,0.15);
  overflow: hidden;

  dl{
    height:108px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 30px;

    dt{
      font-size:30px;
      font-weight:500
    }
  }

  .selected{
    background:#f2f2f2;
    border-bottom:3px solid #e2e2e2;
    dd{
      span{
        color:#00a0e9
      }
    }
  }
  .price{
    dd{
      span{
        color:#d22828
      }
    }
  }

}

</style>
