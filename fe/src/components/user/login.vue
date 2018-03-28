<template>
<div>
	<label class="label">Username</label>
	<p class="control has-icon">
		<input class="input" type="text" v-model="currentUser.username" placeholder="Username"/>
		<i class="fa fa-envelope"></i>
	</p>

	<label class="label">Password</label>
	<p class="control has-icon">
		<input class="input" v-model="currentUser.password" type="password" placeholder="password">
		<i class="fa fa-lock"></i>
	</p>	
	<p class="control">
		<button class="button is-success" @click="signin">Submit</button>
		<button class="button is-info" @click="clear">Cancel</button>
	</p>
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default{
	
	methods:{
	
		
		signin(){
			this.$store.dispatch('login',this.currentUser)
		
			setTimeout(()=>{
				if(this.isLogin){
					this.$router.push({ name: 'index' });
				}else{
					this.$store.dispatch('clearAllUsers')
				}
			},500)
		},
		

		clear(){
			this.user.isLogin=false
		}
		},

	computed:mapState({

		currentUser:store=>store.user.currentUser,
		userServer:store=>store.user.userServer,
		isLogin:store=>store.user.isLogin
	
	}),

	}

</script>