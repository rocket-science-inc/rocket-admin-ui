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
            <rct-table :data="events">
                <rct-table-raw slot="rct-table-raw" slot-scope="{ item }">
                    <rct-table-col title="Title">{{item.id}}</rct-table-col>
                    <rct-table-col title="Organizer">{{item.id}}</rct-table-col>
                    <rct-table-col title="Scheduled">{{item.id}}</rct-table-col>
                </rct-table-raw>
            </rct-table>
        </div>
    </md-content>
</template>