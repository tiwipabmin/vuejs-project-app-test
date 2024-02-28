<template>
  <h1>Home</h1>
  <Button label="Submit" @click="submit" severity="warning" />
  <ToggleButton v-model="checked" class="w-6rem" onLabel="On" offLabel="Off" />
  <div class="card">
    <DataTable
      :value="customers"
      scrollable
      scrollHeight="400px"
      tableStyle="min-width: 50rem"
      :virtualScrollerOptions="{
        lazy: true,
        onLazyLoad: loadCustomersLazy,
        itemSize: 46,
        delay: 200,
        showLoader: true,
        loading: lazyLoading,
        numToleratedItems: 10,
      }"
    >
      <Column field="first_name" header="First Name" style="width: 20%">
        <template #loading>
          <div
            class="flex align-items-center"
            :style="{ 'height': '17px', 'flex-grow': '1', 'overflow': 'hidden' }"
          >
            <Skeleton width="60%" height="1rem" />
          </div>
        </template>
      </Column>
      <Column field="last_name" header="Last Name" style="width: 20%">
        <template #loading>
          <div
            class="flex align-items-center"
            :style="{ 'height': '17px', 'flex-grow': '1', 'overflow': 'hidden' }"
          >
            <Skeleton width="40%" height="1rem" />
          </div>
        </template>
      </Column>
      <Column field="email" header="Email" style="width: 20%">
        <template #loading>
          <div
            class="flex align-items-center"
            :style="{ 'height': '17px', 'flex-grow': '1', 'overflow': 'hidden' }"
          >
            <Skeleton width="30%" height="1rem" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import TestServerService from '../../services/TestServerService'
import CustomerService from '../../services/CustomerService'

export default {
  data() {
    return {
      checked: false,
      customers: null,
      virtualCustomers: Array.from(599),
      lazyLoading: false,
      loadLazyTimeout: null,
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
    loadCustomersLazy() {},
  },
  async mounted() {
    this.customers = await CustomerService.getAllCustomers()

    console.log(`customers: `, this.customers)
  },
}
</script>