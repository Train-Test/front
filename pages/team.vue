<template>
  <div class="container">
    <article class="prose">
      <h1 class="text-6xl font-display">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('team').fetch()
    return {
      page,
    }
  },
}
</script>
