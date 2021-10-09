<template>
    <v-btn v-bind="$attrs" v-on="$listeners" class="btn-chakana chakana-shape">
        <slot />
    </v-btn>
</template>

<script>
export default {
    inheritAttrs: false,
    mounted() {
        this.wrap(this.$el, this.$options._scopeId);
    },
    methods: {
        wrap(toWrap, scopeId) {
            const wrapper = document.createElement("div");
            if (scopeId) wrapper.toggleAttribute(scopeId);
            wrapper.classList.add("btn-container", "chakana-shape");
            toWrap.parentNode.appendChild(wrapper);
            wrapper.appendChild(toWrap);
        }
    }
};
</script>

<style lang="scss" scoped>
$btn-border-color: $chakana-style-color;
$btn-text-color: $chakana-style-color;
$btn-hover-background-color: $chakana-style-color;

$btn-background-color: $chakana-alt-style-color;
$btn-hover-text-color: $chakana-alt-style-color;
$vertex-width: 6px;

::v-deep .v-btn__loader {
    color: $chakana-alt-style-color;
}

.btn-container {
    background: $btn-border-color;
    border: 2px solid $btn-border-color;
    display: inline-block;
}

.btn-chakana {
    background: $btn-background-color;
    border: none;
    color: $btn-text-color;
    font-weight: bold;
    height: 32px !important;
    text-transform: unset;

    &:hover {
        background: $btn-hover-background-color;
        color: $btn-hover-text-color;
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
