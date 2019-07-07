Vue.component('todo-item',{
	props:['todo1'],
	template:'<li>{{todo1.text}}</li>'
	// methods:{
	// 	reversedMessage:function(){
	// 		return this.message.split('').reverse().join('')
	// 	}
	// }
})
Vue.component('my-component',{
	template:'<p class = "foo bar">Hi</p>'
})