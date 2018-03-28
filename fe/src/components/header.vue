<template>

<div style="float:right">
	<span  style="display:inline-block; width:100px" class="icon is-medium "> 
	<i class="fa fa-envelope"></i>
	</span>
	<span  style="display:inline-block; width:100px"  class="icon is-medium">
	<i class="fa fa-bell"></i>
	</span>
	<a class="button is-success" @click="logout">
		<span class="icon">
			<i class="fa fa-sign-out" ></i>
			</span>
			<span>{{title}}</span>
			
		</span>
		
	</a>
</div>
</template>
<script>
export default{
	data(){
		return{
			title:'Login'
		}
	},

	methods:{

		logout(){
			if(this.title=='Logout'){
				this.title='Login'
			}else{
				this.title='Logout'
			}
			this.$store.dispatch('clearAllUsers')
			this.$router.push({ name: 'login' })
			}
		}
	}

</script>