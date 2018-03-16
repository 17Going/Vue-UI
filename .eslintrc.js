/**
 * eslint 配置文件
 */
module.exports = {
	"root": true,
	"parser": "vue-eslint-parser",
	"env": {
		"browser": true,
		"node": true,
		"commonjs": true,
		"es6": true
	},
	"plugins": [
		"vue"
	],
	"extends": [
		"plugin:vue/recommended"
	],
	"parserOptions": {
		"parser": "babel-eslint",
		"ecmaVersion": 2017,
		"sourceType": "module" // 使用import,export模块化
	},
	"rules": {
		"vue/html-indent": ["error", "tab", {
			"attribute": 1,
			"closeBracket": 1
		}],
		"indent": [ // 缩进使用tab
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [ //使用单引号
			"error",
			"single"
		],
		"semi": [ // 语句结尾必须加上分号
			"error",
			"always"
		]
	}
};
