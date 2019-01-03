import Vue from 'vue'
import App from './App.vue'

import AppMessage from './components/Message.vue';
import AppQuestion from './components/Question.vue';
import AppResaltscreen from './components/Resaltscreen.vue';
import AppStartscreen from './components/Startscreen.vue';

Vue.component('AppMessage', AppMessage);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppResaltscreen', AppResaltscreen);
Vue.component('AppStartscreen', AppStartscreen);


new Vue({
  el: '#app',
  render: h => h(App)
})
