<template>
  <b-container class="bv-example-row">
    <b-row :class="rowClass">
      <b-col :class="colClass">
        1 of 2
      </b-col>
      <b-col :class="colClass">
        2 of 2
      </b-col>
    </b-row>

    <b-row :class="rowClass">
      <b-col :class="colClass">
        1 of 3
      </b-col>
      <b-col :class="colClass">
        2 of 3
      </b-col>
      <b-col :class="colClass">
        3 of 3
      </b-col>
    </b-row>

    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <b-row :class="rowClass">
      <b-col :class="colClass" cols="12" md="8">
        cols="12" md="8"
      </b-col>
      <b-col :class="colClass" cols="6" md="4">
        cols="6" md="4"
      </b-col>
    </b-row>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <b-row :class="rowClass">
      <b-col :class="colClass" cols="6" md="4">
        cols="6" md="4"
      </b-col>
      <b-col :class="colClass" cols="6" md="4">
        cols="6" md="4"
      </b-col>
      <b-col :class="colClass" cols="6" md="4">
        cols="6" md="4"
      </b-col>
    </b-row>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <b-row :class="rowClass">
      <b-col :class="colClass" cols="6">
        cols="6"
      </b-col>
      <b-col :class="colClass" cols="6">
        cols="6"
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
