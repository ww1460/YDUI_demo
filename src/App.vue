<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
	</div>
</template>

<script>
    export default {
        name :  'lesanfangApp',
        data () {
            return {
              
            }
        },
        methods: {
            
        },
        mounted(){
            let elWidth=document.documentElement.clientWidth;
            if(elWidth>=768){
                elWidth=768;
                document.body.style.margin='0 auto';
                document.body.style.width="768px";
				document.body.style.border="1px solid #ddd";
            }
            //document.documentElement.style.fontSize=(elWidth/750)*100+'px';
			document.documentElement.style.fontSize=elWidth/15+'px';
        },
        beforeCreate(){

        }
    }
</script>

<style lang="less">
    @import 'assets/css/common';
</style>
