<template>
  <b-container>
    <b-row>
      <h2>Simple Example</h2>
      <b-table striped hover :items="items"></b-table>
    </b-row>
    <b-row>
      <h3>With Fields Config</h3>
      <b-table striped small hover :items="repos" :fields="userFields">
        <template slot="full_name" slot-scope="data">
          <a :href="data.item.html_url" target="_blank">
            {{data.item.full_name}}
          </a>
        </template>
        <template slot="homepage" slot-scope="data">
          <a :href="data.item.homepage" target="_blank">
            {{data.item.homepage}}
          </a>
        </template>
      </b-table>
    </b-row>
    <loading :isVisible="loading"/>
  </b-container>
</template>

<script>
import Loading from '../../components/Loading'
import { get } from '../../utils/request'

const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]

export default {
  name: 'Table',
  components: {
    Loading
  },
  mounted () {
    this.loading = true
    get('https://api.github.com/search/repositories?q=vue').then((data) => {
      this.repos = data.items
      this.loading = false
    })
  },
  data () {
    return {
      loading: false,
      items: items,
      repos: [],
      userFields: {
        name: {
          label: 'Name'
        },
        full_name: {
          label: 'Full Name'
        },
        homepage: {
          label: 'Website'
        },
        watchers: {
          label: 'Watchers',
          sortable: true
        }
      }
    }
  }
}
</script>
