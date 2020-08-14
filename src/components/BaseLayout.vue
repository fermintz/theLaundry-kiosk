<template>
  <div class="wrap">
    <StateBar />
    <router-view />
    <Waves />
  </div>
</template>

<script>
import StateBar from '@/components/stateBar.vue';
import Waves from '@/components/waves.vue';

export default {
  components: {
    StateBar,
    Waves,
  },
};
</script>
