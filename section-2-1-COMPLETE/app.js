const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Smith',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>'
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
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