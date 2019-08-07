<template>
	<div id="pageQuiButton">
		<qui-btn msg="确定" class="small"></qui-btn>
		<qui-btn v-on:btnClickEvent="doSth" msg="我可以点击"></qui-btn>
		<qui-btn msg="下载" class="with-icon">
			<img slot="icon" class="ico" src="logo.png" />
		</qui-btn>
	</div>
</template>
<script type="text/javascript">
	import quiBtn from '../components/quiButton.vue' /*引用*/
	export default {
		name:'pageQuiButton',
		components:{
			'qui-btn':quiBtn /*注册自定义标签*/
		},
		methods:{
			doSth: function(){
				alert('你点击了组件的Click:btnClickEvent');
			}
		}
	}
</script>