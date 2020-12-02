<template>
  <div class="container">
    <div>
      <h1 class="text-4xl">From {{ from }} to {{ to }}</h1>
    </div>
    <div>
      <h2 class="text-2xl">Figures</h2>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
  data() {
    return {
      from: '',
      to: '',
      cities: [
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
