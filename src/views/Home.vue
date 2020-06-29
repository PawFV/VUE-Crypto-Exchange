<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68D391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable';
import api from '../api';
export default {
  name: 'Home',
  components: {
    PxAssetsTable
  },
  data() {
    return {
      assets: [],
      isLoading: false,
      interval: null
    };
  },
  async created() {
    this.isLoading = true;
    this.assets = await api.getAssets();
    this.isLoading = false;
    this.refreshFetch();
  },
  methods: {
    refreshFetch() {
      this.interval = setInterval(async () => {
        this.assets = await api.getAssets();
      }, 5000);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped></style>
