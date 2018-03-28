<template>
<div class="field is-spaced">
	
	<label class="label">Name</label>
	<p class="control has-icon">
		<input class="input" type="text" v-model="user.name" placeholder="name"/>
		<i class="fa fa-envelope"></i>
	</p>
	
	<label class="label">UserName</label>
	<p class="control has-icon">
		<input class="input" type="text" v-model="user.username" placeholder="username"/>
		<i class="fa fa-envelope"></i>
	</p>
	
	<label class="label">Password</label>
	<p class="control has-icon">
		<input class="input" v-model="user.password" type="password" placeholder="password">
		<i class="fa fa-lock"></i>
	</p>

	<label class="label">Priority</label>
	<p>
		<input-number mode="s" v-model="user.priority"></input-number>
	</p>

	<label class="label">Location</label>
	<p>
		<input class="input" v-model="user.location" placeholder="location"></input>
	</p>
	<label class="label">Time Start</label>
	<p>

	 <datepicker  :options="{wrap: true, clickOpens: false,}" v-model="user.timeStart" class="is-grouped"></datepicker>
	</p>
	<p class="control">
		<a class="button is-success" @click="processSave">
		  <span class="icon">
		    <i class="fa fa-save"></i>
		  </span>
		  <span>Submit</span>
		</a>
		<a class="button is-warning" @click="clear">
		  <span class="icon">
		    <i class="fa fa-times"></i>
		  </span>
		  <span>Cancel</span>
		</a>
	
	</p>
</div>
</template>
<script>
import {mapState,mapActions}from 'vuex'
export default{
	
	
	computed:mapState({
		
		currentUser:store=>store.user.currentUser,
		user:store=>store.user.user,
		isLogin:store=>store.user.isLogin,
	
		}),

	methods:{
	

	save(){

		this.$store.dispatch('updateUser',this.user)
	},
	saveNew(){

		delete this.user._id
		this.$store.dispatch('addUser',this.user)
		setTimeout(()=>{
		console.log(this.isLogin)
		if(this.isLogin){
			this.editing=true
		}else{
			this.$router.push({ name: 'login' });
		}},3000)

	},

	processSave(e){

		
		this.editing?this.save():this.saveNew();

	},

	clear(){
		this.$store.dispatch('clearUser')
	}
	},
	

	updated(){

		if(this.user._id!==0 ){
		
			this.editing=true
		}else{
			console.log(this.user._id)
			this.editing=false
		}

	},
	

	
}
</script>