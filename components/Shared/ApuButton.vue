<template>
    <div class="btn-container chakana-shape">
        <button @click="onClick" plain outlined class="btn-chakana chakana-shape">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    inheritAttrs: true,
    methods: {
        onClick() {
            this.$emit("click");
        }
    }
};
</script>

<style lang="scss" scoped>
$chakana-style-color: #e73324 !important;
$btn-border-color: $chakana-style-color;
$btn-text-color: $chakana-style-color;
$btn-hover-background-color: $chakana-style-color;

$chakana-alt-style-color: white !important;
$btn-background-color: $chakana-alt-style-color;
$btn-hover-text-color: $chakana-alt-style-color;
$edge-width: 6px;

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
    padding: 4px 50px;

    &:hover {
        background: $btn-hover-background-color;
        color: $btn-hover-text-color;
    }
}

.chakana-shape {
    clip-path: polygon(
        0 $edge-width,
        $edge-width $edge-width,
        $edge-width 0,
        calc(100% - #{$edge-width}) 0,
        calc(100% - #{$edge-width}) $edge-width,
        100% $edge-width,
        100% calc(100% - #{$edge-width}),
        calc(100% - #{$edge-width}) calc(100% - #{$edge-width}),
        calc(100% - #{$edge-width}) 100%,
        $edge-width 100%,
        $edge-width calc(100% - #{$edge-width}),
        0 calc(100% - #{$edge-width})
    );
}
</style>
