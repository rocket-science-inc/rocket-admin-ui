<template>
    <md-content class="h-100 d-flex flex-column">
        <div class="d-flex align-items-center flex-shrink-0">
            <div class="flex-fill md-display-1">Events</div>
            <div class="flex-shrink-0">
                <md-button
                    :to="{name: 'createEvent'}"
                    class="md-primary md-raised m-0"
                >Create</md-button>
            </div>
        </div>
        <div class="flex-fill overflow-hidden">
            <rct-table :data="events" :sorting="{name: 'asc'}">
                <template slot-scope="{ raw }">
                    <rct-table-cell heading="Title" sort="title">
                        <router-link :to="{name: 'event', params: {id: raw.id}}">
                            {{raw.title}}
                        </router-link>
                    </rct-table-cell>
                    <rct-table-cell heading="Organizer">
                        <router-link :to="{name: 'organizer', params: {id: raw.organizer}}">
                            Organizer {{raw.organizer}}
                        </router-link>
                    </rct-table-cell>
                    <rct-table-cell heading="Schedule">
                        <span v-if="raw.time">{{raw.time.start | date('llll')}}</span>
                    </rct-table-cell>
                </template>
            </rct-table>
        </div>
    </md-content>
</template>