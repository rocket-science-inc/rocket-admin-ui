<template>
    <div :class="{'position-relative h-100 overflow-hidden': inprogress}">
        <div class="d-flex mb-3 align-items-center">
            <div class="md-display-1 flex-fill">{{title}}</div>
            <div class="flex-shrink-0">
                <md-button class="md-raised my-0">Cancel</md-button>
                <md-button class="md-primary md-raised my-0 mr-0" @click="save">Save</md-button>
            </div>
        </div>
        <div>
            <slot :form="form"></slot>
        </div>
        <div v-if="inprogress"
            class="position-absolute left-0 right-0 top-0 bottom-0 d-flex align-items-center justify-content-center"
            style="background-color: rgba(255, 255, 255, 0.7); z-index: 5"
        >
            <md-progress-spinner
                :md-diameter="30"
                :md-stroke="3"
                md-mode="indeterminate"
            ></md-progress-spinner>
        </div>
    </div>
</template>
