
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-compose', require('./components/ChatCompose.vue'));
Vue.component('init', require('./init.vue'));
import {store} from './store.js'

window.Event = new class {
  constructor () {
    this.vue = new Vue();
  }
  fire(event, data) {
    this.vue.$emit(event, data);
  }
  listen (event, callback) {
    this.vue.$on(event, callback);
  }
}

const app = new Vue({
    el: '#app',
    store,
    data: {
      messages: [],
      users: [],
    },
    mounted() {
      Event.listen('sendMessage', (message) => {
        this.messages.push(message);
      })
      axios.get('/messages').then(response => {
        this.messages = response.data;
      })
      Echo.join('chatroom')
        .here((users) => {
          this.users = users;
        })
        .joining((user) => {
            console.log("join", user.name);
            this.users.push(user);
        })
        .leaving((user) => {
            console.log("leaving", user.name);
            let index = this.users.indexOf(user);
            this.users.splice(index, 1);
        }).listen('MessagePosted', (e) => {
          this.messages.push(e.message);
        })
        ;
    },
    methods: {
      sendMessage (message) {
        this.messages.push(message);
      }
    }
});
