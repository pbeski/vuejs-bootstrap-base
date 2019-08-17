<template>
  <div id="app">
    <NavBar/>
    <Container/>
  </div>
</template>

<script>
import Container from './components/Container'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    Container,
    NavBar
  }
}
</script>
<style>
/* body {
  padding-top: 5rem;
} */
</style>