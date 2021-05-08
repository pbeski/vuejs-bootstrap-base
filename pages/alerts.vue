<template>
  <b-container class="bv-example-row">
    <b-alert
      v-model="addedAlert"
      variant="primary"
      dismissible
      fade
      class="my-1"
    >
      <h4 class="alert-heading">
        Added!
      </h4>
      <p>
        The product is added to the cart.
      </p>
    </b-alert>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      fade
      class="my-1"
      @dismissed="dismissCountDown=0"
    >
      The product is removed from cart!
    </b-alert>
    <b-row :class="rowClass">
      <b-col :class="colClass">
        <h1>
          Alert
        </h1>
        <p>
          <b-button variant="primary" @click="showAddedAlert">
            Add this product.
          </b-button>
        </p>
        <p>
          <b-button variant="danger" @click="showRemovedAlert">
            Remove product.
          </b-button>
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h1>
          Popover
        </h1>
        <div class="my-3">
          <b-button v-b-popover.hover.top="'I am popover directive content!'" title="Popover Title">
            Hover Me
          </b-button>

          <b-button id="popover-target-1">
            Hover Me
          </b-button>
          <b-popover target="popover-target-1" triggers="hover" placement="right">
            <template #title>
              Popover Title
            </template>
            I am popover <b>component</b> content!
          </b-popover>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h1>
          Toast
        </h1>
        <div>
          <b-button class="mb-2" @click="makeToast()">
            Default
          </b-button>
          <b-button class="mb-2" variant="primary" @click="makeToast('primary')">
            Primary
          </b-button>
          <b-button class="mb-2" variant="secondary" @click="makeToast('secondary')">
            Secondary
          </b-button>
          <b-button class="mb-2" variant="danger" @click="makeToast('danger')">
            Danger
          </b-button>
          <b-button class="mb-2" variant="warning" @click="makeToast('warning')">
            Warning
          </b-button>
          <b-button class="mb-2" variant="success" @click="makeToast('success')">
            Success
          </b-button>
          <b-button class="mb-2" variant="info" @click="makeToast('info')">
            Info
          </b-button>
        </div>

        <div>
          <b-button class="mb-2" @click="makeToast(null, 'b-toaster-top-right')">
            b-toaster-top-right
          </b-button>
          <b-button class="mb-2" @click="makeToast(null, 'b-toaster-top-left')">
            b-toaster-top-left
          </b-button>
          <b-button class="mb-2" @click="makeToast(null, 'b-toaster-top-center')">
            b-toaster-top-center
          </b-button>
          <b-button class="mb-2" @click="makeToast(null, 'b-toaster-top-full')">
            b-toaster-top-full
          </b-button>
          <b-button class="mb-2" @click="makeToast(null, 'b-toaster-bottom-right', true)">
            b-toaster-bottom-right
          </b-button>
          <b-button class="mb-2" @click="makeToast(null, 'b-toaster-bottom-left', true)">
            b-toaster-bottom-left
          </b-button>
          <b-button class="mb-2" @click="makeToast(null, 'b-toaster-bottom-center', true)">
            b-toaster-bottom-center
          </b-button>
          <b-button class="mb-2" @click="makeToast(null, 'b-toaster-bottom-full', true)">
            b-toaster-bottom-full
          </b-button>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h1>
          Tooltip
        </h1>
        <div class="my-3">
          <b-button v-b-tooltip.hover title="Tooltip directive content">
            Hover Me
          </b-button>

          <b-button id="tooltip-target-1">
            Hover Me
          </b-button>
          <b-tooltip target="tooltip-target-1" triggers="hover" placement="right">
            I am tooltip <b>component</b> content!
          </b-tooltip>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      rowClass: 'my-2',
      colClass: 'm-1',
      addedAlert: false,
      dismissCountDown: 0,
      dismissSecs: 5
    }
  },
  methods: {
    showAddedAlert () {
      this.addedAlert = true
    },
    showRemovedAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    makeToast (variant = null, toaster = 'b-toaster-top-right', append = false) {
      this.$bvToast.toast('Toast body content', {
        title: `Variant ${variant || 'default'}`,
        variant,
        toaster,
        solid: true,
        appendToast: append
      })
    }
  }
}
</script>
