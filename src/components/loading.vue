<template>
    <v-dialog
        v-model="visible"
        width="60%"
        overlay-opacity="0.6"
    >
        <div class="loading">
            <v-progress-circular
                indeterminate
                color="#0088c6"
                size="100"
                width="10"
            />
            <p>
                사용자정보를 불러오고 있습니다
            </p>
        </div>
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

.loading{
    background:rgba(0,0,0,0.8);
    padding:50px;
    text-align:center;
    overflow: hidden;
    border-radius:15px;

    p{
        margin:0px;padding:0px;
        margin-top:45px;
        font-size:30px;
        font-weight:400;
        font-family:'NotoSansKR';
        color:#fff;
    }
}

</style>