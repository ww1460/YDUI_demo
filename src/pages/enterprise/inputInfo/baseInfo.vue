<template>
	<div class="lsf-wrap">
		<div v-if="view==0" key="a">
			<div class="page-header-box">
				<div class="icon-return" @click="$router.go(-1)"></div>
				<div class="right-title"><span @click="goto">下一步：发布职位</span></div>
			</div>
			<div class="page-warm-prompt">
				<p>温馨提示：您填写的资料仅用于系统招聘信息的精确匹配，乐三方对您的资料绝对保密！</p>
				<img src="../../../assets/imgs/icon-close-green.png" alt="">
			</div>
			<div class="main-content-box">
				<div class="page-main-title">
					<div class="step-num">
						1<span>/<em>2</em></span>
					</div>
					<div class="title-txt">
						<p>企业基本资料</p>
						<p>联系人及公司基本信息</p>
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
						<div class="list-right"><p :class="{'active':userName}" @click="inputValue(userName,'userName','请输入姓名')">{{userName?userName:'请输入姓名'}}</p></div>
					</li>
					<li>
						<div class="list-left">我的公司</div>
						<div class="list-right"><p :class="{'active':comName}" @click="inputValue(comName,'comName','请输入当前就职公司名')">{{comName?comName:'当前就职公司名'}}</p></div>
					</li>
					<li>
						<div class="list-left">我的职务</div>
						<div class="list-right"><p :class="{'active':''}" @click="">明确的职务，更有信任感</p></div>
					</li>
					<li>
						<div class="list-left">公司地址</div>
						<div class="list-right"><p :class="{'active':''}" @click="">选择公司位置</p></div>
					</li>
					<li>
						<div class="list-left">门牌号</div>
                        <div class="list-right"><p :class="{'active':houseNumber}" @click="inputValue(houseNumber,'houseNumber','请输入门牌号')">{{houseNumber?houseNumber:'例如：A座11楼1109'}}</p></div>
					</li>
					<li>
						<div class="list-left">公司福利</div>
						<div class="list-right"><p :class="{'active':''}" @click="$router.push({name: 'choosingTag',replace:true})">好的福利待遇更吸引人才</p></div>
					</li>
					<li>
						<div class="list-left">我的邮箱<span>(选填)</span></div>
                        <div class="list-right"><p :class="{'active':emailAddress}" @click="inputValue(emailAddress,'emailAddress','请输入邮箱地址')">{{emailAddress?emailAddress:'用于接收简历'}}</p></div>
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
			<inputPage @pageBack="pageBack" :placeholder="inputPlaceholder" :defaultVal="inputDefault"></inputPage>
		</div>
	</div>
</template>
<script>
import inputPage from "./input-info.vue"
export default {
	data() {
		return {
			view:0,
			userName:"",
            comName:"",
            showMask:false,
			showCharacterImage:false,
            inputDefault:"",
            inputType:"",
            inputPlaceholder:"",
            houseNumber:"",
            emailAddress:""
		};
	},
	methods: {
		goto(){
		    this.$router.push({name: 'openPositions',replace:true});
		},
        selectHeadPortait(){
            this.showMask=true;
        },
        inputValue(value,type,placeholder) {
            this.inputDefault = value;
            this.inputType = type;
            this.inputPlaceholder=placeholder
            this.view = 1;
        },
        pageBack(data) {
            if (data) {
                this[this.inputType]=data;
            }
            this.view = 0;
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
	.page-warm-prompt{
		display: flex;
		background: #FFF9EC;
		p{
			color: #EB6100;
			.padding(14rem,90rem,19rem,42rem);
		}
		img{
			margin: 20rem/@w;
			.height(20rem);
		}
	}
    .page-main-title{
        padding-bottom: 30rem/@w;
    }
</style>
