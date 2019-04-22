<template>
    <div>

        <md-toolbar class="md-transparent" md-elevation="0">
            <div class="md-title">Roqet Admin</div>
        </md-toolbar>
        
        <md-list>
            <md-list-item @click="toggle"
                v-for="item in navigation"
                :to="item.state" :key="item.i"
            >
                <md-icon>{{item.icon}}</md-icon>
                <span class="md-list-item-text">{{item.anchor}}</span>
            </md-list-item>
        </md-list>
    </div>

</template>
