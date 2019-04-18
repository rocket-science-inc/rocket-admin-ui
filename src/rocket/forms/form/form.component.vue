<template>
    <div>
        <div class="d-flex mb-3">
            <div class="md-display-1 flex-fill">{{title}}</div>
            <div class="flex-shrink-0">
                <md-button class="md-raised">Cancel</md-button>
                <md-button class="md-primary md-raised" @click="onSave">Save</md-button>
            </div>
        </div>
        <div>
            <slot :form="form"></slot>
        </div>
    </div>
</template>
