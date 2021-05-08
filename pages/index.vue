<template>
  <b-container class="bv-example-row">
    <b-row :class="rowClass">
      <b-col :class="colClass">
        Home Page
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  data () {
    return {
      rowClass: 'my-2',
      colClass: 'border border-dark p-1'
    }
  }
}
</script>
