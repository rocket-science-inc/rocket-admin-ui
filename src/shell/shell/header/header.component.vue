<template>
    <div class="w-100">
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <md-button class="md-icon-button" @click="toggle">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">{{navigation.anchor}}</span>
            </div>
        </div>
        <div class="md-toolbar-row" v-if="!!navigation.children">
            <md-tabs class="md-primary">
                <md-tab v-for="item in navigation.children" 
                    :md-label="item.anchor" :key="item.i"
                    :to="item.state"
                ></md-tab>
            </md-tabs>
        </div>
    </div>
</template>
