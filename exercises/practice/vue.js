new Vue({
  el: '#app',
  data: {
    name: 'Alex',
    age: 28,
    counter: 0,
    text: '',
    timer: 5,
    imgSrc: 'https://i.pinimg.com/170x/0c/9f/fd/0c9ffde7328b5edbfd2fb22bae9d9bcd.jpg',
    link: 'https://www.google.com.au/',
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    color: 'blue',
    width: 100,
    meeseeks: 0,
    things: [
      'thing1',
      'thing2',
      'thing3'
    ],
    wrestlers: [
      {name: 'Syko Seth', height: '5ft11', weight: '225 pounds'},
      {name: 'Steiner the Recliner', height: '6ft1', weight: '255 pounds'},
      {name: 'Big Bad Ben', height: '6ft7', weight: '275 pounds'},
      {name: 'Joe Schmoe', height: '5ft10', weight: '215 pounds'},
      {name: 'Mister Meister', height: '6ft2', weight: '245 pounds'},
      {name: 'El Lucha Mucha', height: '5ft7', weight: '185 pounds'}
    ],
    objects: [
      { id: '0ds24f832gff', name: 'TEST_OBJECT_01' },
      { id: '40887dvd7', name: 'TEST_OBJECT_01', data: [1.67, 2.2, 1.33, 4.626] },
      { id: '1f8776f', name: 'TEST_OBJECT_01', data: [3.63, 5.555] },
      { id: '6g9t49711', name: 'TEST_OBJECT_01', data: [1600, 22, 55] }
    ]
  },
  computed: {
    output: function() {
      return this.counter <= 37 ? this.checkThirtySeven() : 'Gone over';
    },
    pixelWidth: function() {
      return this.width + 'px';
    }
  },
  watch: {
    output: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, vm.timer * 1000);
    }
  },
  methods: {
    checkThirtySeven: function() {
      return this.counter === 37 ? 'Done' : 'Not there yet';
    },
    alert: function() {
      alert('Alert!');
    },
    requestMeeseeks: function() {
      switch (this.meeseeks) {
        case 0:
          this.meeseeks = 1;
          break;
        case 1:
          this.meeseeks = 2;
          break;
        case 2:
          this.meeseeks = 3;
          break;
        case 3:
          this.meeseeks = 4;
          break;
        case 4:
          this.meeseeks = 5;
          break;
        case 5:
          this.meeseeks = 0;
          break;
        default:
          this.meeseeks = 0;
          break;
      }
    }
  }
});
