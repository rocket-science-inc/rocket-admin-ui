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
                    <rct-table-cell heading="Title" sort="title">{{raw.title}}</rct-table-cell>
                    <rct-table-cell heading="Organizer">{{raw.title}}</rct-table-cell>
                    <rct-table-cell heading="Schedule">{{raw.title}}</rct-table-cell>
                </template>
                <!-- <md-table-cell>{{raw.title}}</md-table-cell>
                <template slot-scope="{ raw }">
                    
                </template> -->
                <!-- <rct-table-col heading="Title" ref="col" >
                    {{ raw.title }}
                </rct-table-col> -->
            </rct-table>
        </div>
    </md-content>
</template>