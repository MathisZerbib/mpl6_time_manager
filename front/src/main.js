import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { BIconPencilSquare, BIconTrash, BIconPersonCircle } from "bootstrap-icons-vue";

import store from "./store";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";



import vuex from "vuex";
import axios from "axios";
import './registerServiceWorker'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);

app.component("BIconPencilSquare", BIconPencilSquare);
app.component("BIconPersonCircle", BIconPersonCircle);

app.component("BIconTrash", BIconTrash);
app.component("BIconPersonCircle", BIconPersonCircle);
app.component("Datepicker", Datepicker);

app.use(vuex, axios);
app.use(store);
app.use(router);

app.mount("#app");
