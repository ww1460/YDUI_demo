<template>
	<div class="">
        <div v-if="view===0" key="aa">
            <div class="page-header-box">
                <div class="icon-return" @click="$router.go(-1)"></div>
                <div class="page-title"></div>
                <div class="right-title ac" @click="$router.push({ name: 'home' })">完成</div>
            </div>
            <div class="main-content-box">
                <div class="page-main-title">
                    <div class="step-num">2<span>/<em>2</em></span></div>
                    <div class="title-txt">
                        <p>企业认证</p>
                        <p>请上传营业执照完成企业认证</p>
                    </div>
                </div>
                <div class="enterprise-img">
                    <div class="default-img-box">
                        <img class="xj-img" src="../../../assets/imgs/icon-perfect-xj.png" alt="">
                        <p>上传营业执照</p>
                    </div>
                    <p @click="showDemo=true">查看示例</p>
                </div>
                <div class="page-btn"><div class="btn btn-default btn-long" @click="goto()">提交审核</div></div>
            </div>

            <yd-popup v-model="showDemo" position="center" width="90%">
                <div class="preview-demo-box">
                    <div class="preview-demo-img">
                        <img src="../../../assets/imgs/timg.jpeg" alt="">
                        <span>示例</span>
                    </div>
                    <div class="btn btn-short" @click="showDemo=false">我知道了</div>
                </div>
            </yd-popup>

        </div>
        <div v-else-if="view===1" key="1">
        </div>
	</div>
</template>
<script>
export default {
	data() {
		return {
		    view:0,
            showDemo:false
        }
    },
	methods: {
        goto(){
            let num=Math.round(Math.random());
            this.$router.push({name: 'enterpriseResult',replace:true, params: {
                    id: num
                }});
        },
    },
	mounted() {},
    components:{

    },
	destroyed() {}
};
</script>
<style lang="less" scoped="true">
@import '../../../assets/css/common';
@import "../../../assets/css/index";

    .enterprise-img{
        text-align: center;
        padding-top: 73rem/@w;
        .default-img-box{
            .width(400rem);
            .height(530rem);
            background: #ECF2FF;
            border-radius: 20rem/@w;
            margin: 0 auto;
            overflow: hidden;
            .xj-img{
                margin: 178rem/@w auto 22rem/@w;
                .width(121rem);
                .height(121rem);
            }
            >p{
                color: @mainColor;
                .fontSize(30rem);
            }
        }
        >p{
            color: @mainColor;
            .fontSize(26rem);
            padding-top: 26rem/@w;
        }
    }



</style>
