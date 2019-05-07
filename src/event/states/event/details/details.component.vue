<template>
    <div class="md-elevation-1 bg-white">
        <div class="md-layout md-gutter mb-3">
            <div class="md-layout-item">
                <md-list>
                    <md-list-item>
                        <md-icon>description</md-icon>
                        <div class="md-list-item-text">
                            <span>{{event.title}}</span>
                            <span>Title</span>
                        </div>
                    </md-list-item>
                    <md-list-item>
                        <md-icon>contact_mail</md-icon>
                        <div class="md-list-item-text">
                            <span>
                                <router-link :to="{name: 'organizer', params: {id: event.organizer}}">
                                    Organizer {{event.organizer}}
                                </router-link>
                            </span>
                            <span>Organizer</span>
                        </div>
                    </md-list-item>
                    <md-list-item>
                        <md-icon>local_activity</md-icon>
                        <div class="md-list-item-text">
                            <span>
                                <a :href="event.ticketLink" target="_blank">{{event.ticketLink}}></a>
                            </span>
                            <span>Tickets Link</span>
                        </div>
                    </md-list-item>
                </md-list>
            </div>
            <div class="md-layout-item">
                <md-list>
                    <md-list-item>
                        <md-icon>date_range</md-icon>
                        <div class="md-list-item-text">
                            <span>{{(event.time ? event.time.start : '') | date("llll")}}</span>
                            <span>Start Date</span>
                        </div>
                    </md-list-item>
                    <md-list-item>
                        <md-icon>date_range</md-icon>
                        <div class="md-list-item-text">
                            <span>{{(event.time ? event.time.end : '') | date("llll")}}</span>
                            <span>End Date</span>
                        </div>
                    </md-list-item>
                    <md-list-item>
                        <md-icon>location_on</md-icon>
                        <div class="md-list-item-text">
                            <span>{{(event.location ? event.location.name : '')}}</span>
                            <span>Location</span>
                        </div>
                    </md-list-item>
                </md-list>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <div class="px-3 pb-3">
                    <div class="md-headline mb-2">Description</div>
                    <div class="md-body-1">
                        {{event.description}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <md-card class="m-0">
        <md-card-content>
            s
        </md-card-content>
    </md-card> -->
</template>
