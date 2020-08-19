<template>
  <div class="default">
    <PasswordPad ref="password" />
    <Loading/>
    <Agree ref="agree"/>

    <!-- top -->
      <SubLayout 
        title="전화번호 입력"
        title2="포인트적립 및 사용을 위한 전화번호를 입력해주세요"
        next="Product"
      > 
        <div class="phoneView">
        <div class="box numberView">
          <div class="text">
            <span @click="$refs.agree.open(true)">이용약관</span>과 <span>개인정보취급방침</span>에 동의하시면 휴대전화번호를 입력 후 아래 다음버튼을
            터치해주세요
          </div>
          <div class="divider" />
          <div class="number">
            <!-- 010-8525-4561 -->
            010 - {{ hashPhone }}
          </div>
        </div>
        <div class="box numberPad">
          <div class="row" v-for="(numbers, rowIndex) in phoneNumberPad" :key="rowIndex">
            <!-- <v-btn text @click="$refs.password.dialog(true)">1</v-btn> -->
            <v-btn text v-for="(number, columIndex) in numbers" :key="columIndex" @click="inputButton(number)">{{
              number
            }}</v-btn>
            <!-- <v-btn text>3</v-btn> -->
          </div>
          <div class="row">
            <v-btn text class="replace">초기화</v-btn>
            <v-btn text @click="inputButton(0)">0</v-btn>
            <v-btn text><v-icon>mdi-arrow-left</v-icon></v-btn>
          </div>
        </div>
      </div>

      </SubLayout>
   
  </div>
</template>

<script>
import PasswordPad from '@/components/password-pad.vue';
import SubLayout from '@/components/SubLayout.vue';
import Loading from '@/components/loading.vue';
import Agree from '@/components/agree.vue';

export default {
  components: {
    PasswordPad,
    SubLayout,
    Loading,
    Agree,
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

.contents {
  flex: 1;

  .phoneView {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 120px;
    background: rgba(255, 255, 255, 0.3);
    border:3px solid rgba(255,255,255,0.3);
    margin-bottom: 30px;
    border-radius: 15px;

    .numberView {
      margin-bottom: 30px;

      .text {
        text-align: center;
        word-break: keep-all;
        font-size: 33px;

        span {
          color: #00a0e9;
        }
      }
      .divider {
        margin: 50px 0;
        height: 3px;
        background: #e2e2e2;
      }
      .number {
        font-size: 55px;
        font-weight: 500;
				text-align: center;
				vertical-align: center;
      }
    }

    .numberPad {
      display: flex;
      flex-direction: column;
      flex: 1;
      background: #fff;

      .row {
        display: flex;
        flex: 1;
        margin: 6px 0;

        .v-btn {
          flex: 1;
          height: 100%;
          font-size: 42px;
          background: #fff;
          margin: 0 6px;
          border: 3px solid #e2e2e2;
          border-radius: 15px;
        }
        .v-icon {
          font-size: 48px;
        }
        .replace {
          font-size: 36px;
        }
      }
    }
  }
}
</style>
