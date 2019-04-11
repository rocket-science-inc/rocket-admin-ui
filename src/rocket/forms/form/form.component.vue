<template>
    <div>
        <div>
            <slot :form="form"></slot>
        </div>
        <div>
            <md-toolbar md-elevation="0" class="d-flex justify-content-end">
                <md-button>Cancel</md-button>
                <md-button class="md-primary" @click="onSave">Save</md-button>
            </md-toolbar>
        </div>
    </div>
</template>
