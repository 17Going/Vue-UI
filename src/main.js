import Vue from 'vue';
import ElementUI from 'element-ui';
import 'bootstrap/css/bootstrap.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from 'views/App';
import router from './router';
import Button from 'components/button';
import './directives'; //导入自定义指令

Vue.use(ElementUI);
Vue.use(Button);

new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
});
