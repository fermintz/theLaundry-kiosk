<template>
    <v-dialog
        v-model="visible"
        width="900"
        overlay-opacity="0.8"
        transition="slide-x-transition"
    >
        <div class="dialog-wrap">
            <div class="dialog-head">
                <span>
                    {{this.title}}
                </span>
                <v-btn icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
            <div class="dialog-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed autem possimus, quae unde et omnis vero cupiditate illo accusamus rem facilis numquam fuga consectetur magnam, quaerat deserunt optio exercitationem.
            </div>
            <div class="dialog-btns">
                <v-btn text class="cancle">취소</v-btn>
                <v-btn text class="ok">확인</v-btn>
            </div>
        </div>
    </v-dialog>
</template>

<script>
export default {
    props:[
        'title',
    ],
    data(){
        return{
            visible:false,
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
.dialog-wrap{
    font-size:36px;
    font-family:'NotoSansKR';
    font-weight:400;
    letter-spacing:-0.7px;
    border-radius:15px;
    overflow:hidden;

    .dialog-head{
        display:flex;
        align-items: center;
        justify-content: space-between;
        background:#f2f2f2;
        height:100px;
        padding:0 30px;
        border-bottom:3px solid #e2e2e2;

        span{
            font-weight:500;
            color:#292929;
        }
        .v-btn{
            width:60px;
            height:60px;
            color:#fff;

            .v-icon{
                font-size:36px;
                color:#fff;
            }
        }
    }
    .dialog-body{
        flex:1;
        padding:30px;
        font-size:30px;
        background:#fff;
        max-height:1200px;
        overflow-y:scroll;
    }
    .dialog-btns{
        background:#fff;
        display:flex;
        align-items: center;
        justify-content: flex-end;
        height:100px;
        border-top:3px solid #e2e2e2;

        .v-btn{
            font-size:30px;
            height:100px;
            width:150px;
            font-family:'NotoSansKR';
            border-radius:0px;
            letter-spacing:-0.7px;
        }
        .v-btn.cancle{
            color:#aaa;
        }
    }
}

</style>