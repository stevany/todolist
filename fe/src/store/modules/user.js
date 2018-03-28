'use strict';
import * as types from '../types';
import Base64 from '../../utils/Base64';
import axios from 'axios';

const store={
	state:{
		users:[],
		pagination:{
			total:100,
			totalPage:100,
			size:1,
			pageSize:5,
			layout:'pager'


		},
		user:{
			
			_id:0,
			name:'',
			username:'',
	
		
		},
		listUsers:[],
		
		currentUser:{
			_id:0,
			username:'',
			password:''
			
		},
		path:types.IMAGE_URL + '/island-islands.jpg',
		userServer:{},
		isLogin:false,
		
},

	mutations:{
			
			[types.GET_USERS](state, data){
				console.log(data)
				state.users=data
				state.listUsers=data
				state.pagination.size=data.length
			},

			[types.GET_USER_ID](state, id){
				const list=state.listUsers
				const usr=list.filter(u => u._id === id)
				state.user=usr[0]
				state.user.password=''

		
							
			},
			[types.GET_USERS_NAME](state,name){
	
				if(state.listUsers){
				let lists=[]
				
					
				lists=state.listUsers.filter(u=> u.name.toLowerCase().match(name.toLowerCase()))
					
					
				state.users=lists
				state.pagination.size=lists.length
			}
			},

			[types.ADD_USER](state, data){
				if(state.isLogin){
					
					state.listUsers=state.listUsers.concat(data)
					state.users=state.listUsers
					
					state.pagination.size=state.users.length

					state.user=data
				}else{
					state.user={
						_id:0,
						name:'',
						username:'',
						location:'',
						timeStart:Date.now,
						priority:0
					}
				}
	
			},
			[types.UPDATE_USER](state, data){

				
				const usrs=state.listUsers.filter(u=>u._id !==data._id)
				console.log(data)
				state.listUsers=usrs.concat(data)
				state.users=state.listUsers
				console.log(state.users)

		
			},
			[types.DELETE_USER](state, id){
				const usrs=state.listUsers.filter(u =>u._id !==id)
				state.users=usrs
				state.listUsers=usrs		
				state.pagination.size=usrs.length

	

			},
			[types.LOGIN_SUCESS](state,data){

				state.isLogin=true
				state.currentUser=data
				console.log(state.currentUser)
				state.currentUser.password=''
				
				
			},
			[types.LOGIN_FAILED](state){

				state.isLogin=false
			},
			
			[types.CLEAR_USER](state){
				state.user={
					_id:0,
					name:'',
					username:'',
					password:'',
					location:'',
					timeStart:Date.now,
					priority:0
					
				},
				state.currentUser=[]
			},
			[types.CLEAR_ALL_USERS](state){
				state.users=[]
				state.listUsers=[]
				state.listUser=[]
				state.userServer=[]
				state.pagination={
					total:100,
					totalPage:100,
					size:1,
					pageSize:5,
					layout:'pager'
				}
				state.user=[]
				state.currentUser={
					username:'',
					password:'',
					location:'',
					name:'',
					timeStart:Date.now,
					priority:0
				}
				state.isLogin=false
			}


		},
	actions:{

			findAllUsers({ commit } ){
				return axios.get(types.API_URL+'/users')
				.then(response => {

					 commit(types.GET_USERS,response.data.data);
				})
				 .catch(function (error) {
				 	console.log(error)
				 })
				
			},
			
			findUserId({commit}, id){

				return commit(types.GET_USER_ID, id);
			},
			findUsersName({commit}, name){
				
				return commit(types.GET_USERS_NAME, name)
			},
			findUserName({commit},name){
				return axios.get(types.API_URL+'/user/name/'+name)
				.then(response => {
					 commit(types.GET_USER_NAME,response.data.data);
				})
				 .catch(function (error) {
				 	console.log(error)
				 })
				
			},

			login({commit},data){
				
				return 	axios.get(types.API_URL+'/user/name/' + data.username)
					.then(response => {
						let client=response.data.data
						console.log(client[0])
						const logg=Base64.decode(client[0].password)===data.password?true:false
						
						console.log(Base64.decode(client[0].password))
						console.log(data.password)
	
						if(logg){
							commit(types.LOGIN_SUCESS, client[0]);
						}else{
							commit(types.LOGIN_FAILED);
						}
						
					})
					 .catch(function (error) {
					 	commit(types.LOGIN_FAILED)
					 	console.log(error)
					 })	
				
				
				
			},
			
			clearUser({commit}){
				return commit(types.CLEAR_USER)
			},
			addUser({commit}, data){
				data.password=Base64.encode(data.password)
				
				return fetch(types.API_URL + '/user',{
					method:'POST',
					headers:{
						'Accept' : 'application/json',
						'Content-Type':'application/json'
					},
					body:JSON.stringify(data)
				}).then(response=>{response.json().then(json=>{
					console.log(json.data)
					commit(types.ADD_USER, json.data)
				})
			})
				.catch(error =>{
					console.log(error)
				})
			},
			updateUser({commit}, data){
				console.log(data)
				data.password=Base64.encode(data.password)
				return fetch(types.API_URL +'/user/id/'+data._id,{
					method:'put',
					headers:{
						'Accept':'application/json',
						'Content-Type':'application/json'
					},
					body:JSON.stringify(data)
				}).then(response =>{
					commit(types.UPDATE_USER, data)
				
				})
			},
			removeUser({commit}, id){
		
				return fetch(types.API_URL + '/user/id/' +id,{
					method:'delete',
					headers:{
						'Accept' : 'application/json',
						'Content-Type':'application/json'
					}
				}).then(response => {
					 commit(types.DELETE_USER,id)
					 commit(types.CLEAR_USER)
				})
			},
			clearAllUsers({commit}){
				commit(types.CLEAR_ALL_USERS)
			}
		},
	
	}
export default store

