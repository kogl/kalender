<template>
  <v-app>
    <!-- <v-main>
    </v-main> -->
    <Calendar />
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar";

export default {
  name: "App",

  components: {
    Calendar,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
#app {
  color: #050505;
}
</style>
