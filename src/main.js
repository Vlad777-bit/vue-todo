import { createApp } from 'vue'
import App from './App.vue';

import components from '@/components/UI';
import directives from '@/directives';

import router from "@/router/router";

const app = createApp(App);

components.map(component => app.component(component.name, component));
directives.map(directive => app.directive(directive.name, directive ))



app
    .use(router)
    .mount('#app')
