import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { BIconPencilSquare, BIconTrash } from "bootstrap-icons-vue";

import store from "./store";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";



import vuex from "vuex";
import axios from "axios";
import './registerServiceWorker'

const app = createApp(App);

app.component("BIconPencilSquare", BIconPencilSquare);
app.component("BIconTrash", BIconTrash);

app.use(vuex, axios);
app.use(store);
app.use(router);

app.mount("#app");
