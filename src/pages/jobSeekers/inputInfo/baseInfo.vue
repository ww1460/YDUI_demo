<template>
	<div class="lsf-wrap">
		<div v-if="view==0" key="a">
			<div class="page-header-box">
				<div class="icon-return" @click="$router.go(-1)"></div>
				<div class="right-title" @click="goto">下一步：求职意向</div>
			</div>
			<div class="main-content-box">
				<div class="page-main-title">
					<div class="step-num">
						1<span>/<em>2</em></span>
					</div>
					<div class="title-txt">
						<p>填写基本资料</p>
						<p>向老板介绍一下自己吧</p>
					</div>
				</div>
				<div class="resume-status">
					<div class="_intro-info">
						<p>简历是否公开</p>
						<div>
							<span :class="{'active':!switch1}">隐藏</span>
							<span class="switch-btn">
								<yd-switch v-model="switch1"></yd-switch>
							</span>
							<span :class="{'active':switch1}">公开</span>
						</div>
					</div>
					<div class="_intro-txt" :class="{'hide':!switch1}">
						{{switch1?'公开：简历设置为公开，所有企业和猎头都可以看到您的简历与您联系，能让您更快找到工作。':'简历隐藏：除了你主动沟通的企业，不会有其他企业看到你，你可以随时在【隐私设置】中关闭隐藏。'}}
					</div>
				</div>
				<ul class="lsf-list-box">
					<li>
						<div class="list-left">头像</div>
						<div class="list-right" @click="selectHeadPortait">
							<div><img class="face-img" src="../../../assets/imgs/face.png" alt="" /></div>
						</div>
					</li>
					<li>
						<div class="list-left">姓名</div>
						<div class="list-right"><p :class="{'active':userName}" @click="view=1">{{userName?userName:'请输入姓名'}}</p></div>
					</li>
					<li class="no-arrow">
						<div class="list-left">性别</div>
						<div class="list-right">
							<div class="gender-box"><span :class="{'ac':gender===1}" @touchstart="gender=1">男</span><span :class="{'ac':gender===2}" @click="gender=2">女</span></div>
						</div>
					</li>
					<li>
						<div class="list-left">出生年月</div>
						<div class="list-right" :class="{'active':datetime4}">
							<yd-datetime type="date" v-model="datetime4" :start-year='1950' placeholder="请选择出生年月，用于投递" :init-emit="false"></yd-datetime>
						</div>
					</li>
					<li>
						<div class="list-left">最高学历</div>
						<div class="list-right">
							 <p :class="{'active':schooling.Name}" @click="schooling.show=true">{{schooling.Name?schooling.Name:'请选择学历'}}</p>
							 <yd-popup v-model="schooling.show" position="bottom" height="auto">
							     <div class="pop-up-box">
							     	<div>
							     		<div class="select-type-box">
							     			<ul>
							     				<li v-for="item,index in schooling.data" :key="index" @click="chooseItem(item,'schooling')">{{item.Name}}</li>
							     				<li @click="schooling.show=false">取消</li>
							     			</ul>
							     		</div>					
							     	</div>				
							     </div>
							 </yd-popup>
						</div>
					</li>
					<li>
						<div class="list-left">工作经验</div>
						<div class="list-right">
							<p :class="{'active':workExp.Name}" @click="workExp.show=true">{{workExp.Name?workExp.Name:'请选择工作经验'}}</p>
							<yd-popup v-model="workExp.show" position="bottom" height="auto">
							    <div class="pop-up-box">
							    	<div>
							    		<div class="select-type-box">
							    			<ul>
							    				<li v-for="(item,index) in workExp.data" :key="index" @click="chooseItem(item,'workExp')">{{item.Name}}</li>
							    				<li @click="workExp.show=false">取消</li>
							    			</ul>
							    		</div>					
							    	</div>				
							    </div>
							</yd-popup>							
						</div>
					</li>
				</ul>
				<div class="page-btn"><div class="btn btn-default btn-long" @click="goto">下一步</div></div>
			</div>
			
			<yd-popup v-model="showMask" position="bottom" height="auto">
			    <div :class="['pop-up-box']">
			    	<div v-show="!showCharacterImage">
			    		<div class="warm-demo">
			    			<div class="corrert-demo">
			    				<img src="../../../assets/imgs/face.png" alt="">
			    				<div>
			    					<p>正确示范</p>
			    					<p>上传真实头像能极大提高求<br/>职成功率哦~</p>
			    				</div>
			    			</div>
			    			<div class="error-demo">
			    				<p>错误示范</p>
			    				<ul>
			    					<li>
			    						<img src="../../../assets/imgs/face_sf_2.png" alt="">
			    						<p>动物照</p>
			    					</li>
			    					<li>
			    						<img src="../../../assets/imgs/face_sf_3.png" alt="">
			    						<p>五官遮挡</p>
			    					</li>
			    					<li>
			    						<img src="../../../assets/imgs/face_sf_4.png" alt="">
			    						<p>模糊</p>
			    					</li>
			    					<li>
			    						<img src="../../../assets/imgs/face_sf_5.png" alt="">
			    						<p>衣着不当</p>
			    					</li>
			    				</ul>
			    			</div>
			    		</div>
			    		<div class="select-type-box">
			    			<ul>
			    				<li>拍照</li>
			    				<li>从相册上传</li>
			    				<li @click="showCharacterImage=true">选择个性头像</li>
			    				<li @click="showMask=false">取消</li>
			    			</ul>
			    		</div>					
			    	</div>				
			    	<div class="select-head-portait" v-show="showCharacterImage"> 
			    		<p>个性头像</p>
			    		<ul>
			    			<li>
			    				<img src="../../../assets/imgs/face-m1.png" alt="">
			    			</li>
			    			<li>
			    				<img src="../../../assets/imgs/face-w1.png" alt="">
			    			</li>
			    			<li>
			    				<img src="../../../assets/imgs/face-m2.png" alt="">
			    			</li>
			    			<li>
			    				<img src="../../../assets/imgs/face-w2.png" alt="">
			    			</li>
			    		</ul>
			    		<ul>
			    			<li>
			    				<img src="../../../assets/imgs/face-m3.png" alt="">
			    			</li>
			    			<li>
			    				<img src="../../../assets/imgs/face-w3.png" alt="">
			    			</li>
			    			<li>
			    				<img src="../../../assets/imgs/face-m4.png" alt="">
			    			</li>
			    			<li>
			    				<img src="../../../assets/imgs/face-m4.png" alt="">
			    			</li>
			    		</ul>
			    		<p class="cancel-box" @click="showCharacterImage=false">取消</p>
			    	</div>			
			    </div>
			</yd-popup>
		</div>
		
		<div v-else-if="view===1" key="b">
			<inputPage @pageBack="pageBack" placeholder="请输入姓名" :defaultVal="userName"></inputPage>
		</div>
	</div>
