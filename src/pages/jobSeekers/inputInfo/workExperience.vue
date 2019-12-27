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
                        <p><span>完善资料-</span>工作经历</p>
                        <p>为您自动屏蔽相关企业</p>
                    </div>
                </div>
                <ul class="lsf-list-box">
                    <li>
                        <div class="list-left">公司名称</div>
                        <div class="list-right">
                            <p :class="{'active':comName}" @click="inputValue(0)">{{comName?comName:'请填写公司名'}}</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">所在行业</div>
                        <div class="list-right"><p>请选择行业</p></div>
                    </li>
                    <li>
                        <div class="list-left">在职时间</div>
                        <div class="list-right">
                            <div class="more-time-box">
                                <div :class="{'active':datetimeBefore}">
                                    <yd-datetime type="date" v-model="datetimeBefore" :start-year='1990'
                                                 placeholder="在职时间" :init-emit="false"></yd-datetime>
                                </div>
                                <span class="active">-</span>
                                <div :class="{'active':datetimeAfter}">
                                    <yd-datetime type="date" v-model="datetimeAfter" :start-year='1990' placeholder="至今"
                                                 :init-emit="false"></yd-datetime>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">职位</div>
                        <div class="list-right"><p>请选择职位</p></div>
                    </li>
                    <li>
                        <div class="list-left">工作内容</div>
                        <div class="list-right"><p :class="{'active':workContent}" @click="inputValue(1)">
                            {{workContent?workContent:'请填写工作内容'}}</p></div>
                    </li>
                    <li class="no-arrow no-border">
                        <div class="list-left">
                            <yd-checkbox-group v-model="hideCom" color="#3072F6">
                                <yd-checkbox val="1" shape="circle">自动屏蔽公司</yd-checkbox>
                            </yd-checkbox-group>
                        </div>
                    </li>
                </ul>
                <div class="page-btn">
                    <div class="btn btn-default btn-long" @click="$router.push({ name: 'eduExperience' })">下一步</div>
                </div>
            </div>
        </div>
        <div v-else-if="view===1" key="1">
            <textareaBox :type="inputType" :defaultVal="inputDefault" @pageBack="pageBack"></textareaBox>
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
                workContent: "",
                inputType: "",
                inputDefault: "",
                hideCom: [],
                datetimeBefore: "",
                datetimeAfter: ""
            };
        },
        methods: {
            inputValue(key) {
                this.inputType = key ? "rows" : '';
                this.inputDefault = key ? this.workContent : this.comName;
                this.view = 1;
            },
            pageBack(data) {
                if (data) {
                    this.inputType ? this.workContent = data : this.comName = data;
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
</style>
