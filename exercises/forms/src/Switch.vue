<template>
    <div>
        <div
            id="on"
            @click="switched(true)"
            :class="{active: value}"
        >
            On
        </div>
        <div
            id="off"
            @click="switched(false)"
            :class="{active: !value}"
        >
            Off
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            switched(isOn) {
                this.$emit('input', isOn);
            },
        },
    };
</script>

<style scoped>
    #on, #off {
        height: 20px;
        width: 40px;
        display: inline-block;
        padding: 2px;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
        background-color: lightgray;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>
