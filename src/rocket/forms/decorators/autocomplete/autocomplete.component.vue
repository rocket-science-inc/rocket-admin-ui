<template>
    <div ref="IZ-select"
        class="position-relative"
        tabindex="0"
        @keydown.up="onSelectByArrow"
        @keydown.down="onSelectByArrow"
        @keydown.enter="onEnter"
        @keydown.tab.esc="setBlured"
        @mousedown="onClick"
    >
        <!-- <div
            :class="{
                'IZ-select__input': true,
                'IZ-select__input--focused': focused,
                'IZ-select__input--has-menu': hasMenu,
                'IZ-select__input--has-error': hasError,
                'IZ-select__input--selection-slot': showSelectionSlot,
                'IZ-select__input--disabled': disabled,
                'IZ-select__input--readonly': readonly
            }"
            :style="inputStyles"
        >
            <slot
                v-if="showSelectionSlot"
                :item="selectedItem"
                name="selection"
            />

            <input
                :style="inputForTextStyles"
                :class="inputForTextClass"
                :readonly="readonly"
            >
        </div> -->

        <div
            class="md-field md-autocomplete md-theme-default md-clearable"
            :class="{'md-focused': focused || inputValue}"
        >
            <div class="md-menu" ref="IZ-select__input">
                <input type="text" role="combobox" class="md-input"
                    ref="IZ-select__input-for-text"
                    v-bind="inputElCustomAttributes"
                    :value="inputValue"
                    :disabled="disableSearch || disabled"
                    @keyup="onSearchKeyUp"
                    @keydown="onSearchKeyDown"
                    @input="onSearch"
                    autocomplete="off"
                />
            </div>
            <label>{{placeholder}}</label>
        </div>

        <transition name="fade">
            <div ref="IZ-select__menu" v-if="hasMenu"
                class="md-menu-content md-theme-default position-absolute md-menu-content-small"
                :style="menuDynamicStyles" style="top: 50px; max-width: 100%;"
                :class="{
                    'IZ-select__menu': true,
                    'IZ-select__menu--disable-search': disableSearch
                }"
            >
                <slot name="before-items-fixed"></slot>

                <div ref="IZ-select__menu-items" @scroll="onScroll"
                    :style="{'max-height': menuItemsMaxHeight}"
                    class="md-menu-content-container md-scrollbar"
                >

                    <slot name="before-items"></slot>

                    <ul class="md-list md-theme-default" v-if="itemsComputed.length">
                        <div class="md-autocomplete-items">
                            <li ref="items" :key="'IZ-item-' + i"
                                v-for="(item, i) in itemsComputed"
                                v-show="i < scrollItemsLimitCurrent || (arrowsIndex && i <= arrowsIndex)"
                                class="md-list-item md-menu-item md-theme-default"
                            >
                                <button type="button" @click="onClickSelectItem(item)"
                                    class="md-list-item-button md-list-item-container md-button-clean"
                                >
                                    <div class="md-list-item-content md-ripple">
                                        <slot :item="item" name="item">
                                            <span>{{ getItemText(item) }}</span>
                                        </slot>
                                    </div>
                                </button>
                            </li>
                        </div>
                    </ul>

                    <!-- <div
                        v-for="(item, i) in itemsComputed"
                        :class="{
                            'IZ-select__item': true,
                            'IZ-select__item--selected': isItemSelected(item)
                        }"   
                    >
                    </div> -->

                    <ul class="md-list md-theme-default" v-if="!itemsComputed.length && !loading">
                        <div class="md-autocomplete-items">
                            <li class="md-list-item md-menu-item md-theme-default">
                                <button type="button" class="md-list-item-button md-list-item-container md-button-clean">
                                    <div class="md-list-item-content md-ripple">
                                        <slot name="no-data">No data available</slot>
                                    </div>
                                </button>
                            </li>
                        </div>
                    </ul>

                    <slot name="after-items"></slot>
                </div>

                <slot name="after-items-fixed" />

                <div style="position: absolute; top: 0; left: 0; right: 0;">
                    <slot name="before-items-fixed-absolute" />
                </div>

                <div style="position: absolute; bottom: 0; left: 0; right: 0;">
                    <slot name="after-items-fixed-absolute" />
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div
                v-show="errorMessage"
                class="IZ-select__error"
            >
                <slot
                    :errorMessage="errorMessage"
                    name="error"
                >
                    {{ errorMessage }}
                </slot>
            </div>
        </transition>
    </div>
</template>

