Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});

var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

var vm2 = new Vue ({
  el: '#app2',
  data: {
    title: 'The second Instance',
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed';
    }
  }
});

var vm3 = new Vue({
  $el: '#app3',
  template: '<h1>App3</h1>'
});

vm3.$mount('#app3');

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);

new Vue ({
  el: '#app0',
  data: {
    title: 'The VueJS Instance',
  },
  beforeCreate: function() {
    console.log('beforeCreate()');
  },
  created: function() {
    console.log('created()');
  },
  beforeMount: function() {
    console.log('beforeMount()');
  },
  mounted: function() {
    console.log('mounted()');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate()');
  },
  updated: function() {
    console.log('updated()');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },
  destroyed: function() {
    console.log('destroyed()');
  },
  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
})
