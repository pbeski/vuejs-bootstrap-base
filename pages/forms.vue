<template>
  <b-container class="bv-example-row">
    <b-row :class="rowClass">
      <b-col :class="colClass" col sm="6">
        <h1>Simple form</h1>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-col>
      <b-col :class="colClass" col sm="6">
        <div class="m-2">
          <b-form v-if="show" @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              />
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter name"
                required
              />
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              />
            </b-form-group>

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" label="Interests">
              <b-form-checkbox-group
                id="checkboxes-4"
                v-model="form.checked"
                :aria-describedby="ariaDescribedby"
              >
                <b-form-checkbox value="cricket">
                  Cricket
                </b-form-checkbox>
                <b-form-checkbox value="football">
                  Football
                </b-form-checkbox>
                <b-form-checkbox value="movies">
                  Movies
                </b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-form-group id="input-group-5" label="Choose a date:" label-for="input-5">
              <b-form-datepicker id="input-5" v-model="form.startDate" class="mb-2" />
            </b-form-group>

            <b-button type="submit" variant="primary">
              Submit
            </b-button>
            <b-button type="reset" variant="danger">
              Reset
            </b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
    <hr>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      rowClass: 'my-2',
      colClass: '',
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
        startDate: ''
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      this.form.startDate = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
