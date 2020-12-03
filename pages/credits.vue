<template>
  <div class="container">
    <article>
      <h1 class="text-6xl">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('credits').fetch()
    return {
      page,
    }
  },
}
</script>
