<template>
	<el-container>
		<el-aside>
			<el-menu
				default-active="/button"
				router="router">
				<el-menu-item index="/button">
					<span>Button 按钮</span>
				</el-menu-item>
				<el-menu-item index="/buttonGroup">
					<span>Button 按钮组</span>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-main>
			<router-view/>
		</el-main>
	</el-container>
</template>

<script>
export default {
	data(){
		return {
			router: true
		};
	}
};
</script>
