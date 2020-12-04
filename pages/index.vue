<template>
  <div class="container">
    <div>
      <h1 class="text-6xl font-display">Train Test</h1>
      <p class="text-xl font-display">
        Predict and rate the train performance in Europe by computing
        sustainability issues.
      </p>
    </div>
    <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 mt-4">
      <div class="mt-2">
        <label class="text-lg font-display">From</label>
        <multiselect
          v-model="from"
          :options="options"
          placeholder="Select a city"
          label="name"
          track-by="name"
        ></multiselect>
      </div>
      <div class="mt-2">
        <label class="text-lg font-display">To</label>
        <multiselect
          v-model="to"
          :options="options.filter((el) => el.name !== from.name)"
          :disabled="from.id.length === 0"
          placeholder="Select a city"
          label="name"
          track-by="name"
        ></multiselect>
      </div>
    </div>
    <div class="text-center">
      <nuxt-link :to="`${from.id}/${to.id}`">
        <button
          :disabled="to.id.length === 0"
          :class="to.id.length === 0 ? 'bg-red-700' : 'bg-green-500'"
          class="text-white text-center m-2 lg:mt-8 mt-4 px-12 py-2 rounded-full shadow-lg"
        >
          {{ from.cta }}
        </button>
      </nuxt-link>
    </div>
    <div>
      <div class="lg:my-16 my-8">
        <h2 class="text-4xl font-display">Why?</h2>
        <p>
          <i>
            “High-speed rail is a comfortable, safe, flexible and
            environmentally sustainable mode of transport. It brings
            environmental performance and socio-economic benefits which can
            support the EU’s transport and cohesion policy objectives.”
          </i>
        </p>
      </div>
      <div class="lg:my-16 my-8">
        <h2 class="text-4xl font-display">But...</h2>
        <p>
          <i>
            "There is no realistic long term EU plan for high speed rail, but an
            ineffective patchwork of national lines not well linked"
          </i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  transition: 'home',
  components: {
    Multiselect,
  },
  data() {
    return {
      from: { name: 'Select a city', cta: 'Select your journey', id: '' },
      to: { name: 'Select a city', id: '' },
      options: [
        { name: 'Bordeaux', cta: 'Allez !', id: 'BOD' },
        { name: 'Lyon', cta: 'Allez !', id: 'LYS' },
        { name: 'Madrid', cta: 'Vamos!', id: 'MAD' },
        { name: 'Berlin', cta: 'Los!', id: 'BER' },
        { name: 'Rome', cta: 'Dai', id: 'ROM' },
      ],
    }
  },
  head() {
    return {
      title: 'European high-speed train sustainability analysis',
    }
  },
}
</script>
