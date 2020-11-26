<template>
  <DefaultLayout
    @done="nextStep"
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
        <v-col cols="6" v-for="(item, index) in chageItem" :key="index" >
          <div class="item" :class="{active:chageItemActive === index}" @click="itemActive(index)">
            <dl class="first">
              <dt>
                충전
              </dt>
              <dd>
                <strong>{{item.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}}</strong>원
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
  </DefaultLayout>

</template>

<script>
import DefaultLayout from '@/components/layout/default.vue';

export default {
  components: {
    DefaultLayout,
  },

  data(){
    return{
      chageItemActive:0,
      chageItem:[1000,2000,5000,10000,20000,30000,40000,50000]
    }
  },
  methods:{
    itemActive(index){
      this.chageItemActive = index
    },
    nextStep(){
      this.$router.push('Credit')
    }
  }
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
  background:rgba(255,255,255,1);
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
    border:2px solid #c2c2c2;
    box-shadow: 8px 8px 15px rgba(0,158,230,0.6);
    background: rgb(194,194,194);
    background: linear-gradient(0deg, rgba(194,194,194,1) 0%, rgba(255,255,255,1) 100%);
    
    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      font-size:26px;

      dt{color:#595959}
      dd{color:#00a0e9}
    }

    dl.first{
      font-size:36px;

      dt{
        padding:10px 30px;
        background: #fff;
        border-radius:15px;
        font-size:30px;
        
      }

      dd{
        color:#292929;
        strong{
          color:#d22828;
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
