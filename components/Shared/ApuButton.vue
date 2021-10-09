<template>
    <v-btn
        v-bind="$attrs"
        v-on="$listeners"
        class="btn-chakana chakana-shape"
        :style="apuStyle"
    >
        <slot />
    </v-btn>
</template>

<script>
export default {
    inheritAttrs: false,
    mounted() {
        this.wrap(this.$el, this.$options._scopeId);
    },
    props: {
        apuColor: {
            type: String,
            default: "#e73324"
        },
        apuForeColor: {
            type: String,
            default: "#fff"
        }
    },
    computed: {
        apuStyle() {
            return {
                "--color": this.apuForeColor,
                "--color-hover": this.apuForeColor,
                "--background-color": this.apuColor
            };
        }
    },
    methods: {
        wrap(toWrap, scopeId) {
            const wrapper = document.createElement("div");
            if (scopeId) wrapper.toggleAttribute(scopeId);
            wrapper.classList.add("btn-container", "chakana-shape");
            wrapper.style.cssText = `
                color:${this.apuForeColor}!important;
                background-color:${this.apuColor}!important;
                border: 2px solid ${this.apuColor};
                display:inline-block`;
            toWrap.parentNode.appendChild(wrapper);
            wrapper.appendChild(toWrap);
        }
    }
};
</script>

<style lang="scss" scoped>

$vertex-width: 6px;

::v-deep .v-btn__loader {
    color: var(--color);
}

.btn-chakana {
    background: var(--background-color) !important;
    border: none;
    color: var(--color) !important;
    font-weight: bold;
    height: 32px !important;
    text-transform: unset;

    &:hover {
        background: var(--color-hover) !important;
        color: var(--background-color) !important;
    }
}

.chakana-shape {
    clip-path: polygon(
        0 $vertex-width,
        $vertex-width $vertex-width,
        $vertex-width 0,
        calc(100% - #{$vertex-width}) 0,
        calc(100% - #{$vertex-width}) $vertex-width,
        100% $vertex-width,
        100% calc(100% - #{$vertex-width}),
        calc(100% - #{$vertex-width}) calc(100% - #{$vertex-width}),
        calc(100% - #{$vertex-width}) 100%,
        $vertex-width 100%,
        $vertex-width calc(100% - #{$vertex-width}),
        0 calc(100% - #{$vertex-width})
    );
}
</style>
