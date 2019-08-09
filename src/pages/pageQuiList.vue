<template>
	<ul>
		<qui-list></qui-list>
		
	</ul>
</template>

<script type="text/javascript">
	import quiList from '../components/quiList.vue'
	export default{
		name:'pageQuiList',
		components:{
			'qui-list':quiList
		}
	}
</script>