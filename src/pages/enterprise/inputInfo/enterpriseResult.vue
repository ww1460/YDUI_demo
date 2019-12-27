<template>
    <div class="">
        <div class="result-box-show">
            <div class="page-header-box" v-if="success">
                <div></div>
                <div class="page-title"></div>
                <div class="right-title ac" @click="$router.push({ name: 'home' })">完成</div>
            </div>
            <div class="result-imgs">
                    <div class="enterprise-icon">
                        <img v-if="success" class="img-successs" src="../../../assets/imgs/icon-yes-blur.png" alt="">
                        <img v-else class="img-failure" src="../../../assets/imgs/enterprise-img-3.png" alt="">
                    </div>
                    <p v-show="success" class="success-txt">恭喜认证成功！</p>
                    <p v-show="!success" class="fail-res">信息审核失败</p>
                    <p v-show="!success" class="fail-why">失败原因：非常抱歉，营业执照不合要求</p>
                    <div v-show="!success" class="btn btn-short"  @click="$router.go(-1)">重新认证</div>
            </div>
            <div class="result-bottom">
                <img class="enterprise-img-1" src="../../../assets/imgs/enterprise-img-1.png" alt="">
                <ul>
                    <li>
                       <div>
                           <img class="enterprise-img-bg" src="../../../assets/imgs/enterprise-img-2.png" alt="">
                           <img class="img-brg" src="../../../assets/imgs/enterprise-img-4.png" alt="">
                       </div>
                        <p>免费发布职位</p>
                    </li>
                    <li>
                        <div>
                            <img class="enterprise-img-bg" src="../../../assets/imgs/enterprise-img-2.png" alt="">
                            <img class="img-brg" src="../../../assets/imgs/enterprise-img-6.png" alt="">
                        </div>
                        <p>加V标识</p>
                    </li>
                    <li>
                        <div>
                            <img class="enterprise-img-bg" src="../../../assets/imgs/enterprise-img-2.png" alt="">
                            <img class="img-brg" src="../../../assets/imgs/enterprise-img-5.png" alt="">
                        </div>
                        <p>获得更多曝光</p>
                    </li>
                </ul>
                <p class="cell-me">如果有疑问，请联系客服：<span>0750-3686801</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                success:false
            }
        },
        methods: {},
        mounted() {
            this.success=this.$route.params.id;
        },
        components: {},
        destroyed() {
        }
    };
</script>
<style lang="less" scoped="true">
    @import '../../../assets/css/common';
    @import "../../../assets/css/index";

    .result-box-show{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .result-imgs{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .enterprise-icon {
            .width(150rem);
            .height(150rem);
            border-radius: 50%;
            background: #F8F8F8;
            display: flex;
            justify-content: center;
            align-items: center;
            .img-successs{
                .height(48rem);
                .width(71rem);
            }
            .img-failure{
                .height(86rem);
            }
        }
        .success-txt{
            padding-top: 38rem/@w;
            padding-left: 25rem/@w;
            .fontSize(34rem);
            color: @mainColor;
        }
        .fail-res{
            padding-top: 38rem/@w;
            padding-bottom: 10rem/@w;
            .fontSize(34rem);
        }
        .fail-why{
            padding-bottom: 57rem/@w;
            color: #aaa;
            .fontSize(28rem);
        }
    }

    .result-bottom{
        padding: 0 60rem/@w;
        .enterprise-img-1{
            display: block;
            .width(630rem);
        }
        >ul{
            padding: 42rem/@w 0 63rem/@w;
            display: flex;
            justify-content: space-between;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
               >div{
                   .width(90rem);
                   .height(90rem);
                   position: relative;
                   margin-bottom: 20rem/@w;
                   .enterprise-img-bg{
                       .width(90rem);
                       display: block;
                   }
                   .img-brg{
                       position: absolute;
                       top: 50%;
                       left:50%;
                       transform: translateX(-50%) translateY(-50%);
                       .width(30rem);
                   }
               }

            }
        }
        p{
            .fontSize(22rem);
            color: #AAA;
            text-align: center;
            span{
                color: @mainColor;
            }
        }
        .cell-me{
            padding-bottom: 87rem/@w;
        }

    }
</style>
