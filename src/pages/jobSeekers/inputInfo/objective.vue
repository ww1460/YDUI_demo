<template>
    <div class="">
        <div v-if="view===0" key="0">
            <div class="page-header-box">
                <div class="icon-return" @click="$router.go(-1)"></div>
                <div class="page-title"></div>
                <div class="right-title ac" @click="completeObj.show=true">完成</div>
            </div>
            <div class="main-content-box">
                <div class="page-main-title">
                    <div class="step-num">2<span>/<em>2</em></span></div>
                    <div class="title-txt">
                        <p>求职意向</p>
                        <p>能为您精准匹配期望职位</p>
                    </div>
                </div>
                <ul class="lsf-list-box">
                    <li>
                        <div class="list-left">期望职位</div>
                        <div class="list-right">
                            <p>请选择期望职位</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">期望行业</div>
                        <div class="list-right"><p @click="view=1">请选择行业</p></div>
                    </li>
                    <li>
                        <div class="list-left">工作城市</div>
                        <div class="list-right">
                            <p :class="{'active':city.model}" @click.stop="city.show = true">
                                {{city.model?city.model:'期望工作的城市'}}</p>
                            <yd-cityselect v-model="city.show" :callback="result1"
                                           :items="city.district"></yd-cityselect>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">期望薪资</div>
                        <div class="list-right">
                            <p @click="salaryConfig.show=true" :class="{'active':salaryConfig.startingSalary.alias||salaryConfig.endingSalary.alias}" >
                                {{salaryConfig.startingSalary.alias||salaryConfig.endingSalary.alias?
                                `${salaryConfig.startingSalary.alias}-${salaryConfig.endingSalary.alias}`:"请选择期望薪资"}}
                            </p>
                            <yd-popup v-model="salaryConfig.show" position="bottom" height="auto">
                                <div class="pop-up-box">
                                    <div class="pop-up-main-box">
                                        <div class="pop-up-header">
                                            <span class="cancel-btn"></span>
                                            <span class="pop-up-header-title">期望薪资</span>
                                            <span class="confirm-btn" @click="salaryConfig.show=false">确定</span>
                                        </div>
                                        <div class="double-select-box">
                                            <div>
                                                <scroll-picker
                                                        :maps="salaryConfig.list"
                                                        :map.sync="salaryConfig.startingSalary"
                                                ></scroll-picker>
                                            </div>
                                            <div>
                                                <scroll-picker
                                                        :maps="salaryConfig.list"
                                                        :map.sync="salaryConfig.endingSalary"
                                                ></scroll-picker>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </yd-popup>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">求职状态</div>
                        <div class="list-right">
                            <p :class="{'active':jobStatus.Name}" @click="jobStatus.show=true">
                                {{jobStatus.Name?jobStatus.Name:'请选择求职状态'}}</p>
                            <yd-popup v-model="jobStatus.show" position="bottom" height="auto">
                                <div class="pop-up-box">
                                    <div>
                                        <div class="select-type-box">
                                            <ul>
                                                <li v-for="item,index in jobStatus.data" :key="index"
                                                    @click="chooseItem(item,'jobStatus')">{{item.Name}}
                                                </li>
                                                <li @click="jobStatus.show=false">取消</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </yd-popup>
                        </div>
                    </li>
                    <li>
                        <div class="list-left">工作性质</div>
                        <div class="list-right">
                            <p :class="{'active':natureWork.value.length}" @click="natureWork.show=true">
                                {{natureWork.value.length?natureWork.value.toString():'请选择工作性质'}}</p>
                            <yd-popup v-model="natureWork.show" position="bottom" height="auto">
                                <div class="pop-up-box">
                                    <div class="pop-up-main-box">
                                        <div class="pop-up-header">
                                            <span class="cancel-btn"></span>
                                            <span class="pop-up-header-title">工作性质<em>（可多选）</em></span>
                                            <span class="confirm-btn" @click="confirmChoice">确定</span>
                                        </div>
                                        <ul class="multiple-choice-box">
                                            <li :class="{'ac':natureWork.selectedList.includes(item.Name)}" v-for="item in natureWork.data" @click="choiceItem(item)">{{item.Name}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </yd-popup>
                        </div>
                    </li>
                </ul>
                <div class="page-btn">
                    <div class="btn btn-default btn-long" @click="$router.push({ name: 'workExperience' })">下一步</div>
                </div>
                <yd-popup v-model="completeObj.show"  position="center" width="auto">
                    <div class="pop-up-box">
                        <div class="pop-up-main-box">
                            <div class="complete-modal">
                                <p class="complete-modal-title">恭喜您完成初步资料填写</p>
                                <p class="complete-modal-p1">获得职位卡</p>
                                <p class="complete-modal-p3">
                                    <img src="../../../assets/imgs/icon-compel.jpg" alt="">
                                    <span>x2</span>
                                </p>
                                <p class="complete-modal-p2">继续完善资料，获得 <span>职位卡x2</span></p>
                                <div class="btn-box">
                                    <div>先看看推荐简历</div>
                                    <div>
                                        完善资料，匹配<br/>
                                        更精准
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </yd-popup>
            </div>
        </div>
        <div v-else key="99">
            <choosingSome @pageBack="view=0"></choosingSome>
        </div>
    </div>
</template>
<script>
    require("../../../components/scroll-picker");
    import District from 'ydui-district/dist/jd_province_city_area_id';
    import choosingSome from "../../enterprise/inputInfo/choosingSome";
	var hostUrl = "http://localhost:8890/";
    export default {
        data() {
            return {
                view:0,
                city: {
                    model: "",
                    show: false,
                    district: District
                },
                district: "",
                jobStatus: {
                    show: false,
                    value: "离职-随时到岗",
					name:"",
					id:0,
                    data: []
                },
                natureWork: {
                    show: false,
                    value: [],
                    selectedList:[],
					name:"",
					id:0,
                    data: []
                },
                completeObj:{
                    show: false,
                },
                salaryConfig:{
                    show:false,
					name:"",
					id:0,
                    list:[
                    ],
                    startingSalary:{},
                    endingSalary:{}
                }
            };
        },
		created() {
			var url = hostUrl+"api/user/index/getConf";
			var postData= {'type':'purpose'};
			this.axios.get(url,{params:postData}).then((response)=>{
				console.log(response.data);
				var dataList = response.data.data;
				console.log(dataList.salaryConfig);
				console.log(typeof dataList.salaryConfig);
				this.salaryConfig.list = dataList.salaryConfig;
				this.jobStatus.data = dataList.jobStatus;
				this.natureWork.data = dataList.natureWork;
			}).catch((response)=>{
				console.log(response);
			})
		},
        methods: {
            result1(ret) {
                console.log(ret);
				console.log("ddddddd");
                this.city.model = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
            },
            chooseItem(item, key) {
                this[key].value = item.Name;
				this[key].Name = item.Name;
				this[key].Id = item.Id;
                this[key].show = false;
            },
            choiceItem(item){
                let index=this.natureWork.selectedList.indexOf(item.Name);
                if(index!==-1){
                    this.natureWork.selectedList.splice(index,1);
                }else{
                    this.natureWork.selectedList.push(item.Name)
                }
            },
            confirmChoice(){
                this.natureWork.value=JSON.parse(JSON.stringify(this.natureWork.selectedList));
                this.natureWork.show=false;
            }
        },
        mounted() {
        },
        components:{
            choosingSome
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
