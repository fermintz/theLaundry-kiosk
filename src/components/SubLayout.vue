<template>
    <div class="default">
        <div class="top">
            <v-btn icon @click="$router.push('/')">
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <dl class="headTitle">
                <dt>{{this.title}}</dt>
                <dd>{{this.title2}}</dd>
            </dl>
        </div>
        <!-- top -->
        <div class="contents">
            <slot />
        </div>

    <div class="footerBtns">
			<v-btn text class="back">
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>
			<v-btn text class="next" @click="$router.push(nextButton)">다음</v-btn>
		</div>
        
    </div>
</template>

<script>
export default {
  props:[
    'title', 'title2', 'next'
  ],

  data(){
    return{
      nextButton:this.next
    }
  }
}
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
</style>