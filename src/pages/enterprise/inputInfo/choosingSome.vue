<template>
    <div>
        <div  v-if="view===0" key="aa">
            <div class="page-header-box">
                <div class="icon-return" @click="$emit('pageBack',0)"></div>
                <div class="page-title">选择行业</div>
                <div class="right-title ac" @click="$emit('pageBack')">保存</div>
            </div>
            <div class="main-content-box search-input-box">
                <div class="to-search-btn" @click="view=1">
                    <img src="../../../assets/imgs/icon-search.png" alt="">输入行业名称
                </div>
                <div v-show="true">
                    <p class="choose-box">已选（<span> 3 </span>/3）</p>
                    <ul class="choose-list">
                        <li><span>电子商务</span><i></i></li>
                        <li><span>互联网</span><i></i></li>
                        <li><span>电子/半导体/集成电路</span><i></i></li>
                    </ul>
                </div>

            </div>
            <div class="choose-data-list" ref="chooseDataBox" :style="{'height':chooseDataHeight+'px'}">
                <div class="choose-data-main" :style="{'height':chooseDataHeight+'px'}">
                    <ul>
                        <li class="ac">互联网/IT/电子/通信</li>
                        <li>房地产</li>
                        <li>金融业</li>
                        <li>建筑业</li>
                        <li>制造业</li>
                        <li>农林牧渔</li>
                        <li>批发/零售/贸易</li>
                        <li>专业服务</li>
                        <li>文化/体育/娱乐</li>
                    </ul>
                </div>
                <div class="choose-data-details-list" :style="{'height':chooseDataHeight+'px'}">
                    <ul>
                        <li><span>电子/半导体/集成电路</span></li>
                        <li class="ac"><span>互联网</span></li>
                        <li class="ac"><span>IT服务</span></li>
                        <li><span>计算机软件</span></li>
                        <li><span>计算机硬件</span></li>
                        <li><span>企业服务</span></li>
                        <li><span>人工智能</span></li>
                        <li><span>通信/网络设备</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <searchWord v-else @pageBack="view=0" key="searchWord"></searchWord>
    </div>

</template>
<script>
    import searchWord from "./searchWord"
    export default {
        props:{
            type:{
                type:String,
                default:""
            },
            defaultVal:{
                type:String,
                default:""
            }
        },
        data() {
            return {
                view:0,
                searchVal:"",
                chooseDataHeight:0
            };
        },
        methods: {
            submitHandler(data){
                console.log(data)
            }
        },
        mounted(){
            this.chooseDataHeight=document.documentElement.clientHeight-this.$refs.chooseDataBox.offsetTop;
        },
        components:{
            searchWord
        },
        destroyed() {
        }
    };
</script>
<style lang="less">
    @import '../../../assets/css/common';
    @import "../../../assets/css/index";

    .search-input-box{
        .yd-search-input{
            padding:0;
            background: transparent;
            >.search-input{
                background: #F6F6FA;
                .height(60rem);
            }
        }
        .to-search-btn{
            background: #F6F6FA;
            .height(60rem);
            .fontSize(24rem);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #C8C7CC;
            border-radius: 30rem/@w;
            img{
                .height(25rem);
               margin-right: 10rem/@w;
            }
            margin-bottom: 26rem/@w;
        }
        .choose-box{
            .fontSize(22rem);
           padding-bottom: 23rem/@w;
            span{
                color: @mainColor;
            }
        }
        .choose-list{
            display: flex;
            flex-wrap: wrap;
            li{
                border-radius: 5rem/@w;
                .height(50rem);
                .lineHeight(50rem);
                background: #F0F5FF;
                color: @mainColor;
                margin-right: 20rem/@w;
                padding-left: 18rem/@w;
                margin-bottom: 20rem/@w;
                display: flex;
                align-items: center;
                i{
                    display: block;
                    .height(50rem);
                    .width(50rem);
                    background: url("../../../assets/imgs/icon-close-blur.png") no-repeat center;
                    background-size: 18rem/@w;
                }
            }
        }
        padding-bottom: 20rem/@w;
    }
    .choose-data-list{
        display: flex;
        overflow: hidden;
        .choose-data-main{
            flex:0 0 270rem/@w;
            border-top: 2rem/@w solid #f8f8fa;
            overflow: auto;
            ul{
                li{
                    display: flex;
                    align-items: center;
                    .fontSize(24rem);
                    .height(120rem);
                    .padding(0,43rem,0,43rem);
                    &.ac{
                        position: relative;
                        &:before{
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 0;
                            .height(37rem);
                            .width(6rem);
                            background: @mainColor;
                            transform: translateY(-50%);
                        }
                    }
                }
            }
        }
        .choose-data-details-list{
            flex: 1;
            background: #F8F8FA;
            overflow: auto;
            ul{
                li{
                    display: flex;
                    align-items: center;
                    .height(120rem);
                    .fontSize(24rem);
                    .padding(0,50rem,0,80rem);
                    &.ac{
                        color: @mainColor;
                        position: relative;
                        &:before{
                            content: "";
                            position: absolute;
                            top: 50%;
                            right: 52rem/@w;
                            .height(24rem);
                            .width(34rem);
                            transform: translateY(-50%);
                            background: url("../../../assets/imgs/icon-yes-blur.png") no-repeat center;
                            background-size: 34rem/@w 24rem/@w;
                        }
                    }
                }
            }
        }
    }

</style>
