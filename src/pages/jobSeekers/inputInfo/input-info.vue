<template>
    <div>
        <div class="page-header-box">
            <div class="icon-return" @click="$emit('pageBack',0)"></div>
            <div class="right-title ac" @click="$emit('pageBack',type?textareaValue:username)">保存</div>
        </div>
        <div class="main-content-box">
            <div class="input-box" v-if="!type">
                <input type="text" v-model="username" placeholder="请输入">
            </div>

            <div class="row-line-wrap" v-else-if="type==='rows'">
                <textarea v-model="textareaValue" name="" id="" cols="30" rows="10"></textarea>
                <p class="number-total"><span>{{textareaValue.length}}</span> /1600</p>
                <div class="demo-box">
                    <p>模板示例</p>
                    <p>
                        在任职期间，主要负责***项目，取得了***的成绩，我在整个项目中的主要贡献是***。
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
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
                username: "",
                textareaValue:""
            };
        },
        methods: {},
        mounted(){
            this.type?this.textareaValue=this.defaultVal:this.username=this.defaultVal;
        },
        destroyed() {
        }
    };
</script>
<style lang="less" scoped="true">
    @import '../../../assets/css/common';
    @import "../../../assets/css/index";

    .input-box {
        position: relative;
        .border-bottom-half();
        input {
            display: block;
            border: none;
            width: 100%;
            .lineHeight(80rem);
            .fontSize(28rem);
        }
    }

    .row-line-wrap {
        //padding-top: 20rem/@w;
        textarea{
            padding: 20rem/@w;
            display: block;
            width: 100%;
            .height(464rem);
            .fontSize(28rem);
            line-height: 1.5;
            border: none;
        }
        .number-total{
            text-align: right;
            line-height: 2;
            .fontSize(28rem);
            padding-bottom: 40rem/@w;
            span{
                color: @mainColor;
            }
        }
        .demo-box{
            padding: 23rem/@w 38rem/@w;
            background: #F8F8FA;
            p:first-of-type{
                .lineHeight(81rem);
                position: relative;
                .fontSize(28rem);
                .border-bottom-half();
            }
            p:last-of-type{
                padding: 20rem/@w 0;
                .lineHeight(40rem);
                .fontSize(24rem);
            }
        }
    }
</style>
