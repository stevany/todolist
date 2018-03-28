<template>

    <div class="menu is-dark">
      <menus>
      <menu-item></menu-item>
      <menu-item></menu-item>
      
      <div v-if="isLogin">
        <img :src="path"  >
        
        <h3 class="title is-2 is-spaced " align="center" style="color:white" >{{name}}</h3>
        <h4 class="subtitle is-5" align="center" style="color:white">{{location}}</h4>
      </div>
	    <menu-item></menu-item>
      <menu-item></menu-item>
      
      <menu-item  icon="fas fa-map"  :is-active="true">Dashboard</menu-item>
	    <menu-item icon="fa fa-chart-bar">Graphic</menu-item>
          

      <menu-item icon="tasks">
          <span>Forms</span>
          <menus slot="sub">
            
          </menus>
      </menu-item>

 		  <menu-item icon="fas fa-table" :to="{name:'users'}">Table</menu-item>
      
      <menu-item></menu-item>
      <menu-item></menu-item>
      <menu-item></menu-item>
      <menu-item></menu-item>
      <menu-item></menu-item>
      <menu-item></menu-item>
      <menu-item></menu-item>
      <menu-item></menu-item>
      <menu-item></menu-item>

        
      </menus>
     
    </div>

</template>
<script>
import {mapState} from 'vuex'
export default{
  
  computed:mapState({
    currentUser:store=>store.user.currentUser,
    path:store=>store.user.path,
    isLogin:store=>store.user.isLogin
  }),

  data(){
    return{
    name:'',
    location:''
    }
  },
  updated(){
    this.name=this.isLogin?this.currentUser.name:'';
    this.location=this.isLogin?this.currentUser.location:'';
  }
}

</script>
<style>
img{
  border-radius:50%;
  width:50%;
  height:50%;
  display: block;
  margin-left:auto;
  margin-right: auto;
}
h3{
  color:white;
  align-text:center;
}
h4{
  color:white;
  align-text:center;
}
</style>