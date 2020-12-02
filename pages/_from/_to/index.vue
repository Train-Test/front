<template>
  <div class="container">
    <div>
      <h1 class="text-4xl">From {{ result.from }} to {{ result.to }}</h1>
    </div>
    <div>
      <h2 class="text-2xl">Figures</h2>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.result = await this.getParams()
  },
  data() {
    return {
      result: {
        from: '',
        to: '',
      },
      cities: [
        { name: 'Bordeaux', id: 'BOD' },
        { name: 'Lyon', id: 'LYS' },
        { name: 'Madrid', id: 'MAD' },
        { name: 'Berlin', id: 'BER' },
        { name: 'Rome', id: 'ROM' },
      ],
    }
  },
  methods: {
    getCityName(id) {
      return this.cities.find((el) => el.id === id).name
    },
    getParams() {
      const { from, to } = this.$nuxt.$route.params
      return {
        from: this.getCityName(from),
        to: this.getCityName(to),
      }
    },
  },
}
</script>
