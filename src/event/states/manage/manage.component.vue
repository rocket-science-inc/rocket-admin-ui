<template>
    <md-content class="h-100">
        <rct-form
            title="Create Event"
            :inprogress="inprogress"
            :on-save="save"
            :on-save-success="success"
        >
            <template>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item" style="flex: 0 0 260px; max-width: 260px;">
                        <rct-form-img
                            label="Poster"
                            v-model="model.image"
                        />
                    </div>
                    <div class="md-layout-item">
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <rct-form-text
                                    label="Title"
                                    v-model="model.title"
                                />
                            </div>
                            <div class="md-layout-item">
                                <rct-form-autocomplete
                                    v-model.number="model.organizer"
                                    label="Organizer"
                                    :options="organizers"
                                    opt-label="fullName"
                                >
                                    <template slot="option" slot-scope="{option}">
                                        {{option.fullName}}
                                    </template>
                                </rct-form-autocomplete>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <rct-form-autocomplete
                                    v-model="model.location"
                                    label="Location"
                                    opt-label="address"
                                    :options="places"
                                >
                                    <template slot="option" slot-scope="{option}">
                                        {{option.address}}
                                    </template>
                                </rct-form-autocomplete>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <rct-form-datetime-picker
                                    v-model="model.time.start"
                                    label="Start Date and Time"
                                />
                            </div>
                            <div class="md-layout-item">
                                <rct-form-datetime-picker
                                    v-model="model.time.end"
                                    label="End Date and Time"
                                />
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <rct-form-textarea
                                    v-model="model.ticketLink"
                                    label="Tickets Link"
                                />
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <rct-form-textarea
                                    v-model="model.description"
                                    label="Description"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md-headline">Agenda</div>
                <div class="py-3">
                    <div v-for="(value, key) in model.agenda" class="border border-dashed px-3 mb-3" :key="key">
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item">
                                        <rct-form-text
                                            label="Speaker"
                                            v-model="model.agenda[key].username"
                                        ></rct-form-text>
                                    </div>
                                </div>  
                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item">
                                        <rct-form-text
                                            label="Company"
                                            v-model="model.agenda[key].company"
                                        ></rct-form-text>
                                    </div>
                                    <div class="md-layout-item">
                                        <rct-form-text
                                            label="Position"
                                            v-model="model.agenda[key].position"
                                        ></rct-form-text>
                                    </div>
                                </div>
                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item">
                                        <rct-form-text
                                            label="Topic"
                                            v-model="model.agenda[key].title"
                                        ></rct-form-text>
                                    </div>
                                </div>
                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item">
                                        <rct-form-textarea
                                            label="Description"
                                            v-model="model.agenda[key].description"
                                        ></rct-form-textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item pt-3" style="flex: 0 0 64px">   
                                <md-button class="md-icon-button" @click="removeReport(key)">
                                    <md-icon>close</md-icon>
                                    <md-tooltip md-direction="top">Remove</md-tooltip>
                                </md-button>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <md-button class="md-raised mx-0" @click="addReport()">Add</md-button>
                    </div>
                </div>
            </template>
        </rct-form>
    </md-content>
</template>