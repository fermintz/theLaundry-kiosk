<template>
  <SubLayout 
    title="포인트 충전하기" 
    title2="필요하신 금액을 선택 후 결제해주세요" 
    next="Credit"
  >
    <div class="myState">
      <dl class="myPhone">
        <dt>나의 전화번호</dt>
        <dd>010-****-4561</dd>
      </dl>
      <dl class="myPoint">
        <dt>보유 포인트</dt>
        <dd>0P</dd>
      </dl>
    </div>
    <div class="point-list">
      <v-row>
        <v-col cols="6">
          <div class="item active">
            <dl class="first">
              <dt>
                충전
              </dt>
              <dd>
                <strong>1,000</strong>원
              </dd>
            </dl>
            <div class="divider" />
            <dl>
              <dt>카드 추가적립(5%)</dt>
              <dd>50P</dd>
            </dl>
            <dl>
              <dt>현금 추가적립(10%)</dt>
              <dd>100P</dd>
            </dl>
          </div>
        </v-col>
        <v-col cols="6" v-for="item in 10" :key="item">
          <div class="item">
            <dl class="first">
              <dt>
                충전
              </dt>
              <dd>
                <strong>1,000</strong>원
              </dd>
            </dl>
            <div class="divider" />
            <dl>
              <dt>카드 추가적립(5%)</dt>
              <dd>50P</dd>
            </dl>
            <dl>
              <dt>현금 추가적립(10%)</dt>
              <dd>100P</dd>
            </dl>
          </div>
        </v-col>
      </v-row>
      
    </div>
  </SubLayout>

</template>

<script>
import SubLayout from '@/components/SubLayout.vue';

export default {
  components: {
    SubLayout,
  },
}
</script>

<style lang="scss" scoped>
.myState{
  height:150px;
  background:#fff;
  border-radius:15px;
  display:flex;
  box-shadow: 0 0 30px rgba(0,0,0,0.15);
  margin-bottom:30px;
 
  
  dl{
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    dt{font-size:30px;color:#888}
    dd{margin-top:6px;}
  }

  .myPhone{
    border-right:3px solid #e2e2e2    
  }
  .myPoint{
    dd{
      color:#00a0e9;
    }
  }
}


.point-list{
  flex:1;
  max-height:1175px;
  background:rgba(255,255,255,0.6);
  border-radius:15px;
  box-shadow: 0 0 30px rgba(0,0,0,0.15);
  overflow-y:scroll;
  padding:30px;

  .divider{
    height:3px;
    background:#e2e2e2;
    margin:20px 0;
  }

  .item{
    padding:30px;
    border-radius:15px;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
    background:#fff;

    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      font-size:27px;

      dt{color:#888}
      dd{color:#00a0e9}
    }

    dl.first{
      font-size:36px;

      dt{
        padding:10px 30px;
        background: #f2f2f2;
        border-radius:15px;
        font-size:30px;
        
      }

      dd{
        color:#292929;
        strong{
          color:#00a0e9;
          font-size:42px;
          margin-right:10px;
        }
      }
    }
    dl:last-child{margin-top:6px;}
  }

  .item.active{
    border:3px solid #d22828;
    dl.first{
      dt{background:#d22828;color:#fff;}
    }
  }

}

</style>
