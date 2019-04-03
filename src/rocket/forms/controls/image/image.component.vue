<template>
    <div>
        <div class="border w-100 border-dashed position-relative">
            <div style="padding-bottom: 100%"></div>
            <div class="position-absolute top-1 right-1 left-1 bottom-1 d-flex align-items-center justify-content-center">
                <div v-if="!image" class="d-flex flex-column align-items-center">
                    <md-icon class="m-0 md-size-3x">panorama</md-icon>
                    <span class="md-display-1">{{label}}</span>
                </div>
                <div v-if="image" class="d-flex flex-fill mh-100">
                    <img :src="image" style="object-fit: cover"  />
                </div>
            </div>
        </div>
        <div>
            <md-button
                class="md-raised w-100 mx-0"
                @click="choose"
            >Choose Image</md-button>
            <input
                type="file" class="d-none"
                accept="image/x-png, image/gif, image/jpeg"
            />
        </div>
    </div>
</template>
