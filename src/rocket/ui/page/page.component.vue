<template>
    <md-content class="position-relative h-100">
        <slot></slot>
        <rct-loader
            :inprogress="inprogress"
        ></rct-loader>
    </md-content>
</template>
