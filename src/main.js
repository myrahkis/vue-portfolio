import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18n } from "../i18n.js";

import App from "./App.vue";
import router from "./router";
import createHistoryPiniaPlugin from "../plugins/createHistoryPiniaPlugin";

const app = createApp(App);

const pinia = createPinia();
pinia.use(
  createHistoryPiniaPlugin({
    maxHistory: 200,
  })
);

app.use(i18n);
app.use(pinia);
app.use(router);

app.mount("#app");
