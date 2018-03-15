import Vue from 'vue';
import VueRouter from 'vue-router';
import Button from 'components/button/example';

Vue.use(VueRouter);
const routes = [{
	path: '/',
	component: () => import('views/Home'),
	children: [{
		path: '/button',
		component: Button
	}]
}];

export default new VueRouter({
	routes
});
