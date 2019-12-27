<template>
    <div>
        <div class="page-header-box">
            <div class="icon-return" @click="$router.go(-1)"></div>
            <div class="right-title ac"><span @click="">保存</span></div>
        </div>
        <div class="main-content-box">
            <div class="top-page-des">
                <h3>公司福利<span>（<em>6</em>/10）</span></h3>
                <p>公司福利待遇好，能够吸引更多人才哦~</p>
            </div>
            <div class="candidate-item-box">
                <ul>
                    <li>公积金</li>
                    <li>五金</li>
                    <li>包吃</li>
                    <li>包住</li>
                    <li class="ac">加班补助</li>
                    <li>餐补</li>
                    <li>话费补助</li>
                    <li class="btn-diy"><em>+</em> 自定义</li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: ""
            },
            defaultVal: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                view: 0,
                searchWord: ""
            };
        },
        methods: {},
        mounted() {

        },

        destroyed() {
        }
    };
</script>
<style lang="less" scoped>
    @import '../../../assets/css/common';
    @import "../../../assets/css/index";

    .top-page-des {
        padding-top: 50rem/@w;
        h3{
            padding-bottom: 12rem/@w;
            .fontSize(40rem);
            span{
                .fontSize(28rem);
                color: #777;
                em{
                    color: @mainColor;
                }
            }
        }
        p{
            .fontSize(24rem);
            color: #7f7f7f;

        }
    }
    .candidate-item-box{
        padding-top: 96rem/@w;
        ul{
            width: 700rem/@w;
            display: flex;
            flex-wrap: wrap;
            li{
                .lineHeight(62rem);
                background: #F8F8FA;
                color: #7f7f7f;
                padding: 0 28.5rem/@w;
                border-radius: 9rem/@w;
                margin: 0 20rem/@w 20rem/@w 0;
                transition: all .2s;
                &.ac{
                    background: #F0F5FF;
                    color: @mainColor;
                }
                &.btn-diy{
                    .height(58rem);
                    .lineHeight(56rem);
                    display: flex;
                    align-items: center;
                    background: transparent;
                    border: 1px dashed #C6C6C6;
                    box-sizing: border-box;
                    em{
                        margin-right: 10rem/@w;
                        .fontSize(38rem);
                    }
                }
            }
        }
    }
</style>
