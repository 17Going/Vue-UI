<template>
	<button
		:class="[typeClass, sizeClass, blockClass]"
		class="btn"
		type="button"
		@click="handleClick">
		<slot/>
	</button>
</template>
<script>
export default {
	name: 'LzdButton',
	props: {
		type: {
			type:String,
			default: 'default'
		},
		size: {
			type: String,
			default: ''
		},
		block: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		typeClass(){
			return 'btn-' + this.type;
		},
		sizeClass(){
			return this.size ? 'btn-' + this.size : '';
		},
		blockClass(){
			return this.block ? 'btn-block' : '';
		}
	},
	methods: {
		handleClick(evt){
			this.$emit('click', evt);
		}
	}
};
</script>

