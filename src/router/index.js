import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [{
	path: '/',
	component: () => import('views/Home'),
	children: [{
		path: '/button',
		component: () => import('components/button/example')
	},{
		path: '/buttonGroup',
		component: () => import('components/button-group/example')
	}]
}];

export default new VueRouter({
	routes
});
