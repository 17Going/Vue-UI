<template>
	<div>
		<div style="margin-bottom:20px;">
			<h4>按钮颜色设置</h4>
			<div style="margin:20px 0;">
				<lzd-button>默认按钮</lzd-button>
				<lzd-button type="primary">正常颜色</lzd-button>
				<lzd-button type="info">提示色</lzd-button>
				<lzd-button type="warning">告警色</lzd-button>
				<lzd-button type="danger">危险色</lzd-button>
				<lzd-button type="link">无色</lzd-button>
			</div>
			<div>
				<pre
						v-encode
						class="code" >
					&lt;lzd-button>默认按钮&lt;/lzd-button>
					&lt;lzd-button type="primary">正常颜色&lt;/lzd-button>
					&lt;lzd-button type="info">提示色&lt;/lzd-button>
					&lt;lzd-button type="warning">告警色&lt;/lzd-button>
					&lt;lzd-button type="danger">危险色&lt;/lzd-button>
					&lt;lzd-button type="link">无色&lt;/lzd-button>
				</pre>
			</div>
		</div>
		<div style="margin-bottom:20px;">
			<h4>按钮大小设置</h4>
			<div style="margin:20px 0;">
				<lzd-button size="lg">大号按钮</lzd-button>
				<lzd-button>默认按钮</lzd-button>
				<lzd-button size="sm">小号按钮</lzd-button>
			</div>
			<div>
				<pre
						v-encode
						class="code" >
					&lt;lzd-button size="lg">大号按钮&lt;/lzd-button>
					&lt;lzd-button>默认按钮&lt;/lzd-button>
					&lt;lzd-button size="sm">小号按钮&lt;/lzd-button>
				</pre>
			</div>
		</div>
		<div style="margin-bottom:20px;">
			<h4>块级按钮设置</h4>
			<div style="margin:20px 0;">
				<div style="max-width:300px;">
					<lzd-button
							block
							type="primary">确定</lzd-button>
					<lzd-button block>取消</lzd-button>
				</div>
			</div>
			<div>
				<pre
						v-encode
						class="code" >
					&lt;lzd-button block>块级按钮&lt;/lzd-button>
				</pre>
			</div>
		</div>
		<div style="margin-bottom:20px;">
			<h4>按钮事件监听</h4>
			<div style="margin:20px 0;">
				<div style="max-width:300px;">
					<lzd-button
							type="primary"
							@click="click">点击我会发生什么</lzd-button>
					<p style="margin-top:10px;">{{ text }}</p>
				</div>
			</div>
			<div>
				<pre
						v-encode
						class="code" >
					&lt;lzd-button @click="click">点击我会发生什么&lt;/lzd-button>
				</pre>
			</div>
		</div>
		<div style="margin-bottom:20px;">
			<h4>按钮属性说明</h4>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>参数</th>
						<th>说明</th>
						<th>类型</th>
						<th>可选值</th>
						<th>默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>按钮类型，设置按钮颜色</td>
						<td>String</td>
						<td>default,primary,info,warning,danger,link</td>
						<td>default</td>
					</tr>
					<tr>
						<td>size</td>
						<td>设置按钮大小</td>
						<td>String</td>
						<td>lg, '', sm</td>
						<td>''</td>
					</tr>
					<tr>
						<td>block</td>
						<td>设置按钮是不是块级</td>
						<td>Boolean</td>
						<td>true, false</td>
						<td>false</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div style="margin-bottom:20px;">
			<h4>按钮事件说明</h4>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>事件名称</th>
						<th>说明</th>
						<th>参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>click</td>
						<td>按钮点击事件</td>
						<td>无</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			text: '',
			number: 1
		};
	},
  	methods: {
		click(){
			this.text = '点击了我' + this.number +'次';
			this.number++;
		}
  	}
};
</script>


<style scoped>
	.code{
		background-color: #eee;
		padding: 20px;
		border-radius: 5px;
	}
</style>
