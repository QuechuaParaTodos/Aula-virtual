import Vue from "vue";
import Vuetify from "vuetify/lib";
import IconPlay from "../components/Icons/IconPlay.vue";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            play: {
                component: IconPlay // you can use string here if component is registered globally
            }
        }
    }
});
