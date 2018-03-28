<template>
<div class="level-item">
	<p class="control">
	
	<input type="text" v-model="key" @change="search">
	<a class="button is-success" @click="search">		  
		<span>Search</span>
		<span class="icon">
		<i class="fa fa-search"></i>
		</span>
	</a>
	
	</p>
</div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default{
	data(){
	return{
		key:null

		
	}
	},

	methods:{
		
		search(){
			if(this.key!==null){
				console.log(this.key)
				this.$store.dispatch('findUsersName', this.key)
			}
			
		}
	}
		

	
}
</script>