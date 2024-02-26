<template>
  <h1>Home</h1>
  <Button label="Submit" @click="submit" severity="warning" />
  <ToggleButton v-model="checked" class="w-6rem" onLabel="On" offLabel="Off" />
</template>

<script>
import TestServerService from '../../services/TestServerService'

export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    async submit() {
      const res = await TestServerService.test()

      this.$toast.add({
        severity: 'warn',
        summary: 'Server Test',
        detail: res.data.message,
        styleClass: 'tw-font-sarabun tw-text-sm tw-font-normal',
        contentStyleClass: 'tw-font-sarabun tw-text-sm tw-font-normal',
        life: 5000,
      })
    },
  },
}
</script>