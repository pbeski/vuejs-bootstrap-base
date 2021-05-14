<template>
  <b-container class="bv-example-row">
    <b-row :class="rowClass">
      <b-col :class="colClass">
        <p>
          There is no separate routing file is added with this setup. Adding a file in pages directory will be enough for this setup.
        </p>
        <p>
          For example, adding this routing.vue creates /routing url automatically.
        </p>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  data () {
    return {
      rowClass: 'my-2',
      colClass: 'm-1'
    }
  }
}
</script>
