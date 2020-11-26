<template>
  <v-dialog 
    v-model="visible"
    width="560"
    overlay-opacity="0.8"
    transition="slide-x-transition"
  >
    <div class="dialog"
    >
      <div class="password-pad">
        <div class="pad-header">
          <div class="pad-title">
          비밀번호 입력
          </div>
          <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
          <div class="numberView">
            <div class="number active">1</div>
            <div class="number">2</div>
            <div class="number"></div>
            <div class="number"></div>
          </div>
          <div class="tip">
            비밀번호를 입력해주세요
          </div>
        </div>
        <div class="numberPad">
          <div class="row" v-for="(numbers, rowIndex) in numberPad" :key="rowIndex">
            <v-btn text v-for="number in numbers" :key="number">{{ number }}</v-btn>
          </div>
          <div class="row">
            <v-btn text class="replace">초기화</v-btn>
            <v-btn text>0</v-btn>
            <v-btn text><v-icon>mdi-arrow-left</v-icon></v-btn>
          </div>
          <div class="pwFind">
            <v-btn text>
              <v-icon>mdi-lock</v-icon>
              <span>비밀번호 찾기</span>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
			visible: false,
			numberPad: [
				[1,2,3],
				[4,5,6],
				[7,8,9],
			]
    };
  },
  methods: {
    open(value) {
      this.visible = value;
		},
		inputNumber(char) {
			this.$emit(char);
		}
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  .password-pad {
    width:560px;
    position:absolute;
    bottom:240px;
    background: #fff;
    border-radius:15px;
    overflow:hidden;
    
    // 기본 비밀번호 입력 #00a0e9
    // 비밀번호 등록 #431cb3
    // 비밀번호 확인 #1f9103

    .pad-header{
      position:relative;
      background:#00a0e9; 
      padding:30px;

      .pad-title{
        color:#fff;
        font-family:'NotoSansKR';
        font-weight:400;
        font-size: 30px;
        letter-spacing:-0.7px;
        margin-bottom:30px;
      }

      .v-btn{
        position:absolute;
        right:30px;
        top:30px;
        width:60px;
        height:60px;
        background:rgba(0,0,0,0.3);

        .v-icon{font-size:36px;color:#fff;}
      }

      .numberView{
        display:flex;
        justify-content: center;
        align-items: center;
        padding:45px 0;

        .number{
          margin:0 15px;
          width:45px;height:45px;
          border-radius:30px;
          background:#fff;
          display:flex;
          justify-content: center;
          align-items: center;
          font-size:27px;
          font-weight:500;
          font-family:'NotoSansKR';
          color:#292929
        }
        .number.active{
          background:#292929;
        }
      }

      .tip{
        color:#fff;
        font-size:30px;
        text-align:center;
        font-family:'NotoSansKR'
      }
    }

    .numberPad {
      display: flex;
      flex-direction: column;
      flex: 1;
      background: #fff;
      padding:30px;

      .pwFind{
        margin-top:30px;

        .v-btn{
          width:100%;
          height:72px;
          border-radius:15px;
          border:2px solid #d2d2d2;
          background: rgb(194,194,194);
          background: linear-gradient(0deg, rgba(194,194,194,0.8) 0%, rgba(255,255,255,1) 100%);


          .v-icon{font-size:36px;}
          span{
            font-size:27px;
            font-family:'NotoSansKR';
            margin-left:15px;
            letter-spacing:-0.7px;
          }
        }
      }
      
      .row {
        display: flex;
        flex: 1;
        margin: 6px 0;

        .v-btn {
          flex: 1;
          height: 72px;
          font-size: 42px;
          background: #fff;
          margin: 0 6px;
          border: 2px solid #d2d2d2;
          border-radius: 15px;
          background: rgb(194,194,194);
          background: linear-gradient(0deg, rgba(194,194,194,0.8) 0%, rgba(255,255,255,1) 100%);
        }
        .v-icon {
          font-size: 48px;
        }
        .replace {
          font-size: 28px;
          letter-spacing:0px;
          font-family:'NotoSansKR'
        }
      }
    }
  }
}
</style>
