<template>
<div>

	<div id="app" class="columns">
		<div class="column" style="background-color:teal;">
		<Headr></Headr>
		</div>
	</div>


	<div class="columns">
		<div class="column is-3" style="background-color:white">
		<MainMenu></MainMenu>
		</div>
		
		<div class="column">
			<router-view></router-view>
		</div>
	</div>

	<div class="columns">
		<div class="column" style="background-color:teal;text-align:center;mposition:relative;bottom:0px">
		<Footr></Footr>
		</div>
	</div>
</div>
</template>

<script>
import MainMenu from './components/menu.vue'
import Headr from './components/header.vue'
import Footr from './components/footer.vue'

export default{
	name: 'app',
	components:{MainMenu, Headr, Footr},
	
}
</script>
<style>
</style>