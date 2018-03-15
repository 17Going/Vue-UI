import Vue from 'vue';

Vue.directive('encode', {
	inserted(el){
		el.innerText = el.innerHTML.replace(/&lt;/g, '<')
			.replace(/				</g, '<')
			.replace(/&gt;/g, '>');
		el.removeChild(el.lastChild);
	}
});
