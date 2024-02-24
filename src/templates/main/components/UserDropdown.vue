<template>
  <div class="btn-group d-flex">
    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
      <i
        class="d-inline d-lg-none fas fa-user fa-lg text-white tw-text-black-charleston-green"
        style="opacity: 0.75"
      ></i>
      <i
        class="fa fa-angle-down ml-2 opacity-8 tw-text-black-charleston-green"
        style="color: white; cursor: pointer"
      ></i>
    </a>
    <div
      class="rm-pointers dropdown-menu dropdown-menu-right p-0 mx-0 mt-4 widget-wide tw-w-96 tw-rounded-3xl"
    >
      <div class="dropdown-menu-header tw-rounded-3xl m-0">
        <div class="dropdown-menu-header-inner p-0 tw-rounded-3xl">
          <div
            :class="{ 'tw-rounded-b-3xl': menus.length === 0 }"
            class="menu-header-content text-left tw-bg-gradient-to-r tw-from-pri-900 tw-to-pri-700 p-4 tw-rounded-t-3xl"
          >
            <div class="widget-content p-0">
              <div class="widget-content-wrapper">
                <div class="widget-content-left pr-4">
                  <div class="widget-heading">{{ NaN }} {{ NaN }}</div>
                  <div class="widget-subheading">{{ NaN }}</div>
                </div>
                <div class="widget-content-right">
                  <button class="btn btn-light tw-text-pri-900 tw-rounded-xl" @click="logout">
                    Log Out
                  </button>
                  <!-- <a href="/api/auth/logout">
                    <button class="btn btn-light tw-text-pri-900 tw-rounded-xl">Log Out</button>
                  </a> -->
                </div>
              </div>
            </div>
          </div>
          <div class="tw-bg-white tw-text-black tw-text-sm tw-rounded-b-3xl">
            <div
              v-for="(menu, index) in menus"
              @click="$router.push({ name: menu.pathName })"
              :key="`m${index}`"
              :class="{ 'tw-rounded-b-3xl': index + 1 === menus.length }"
              class="tw-p-6 tw-flex tw-items-center hover:tw-bg-slate-100 tw-duration-150 tw-cursor-pointer"
            >
              <span class="tw-w-6">
                <i :class="menu.icon"></i>
              </span>
              {{ menu.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [], // { title: String, icon: String, pathName: String }
    }
  },
  async created() {},
  methods: {
    logout() {
      localStorage.removeItem('username')
      this.$router.push({ name: `login` })
    },
  },
}
</script>
