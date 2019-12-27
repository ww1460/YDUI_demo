<template>
    <div>
        <div class="search-words-page">
            <div class="top-search-box main-content-box">
                <div class="input-search-box">
                    <img class="icon-result-box" src="../../../assets/imgs/icon-search.png" alt="">
                    <input type="text" v-model="searchWord">
                    <img v-show="searchWord.length" @click="searchWord=''" class="icon-clear-box" src="../../../assets/imgs/icon-clear.png" alt="">
                </div>
                <span class="cancel-search-box" @click="$emit('pageBack')">取消</span>
            </div>
            <div class="search-result-box">
                <ul class="main-content-box">
                    <li>
                        <p>互联网</p>
                        <p>互联网/IT/电子/通信</p>
                    </li>
                    <li>
                        <p>互联网</p>
                        <p>互联网/IT/电子/通信</p>
                    </li>
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
                view:0,
                searchWord:""
            };
        },
        methods: {},
        mounted() {

        },

        destroyed() {
        }
    };
</script>
<style lang="less">
    @import '../../../assets/css/common';
    @import "../../../assets/css/index";

    .search-words-page {
        display: flex;
        flex-direction: column;
        height: 100vh;
        .top-search-box {
            background: #fff;
            padding-top: 48rem/@w;
            padding-bottom: 8rem/@w;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .input-search-box {
                display: flex;
                align-items: center;
                .height(60rem);
                .width(570rem);
                padding: 0 13rem/@w 0 23rem/@w;
                background: #F6F6FA;
                border-radius: 30rem/@w;
                img {
                    .height(25rem);
                }
                .icon-clear-box{
                    margin-right: 10rem/@w;
                }
                input {
                    .height(60rem);
                    padding: 0 16rem/@w;
                    flex: 1;
                    border: none;
                }
            }
            .cancel-search-box {
                color: #808080;
                .fontSize(24rem);
            }
        }
        .search-result-box {
            flex: 1;
            height: 100%;
            overflow: auto;
            ul {
                li {
                    position: relative;
                    .border-bottom-half();
                    p:first-of-type {
                        .padding(49rem, 0, 15rem, 0);
                        .fontSize(28rem);
                    }
                    p:last-of-type {
                        color: #AAA;
                        .fontSize(22rem);
                        padding-bottom: 37rem/@w;
                    }
                }
            }
        }
    }

</style>
