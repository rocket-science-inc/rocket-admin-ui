<template>
    <div>
        <div class="border w-100 border-dashed position-relative">
            <div style="padding-bottom: 100%"></div>
            <div class="position-absolute top-1 right-1 left-1 bottom-1 d-flex align-items-center justify-content-center img-container">
                <div v-if="!value" class="d-flex flex-column align-items-center">
                    <md-icon class="m-0 md-size-3x">panorama</md-icon>
                    <span class="md-display-1">{{label}}</span>
                </div>
                <div v-if="value" class="d-flex flex-fill mh-100">
                    <img :src="image"  />
                </div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.8)" v-if="inprogress"
                class="position-absolute top-1 right-1 left-1 bottom-1 d-flex align-items-center justify-content-center"
            >
                <md-progress-spinner
                    :md-diameter="30"
                    :md-stroke="3"
                    md-mode="indeterminate"
                ></md-progress-spinner>
            </div>
        </div>
        <div>
            <md-button
                class="md-raised w-100 mx-0"
                @click="choose"
                :disabled="inprogress"
            >Choose Image</md-button>
            <input
                type="file" class="d-none"
                accept="image/x-png, image/gif, image/jpeg"
            />
        </div>
    </div>
</template>
