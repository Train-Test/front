<template>
  <div class="flex justify-between lg:px-64 lg:py-4">
    <nuxt-link to="/">
      <div v-if="$nuxt.$route.name !== 'index'">
        <h1 class="text-xl font-display m-1">Train Test</h1>
      </div>
    </nuxt-link>
    <div class="lg:w-64">
      <multiselect
        v-model="$colorMode.preference"
        :options="options"
        placeholder="Pick a color"
      ></multiselect>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      options: ['light', 'dark', 'sepia', 'system'],
    }
  },
}
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.dark-mode article.prose > * {
  color: #ebf4f1;
}

.dark-mode footer {
  background-color: #06111a;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.sepia-mode footer {
  background-color: #e4dbc6;
}
</style>
