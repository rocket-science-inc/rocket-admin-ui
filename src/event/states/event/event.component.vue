<template>
    <rct-page :inprogress="inprogress">
        <div class="d-flex align-items-center mb-3">
            <div class="flex-fill md-display-1">Event: {{event.title}}</div>
            <div class="flex-shrink-0">
                <md-button
                    :to="{name: 'editEvent', params: {id: event.id}}"
                    class="md-primary md-raised"
                >Edit</md-button>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item" v-rct-layout-item="300">
                <md-card class="m-0">
                    <md-card-media>
                        <rct-img :src="event.image" width="300" height="200"></rct-img>
                    </md-card-media>
                </md-card>
            </div>
            <div class="md-layout-item">
                <md-tabs>
                    <md-tab id="details" md-label="Details" class="p-1">
                        <event-details-tab :event="event"></event-details-tab>
                    </md-tab>
                    <md-tab id="agenda" md-label="Agenda" class="p-1">
                        <event-agenda-tab :agenda="event.agenda"></event-agenda-tab>
                    </md-tab>
                </md-tabs>
            </div>
        </div>
    </rct-page>
</template>
