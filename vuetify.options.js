import IconVideos from "~/components/Icons/IconVideos";
import IconActividades from "~/components/Icons/IconActividades";
import IconMaterialAdicional from "~/components/Icons/IconMaterialAdicional";

export default function() {
    return {
        // other vuetify options here,
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
        },
        icons: {
            values: {
                videos: {
                    component: IconVideos
                },
                actividades: {
                    component: IconActividades
                },
                material: {
                    component: IconMaterialAdicional
                }
            }
        }
    };
}
