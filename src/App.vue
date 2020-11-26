<template>
  <v-app>
    <div class="wrap">
      <StateBar />
      <div class="contents">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script>
import StateBar from '@/components/stateBar.vue';

export default {
  name: 'App',

  components: {
    StateBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass" scoped></style>
