// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
	props: ['title','cbody'],
	data: function() {
		return {
			count: 0
		}
	},
	//template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
	//  template: "<div><h3>{{ title.title }}</h3> <h3>{{ title.message }}</h3></div>"
	  template: `<div><ul><li  v-for='item in cbody'> {{item}}</li></ul> 
	  </div>`
	 //  template: `
  //   <div class="blog-post">
  //     <h3>{{ post.title }}</h3>
  //     <div v-html="post.content"></div>
  //   </div>
  // `
})
var componentA = {
	data: function() {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
}
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text',0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
