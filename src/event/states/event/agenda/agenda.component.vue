<template>
    <div>
        <div v-if="agenda.length">
            <md-card v-for="(item, index) in agenda" :key="index" class="mx-0 mb-2">
                <md-card-header class="mb-0">
                    <md-avatar class="md-avatar-icon">
                        <md-icon>person</md-icon>
                    </md-avatar>
                    <div class="md-title">{{item.username}}</div>
                    <div class="md-subhead">{{item.position}} at {{item.company}}</div>
                </md-card-header>
                <md-card-area>
                    <md-card-header class="pt-0">
                        <h2 class="md-title">{{item.title}}</h2>
                    </md-card-header>
                    <md-card-content>{{item.description}}</md-card-content>
                </md-card-area>
            </md-card>
        </div>
        <rct-no-results v-else
            description="No reports or lectures found for this event."
        ></rct-no-results>
    </div>
</template>
