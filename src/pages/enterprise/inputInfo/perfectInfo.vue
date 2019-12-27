<template>
    <div class="">
        <div v-if="view===0" key="0">
            <div class="page-header-box">
                <div class="icon-return" @click="$router.go(-1)"></div>
                <div class="page-title"></div>
                <div class="right-title">完成</div>
            </div>
            <div class="main-content-box">
                <div class="page-main-title">
                    <div class="step-num">1<span>/<em>2</em></span></div>
                    <div class="title-txt">
                        <p>完善资料</p>
                        <p>公司信息将被审核，请确保资料真实有效</p>
                    </div>
                </div>
                <div class="perfect-user-img">
                    <div class="default-img">
                        <img class="person-img" src="../../../assets/imgs/icon-perfect-person.png" alt="">
                        <img class="xj-img" src="../../../assets/imgs/icon-perfect-xj.png" alt="">
                    </div>
                </div>
                <ul class="lsf-list-box">
                    <li>
                        <div class="list-left">公司全称</div>
                        <div class="list-right">
                            <div class="list-right"><p :class="{'active':comName}" @click="inputValue(comName,'comName','请填写公司全称')">{{comName?comName:'请填写公司全称'}}</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">公司简称</div>
                        <div class="list-right"><p :class="{'active':comShortName}" @click="inputValue(comShortName,'comShortName','请填写公司简称')">{{comShortName?comShortName:'请填写公司简称'}}</p></div>
                    </li>
                    <li>
                        <div class="list-left">所属行业</div>
                        <div class="list-right"><p>请选择公司所属行业</p></div>
                    </li>
                    <li>
                        <div class="list-left">人员规模</div>
                        <div class="list-right"><p>请选择人员规模</p></div>
                    </li>
                </ul>
                <div class="page-btn">
                    <div class="btn btn-default btn-long" @click="$router.replace({ name: 'enterpriseCertification' })">下一步</div>
                </div>
            </div>
        </div>
        <div v-else-if="view===1" key="1">
            <textareaBox :defaultVal="inputDefault" :placeholder="inputPlaceholder" @pageBack="pageBack"></textareaBox>
        </div>
    </div>
</template>
<script>
    import textareaBox from "./input-info";

    export default {
        data() {
            return {
                view: 0,
                comName: "",
                comShortName: "",
                inputType: "",
                inputDefault: "",
                inputPlaceholder: ""
            };
        },
        methods: {
            inputValue(value,type,placeholder) {
                this.inputDefault = value;
                this.inputType = type;
                this.inputPlaceholder=placeholder;
                this.view = 1;
            },
            pageBack(data) {
                if (data) {
                    this[this.inputType]=data;
                }
                this.view = 0;
            }
        },
        mounted() {
        },
        components: {textareaBox},
        destroyed() {
        }
    };
</script>
<style lang="less" scoped="true">
    @import '../../../assets/css/common';
    @import "../../../assets/css/index";

    .lsf-list-box {
        padding-top: 68rem/@w;
    }
    .perfect-user-img{
        padding-top: 78rem/@w;
        .default-img{
            .width(200rem);
            .height(200rem);
            margin: 0 auto;
            position: relative;
            .person-img{
                display: block;
                width: 100%;
            }
            .xj-img{
                position: absolute;
                .height(50rem);
                right: 0;
                bottom: 0;
            }
        }
    }
</style>
