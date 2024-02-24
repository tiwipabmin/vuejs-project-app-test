<template>
  <div
    class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar tw-overflow-x-hidden"
  >
    <div class="app-header header-shadow header-text-light">
      <!-- <div class="app-header header-shadow tw-bg-pri-900 header-text-light"> -->
      <div class="app-header__logo tw-bg-pink-persian px-0 px-md-4 tw-overflow-hidden">
        <a href="https://heartmpi.com" target="_self">
          <div class="logo-src tw-font-sarabun tw-text-xl tw-font-black tw-text-white">
            Heart MPI
          </div>
        </a>
        <div class="header__pane tw-ml-auto">
          <div>
            <button
              type="button"
              class="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <div>
          <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-header__menu">
        <span>
          <button
            type="button"
            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div class="app-header__content rounded">
        <div class="app-header-right">
          <div class="header-btn-lg pl-3 ml-3">
            <div class="widget-content p-0">
              <div class="widget-content-wrapper">
                <div class="widget-content-left pr-2 d-none d-lg-inline">
                  <div class="widget-heading tw-text-black-charleston-green">
                    {{ NaN }} {{ NaN }}
                  </div>
                  <!-- <div class="widget-heading tw-text-black-charleston-green">Foo Bar</div> -->
                  <div class="widget-subheading tw-text-black-charleston-green">{{ NaN }}</div>
                </div>
                <user-dropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-main d-flex h-100">
      <div class="app-sidebar sidebar-shadow tw-bg-pink-lavender-blush sidebar-text-light">
        <!-- <div class="app-sidebar sidebar-shadow tw-bg-pri-900 sidebar-text-light"> -->
        <div class="app-header__logo">
          <div class="logo-src"></div>
          <div class="header__pane ml-auto">
            <div>
              <button
                type="button"
                class="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div class="app-header__menu">
          <span>
            <button
              type="button"
              class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span class="btn-icon-wrapper">
                <i class="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
        <div class="scrollbar-sidebar overflow-auto">
          <div class="app-sidebar__inner tw-font-sarabun">
            <ul class="vertical-nav-menu metismenu">
              <div v-for="(category, cindex) in sidebarMenus" :key="`c${cindex}`">
                <li class="app-sidebar__heading tw-text-black-charleston-green tw-text-base">
                  {{ category.title }}
                </li>
                <li
                  v-for="(group, gindex) in category.groups"
                  :key="`c${cindex}-g${gindex}`"
                  :data-nav-group="group.id"
                  class="mm-active"
                >
                  <a href="#">
                    <i class="metismenu-icon">
                      <i
                        :class="group.icon"
                        class="tw-text-black-charleston-green tw-w-5 tw-h-5"
                      ></i>
                    </i>
                    <span class="tw-font-bold tw-text-black-charleston-green">{{
                      group.title
                    }}</span>
                    <i
                      class="metismenu-state-icon pe-7s-angle-down caret-left tw-text-black-charleston-green"
                    ></i>
                  </a>
                  <ul>
                    <li
                      v-for="(menu, mindex) in group.menus"
                      :key="`c${cindex}-g${gindex}-m${mindex}`"
                      class="mb-n2"
                      data-cy=""
                    >
                      <router-link
                        tag="a"
                        :to="{ name: menu.routeName }"
                        class="px-3 h-auto mb-3 tw-text-black-charleston-green"
                      >
                        <i class="metismenu-icon"></i>
                        {{ menu.title }}
                      </router-link>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="position-relative app-main__outer tw-w-full tw-bg-white-cultured">
        <div class="app-main__inner tw-mb-6">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './assets/js/demo'
import './assets/js/scrollbar'
import './assets/js/sidebar'
import './assets/js/app'

import sidebarMenus from './assets/json/sidebarMenus.json'

import UserDropdown from './components/UserDropdown.vue'

export default {
  components: {
    UserDropdown,
  },
  data() {
    return {
      sidebarMenus,
    }
  },
  async created() {},
}
</script>
