import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
import router from './routing';

Amplify.configure(awsmobile);

createApp(App).use(router).mount('#app');