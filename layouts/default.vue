<template>
  <div class="main">
    <Header />
    <div class="content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  transition: 'home',
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.3s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
