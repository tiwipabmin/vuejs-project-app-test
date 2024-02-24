<template>
  <h1>Home</h1>
  <Button label="Submit" @click="submit" severity="warning" />
  <ToggleButton v-model="checked" class="w-6rem" onLabel="On" offLabel="Off" />
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    submit() {
      this.$toast.add({
        severity: 'warn',
        summary: 'ไม่มีไฟล์อยู่ในโฟลเดอร์ชั่วคราว',
        detail: 'กรุณาอัพโหลดไฟล์ mpi ก่อนทำการกดปุ่มต่อไป',
        styleClass: 'tw-font-sarabun tw-text-sm tw-font-normal',
        contentStyleClass: 'tw-font-sarabun tw-text-sm tw-font-normal',
        life: 5000,
      })
    },
  },
}
</script>