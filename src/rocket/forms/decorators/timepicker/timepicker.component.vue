<template>
    <div class="position-relative">
        <div class="position-fixed"
            style="left: 0; right: 0; top: 0; bottom: 0;"
            v-if="showDropdown"
            @click.stop="toggleDropdown"
        ></div>
        <div class="md-field md-theme-default">
            <input type="text"
                class="md-input"
                :id="id"
                v-model="displayTime"
                @click.stop="toggleDropdown"
                readonly
            />
        </div>
        <md-button v-if="!hideClearButton" @click.stop="clearTime"
            class="md-icon-button position-absolute md-dense m-0"
            style="right: 0; top: 20px; cursor: pointer;"
            v-show="!showDropdown && showClearBtn"
        >
            <md-icon>close</md-icon>
        </md-button>
        <div v-show="showDropdown" style="top: 54px"
            class="md-menu-content md-theme-default position-absolute md-menu-content-small">
            <div class="md-menu-content-container md-theme-default">
                <div style="max-height: 172px" class="md-list md-theme-default d-flex flex-nowrap flex-row p-0">
                    <ul class="flex-fill px-1" style="overflow: auto; list-style: none;">
                        <li class="hint">
                            <md-button disabled
                                class="md-primary m-0"
                            >{{hourType}}</md-button>
                        </li>
                        <li v-for="hr in hours" v-bind:key="hr">
                            <md-button class="md-primary m-0"
                                :class="{'md-raised': hour === hr}"
                                @click.stop="select('hour', hr)"
                            >{{hr}}</md-button>
                        </li>
                    </ul>
                    <ul class="flex-fill px-1" style="overflow: auto; list-style: none;">
                        <li class="hint">
                            <md-button disabled
                                class="md-primary m-0"
                            >{{minuteType}}</md-button>
                        </li>
                        <li v-for="m in minutes" v-bind:key="m">
                            <md-button class="md-primary m-0"
                                :class="{'md-raised': minute === m}"
                                @click.stop="select('minute', m)"
                            >{{m}}</md-button>
                        </li>
                    </ul>
                    <ul class="flex-fill px-3" style="overflow: auto; list-style: none;" v-if="secondType">
                        <li class="hint" v-text="secondType"></li>
                        <li
                            v-for="s in seconds"
                            v-text="s"
                            :class="{active: second === s}"
                            @click.stop="select('second', s)"
                            v-bind:key="s"
                        ></li>
                    </ul>
                    <ul class="flex-fill px-3" style="overflow: auto; list-style: none;" v-if="apmType">
                        <li class="hint" v-text="apmType"></li>
                        <li
                            v-for="a in apms"
                            v-text="a"
                            :class="{active: apm === a}"
                            @click.stop="select('apm', a)"
                            v-bind:key="a"
                        ></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
