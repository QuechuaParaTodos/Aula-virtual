import colors from "vuetify/es5/util/colors";

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - quechua_para_todos",
        title: "quechua_para_todos",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ["~/assets/style.scss"],
        theme: {
            dark: false,
            themes: {
                light: {
                    purple1: "#8D33A3",
                    purple2: "#702283",
                    purple3: "#BA77CA",
                    orange1: "#F7A600",
                    orange2: "#DB9300",
                    orange3: "#FFC652",
                    success: "#00A351",
                    danger: "#D73526",
                    warning: "#F7A600",
                    info: "#4AA0AF",
                    grey100: "#C4C4C4",
                    grey200: "#939393",
                    black: "#393939",
                    white: "#FFFEFD"
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};
