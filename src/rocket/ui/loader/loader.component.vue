<template>
    <div style="z-index: 5;" v-if="inprogress"
        class="position-absolute d-flex align-items-center justify-content-center right-0 left-0 top-0 bottom-0 bg-white"
    >
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>
</template>
