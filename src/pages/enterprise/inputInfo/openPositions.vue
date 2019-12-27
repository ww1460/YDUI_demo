<template>
    <div class="">
        <div v-if="view===0" key="0">
            <div class="page-header-box">
                <div class="icon-return" @click="$router.go(-1)"></div>
                <div class="page-title"></div>
                <div class="right-title ac">完成</div>
            </div>
            <div class="main-content-box">
                <div class="page-main-title">
                    <div class="step-num">2<span>/<em>2</em></span></div>
                    <div class="title-txt">
                        <p>发布职位</p>
                        <p>将根据您的要求推荐人才</p>
                    </div>
                </div>
                <ul class="lsf-list-box">
                    <li>
                        <div class="list-left">职位</div>
                        <div class="list-right">
                            <p>请选择职位</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">招聘人数</div>
                        <div class="list-right">
                            <p :class="{'active':expRequire.value}" @click="expRequire.show=true">
                                {{expRequire.value?expRequire.value:'请选择招聘人数'}}</p>
                            <yd-popup v-model="expRequire.show" position="bottom" height="auto">
                                <div class="pop-up-box">
                                    <div>
                                        <div class="select-type-box">
                                            <ul>
                                                <li v-for="item,index in expRequire.data" :key="index"
                                                    @click="chooseItem(item,'expRequire')">{{item.label}}
                                                </li>
                                                <li @click="expRequire.show=false">取消</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </yd-popup>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">经验要求</div>
                        <div class="list-right">
                            <p :class="{'active':expRequire.value}" @click="expRequire.show=true">
                                {{expRequire.value?expRequire.value:'请选择经验要求'}}</p>
                            <yd-popup v-model="expRequire.show" position="bottom" height="auto">
                                <div class="pop-up-box">
                                    <div>
                                        <div class="select-type-box">
                                            <ul>
                                                <li v-for="item,index in expRequire.data" :key="index"
                                                    @click="chooseItem(item,'expRequire')">{{item.label}}
                                                </li>
                                                <li @click="expRequire.show=false">取消</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </yd-popup>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">学历要求</div>
                        <div class="list-right">
                            <p :class="{'active':schooling.value}" @click="schooling.show=true">
                                {{schooling.value?schooling.value:'请选择学历要求'}}</p>
                            <yd-popup v-model="schooling.show" position="bottom" height="auto">
                                <div class="pop-up-box">
                                    <div>
                                        <div class="select-type-box">
                                            <ul>
                                                <li v-for="item,index in schooling.data" :key="index"
                                                    @click="chooseItem(item,'schooling')">{{item.label}}
                                                </li>
                                                <li @click="schooling.show=false">取消</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </yd-popup>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">薪资范围</div>
                        <div class="list-right"><p @click="">请选择薪资</p></div>
                    </li>
                    <li>
                        <div class="list-left">职位描述</div>
                        <div class="list-right"><p :class="{'active':des}" @click="view=1">{{des?des:'请填写职位描述'}}</p></div>
                    </li>
                    <li>
                        <div class="list-left">工作地点</div>
                        <div class="list-right">
                            <p :class="{'active':city.model}" @click.stop="city.show = true">
                                {{city.model?city.model:'工作地点'}}</p>
                            <yd-cityselect v-model="city.show" :callback="result1"
                                           :items="city.district"></yd-cityselect>
                        </div>
                    </li>
                </ul>
                <div class="page-btn">
                    <div class="btn btn-default btn-long" @click="$router.replace({ name: 'perfectInfo' })">下一步</div>
                </div>
            </div>
        </div>
        <div v-else key="99">
            <inputPage @pageBack="pageBack" type="rows" placeholder="1.工作内容  2.任务要求 3.特别说明" :defaultVal="des"></inputPage>
        </div>
    </div>
</template>
<script>
    import District from 'ydui-district/dist/jd_province_city_area_id';
    import inputPage from "./input-info.vue"
    export default {
        data() {
            return {
                view:0,
                expRequire: {
                    show: false,
                    value: "",
                    data: [
                        {label: '1年'},
                        {label: '1-3年'},
                        {label: '3-5年'},
                        {label: '5年以上'}
                    ]
                },
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
                des:"",
                city: {
                    model: "",
                    show: false,
                    district: District
                },
            };
        },
        methods: {
            result1(ret) {
                this.city.model = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
            },
            chooseItem(item, key) {
                this[key].value = item.label;
                this[key].show = false;
            },
            inputValue(value,type,placeholder) {

                this.view = 1;
            },
            pageBack(data) {
                if (data) {
                    this['des']=data;
                }
                this.view = 0;
            }
        },
        mounted() {
        },
        components:{
            inputPage
        },
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
