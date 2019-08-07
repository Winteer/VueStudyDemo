<template>
	<button class="qui-btn" v-on:click="btnClickEvent">
		<slot name="icon"></slot><!--重点-->
		<span>{{msg}}</span>
	</button>
</template>

<script>
	export default {
		props:{
			msg:{
				default:'下载'
			}
		},
		methods:{	//绑定事件
			btnClickEvent:function(){
				alert("先弹出默认方案");
				this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
			}
		}
		// data:function(){
		// 	return{
		// 		msg:'下载'
		// 	}
		// }
	}
</script>

<style scoped>
/*	@import './css/reset.import.css';
	@import './css/qui-btn.import.css';*/
</style>