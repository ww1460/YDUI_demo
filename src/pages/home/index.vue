<template>
    <div class="lsf-wrap">
        <div>
            <div class="page-header-box">
                <div></div>
                <div class="page-title">乐三方</div>
                <div class="right-title"></div>
            </div>
            <div class="main-content-box">
                <ul class="lsf-list-box">
                    <li @click="goto('baseInfo')">
                        <div class="list-left">求职者-填写资料</div>
                    </li>
                    <li @click="goto('comBaseInfo')">
                        <div class="list-left">企业-填写资料</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goto(name){
                this.$router.push({name: name,replace:true});
            }
        },
        mounted() {

        },
        components:{

        },
        destroyed() {}
    };
</script>
<style lang="less" scoped="true">
    @import '../../assets/css/common';
    @import "../../assets/css/index";
</style>
