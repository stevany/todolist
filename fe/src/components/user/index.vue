<template>
<div>
	<div class="card column is-12">
		<div class="column is-12">
			<p class="title is-3 is-spaced">
			<span class="icon is-medium">
			    <i class="fa fa-users"></i>
			</span>
			  
			List Users
			<a class="button" @click="add">
				
				<span class="icon">
				<i class="fa fa-plus"></i>
				</span>
			</a>
			</p>
		</div>
		<div class="column is-12"></div>

		<Search></Search>
		
		<div class="column is-12"></div>

		<data-table :data="users" :change="onTableChange"  :pagination="pagination" bordered>
			<column label="Name" field="name" :width="200"></column>
			<column label="Username" field="username" :width="200"></column>
			<column label="Location" field="location" :width="200" sorter="custom"></column>
			<column label="Time Start" field="timeStart" :width="200" style="text-align:center;"></column>
			<column label="Action">
				<template scope="scope">
					<a class="button is-info" @click="edit(scope._id)">
					  <span class="icon">
					    <i class="fa fa-edit"></i>
					  </span>
					  <span>Edit</span>
					</a>
					<a class="button is-danger is-active" @click="remove(scope._id)">
					  <span class="icon">
					    <i class="fa fa-trash"></i>
					  </span>
					  <span>Delete</span>
					</a>
				</template>
			</column>
		</data-table>
	</div>
	<div class="columns">
		<div class="column is-11 is-offset-1"></div>
	</div>

	<div class="card column is-12" v-if="isEdit">
		<Form-User></Form-User>
	</div>
</div>
</template>
<script>
import FormUser from './form.vue'
import Search from './control.vue'
import {mapState,mapActions} from 'vuex'
export default{
	components:{FormUser, Search},
	mounted() {
    window.addEventListener('beforeunload', this.leaving);
	},

	data() { 
		return { 
		
		 hasSelect: false,
		 isEdit: false, selectedItems: [], 
		 bordered: true, 
		 striped: false, 
		 narrow: false, 
		 title:'List User'
	 	} 
 	}, 

	created(){
			
		this.$store.dispatch('findAllUsers')
		
	
	},

	computed:mapState({
		users:store => store.user.users,
		currentUser:store=>store.user.currentUser,
		pagination:store=>store.user.pagination,
		isLogin:store=>store.user.isLogin
		}),
	
     

	methods:{
		
		onTableChange(params){ 
	
		}, 
		
	   

	 	leaving() {
            this.$store.dispatch('clearAllUsers')
        },
        add(){
        	this.isEdit=true

        
        },

	 	edit(id){

	 		this.isEdit=true
	 		this.$store.dispatch('findUserId', id)

	 	},

	 	remove(id){
	 	this.$store.dispatch('removeUser', id)
	 	}

		
	}
}
</script>


