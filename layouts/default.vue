<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
    <b-overlay :show="loading" no-wrap />
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style>
body {
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px;
}
footer {
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
}
</style>
