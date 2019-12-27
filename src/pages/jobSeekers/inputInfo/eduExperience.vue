<template>
	<div class="">
        <div v-if="view===0" key="aa">
            <div class="page-header-box">
                <div class="icon-return" @click="$router.go(-1)"></div>
                <div class="page-title"></div>
                <div class="right-title" @click="$router.push({ name: 'home' })">完成</div>
            </div>
            <div class="main-content-box">
                <div class="page-main-title">
                    <div class="step-num">2<span>/<em>2</em></span></div>
                    <div class="title-txt">
                        <p><span>完善资料-</span>教育经历</p>
                        <p>详细的教育经历能为简历加分哦</p>
                    </div>
                </div>
                <ul class="lsf-list-box">
                    <li>
                        <div class="list-left">学校名称</div>
                        <div class="list-right">
                            <p></p>
                            <p :class="{'active':schoolName}" @click="inputValue()">{{schoolName?schoolName:'请填写学校名称'}}</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">最高学历</div>
                        <div class="list-right">
                            <p :class="{'active':schooling.value}" @click="schooling.show=true">{{schooling.value?schooling.value:'请选择学历'}}</p>
                            <yd-popup v-model="schooling.show" position="bottom" height="auto">
                                <div class="pop-up-box">
                                    <div>
                                        <div class="select-type-box">
                                            <ul>
                                                <li v-for="item,index in schooling.data" :key="index" @click="chooseItem(item,'schooling')">{{item.label}}</li>
                                                <li @click="schooling.show=false">取消</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </yd-popup>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">选择专业<span>(选填)</span></div>
                        <div class="list-right">
                            <p>中专及大专以上选择</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">在校时间</div>
                        <div class="list-right">
                            <div class="more-time-box">
                                <div :class="{'active':datetimeBefore}">
                                    <yd-datetime type="date" v-model="datetimeBefore" :start-year='1990'
                                                 placeholder="入学时间" :init-emit="false"></yd-datetime>
                                </div>
                                <span class="active">-</span>
                                <div :class="{'active':datetimeAfter}">
                                    <yd-datetime type="date" v-model="datetimeAfter" :start-year='1990' placeholder="毕业时间"
                                                 :init-emit="false"></yd-datetime>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="page-btn"><div class="btn btn-default btn-long">完成</div></div>
            </div>
        </div>
        <div v-else-if="view===1" key="1">
            <textareaBox :defaultVal="inputDefault" @pageBack="pageBack"></textareaBox>
        </div>
	</div>
</template>
<script>
    import textareaBox from "./input-info";
export default {
	data() {
		return {
		    view:0,
            datetimeBefore: "",
            datetimeAfter: "",
            schooling: {
                show: false,
                value: "",
                data: [
                    {
                        label: '初中及以下'
                    },
                    {
                        label: '中专/中技'
                    },
                    {
                        label: '高中'
                    },
                    {
                        label: '大专'
                    },
                    {
                        label: '本科'
                    },
                    {
                        label: '硕士'
                    },
                    {
                        label: '博士'
                    }
                ]
            },
            inputDefault:"",
            schoolName:""
        }
    },
	methods: {
        chooseItem(item,key){
            this[key].value=item.label;
            this[key].show=false;
        },
        inputValue() {
            this.inputDefault = this.schoolName;
            this.view = 1;
        },
        pageBack(data) {
            if (data) {
                this.schoolName = data;
            }
            this.view = 0;
        }
    },
	mounted() {},
    components:{
        textareaBox
    },
	destroyed() {}
};
</script>
<style lang="less" scoped="true">
@import '../../../assets/css/common';
@import "../../../assets/css/index";
.lsf-list-box{
	padding-top: 68rem/@w;
}
</style>
