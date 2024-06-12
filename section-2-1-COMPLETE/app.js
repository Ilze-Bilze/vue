const vm = Vue.createApp({
  // Use simly for data
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Smith',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20
    }
  },
  // Use for functions
  methods: {
    increment() {
      this.age++
    },
    updateLastName(msg, event) {
      console.log(msg)
      this.lastName = event.target.value
    },
    updateMiddleName(event) {
      this.middleName = event.target.value
    }
  },
  // Use for calculations 
  // https://vuejs.org/guide/essentials/computed.html#computed-properties
  // Computed properties can never be synchronous
  computed: {
    fullName() {
      console.log('Full name computed property was called!')

      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    }
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20
      }, 3000)
    }
  }
}).mount('#app')

setTimeout(() => {
  vm.firstName = 'Bob';
}, 2000)

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Paul',
//       lastName: 'Doe'
//     }
//   }
// }).mount('#appId')