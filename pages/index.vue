<template>
  <div class="container">
    <div>
      <h1 class="text-6xl">Train Test</h1>
    </div>
    <div class="grid grid-cols-2 gap-4">
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
          :options="options.filter((el) => el.name !== from.name)"
          placeholder="Select one"
          label="name"
          track-by="name"
        ></multiselect>
      </div>
    </div>
    <div v-if="from.id && to.id" class="text-center">
      <nuxt-link :to="`${from.id}/${to.id}`">
        <button
          class="text-white text-center m-2 bg-green-500 px-4 py-2 rounded-lg"
        >
          {{ from.cta }}
        </button>
      </nuxt-link>
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
        { name: 'Bordeaux', cta: 'Allez !', id: 'BOD' },
        { name: 'Lyon', cta: 'Allez !', id: 'LYS' },
        { name: 'Madrid', cta: 'Vamos!', id: 'MAD' },
        { name: 'Berlin', cta: 'Los!', id: 'BER' },
        { name: 'Rome', cta: 'Dai', id: 'ROM' },
      ],
    }
  },
}
</script>
