<template>
  <div class="container">
    <div>
      <h1 class="text-6xl">Train Test</h1>
    </div>
    <div>
      <label class="text-lg">From</label>
      <multiselect
        v-model="from"
        :options="options"
        placeholder="Select one"
        label="name"
        track-by="name"
      ></multiselect>
    </div>
    <div>
      <label class="text-lg">To</label>
      <multiselect
        v-model="to"
        :options="options"
        placeholder="Select one"
        label="name"
        track-by="name"
      ></multiselect>
    </div>
    <div>
      <button class="text-white text-center m-2 bg-green-500 p-4 rounded-lg">
        Hello
      </button>
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
      from: { name: 'Pick a city', id: '' },
      to: { name: 'Pick a city', id: '' },
      options: [
        { name: 'Bordeaux', id: 'BOD' },
        { name: 'Lyon', id: 'LYS' },
        { name: 'Madrid', id: 'MAD' },
        { name: 'Berlin', id: 'BER' },
        { name: 'Rome', id: 'ROM' },
      ],
    }
  },
}
</script>