</template>
<script>
import inputPage from "./input-info.vue";
var hostUrl = "http://localhost:8890/";
export default {
	data() {
		return {
			view:0,
			userName:"",
			gender:1,
			switch1:true,
			showMask:false,	
			showCharacterImage:false,
			datetime4:"",
			datetime6:"",
			schooling:{
				show:false,
				name:"",
				id:0,
				value:"",
				data:[]
			},
			workExp:{
				show:false,
				name:"",
				id:0,
				value:"",
				data:[]
			}
		};
	},
	created() {
		var postData = {'type':'base'};
		this.axios.get(hostUrl+'api/user/index/getConf',{params:postData}).then((response)=>{
			console.log(response.data);
			var dataList = response.data.data;
			this.schooling.data = dataList.edu;
			this.workExp.data = dataList.workExp;
		}).catch((response)=>{
			console.log(response);
		})
	},
	methods: {
		goto(){
			//设置参数
			var postData = {};
			postData.switch1 = this.switch1;
			postData.truename = this.userName;
			postData.sex = this.gender;
			postData.birthday = this.datetime4;
			postData.eduValue = this.schooling.value;
			postData.eduID = this.schooling.id;
			postData.workExpValue = this.workExp.value;
			postData.workExpID = this.workExp.id;
			postData.token = "93d27150f06724a0a1390f31b75bae3193d27150f06724a0a1390f31b75bae31";
			console.log(postData);
			return false;
			var url = hostUrl+"api/user/index/saveBaseUser";
			
			this.axios.post(url,this.$qs.stringify(postData)).then(res => {
			   console.log(res.data);
			   if(res.data.code!=0){
				   this.$router.push({name: 'objective'});  //跳转界面
			   }else{
				   alert(res.data.msg);
			   }
			   
			})
			.catch(function(error) {
			   console.log(error);
			 });
		},
		selectHeadPortait(){
			this.showMask=true;
		},
		pageBack(data){
			this.userName=data?data:'';
			this.view=0;
		},
		chooseItem(item,key){		
			this[key].value=item.Name;
			this[key].Name=item.Name;
			this[key].id=item.Id;
			this[key].show=false;
		},
        callback(){

		}
	},
	mounted: function() {},
	components:{inputPage},
	destroyed() {}
};
</script>
<style lang="less" scoped="true">
@import '../../../assets/css/common';
@import "../../../assets/css/index";
.resume-status {
	padding-bottom: 56rem / @w;
	._intro-info {
		.lineHeight(120rem);
		margin-top: 28rem / @w;
		display: flex;
		justify-content: space-between;
		font-size: 30rem / @w;
		p {
			color: #333;
		}
		> div {
			flex: 1;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			> span {
				color: @grayColor;
				&.active {
					color: @mainColor;
				}
				&.switch-btn {
					display: block;
					.width(100rem);
					.margin(0, 20rem, 0, 20rem);
				}
			}
		}
	}
	._intro-txt {
		background: #f0f5ff;
		color: @mainColor;
		.fontSize(24rem);
		.lineHeight(36rem);
		padding: 17rem / @w;
		border-radius: 10rem / @w;
		position: relative;
		&:before {
			content: '';
			position: absolute;
			right: 20rem / @w;
			top: -10rem / @w;
			transform: rotate(45deg);
			border-style: solid;
			border-width: 12rem / @w;
			border-color: #f0f5ff transparent transparent #f0f5ff;
			transition: all .3s;
		}
		&.hide{
			&:before{
				right: 220rem / @w;
			}
		}
	}
}

.yd-switch{
	color:@mainColor !important;
}
</style>
